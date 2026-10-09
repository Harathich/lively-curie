'use client';

import React, { useEffect } from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { X, FileText, Download, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#0c0f17] border border-[#ccff00]/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left glow-border-lime"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Harathi Chavala - Resume</h3>
                <span className="text-xs font-mono text-gray-400">Software Engineering & AI/ML Scholar</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#121624] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#ccff00]">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                <span>Resume Action & Download Ready</span>
              </div>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                Click below to download the resume PDF file.
              </p>
              <div className="p-2.5 rounded bg-black/40 text-[11px] text-gray-400 flex items-center justify-between">
                <span>Target path: <code className="text-white">{portfolioConfig.profile.resumePath}</code></span>
                <span className="text-emerald-400">Configured</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={portfolioConfig.profile.resumePath}
                download="Harathi_Chavala_Resume.pdf"
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs font-medium border border-white/10 transition-colors"
              >
                Close Window
              </button>
            </div>

            <div className="text-[11px] font-mono text-gray-500 text-center">
              💡 To replace or update your resume file, place your new PDF file at <code className="text-[#ccff00]">public/Harathi_Chavala_Resume.pdf</code>.
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
