import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, Skull, Activity, Bone, ChevronRight, Settings, Magnet, Zap, ShieldAlert, Timer, Microscope } from 'lucide-react';
import { ViewState } from '../types';

const data = [
  { name: 'Standard Hip (15yr)', rate: 95, type: 'Survival' },
  { name: 'Repiphysis (5yr)', rate: 21, type: 'Survival' },
  { name: 'Long Term Cohort', rate: 100, type: 'Failure' },
];

interface MedicalSectionProps {
  setView: (view: ViewState) => void;
}

const MedicalSection: React.FC<MedicalSectionProps> = ({ setView }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-4 duration-700">
      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs md:text-sm text-zinc-500 mb-8 font-medium">
        <button onClick={() => setView(ViewState.LANDING)} className="hover:text-teal-400 transition-colors uppercase tracking-wider">Overview</button>
        <ChevronRight size={12} />
        <span className="text-teal-500 uppercase tracking-wider">Medical Emergency</span>
      </div>

      {/* Executive Summary Alert */}
      <div className="bg-rose-950/20 border border-rose-500/50 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_0_50px_rgba(225,29,72,0.1)]">
        <div className="p-4 bg-rose-900/50 rounded-full shrink-0 animate-pulse">
          <Skull size={48} className="text-rose-200" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">The "Unconscionable Price" of Incarceration</h2>
          <p className="text-zinc-300 font-serif">
            Michael Vega carries a <strong>Phenix/Repiphysis expandable endoprosthesis</strong>. 
            It is not a functioning medical device; it is a ticking time bomb. 
            Incarceration guarantees a catastrophic failure cascade: Fracture → Sepsis → Hemorrhage → Death.
          </p>
        </div>
      </div>

      {/* Feature 4: Ticking Time Bomb Lifespan */}
      <div className="mb-12 glass-panel p-8 rounded-xl border-t-4 border-rose-600">
        <div className="flex items-center gap-3 mb-6">
            <Timer className="text-rose-500" size={24} />
            <h3 className="text-2xl font-bold text-white">The "Off-Label" Reality: A Ticking Time Bomb</h3>
        </div>
        <p className="text-zinc-400 text-sm mb-6">
            The Phenix implant was designed as a temporary "bridge" device for children, with an intended lifespan of 3-5 years. Vega has retained it for 20 years.
        </p>
        
        <div className="relative pt-6 pb-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                <span>Implantation (2004)</span>
                <span className="text-teal-500">Design Limit (2009)</span>
                <span className="text-rose-500">Current Status (2024)</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full h-8 bg-zinc-900 rounded-full overflow-hidden relative flex items-center border border-zinc-700">
                {/* Safe Zone */}
                <div className="h-full bg-teal-900/50 w-[20%] flex items-center justify-center border-r border-zinc-800">
                    <span className="text-[10px] text-teal-400 font-bold">INTENDED</span>
                </div>
                {/* Danger Zone */}
                <div className="h-full flex-1 bg-rose-950/40 relative overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(225,29,72,0.1)_25%,rgba(225,29,72,0.1)_50%,transparent_50%,transparent_75%,rgba(225,29,72,0.1)_75%,rgba(225,29,72,0.1)_100%)] bg-[length:10px_10px] animate-[progress_1s_linear_infinite]"></div>
                    <span className="relative z-10 w-full text-center text-xs font-bold text-rose-400 tracking-widest animate-pulse">
                        ⚠ CATASTROPHIC FAILURE PROBABILITY ~ 99% ⚠
                    </span>
                </div>
            </div>
            <p className="text-right text-[10px] text-rose-500 mt-2 font-mono">
                +15 YEARS OVERDUE FOR REVISION
            </p>
        </div>
      </div>

      {/* Anatomy of a Failed Device */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Settings className="text-teal-500" /> Anatomy of a Failed Experiment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl border-t-4 border-teal-500">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-white">Internal Gearbox</h4>
                    <Settings className="text-teal-500/50" size={20} />
                </div>
                <p className="text-sm text-zinc-400 font-serif">
                    Unlike solid implants, this contains delicate gears designed to telescope. Body fluids cause "cold welding" and corrosion, turning the mechanism into a source of toxic metal debris (metallosis).
                </p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-t-4 border-rose-500">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-white">Compressed Spring</h4>
                    <Zap className="text-rose-500/50" size={20} />
                </div>
                <p className="text-sm text-zinc-400 font-serif">
                    A heavy-duty spring held by a locking pin. In long-term retention, the locking mechanism fatigues. Failure results in "spontaneous delengthening" or explosive structural collapse.
                </p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-t-4 border-indigo-500">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-white">Magnetic Lock</h4>
                    <Magnet className="text-indigo-500/50" size={20} />
                </div>
                <p className="text-sm text-zinc-400 font-serif">
                    Designed for pediatric lengthening via external coils. Obsolete and dangerous in an adult. Exposure to industrial magnetic fields (common in prisons) could trigger unintended expansion.
                </p>
            </div>
        </div>
      </div>

      {/* Feature 5: Metallosis Pathology */}
      <div className="mb-12 bg-zinc-900/30 rounded-xl p-8 border border-zinc-800">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Microscope className="text-purple-400" /> The Silent Killer: Metallosis Pathology
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-zinc-700">
                    <Settings size={20} className="text-zinc-400 animate-spin-slow" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Micromotion</h4>
                <p className="text-xs text-zinc-500">Gears grind during walking.</p>
            </div>
            
            {/* Connector */}
            <div className="hidden md:block absolute top-6 left-[12%] w-[25%] h-px bg-zinc-700"></div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-500/50">
                    <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                </div>
                <h4 className="text-purple-300 font-bold text-sm mb-1">Cobalt Ions</h4>
                <p className="text-xs text-zinc-500">Toxic debris released.</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block absolute top-6 left-[37%] w-[25%] h-px bg-zinc-700"></div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-rose-500/50">
                    <Activity size={20} className="text-rose-500" />
                </div>
                <h4 className="text-rose-300 font-bold text-sm mb-1">Tissue Necrosis</h4>
                <p className="text-xs text-zinc-500">Soft tissue rots (Pseudotumors).</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block absolute top-6 left-[62%] w-[25%] h-px bg-zinc-700"></div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-rose-950/50 rounded-full flex items-center justify-center mx-auto mb-3 border border-rose-600">
                    <Bone size={20} className="text-rose-500" />
                </div>
                <h4 className="text-rose-500 font-bold text-sm mb-1">Osteolysis</h4>
                <p className="text-xs text-zinc-500">Bone dissolves. Implant loosens.</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        
        {/* Statistical Reality */}
        <div className="glass-panel p-6 rounded-xl hover:bg-zinc-900/40 transition-colors duration-300">
          <h3 className="text-xl font-bold text-white mb-4">Statistical Certainty of Failure</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={120} tick={{fill: '#a1a1aa', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#e4e4e7' }}
                  cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="rate" barSize={20} radius={[0, 4, 4, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.type === 'Failure' ? '#f43f5e' : (entry.rate < 50 ? '#f59e0b' : '#14b8a6')} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-center text-zinc-500 mt-2">
            *Masrouha et al. (2022) Cohort: 100% Failure Rate at 36 months average.
          </p>
          <div className="mt-6 border-t border-zinc-800 pt-4">
             <h4 className="text-white font-bold mb-2">The "1 in 5" Myth Refuted</h4>
             <p className="text-sm text-zinc-400">
               Defense documents citing "1 in 5" failure rates are statistically inverted. Real survival rates are as low as 21% at 5 years. 
               <strong> 0 in 11 patients retained the device long-term without failure.</strong>
             </p>
          </div>
        </div>

        {/* Carceral Hazard Assessment */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
            {/* Background Hazard Strips */}
            <div className="absolute top-0 right-0 w-32 h-full bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.05)_25%,rgba(245,158,11,0.05)_50%,transparent_50%,transparent_75%,rgba(245,158,11,0.05)_75%,rgba(245,158,11,0.05)_100%)] bg-[length:20px_20px]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h4 className="text-lg font-bold text-amber-100 mb-3">Environmental Incompatibility</h4>
                    <ul className="space-y-3 text-sm text-zinc-400">
                        <li className="flex gap-2"><span className="text-amber-500">⚠</span> Triple Amputee (No Arms) cannot break a fall.</li>
                        <li className="flex gap-2"><span className="text-amber-500">⚠</span> Wet floors, stairs, and crowded cells guarantee impact.</li>
                        <li className="flex gap-2"><span className="text-amber-500">⚠</span> Metal detectors interact with massive ferrous implant.</li>
                        <li className="flex gap-2"><span className="text-amber-500">⚠</span> Lack of specialized beds worsens hip dislocation.</li>
                    </ul>
                </div>
                <div className="border-l border-zinc-700 pl-8">
                    <h4 className="text-lg font-bold text-rose-300 mb-3">The Emergency Gap</h4>
                    <p className="text-sm text-zinc-400 font-serif mb-4">
                        In a prison "Man Down" scenario, security protocols delay medical access. For an open fracture with hemorrhage, minutes matter.
                    </p>
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                        <span className="text-teal-500">Civilian Response</span>
                        <span className="text-zinc-600">vs</span>
                        <span className="text-rose-500">Prison Response</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full mt-2 relative">
                        <div className="absolute left-0 top-0 h-full w-1/4 bg-teal-500 rounded-full"></div>
                        <div className="absolute left-0 top-0 h-full w-full bg-rose-500/30 rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-right text-rose-400 mt-1">Admin delays + Security clearance = Fatal Hemorrhage</p>
                </div>
            </div>
        </div>
      </div>

      {/* The Carceral Death Spiral - Redesigned to be Helical/Stepped */}
      <div className="glass-panel p-8 rounded-xl border border-rose-900/30 relative overflow-hidden">
        {/* Background Helical Suggestion */}
        <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
             <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none">
                 <path d="M 100 50 Q 500 50 800 150 T 200 300 T 800 450" 
                       fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="8 8" className="animate-pulse" />
             </svg>
        </div>

        <h3 className="text-2xl font-bold text-white mb-12 text-center relative z-10">The Carceral Death Spiral</h3>
        
        <div className="relative z-10 max-w-5xl mx-auto md:h-[550px] flex flex-col gap-6 md:block">
            {/* Step 1: Environment - Top Left */}
            <div className="md:absolute md:top-0 md:left-0 md:w-72 p-6 bg-zinc-900/90 border border-zinc-700 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md group hover:border-rose-500/50 hover:scale-105 transition-all duration-300 z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold border border-zinc-700 group-hover:bg-rose-900 group-hover:text-rose-200 group-hover:border-rose-500 transition-colors">1</div>
                    <h4 className="text-rose-400 font-bold text-lg">Environment</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                   Uneven floors + crowded cells + Triple Amputee (No balance/arms) = <span className="text-white font-semibold">Inevitable Fall</span>.
                </p>
            </div>

            {/* Connector 1-2 (Desktop) */}
            <div className="hidden md:block absolute top-[10%] left-[25%] w-[40%] h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>

            {/* Step 2: Fracture - Middle Right */}
            <div className="md:absolute md:top-[120px] md:right-0 md:w-72 p-6 bg-zinc-900/90 border border-zinc-700 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md group hover:border-rose-500/50 hover:scale-105 transition-all duration-300 z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold border border-zinc-700 group-hover:bg-rose-900 group-hover:text-rose-200 group-hover:border-rose-500 transition-colors">2</div>
                    <h4 className="text-rose-400 font-bold text-lg">Fracture</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                   Protruding implant tears skin. <span className="text-white font-semibold">Open Periprosthetic Fracture</span> exposes bone to prison pathogens.
                </p>
            </div>

             {/* Connector 2-3 (Desktop) */}
            <div className="hidden md:block absolute top-[45%] right-[25%] w-[40%] h-px bg-gradient-to-l from-zinc-700 to-transparent"></div>


            {/* Step 3: Sepsis - Middle Left (Lower) */}
            <div className="md:absolute md:top-[280px] md:left-[5%] md:w-72 p-6 bg-zinc-900/90 border border-zinc-700 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md group hover:border-rose-500/50 hover:scale-105 transition-all duration-300 z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold border border-zinc-700 group-hover:bg-rose-900 group-hover:text-rose-200 group-hover:border-rose-500 transition-colors">3</div>
                    <h4 className="text-rose-400 font-bold text-lg">Sepsis</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                   Biofilm infection sets in. <span className="text-white font-semibold">Fulminant Sepsis</span> or Massive Hemorrhage occurs within hours.
                </p>
            </div>

             {/* Connector 3-4 (Desktop) */}
            <div className="hidden md:block absolute bottom-[20%] left-[30%] w-[30%] h-px bg-gradient-to-r from-zinc-700 to-rose-900"></div>

            {/* Step 4: Fatality - Bottom Center/Right */}
            <div className="md:absolute md:bottom-0 md:right-[20%] md:w-80 p-6 bg-rose-950/20 border-2 border-rose-600 rounded-xl shadow-[0_0_40px_rgba(225,29,72,0.3)] backdrop-blur-md group hover:bg-rose-950/40 hover:scale-105 transition-all duration-300 z-20">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">4</div>
                    <h4 className="text-white font-bold text-2xl uppercase tracking-wider">Fatality</h4>
                </div>
                <p className="text-sm text-rose-200 leading-relaxed font-bold">
                   Admin delays + Security clearance = <span className="border-b-2 border-rose-500">Zero chance of survival</span> in a carceral setting.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;