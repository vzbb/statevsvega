import React from 'react';
import { ViewState } from '../types';
import { ChevronRight, Play, FileAudio, ExternalLink, Mic, Radio, Video, Newspaper } from 'lucide-react';

interface MediaSectionProps {
  setView: (view: ViewState) => void;
}

const MediaSection: React.FC<MediaSectionProps> = ({ setView }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-4 duration-700">
      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs md:text-sm text-zinc-500 mb-8 font-medium">
        <button onClick={() => setView(ViewState.LANDING)} className="hover:text-teal-400 transition-colors uppercase tracking-wider">Overview</button>
        <ChevronRight size={12} />
        <span className="text-amber-500 uppercase tracking-wider">Media & Press</span>
      </div>

      {/* Header */}
      <div className="mb-12 relative">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif relative z-10">The Public Record</h2>
        <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed relative z-10">
          Unfiltered evidence, investigative reporting, and the silence of the system.
        </p>
      </div>

      {/* Featured Content - The Podcast */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
            <div className="h-px bg-amber-500/30 w-12"></div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Featured Coverage</span>
            <div className="h-px bg-amber-500/30 flex-1"></div>
        </div>
        
        <div className="glass-panel border-amber-500/20 bg-zinc-900/40 rounded-2xl overflow-hidden shadow-2xl relative group">
            
            {/* Video Wrapper */}
            <div className="aspect-video w-full bg-black relative">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/wQZtPuXfZ8k" 
                    title="The Exoneration of Michael Vega" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="opacity-100"
                ></iframe>
            </div>
        </div>
      </div>

      {/* Evidence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Clip 1 */}
        <div className="glass-panel p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <Radio size={24} />
                </div>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 px-2 py-1 rounded border border-zinc-700">AUDIO LOG</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100">The "Ghost" Dispatch</h4>
            <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                Analysis of the 4-minute scanner silence during Danielle Allen's extraction by the off-duty officer.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
                <Play size={12} /> Play Segment (04:12)
            </div>
        </div>

        {/* Clip 2 */}
        <div className="glass-panel p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <Video size={24} />
                </div>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 px-2 py-1 rounded border border-zinc-700">BODYCAM</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100">The "Becker" Identification</h4>
            <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                Footage showing Christopher Foster providing false ID while officers fail to cross-reference the "Most Wanted" list.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
                <Play size={12} /> Watch Clip (02:45)
            </div>
        </div>

        {/* Clip 3 */}
        <div className="glass-panel p-6 rounded-xl hover:border-amber-500/40 transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <Newspaper size={24} />
                </div>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 px-2 py-1 rounded border border-zinc-700">PRESS</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100">Chief Colby Suspension</h4>
            <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                Local news coverage regarding the suspension of Chief Michael Colby following the Percival overdose death.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
                <ExternalLink size={12} /> Read Article
            </div>
        </div>

      </div>

      {/* Quote/Highlight Section */}
      <div className="mt-16 bg-zinc-900/30 border-y border-zinc-800 py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none"></div>
        <Mic className="mx-auto text-zinc-600 mb-6" size={32} />
        <blockquote className="text-2xl md:text-3xl font-serif text-zinc-200 italic max-w-4xl mx-auto leading-normal">
            "If it comes out that they let Foster go that evening because he was cooperating, then the entire system is on the hook for every crime he committed afterwards. Convicting Vega is the only way to keep the lid on the box."
        </blockquote>
        <cite className="block mt-6 text-sm font-bold text-amber-500 uppercase tracking-widest not-italic">
            — Legal Commentary, "The Deep Dive" Podcast
        </cite>
      </div>

    </div>
  );
};

export default MediaSection;