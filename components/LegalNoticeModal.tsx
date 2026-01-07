import React, { useEffect, useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

const LegalNoticeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenLegalNotice');
    if (!hasSeenModal) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLegalNotice', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-zinc-900 border border-zinc-700/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-rose-500 rounded-t-2xl" />
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-amber-400 mb-2">
            <AlertCircle size={24} />
            <h2 className="text-xl font-bold tracking-tight text-white">Important Legal Notice</h2>
          </div>

          <div className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
            <p>
              This website was established to document <strong className="text-white">Case CR-24B000250</strong> (Lake County Court of Common Pleas) and now <strong className="text-white">Case #2025-I-136</strong> (11th District Court of Appeals).
            </p>
            
            <p className="p-4 bg-zinc-950/50 border-l-2 border-amber-500/50 rounded-r-lg">
              The defendant, Michael, has diligently represented himself <em>pro se</em> to reach this stage. However, he is now in dire need of professional legal counsel to proceed further.
            </p>
            
            <p className="font-medium text-rose-400">
              Time is of the essence.
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold rounded-lg text-sm transition-all shadow-lg hover:shadow-zinc-700/20 active:scale-95"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticeModal;
