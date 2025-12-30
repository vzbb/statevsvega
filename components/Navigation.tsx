import React from 'react';
import { ViewState } from '../types';
import { Scale, FileText, Activity, BookOpen, Menu, X, PlayCircle } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: ViewState.LANDING, label: 'Overview', icon: <Scale size={18} /> },
    { id: ViewState.CASE_ANALYSIS, label: 'Case Analysis', icon: <FileText size={18} /> },
    { id: ViewState.THREADS, label: 'Legal Threads', icon: <BookOpen size={18} /> },
    { id: ViewState.MEDICAL, label: 'Medical', icon: <Activity size={18} /> },
    { id: ViewState.MEDIA, label: 'Media & Press', icon: <PlayCircle size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setView(ViewState.LANDING)}>
            <div className="flex-shrink-0">
              <span className="text-xl font-bold tracking-tighter text-white group-hover:text-teal-400 transition-colors duration-300">
                STATE v. <span className="text-teal-500 group-hover:text-white transition-colors duration-300">VEGA</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-teal-950/40 text-teal-400 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.15)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-teal-950/40 text-teal-400 border-l-2 border-teal-500'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;