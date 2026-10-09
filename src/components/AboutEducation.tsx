'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { GraduationCap, Award, Compass, BookOpen, ExternalLink, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="space-y-3 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-xs">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>03 // BACKGROUND & ACADEMICS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          About & Education
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl">
          Software engineering student focused on building clean backend microservices and exploring applied AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* About Bio & Career Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white">
              Hi, I&apos;m Harathi Chavala
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              I am an Integrated M.Tech Software Engineering student at VIT-AP University (expected graduation 2027). My focus lies at the intersection of robust backend software development and practical machine learning applications.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Whether architecting asynchronous event buses with Spring Boot and Kafka, building multi-agent threat scanners with LangGraph and FastAPI, or processing signal features for deep learning models, I enjoy solving concrete technical challenges with clean engineering decisions.
            </p>
          </div>

          {/* Career Focus Tags */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="text-xs font-mono text-[#ccff00] uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4" /> Primary Engineering Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {portfolioConfig.profile.careerFocus.map((focus) => (
                <span
                  key={focus}
                  className="px-3 py-1.5 rounded-lg bg-[#141a29] border border-[#ccff00]/30 text-xs font-mono text-gray-200"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Institutional Highlights */}
          <div className="p-4 rounded-xl bg-[#0b0e17] border border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-violet-400" />
              <div>
                <span className="text-white font-bold block">{portfolioConfig.profile.education.institution}</span>
                <span className="text-[11px] text-gray-400">{portfolioConfig.profile.education.degree}</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-[10px]">
              2022 — 2027
            </span>
          </div>
        </motion.div>

        {/* Education & Achievements Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Achievements Block */}
          <div className="glass-panel p-6 rounded-2xl space-y-5 border border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#ccff00]" />
              Verified Achievements & Milestones
            </h3>

            <div className="space-y-4">
              {portfolioConfig.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0b0e17] border border-white/10 space-y-2 hover:border-[#ccff00]/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-[10px]">
                      {item.badgeText}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                  <span className="text-[10px] font-mono text-gray-500 block pt-1">
                    {item.organization} • {item.date}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-dashed border-white/15 text-center text-xs font-mono text-gray-400">
              💡 Additional hackathon certificates, publications, and open-source milestones can be updated directly in <code className="text-[#ccff00]">src/config/portfolio.ts</code>.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
