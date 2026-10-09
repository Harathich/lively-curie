'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06080c] py-12 text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-bold tracking-wider">
            HARATHI CHAVALA portfolio
          </span>
          <span className="text-gray-500 text-[11px]">
            © 2026 Harathi Chavala. All verified rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] text-gray-400">
          <span>Built with Next.js, TypeScript & Tailwind</span>
          <span className="w-1 h-1 rounded-full bg-[#ccff00]" />
          <a
            href={portfolioConfig.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href={portfolioConfig.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ccff00] hover:text-black border border-white/10 text-gray-300 transition-all flex items-center gap-1.5"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Top</span>
        </button>
      </div>
    </footer>
  );
};
