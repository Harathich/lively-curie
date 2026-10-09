'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Sparkles, Code2, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Accent Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status & Discipline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131826] border border-[#ccff00]/30 text-xs font-mono text-[#ccff00]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>SOFTWARE ENGINEERING & AI/ML DEVELOPER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#d8ff66] to-[#a855f7]">intelligent systems</span> and the software behind them.
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                {portfolioConfig.profile.subheadline}
              </p>
            </motion.div>

            {/* Profile Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-4 rounded-xl border border-white/10 max-w-xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#ccff00]" />
                <span>{portfolioConfig.profile.education.degree}</span>
              </div>
              <div className="flex items-center gap-2 text-violet-300">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>Graduation {portfolioConfig.profile.education.expectedGraduation}</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-sm font-bold flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                <span>View Selected Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioConfig.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm font-medium border border-white/10 flex items-center gap-2 transition-all hover:border-white/30"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioConfig.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm font-medium border border-white/10 flex items-center gap-2 transition-all hover:border-white/30"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-3.5 rounded-xl bg-[#141a29] hover:bg-[#1c2438] text-[#ccff00] font-mono text-sm font-medium border border-[#ccff00]/40 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual Column - Abstract Connected System Graphics */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-[#0e1320] via-[#121827] to-[#0a0d14] border border-[#ccff00]/20 p-6 flex flex-col justify-between overflow-hidden shadow-2xl glow-border-lime"
            >
              {/* Background Network Mesh Lines */}
              <div className="absolute inset-0 bg-cyber-dots opacity-40 pointer-events-none" />

              {/* Graphic Header */}
              <div className="flex items-center justify-between relative z-10 font-mono text-xs">
                <span className="text-[#ccff00] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  SYSTEM GRAPH
                </span>
                <span className="text-gray-500">v2.4 // ACTIVE</span>
              </div>

              {/* Center Orbital Agent Network Visualization */}
              <div className="relative my-auto flex items-center justify-center py-6">
                {/* Outer Rotating Ring */}
                <div className="w-56 h-56 rounded-full border border-dashed border-[#ccff00]/30 animate-spin-slow flex items-center justify-center relative">
                  <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#ccff00] rounded-full blur-[2px]" />
                  <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-violet-400 rounded-full blur-[1px]" />
                </div>

                {/* Inner Ring */}
                <div className="absolute w-36 h-36 rounded-full border border-violet-500/40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#ccff00]/20 to-violet-600/30 backdrop-blur-sm border border-[#ccff00]/50 flex items-center justify-center text-center p-2 shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                    <div className="font-mono text-[11px] font-bold text-white leading-tight">
                      MULTI-AGENT <br />
                      <span className="text-[#ccff00]">AI ARCH</span>
                    </div>
                  </div>
                </div>

                {/* Floating Peripheral Nodes */}
                <div className="absolute top-2 left-4 bg-[#141a29] border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono text-gray-300">
                  FastAPI / Spring
                </div>
                <div className="absolute bottom-4 left-6 bg-[#141a29] border border-[#ccff00]/30 px-2.5 py-1 rounded text-[10px] font-mono text-[#ccff00]">
                  LangGraph
                </div>
                <div className="absolute top-8 right-2 bg-[#141a29] border border-violet-500/30 px-2.5 py-1 rounded text-[10px] font-mono text-violet-300">
                  CNN + BiLSTM
                </div>
                <div className="absolute bottom-6 right-4 bg-[#141a29] border border-amber-500/30 px-2.5 py-1 rounded text-[10px] font-mono text-amber-300">
                  Kafka Events
                </div>
              </div>

              {/* Graphic Footer */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-gray-400">
                <span>Core Stack: Java • Python</span>
                <span className="text-[#ccff00]">2022-2027</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
