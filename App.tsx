import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import CaseAnalysis from './components/CaseAnalysis';
import ThreadsSection from './components/ThreadsSection';
import MedicalSection from './components/MedicalSection';
import MediaSection from './components/MediaSection';
import VoiceAgent from './components/VoiceAgent';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>(ViewState.LANDING);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case ViewState.LANDING:
        return <LandingPage setView={setView} />;
      case ViewState.CASE_ANALYSIS:
        return <CaseAnalysis setView={setView} />;
      case ViewState.THREADS:
        return <ThreadsSection setView={setView} />;
      case ViewState.MEDICAL:
        return <MedicalSection setView={setView} />;
      case ViewState.MEDIA:
        return <MediaSection setView={setView} />;
      default:
        return <LandingPage setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-teal-500 selection:text-white relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900/20 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 via-indigo-500 to-rose-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Navigation currentView={currentView} setView={setView} />
      
      <main className="pt-16 pb-20">
        {renderView()}
      </main>

      <footer className="fixed bottom-0 w-full bg-zinc-950/90 border-t border-white/5 backdrop-blur-sm py-3 z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-3 md:gap-0">
          <span className="hover:text-teal-400 transition-colors duration-300 cursor-default tracking-wide">
            PRIVILEGED & CONFIDENTIAL // ATTORNEY WORK PRODUCT
          </span>
          {/* Replaced 'STATE v. VEGA' with VoiceAgent in footer layout */}
          <VoiceAgent currentView={currentView} layout="footer" />
        </div>
      </footer>
    </div>
  );
};

export default App;