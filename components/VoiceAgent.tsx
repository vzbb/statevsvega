import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Chat } from "@google/genai";
import { Mic, MicOff, Loader2, Volume2, Send, X, MessageSquare, Minimize2 } from 'lucide-react';
import { ViewState } from '../types';

// --- Audio Utilities (Encoding/Decoding) ---

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function createBlob(data: Float32Array): { data: string; mimeType: string } {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    let s = Math.max(-1, Math.min(1, data[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

// --- Dynamic Knowledge Base ---

const BASE_SYSTEM_INSTRUCTION = `
You are an expert legal strategist and AI defense aide for the case State v. Vega. 
Your goal is to assist defense counsel by summarizing case details and answering questions based on the specific section of the digital dossier they are currently viewing.
Be professional, concise, and legally sharp. 
Always prioritize the defense's perspective: Vega is a victim of coercion and systemic failure, not a criminal.
`;

const SECTION_CONTEXTS: Record<ViewState, string> = {
  [ViewState.LANDING]: `
    CURRENT VIEW: OVERVIEW / LANDING PAGE.
    KEY THEMES:
    1. "The Exoneration of the Architect (Foster), The Prosecution of the Scapegoat (Vega)."
    2. Systemic Motive: The CEAAC Task Force needed to protect Foster (an informant?) and "extract" Danielle Allen to save face and budget.
    3. Medical Emergency: Vega is a triple amputee with a failing prototype implant. Incarceration is a death sentence.
    4. The "Becker" Anomaly: Christopher Foster was misidentified as "Ed Becker" despite being the #1 Most Wanted fugitive.
  `,
  [ViewState.CASE_ANALYSIS]: `
    CURRENT VIEW: INTEGRATED CASE ANALYSIS.
    CRITICAL FACTS ON SCREEN:
    1. The "Becker Contagion": Police accepted a fake ID ("Ed Becker") from Foster. This foundational lie corrupted all discovery. Foster was released and later killed Stacy Percival (The "Percival Echo").
    2. The "Ghost" Dispatch: There is a 4-minute gap in radio traffic during Danielle Allen's extraction.
    3. Coordinated Extraction: An off-duty officer was parked exactly where Allen fled, joked about the pursuit on the radio, collected her, and she was never charged.
    4. Illusion of Choice: Vega could not stop. Allen physically seized the wheel. Foster ejected Vega's walker (Calculated Disablement), making flight impossible.
    5. Foster's Recidivism: While Vega is prosecuted, Foster initiated high-speed pursuits in May 2024 and Jan 2025.
  `,
  [ViewState.THREADS]: `
    CURRENT VIEW: LEGAL THREADS (STRATEGIC PILLARS).
    ACTIVE DEFENSE ARGUMENTS:
    1. Duress (Affirmative Defense): Real fear of death, no reasonable escape (Walker ejected), forced participation.
    2. Outrageous Government Conduct: The systemic "Becker" misidentification and Allen's "Extraction" violate due process (U.S. v. Russell).
    3. Brady/Giglio Violations: Withholding of Foster's true ID and informant status.
    4. Eighth Amendment: Incarceration constitutes "Cruel and Unusual Punishment" due to medical impossibility.
    5. Scapegoat Gambit: Foster and Allen sacrificed Vega to save themselves.
  `,
  [ViewState.MEDICAL]: `
    CURRENT VIEW: MEDICAL EMERGENCY (THE PHENIX IMPLANT).
    MEDICAL REALITY:
    1. Device: Phenix/Repiphysis Expandable Endoprosthesis. Prototype from 1990s.
    2. Status: 100% Failure rate in long-term cohorts (Masrouha et al. 2022). Vega has retained it for 20 years (15 years past expiration).
    3. Current Emergency: Active Posterior Dislocation. The implant is protruding subcutaneously.
    4. The Carceral Hazard: Triple amputee (no arms) cannot break a fall on prison floors.
    5. The Cascade: Fall -> Open Fracture -> Biofilm Infection -> Sepsis -> Death.
    6. Pathology: Metallosis (Cobalt toxicity) is dissolving his bone and soft tissue.
  `,
  [ViewState.MEDIA]: `
    CURRENT VIEW: MEDIA & PRESS.
    EVIDENCE REPOSITORY:
    1. "The Exoneration of Michael Vega": A 2-hour podcast deep dive.
    2. Audio Log: "The Ghost Dispatch" showing 4 minutes of silence during Allen's extraction.
    3. Bodycam: Footage of "Becker" (Foster) giving fake ID.
    4. Press: News on Chief Colby's suspension pending investigation.
    5. Quote: "If they let Foster go because he was cooperating, the system is on the hook for every crime he committed afterwards."
  `
};

interface VoiceAgentProps {
  currentView: ViewState;
  layout?: 'fixed' | 'inline' | 'footer';
}

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ currentView, layout = 'fixed' }) => {
  // Voice State
  const [active, setActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  // Refs for audio handling
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Refs for chat
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isChatOpen]);

  // Handle View Changes - Inform the Voice Agent dynamically
  useEffect(() => {
    if (active && sessionRef.current) {
      const contextUpdate = `
        UPDATE: The user has navigated to the ${currentView} section. 
        Here is the specific data for this screen to inform your answers:
        ${SECTION_CONTEXTS[currentView]}
        
        Please provide a one-sentence executive summary of this specific page to orient the counsel.
      `;
      sessionRef.current.sendText(contextUpdate);
    }
    
    // Also update Chat session context if it exists, but don't trigger a message, just update system instruction via a hidden prompt if needed
    // Note: GenAI SDK chat sessions hold context, so we can just send a hidden user message or system instruction update if supported. 
    // For now, we assume the chat session is persistent and user will ask questions relevant to the new view.
  }, [currentView, active]);

  // --- Voice Logic ---

  const stopAudioProcessing = () => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    
    // Stop output audio
    sourcesRef.current.forEach(source => source.stop());
    sourcesRef.current.clear();
    nextStartTimeRef.current = 0;

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const startSession = async () => {
    setConnecting(true);
    // Close chat if opening voice to avoid clutter/conflict
    setIsChatOpen(false);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Initialize Audio Contexts
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });

      // Get Mic Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const currentContext = SECTION_CONTEXTS[currentView];
      const combinedInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\nINITIAL CONTEXT:\n${currentContext}`;

      const config = {
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } },
          },
          systemInstruction: combinedInstruction,
        },
      };

      const sessionPromise = ai.live.connect({
        ...config,
        callbacks: {
          onopen: async () => {
            setConnecting(false);
            setActive(true);

            // Start Input Streaming
            if (!inputAudioContextRef.current || !streamRef.current) return;
            
            const source = inputAudioContextRef.current.createMediaStreamSource(streamRef.current);
            const processor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(processor);
            processor.connect(inputAudioContextRef.current.destination);
            
            sourceRef.current = source;
            processorRef.current = processor;

            // Initial greeting based on current view
            sessionPromise.then(session => {
              sessionRef.current = session;
              session.sendText(`I have just connected. I see we are looking at the ${currentView} section. Introduce yourself and briefly summarize the key legal or medical point of this specific section.`);
            });
          },
          onmessage: async (msg: LiveServerMessage) => {
            const base64Audio = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            
            if (base64Audio && audioContextRef.current) {
              setIsSpeaking(true);
              const ctx = audioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              
              const audioBuffer = await decodeAudioData(
                decode(base64Audio),
                ctx,
                24000,
                1
              );

              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) {
                  setIsSpeaking(false);
                }
              });

              source.start(nextStartTimeRef.current);
              sourcesRef.current.add(source);
              nextStartTimeRef.current += audioBuffer.duration;
            }

            // Handle interruption
            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: () => {
            handleDisconnect();
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            handleDisconnect();
          }
        }
      });

    } catch (error) {
      console.error("Connection failed", error);
      setConnecting(false);
      handleDisconnect();
    }
  };

  const handleDisconnect = () => {
    stopAudioProcessing();
    sessionRef.current = null;
    setActive(false);
    setConnecting(false);
    setIsSpeaking(false);
  };

  const toggleSession = () => {
    if (active || connecting) {
      handleDisconnect();
    } else {
      startSession();
    }
  };

  // --- Chat Logic ---

  const initChat = async () => {
    // We recreate the chat session every time the window opens to ensure it has the latest context
    // or we can just append context if it already exists. For simplicity, we create new if null.
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const currentContext = SECTION_CONTEXTS[currentView];
      const combinedInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\nINITIAL CONTEXT:\n${currentContext}`;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash-preview',
        config: {
          systemInstruction: combinedInstruction,
        },
      });
      // Initial greeting
      setChatMessages([{
        role: 'model',
        text: `I am your AI Defense Aide for State v. Vega. I am currently analyzing the ${currentView} data. How can I assist with this section?`
      }]);
    } else {
       // If chat is already open but view changed, we might want to inform it, but for now 
       // let's assume the user will just ask. 
       // Optionally, we could send a silent message to the model here.
    }
  };

  const toggleChat = () => {
    if (!isChatOpen) {
      initChat();
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputMessage.trim() || !chatSessionRef.current || isChatLoading) return;

    const userMsg = inputMessage;
    setInputMessage('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      // Inject current view context if it might have changed since init
      // We can prepend it to the user message invisibly or just rely on the initial system instruction
      // To be robust, let's just send the user message.
      const result = await chatSessionRef.current.sendMessage({ message: userMsg });
      setChatMessages(prev => [...prev, { role: 'model', text: result.text }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages(prev => [...prev, { role: 'model', text: "I apologize, but I encountered an error processing your request." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Layout-specific styling
  const containerClass = layout === 'fixed' 
    ? "fixed bottom-6 right-6 z-[60] flex items-center gap-3" 
    : layout === 'inline'
    ? "flex items-center gap-3 mt-4 md:mt-0"
    : "flex items-center gap-2"; // footer layout

  const chatButtonClass = layout === 'fixed'
    ? `px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-700 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 flex items-center gap-2 group relative ${
        active ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'
      }`
    : layout === 'inline'
    ? `px-6 py-3 rounded-md bg-zinc-900/40 border border-zinc-700 text-sm font-semibold text-white hover:bg-zinc-800/80 hover:border-teal-500/30 transition-all flex items-center gap-2 group relative ${
        active ? 'opacity-50 pointer-events-none' : 'opacity-100'
    }`
    : `px-3 py-1.5 rounded-md bg-zinc-900/30 border border-zinc-800/50 text-xs font-medium text-zinc-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-zinc-800 transition-all flex items-center gap-2 group relative ${
        active ? 'opacity-50 pointer-events-none' : 'opacity-100'
    }`; // footer style
    
  const micButtonClass = layout === 'fixed'
    ? `relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-md border group`
    : layout === 'inline'
    ? `relative flex items-center justify-center w-12 h-12 rounded-md transition-all duration-300 backdrop-blur-md border group`
    : `relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 border group`; // footer style

  return (
    <>
      {/* Chat Window - Fixed position even for footer layout */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-zinc-950/95 border border-zinc-800 rounded-xl shadow-2xl flex flex-col z-[70] overflow-hidden animate-in slide-in-from-bottom-5 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-teal-500/10 rounded-lg">
                <MessageSquare size={16} className="text-teal-400" />
              </div>
              <span className="text-sm font-semibold text-white">AI Defense Aide</span>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {chatMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 border border-zinc-700">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-zinc-800 bg-zinc-900/30">
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about the case facts..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-full pl-4 pr-12 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim() || isChatLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-teal-500 text-white rounded-full hover:bg-teal-400 disabled:opacity-50 disabled:hover:bg-teal-500 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Controls */}
      <div className={containerClass}>
        <button
          onClick={toggleChat}
          className={chatButtonClass}
        >
          <MessageSquare size={14} className={layout === 'footer' ? "text-teal-500" : "text-teal-400"} />
          <span>Consult AI Aide</span>
          
          {/* Tooltip */}
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] rounded border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
            Text Chat with AI Defense Aide
          </span>
        </button>

        <button
          onClick={toggleSession}
          className={`${micButtonClass} ${
            active 
              ? 'bg-rose-500/90 border-rose-400 text-white hover:bg-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.5)]' 
              : connecting
              ? 'bg-zinc-800/90 border-zinc-600 text-zinc-400 cursor-wait'
              : 'bg-zinc-900/30 border-teal-500/30 text-teal-500 hover:bg-zinc-800 hover:border-teal-500/50'
          }`}
        >
          {active && (
            <>
              <span className={`absolute inset-0 rounded-full border border-rose-500 animate-ping opacity-75 ${isSpeaking ? 'duration-1000' : 'duration-[3000ms]'}`}></span>
              {isSpeaking && <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></span>}
            </>
          )}

          {connecting ? (
            <Loader2 className="animate-spin" size={14} />
          ) : active ? (
            isSpeaking ? <Volume2 className="animate-pulse" size={14} /> : <Mic size={14} />
          ) : (
            <MicOff size={14} />
          )}
          
          {/* Tooltip */}
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] rounded border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
            {active ? "Stop Voice Session" : "Start Voice Session (Live API)"}
          </span>
        </button>
      </div>
    </>
  );
};

export default VoiceAgent;