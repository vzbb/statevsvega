import React from 'react';
import { ViewState } from '../types';
import { ChevronRight, ShieldAlert, Gavel, Scale, AlertTriangle, AlertOctagon, ArrowRight, PlayCircle } from 'lucide-react';

interface LandingPageProps {
  setView: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  return (
    <div className="relative isolate min-h-[calc(100vh-6rem)] flex flex-col justify-center overflow-hidden">
      
      {/* State-of-the-art Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Radial Gradients for Depth */}
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-teal-900/20 opacity-40 blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-900/20 opacity-40 blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-rose-900/10 opacity-20 blur-[100px] pointer-events-none mix-blend-screen"></div>

        {/* Noise Texture for 'Film/Dossier' Feel */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Legal Header */}
        <div className="border-b border-zinc-800/60 pb-8 mb-12 relative">
           {/* Header Glow */}
           <div className="absolute -left-10 -top-10 w-40 h-40 bg-teal-500/5 blur-3xl rounded-full pointer-events-none"></div>

           <h1 className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 font-serif tracking-tight mb-6 drop-shadow-sm">
             State v. Vega
           </h1>
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <p className="text-xl text-zinc-400 font-light tracking-wide max-w-2xl leading-relaxed">
               The Exoneration of the Architect. The Prosecution of the Scapegoat.
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/30 border border-rose-500/30 text-rose-200 text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.1)] backdrop-blur-md">
               <AlertOctagon size={14} className="text-rose-500" /> Medical Emergency
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: The Brief / Hook */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-zinc-300 font-serif border-l-4 border-teal-500 pl-6 bg-gradient-to-r from-teal-500/5 to-transparent py-2 rounded-r-lg">
                <strong>The Issue:</strong> Michael Vega, a triple amputee dependent on a failing experimental prototype limb, faces decades in prison for a high-speed pursuit initiated and commanded by Christopher Foster—a fugitive explicitly released by law enforcement at the scene.
              </p>
              
              <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/80 my-8 relative overflow-hidden backdrop-blur-sm shadow-2xl group transition-all duration-500 hover:border-indigo-500/30">
                {/* Subtle ambient gradient inside card */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/5 blur-[60px] rounded-full pointer-events-none"></div>

                <h3 className="text-white font-bold mb-4 flex items-center gap-2 relative z-10 text-xl">
                  <ShieldAlert className="text-indigo-400" size={24}/> 
                  The Systemic Motive: Protection & Extraction
                </h3>
                
                <div className="space-y-4 text-sm leading-7 text-zinc-300/90 relative z-10 font-serif">
                  <p>
                    The State's narrative relies on the erasure of Christopher Foster ("Ed Becker"), despite <strong>video evidence clearly depicting him</strong> at the scene. This anomaly points to the <strong>CEAAC Task Force</strong>, an entity under immense budgetary pressure to recruit informants for convictions.
                  </p>

                  <div className="bg-zinc-950/60 p-5 rounded-lg border-l-2 border-indigo-500/50 shadow-inner">
                    <p className="text-zinc-200 italic">
                      <strong className="text-indigo-400 not-italic">The Extraction:</strong> Danielle Allen, Foster's partner of over six years, was not merely released; she was <em>extracted</em>. She fled the scene directly into the vehicle of an <strong>off-duty officer</strong>. This suggests Foster and Allen were not just suspects, but protected assets.
                    </p>
                  </div>

                  <p>
                    The implications are catastrophic: If Foster was released because he was cooperating with the Task Force, then the State shares liability for his subsequent crimes, including the death of Stacy Percival.
                  </p>
                  
                  <p className="font-medium text-white border-t border-zinc-700/50 pt-4 mt-2">
                    To acknowledge Vega's innocence is to admit that the system released a dangerous criminal to protect a budget line item. 
                    It is far safer for the institution to quietly convict the scapegoat than to expose the architects.
                  </p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed font-light">
                This dossier presents the defense's position: that the "Becker Contagion" of systemic misidentification, combined with the "Illusion of Choice" created by Foster's coercion, renders this prosecution not only factually flawed but constitutionally infirm. Furthermore, the medical evidence demonstrates that incarceration is effectively a death sentence for Mr. Vega.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
              <button 
                onClick={() => setView(ViewState.CASE_ANALYSIS)}
                className="bg-zinc-100 text-zinc-950 hover:bg-white px-8 py-4 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                Start Review <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
             <div 
               onClick={() => setView(ViewState.CASE_ANALYSIS)}
               className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-indigo-500/50 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-indigo-900/20"
             >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2.5 bg-indigo-950/40 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors ring-1 ring-indigo-500/20">
                    <Scale size={24} />
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-indigo-400 transition-colors group-hover:translate-x-1 duration-300" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200">Integrated Case Analysis</h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">Timeline of systemic failure and the "Becker" anomaly.</p>
             </div>

             <div 
               onClick={() => setView(ViewState.THREADS)}
               className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-teal-500/50 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-teal-900/20"
             >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2.5 bg-teal-950/40 rounded-lg text-teal-400 group-hover:text-teal-300 transition-colors ring-1 ring-teal-500/20">
                    <Gavel size={24} />
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-teal-400 transition-colors group-hover:translate-x-1 duration-300" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200">Legal Threads</h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">7 strategic pillars of defense including Coercion & Entrapment.</p>
             </div>

             <div 
               onClick={() => setView(ViewState.MEDICAL)}
               className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-rose-500/50 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-rose-900/20"
             >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2.5 bg-rose-950/40 rounded-lg text-rose-400 group-hover:text-rose-300 transition-colors ring-1 ring-rose-500/20">
                    <AlertTriangle size={24} />
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-rose-400 transition-colors group-hover:translate-x-1 duration-300" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-200">Medical Emergency</h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">Why incarceration violates the 8th Amendment.</p>
             </div>

             {/* New 4th Element for Media */}
             <div 
               onClick={() => setView(ViewState.MEDIA)}
               className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-amber-500/50 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-amber-900/20"
             >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2.5 bg-amber-950/40 rounded-lg text-amber-400 group-hover:text-amber-300 transition-colors ring-1 ring-amber-500/20">
                    <PlayCircle size={24} />
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-amber-400 transition-colors group-hover:translate-x-1 duration-300" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200">Media & Press</h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">
                  The Full Story: Podcasts, dispatch logs, and visual evidence.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;