'use client';

import React, { useState } from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, FileText, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Software Engineering Opportunity / Inquiry');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${portfolioConfig.profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-xs">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>04 // INITIATE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Let&apos;s Build Something Intelligent
        </h2>
        <p className="text-gray-300 font-mono text-sm leading-relaxed">
          I am actively seeking software engineering internships, backend development roles, and AI/ML research opportunities. Feel free to reach out directly via email or connect on social platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Direct Email Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 glass-panel p-8 rounded-2xl flex flex-col justify-between space-y-6 border border-[#ccff00]/30 glow-border-lime"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#141a29] border border-[#ccff00]/40 flex items-center justify-center text-[#ccff00]">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Direct Email Contact</h3>
            <p className="text-sm text-gray-300">
              Send an email to my inbox for hiring, technical collaboration, or project inquiries.
            </p>
            <div className="p-4 rounded-xl bg-[#090c14] border border-white/10 flex items-center justify-between font-mono text-sm break-all">
              <span className="text-white font-medium">{portfolioConfig.profile.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#ccff00] border border-white/10 transition-colors shrink-0 ml-2"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={`mailto:${portfolioConfig.profile.email}`}
              className="px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <Send className="w-4 h-4" />
              <span>Open Mail Client</span>
            </a>
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm font-medium border border-white/10 flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-[#ccff00]" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>

        {/* Quick Message Helper & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-6 glass-panel p-8 rounded-2xl flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400" />
              Compose Quick Mailto Query
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0b0e17] border border-white/10 text-white focus:outline-none focus:border-[#ccff00]"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Optional Message Note</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a brief note here to pre-fill your email body..."
                  className="w-full px-3 py-2 rounded-lg bg-[#0b0e17] border border-white/10 text-white focus:outline-none focus:border-[#ccff00]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-4">
            <span className="text-xs font-mono text-gray-400 block">// Professional Network Profiles</span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={portfolioConfig.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0b0e17] hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#ccff00]" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={portfolioConfig.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0b0e17] hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-violet-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <a
              href={mailtoUrl}
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <Send className="w-4 h-4" />
              <span>Launch Pre-filled Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
