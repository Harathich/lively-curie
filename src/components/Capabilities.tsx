'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { Server, BrainCircuit, Terminal, CheckCircle2, Cpu, GitBranch, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="space-y-3 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/30 font-mono text-xs">
          <Cpu className="w-3.5 h-3.5 text-violet-400" />
          <span>02 // TECHNICAL STACK & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Software Engineering & AI Systems
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl">
          Two complementary engineering pillars grounded in practical codebase implementations rather than unverified percentage meters.
        </p>
      </div>

      {/* Dual Column Pillar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioConfig.skills.map((category, catIdx) => {
          const isSoftwarePillar = catIdx === 0;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className={`rounded-2xl glass-panel p-6 sm:p-8 space-y-6 relative overflow-hidden border ${
                isSoftwarePillar ? 'border-[#ccff00]/20 glow-border-lime' : 'border-violet-500/20 glow-border-violet'
              }`}
            >
              {/* Pillar Title */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div
                  className={`p-3 rounded-xl ${
                    isSoftwarePillar ? 'bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30' : 'bg-violet-500/10 text-violet-300 border border-violet-500/30'
                  }`}
                >
                  {isSoftwarePillar ? <Server className="w-6 h-6" /> : <BrainCircuit className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">{category.title}</h3>
                  <p className="text-xs font-mono text-gray-400">{category.subtitle}</p>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#0b0e17] border border-white/5 hover:border-white/15 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 ${isSoftwarePillar ? 'text-[#ccff00]' : 'text-violet-400'}`}
                        />
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.level === 'Core'
                            ? 'bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/30'
                            : skill.level === 'Advanced'
                            ? 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                            : 'bg-white/5 text-gray-400 border-white/10'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Applied Evidence Link */}
                    <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5 pl-6">
                      <span className="text-gray-500">Applied in:</span>
                      <span className="text-gray-300 font-normal">{skill.evidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
