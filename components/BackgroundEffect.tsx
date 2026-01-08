import React from 'react';

interface BackgroundEffectProps {
  activeColor?: string | null;
}

const getColorValue = (colorName: string) => {
  const colors: Record<string, string> = {
    indigo: '#6366f1',
    teal: '#14b8a6',
    rose: '#f43f5e',
    amber: '#f59e0b',
    emerald: '#10b981',
    red: '#ef4444',
  };
  return colors[colorName] || '#14b8a6';
};

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ activeColor }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950">
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Base Layer - Subtle breathing nebula */}
      <div 
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          activeColor ? 'opacity-30' : 'opacity-100'
        }`}
      >
         <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-teal-900/10 rounded-full blur-[120px] animate-pulse [animation-duration:8s]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse [animation-duration:10s]" />
         {/* Extra accent for default state */}
         <div className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-rose-900/10 opacity-20 blur-[100px] pointer-events-none mix-blend-screen"></div>
      </div>

      {/* Noise Texture for 'Film/Dossier' Feel */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Active Highlight Layer - Interpolates color smoothly via inline styles */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform,background-color]"
        style={{
           backgroundColor: activeColor ? getColorValue(activeColor) : 'transparent',
           opacity: activeColor ? 0.15 : 0,
           transform: activeColor ? 'translate(-50%, 0) scale(1.5)' : 'translate(-50%, 10%) scale(0.8)',
        }}
      />
       <div 
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform,background-color]"
        style={{
           backgroundColor: activeColor ? getColorValue(activeColor) : 'transparent',
           opacity: activeColor ? 0.1 : 0,
           transform: activeColor ? 'translate(0, 0) scale(1.2)' : 'translate(20%, 20%) scale(0.5)',
        }}
      />
    </div>
  );
};

export default BackgroundEffect;
