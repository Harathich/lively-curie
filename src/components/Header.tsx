'use client';

import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { FileText, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '// Projects', href: '#projects' },
    { label: '// Capabilities', href: '#capabilities' },
    { label: '// About', href: '#about' },
    { label: '// Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a0f]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#ccff00]">
          <div className="w-8 h-8 rounded-lg bg-[#141a29] border border-[#ccff00]/40 flex items-center justify-center text-[#ccff00] font-mono font-bold text-sm group-hover:border-[#ccff00] group-hover:shadow-[0_0_12px_rgba(204,255,0,0.3)] transition-all">
            HC
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1">
              HARATHI CHAVALA
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-gray-400">SOFTWARE & AI/ML</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-[#ccff00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ccff00] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioConfig.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioConfig.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResumeModal}
            className="px-3.5 py-1.5 rounded-lg bg-[#ccff00]/10 hover:bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/40 font-mono text-xs font-medium flex items-center gap-1.5 transition-all hover:shadow-[0_0_12px_rgba(204,255,0,0.2)]"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f17]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#ccff00] py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={portfolioConfig.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-white/5 text-center text-xs font-mono text-gray-300 border border-white/10 flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioConfig.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-white/5 text-center text-xs font-mono text-gray-300 border border-white/10 flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResumeModal();
            }}
            className="w-full py-2.5 rounded-lg bg-[#ccff00] text-black font-mono text-xs font-bold flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" /> Download Resume
          </button>
        </div>
      )}
    </header>
  );
};
