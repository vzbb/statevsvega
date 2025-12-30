import React, { useState } from 'react';
import { Users, AlertCircle, FileWarning, HelpCircle, ChevronRight, Brain, Shield, Crosshair, RefreshCw, Radio, Clock, Lock, Footprints, AlertTriangle, Fingerprint, Siren, DoorOpen, Skull, Zap, Gavel, Calendar } from 'lucide-react';
import { ViewState } from '../types';

interface CaseAnalysisProps {
  setView: (view: ViewState) => void;
}

const CaseAnalysis: React.FC<CaseAnalysisProps> = ({ setView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-4 duration-700">
      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs md:text-sm text-zinc-500 mb-8 font-medium">
        <button onClick={() => setView(ViewState.LANDING)} className="hover:text-teal-400 transition-colors uppercase tracking-wider">Overview</button>
        <ChevronRight size={12} />
        <span className="text-teal-500 uppercase tracking-wider">Case Analysis</span>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Integrated Case Analysis</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          March 15, 2024: A narrative of coercion, targeted vulnerability, and systemic failure.
        </p>
      </div>

      {/* Feature 1: Identity Deception Flip Card */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <div className="flex items-center gap-2 mb-4">
                <Fingerprint className="text-rose-500" size={24} />
                <h3 className="text-2xl font-bold text-white">The "Becker" Deception</h3>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
                The entire prosecutorial narrative is built on a foundational lie. Law enforcement accepted a fake identity from a known fugitive, leading to his release and subsequent crimes.
                <br/><br/>
                <span className="text-sm text-zinc-500 italic">Click the card to reveal the truth hidden by the "Becker Contagion".</span>
            </p>
        </div>

        <div className="relative w-full max-w-md h-64 [perspective:1000px] cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front: The Lie */}
                <div className="absolute top-0 left-0 w-full h-full [backface-visibility:hidden] bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-2xl flex flex-col overflow-hidden">
                    <div className="absolute top-0 right-0 bg-teal-500/10 text-teal-500 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-teal-500/20">OFFICIAL RECORD</div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-600">
                            <Users size={32} className="text-zinc-500" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Ed Becker</h4>
                            <p className="text-sm text-teal-400 font-mono">DOB: 12/10/1980</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-400 font-mono">
                        <div className="flex justify-between border-b border-zinc-800 pb-1">
                            <span>Status:</span> <span className="text-white">Civilian / Victim?</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-800 pb-1">
                            <span>Warrants:</span> <span className="text-white">None Found</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Outcome:</span> <span className="text-teal-400 font-bold">RELEASED AT HOSPITAL</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-zinc-600 text-xs flex items-center gap-1">
                        <RefreshCw size={12} /> Tap to reveal reality
                    </div>
                </div>

                {/* Back: The Truth */}
                <div className="absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-rose-950/30 border border-rose-600/50 rounded-xl p-6 shadow-[0_0_30px_rgba(225,29,72,0.2)] flex flex-col overflow-hidden">
                    <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg animate-pulse">MOST WANTED</div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-rose-500 overflow-hidden relative">
                             {/* Placeholder for mugshot style */}
                             <div className="absolute inset-0 bg-zinc-700"></div>
                             <Users size={32} className="text-zinc-400 relative z-10" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Christopher Foster</h4>
                            <p className="text-sm text-rose-400 font-mono">ID: FUGITIVE #1</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-300 font-mono">
                        <div className="flex justify-between border-b border-rose-500/20 pb-1">
                            <span>History:</span> <span className="text-rose-200">Career Drug Trafficker</span>
                        </div>
                        <div className="flex justify-between border-b border-rose-500/20 pb-1">
                            <span>Risk Level:</span> <span className="text-rose-200 font-bold">EXTREME</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Real Outcome:</span> <span className="text-rose-400 font-bold">KILLED S. PERCIVAL (Apr 20)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Feature 2: Dispatch Log / The Ghost Gap */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Radio className="text-indigo-400" /> The "Ghost" Dispatch Log
        </h3>
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 relative">
            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-zinc-800"></div>
            
            <div className="space-y-6 relative">
                {/* Event 1 */}
                <div className="flex gap-6 items-start opacity-50">
                    <div className="w-16 text-right text-xs font-mono text-zinc-500 pt-1">22:10:00</div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mt-1.5 relative z-10"></div>
                    <div>
                        <div className="text-zinc-400 text-sm font-bold">Pursuit Initiated</div>
                        <div className="text-zinc-600 text-xs">Vehicle fails to stop. Speeds approx 45mph.</div>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-6 items-start">
                    <div className="w-16 text-right text-xs font-mono text-teal-400 pt-1">22:14:15</div>
                    <div className="w-3 h-3 rounded-full bg-teal-500 mt-1.5 relative z-10 ring-4 ring-teal-500/20"></div>
                    <div>
                        <div className="text-white text-sm font-bold">Suspect Flees on Foot</div>
                        <div className="text-zinc-400 text-xs">Female passenger (Allen) exits vehicle at Love's Station.</div>
                    </div>
                </div>

                {/* The Gap */}
                <div className="flex gap-6 items-center">
                    <div className="w-16 text-right text-xs font-mono text-rose-500 font-bold pt-1">4 MINS</div>
                    <div className="w-3 h-16 rounded-full bg-stripes-rose w-1 ml-1 relative z-10"></div>
                    <div className="flex-1 bg-rose-950/20 border border-rose-500/20 rounded p-3 flex items-center gap-3">
                        <AlertTriangle className="text-rose-500 shrink-0" size={16} />
                        <div className="text-xs text-rose-200">
                            <strong>UNEXPLAINED RADIO SILENCE</strong><br/>
                            Only 4 minutes elapsed between the first radio call alerting officers that Danielle Allen had bailed, and a correspondence from Dispatch confirming she was "safely with an off-duty ... of the APD in a pickup truck"
                        </div>
                    </div>
                </div>

                {/* Event 3 */}
                <div className="flex gap-6 items-start">
                    <div className="w-16 text-right text-xs font-mono text-indigo-400 pt-1">22:18:20</div>
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 relative z-10 ring-4 ring-indigo-500/20"></div>
                    <div>
                        <div className="text-white text-sm font-bold">"Secure with Off-Duty PI"</div>
                        <div className="text-zinc-400 text-xs">Transmission confirms Allen is safe in the personal truck of an off-duty APD officer.</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Feature 3: Illusion of Choice Matrix */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Lock className="text-amber-500" /> The Illusion of Choice
        </h3>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <p className="text-zinc-400 text-sm mb-8 text-center max-w-2xl mx-auto">
                The prosecution argues Vega could have stopped. This matrix demonstrates how every theoretical option was systematically blocked by coercion or disability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Option 1 */}
                <div className="relative group">
                    <div className="bg-zinc-800 rounded-lg p-4 text-center border border-zinc-700 h-full opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="inline-block p-2 bg-zinc-700 rounded-full mb-3 text-zinc-300"><Radio size={20} /></div>
                        <h4 className="text-white font-bold mb-2">Option A: Alert Police</h4>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent my-3"></div>
                        <div className="text-red-400 text-xs font-bold uppercase">Blocked By</div>
                        <p className="text-zinc-300 text-xs mt-1">Terroristic threats to family within confined vehicle.</p>
                    </div>
                </div>

                {/* Option 2 */}
                <div className="relative group">
                    <div className="bg-zinc-800 rounded-lg p-4 text-center border border-zinc-700 h-full opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="inline-block p-2 bg-zinc-700 rounded-full mb-3 text-zinc-300"><Crosshair size={20} /></div>
                        <h4 className="text-white font-bold mb-2">Option B: Stop Car</h4>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent my-3"></div>
                        <div className="text-red-400 text-xs font-bold uppercase">Blocked By</div>
                        <p className="text-zinc-300 text-xs mt-1">Danielle Allen physically seizing steering wheel & shifter.</p>
                    </div>
                </div>

                {/* Option 3 */}
                <div className="relative group">
                    <div className="bg-zinc-800 rounded-lg p-4 text-center border border-zinc-700 h-full opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="inline-block p-2 bg-zinc-700 rounded-full mb-3 text-zinc-300"><Footprints size={20} /></div>
                        <h4 className="text-white font-bold mb-2">Option C: Flee on Foot</h4>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent my-3"></div>
                        <div className="text-red-400 text-xs font-bold uppercase">Blocked By</div>
                        <p className="text-zinc-300 text-xs mt-1"><strong>"Calculated Disablement"</strong>: Walker violently ejected by Foster.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Psychological Profile */}
      <div className="mb-12 bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="bg-zinc-900/80 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Brain className="text-indigo-400" size={20} />
                Profile in Resilience vs. Criminal Intent
            </h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-indigo-300 font-bold mb-3 text-sm uppercase tracking-wide">Public Safety Contribution</h4>
                <p className="text-zinc-400 text-sm mb-4">
                    Contrary to the profile of a criminal, Vega has dedicated his intellectual capacity to developing AI and Unmanned Aerial Systems (drones) for public good.
                </p>
                <ul className="space-y-2 text-sm text-zinc-300">
                    <li className="flex gap-2"><span className="text-indigo-500">◈</span> Autonomous Amber Alert Response ("Eye-in-the-sky")</li>
                    <li className="flex gap-2"><span className="text-indigo-500">◈</span> Real-time Wildfire Spread Velocity measurement</li>
                    <li className="flex gap-2"><span className="text-indigo-500">◈</span> School Bus student tracking solutions</li>
                </ul>
            </div>
            <div className="border-l border-zinc-800 pl-8">
                <h4 className="text-rose-300 font-bold mb-3 text-sm uppercase tracking-wide">Trauma & Dependence</h4>
                <p className="text-zinc-400 text-sm mb-2">
                    Vega's silence during arrest was a <strong>"Freeze/Appease"</strong> PTSD response, not an admission of guilt.
                </p>
                <p className="text-zinc-500 text-xs italic">
                    *Opioid dependence was iatrogenic (medically induced) starting at age 10 due to catastrophic amputations, not recreational.
                </p>
            </div>
        </div>
      </div>

      {/* New Visually Distinct Timeline */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-2 flex items-center gap-2">
            <Calendar className="text-teal-500" size={24} /> 
            Timeline of Systemic Failure
        </h3>
        
        <div className="relative pl-8 border-l border-zinc-800/50 space-y-12 ml-4 md:ml-8">
            {/* 1. The Incident */}
            <div className="relative group">
                <div className="absolute -left-[45px] top-1 w-10 h-10 bg-zinc-900 border border-teal-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Siren size={18} className="text-teal-400" />
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">The Incident</h4>
                        <span className="text-teal-500 text-xs font-mono font-bold bg-teal-500/10 px-2 py-1 rounded">MARCH 15, 2024</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Christopher Foster provides false alias "Ed Becker". Officers fail to biometrically verify identity despite "Most Wanted" status. Danielle Allen is extracted by an off-duty officer.
                    </p>
                </div>
            </div>

            {/* 2. The Release */}
            <div className="relative group">
                <div className="absolute -left-[45px] top-1 w-10 h-10 bg-zinc-900 border border-indigo-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <DoorOpen size={18} className="text-indigo-400" />
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Systemic Release</h4>
                        <span className="text-indigo-400 text-xs font-mono font-bold bg-indigo-500/10 px-2 py-1 rounded">MARCH 16, 2024</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Foster feigns medical distress and is released from the hospital under the "Becker" alias. The Task Force fails to place a hold, unleashing a predator back into the community.
                    </p>
                </div>
            </div>

            {/* 3. The Tragedy */}
            <div className="relative group">
                <div className="absolute -left-[45px] top-1 w-10 h-10 bg-zinc-900 border border-rose-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(244,63,94,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Skull size={18} className="text-rose-400" />
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-rose-500/10 hover:border-rose-500/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/5 blur-[50px] pointer-events-none"></div>
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">The Percival Echo</h4>
                        <span className="text-rose-400 text-xs font-mono font-bold bg-rose-500/10 px-2 py-1 rounded">APRIL 20, 2024</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                        <strong>Stacy Percival Death:</strong> 36 days after being released as "Becker", Foster is directly implicated in the overdose death of Stacy Percival. Institutional negligence has now cost a life.
                    </p>
                </div>
            </div>

            {/* 4. The Manhunt */}
            <div className="relative group">
                <div className="absolute -left-[45px] top-1 w-10 h-10 bg-zinc-900 border border-amber-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Zap size={18} className="text-amber-400" />
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Continued Rampage</h4>
                        <span className="text-amber-500 text-xs font-mono font-bold bg-amber-500/10 px-2 py-1 rounded">MAY '24 - JAN '25</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        While Vega is prosecuted, Foster remains free and initiates multiple new high-speed pursuits across county lines, proving he—not Vega—was the driver of chaos.
                    </p>
                </div>
            </div>

            {/* 5. The Capture */}
            <div className="relative group">
                <div className="absolute -left-[45px] top-1 w-10 h-10 bg-zinc-900 border border-zinc-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(113,113,122,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Gavel size={18} className="text-zinc-200" />
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-500/10 hover:border-zinc-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">Apprehension & Suspension</h4>
                        <span className="text-zinc-400 text-xs font-mono font-bold bg-zinc-500/10 px-2 py-1 rounded">JAN - APRIL 2025</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Foster is finally captured. In April 2025, Chief Michael Colby is suspended pending investigation, signaling official acknowledgment of the systemic failures that began on March 15.
                    </p>
                </div>
            </div>

        </div>
      </div>

      {/* Systemic Anomalies Grid */}
      <div className="glass-panel p-8 rounded-xl border border-amber-500/20 bg-amber-950/10 hover:bg-amber-950/20 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <Shield className="text-amber-400 shrink-0 mt-1" size={32} />
          <div className="w-full">
            <h3 className="text-xl font-bold text-white mb-4">Systemic Anomalies & Unanswered Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded border border-white/5">
                    <h5 className="text-amber-500 font-bold text-sm mb-2">The "Ghost" Extraction</h5>
                    <p className="text-zinc-400 text-xs">Why was Danielle Allen collected by an off-duty officer far from his jurisdiction, taken to a hospital, and allowed to leave uncharged?</p>
                </div>
                <div className="bg-black/20 p-4 rounded border border-white/5">
                    <h5 className="text-amber-500 font-bold text-sm mb-2">The "Becker" Deception</h5>
                    <p className="text-zinc-400 text-xs">How did "Every police form" list Foster as "Ed Becker" despite bodycam footage and viral notoriety?</p>
                </div>
                <div className="bg-black/20 p-4 rounded border border-white/5">
                    <h5 className="text-amber-500 font-bold text-sm mb-2">Selective Prosecution</h5>
                    <p className="text-zinc-400 text-xs">Why is the medically vulnerable victim (Vega) facing felony charges while the "Most Wanted" architect (Foster) faces none for this incident?</p>
                </div>
                <div className="bg-black/20 p-4 rounded border border-white/5">
                    <h5 className="text-amber-500 font-bold text-sm mb-2">Missing Evidence</h5>
                    <p className="text-zinc-400 text-xs">Where is the 4 minutes of missing scanner audio during Allen's extraction?</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseAnalysis;