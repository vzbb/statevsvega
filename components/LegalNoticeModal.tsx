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

      // Auto-close after 15 seconds
      const closeTimer = setTimeout(() => {
        handleClose();
      }, 15500); // 500ms delay + 15s display

      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLegalNotice', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop - Click to close */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-zinc-900 border border-zinc-700/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300 pointer-events-none">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-rose-500 rounded-t-2xl" />
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-amber-400 mb-2">
            <AlertCircle size={24} />
            <h2 className="text-xl font-bold tracking-tight text-white">Important Legal Notice</h2>
          </div>

          <div className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base pointer-events-auto">
            <div className="space-y-2">
              <p>
                <strong className="text-white block text-lg">State of Ohio v. Michael A. Vega</strong>
                <span className="text-zinc-400 text-sm">Lake County (OH) Court of Common Pleas // Case No. 24CR000850</span>
              </p>
              
              <div className="grid grid-cols-1 gap-1 text-xs text-zinc-500 border-l border-zinc-800 pl-3 py-1 mt-2">
                <p>• Guilty plea accepted: <span className="text-zinc-300">Sept 3, 2025</span></p>
                <p>• Sentence entry: <span className="text-zinc-300">Oct 15, 2025</span></p>
                <p>• Notice of Appeal filed: <span className="text-zinc-300">Nov 14, 2025</span></p>
              </div>
            </div>

            <p className="pt-2 border-t border-zinc-800/50">
              This matter is now pending before the <strong className="text-white">Eleventh District Court of Appeals (Ohio)</strong> under <strong className="text-white">Case No. 2025-I.-136</strong>.
            </p>
            
            <p className="p-4 bg-zinc-950/50 border-l-2 border-amber-500/50 rounded-r-lg italic">
              The defendant, Michael, has diligently represented himself pro se to reach this stage. However, he is now in dire need of professional legal counsel to proceed further and ensure a just resolution.
            </p>
            
            <p className="font-bold text-rose-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              Time is of the essence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticeModal;
