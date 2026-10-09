'use client';

import React, { useEffect } from 'react';
import { Project } from '@/config/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GithubIcon } from './SocialIcons';
import { X, ExternalLink, CheckCircle2, Clock, Sparkles, Shield, Cpu, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
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
          className="relative w-full max-w-4xl bg-[#0d1017] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 border-b border-white/10 pb-6 pr-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-xs font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 font-mono text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-violet-400" /> Featured Priority #{project.priority}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
            <p className="text-gray-300 font-mono text-sm">{project.tagline}</p>
          </div>

          {/* Modal Content Grid */}
          <div className="space-y-8 py-6">
            {/* Architecture Diagram Visualization */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#ccff00]" />
                Architecture Diagram & Flow
              </h3>
              <ArchitectureDiagram type={project.diagramType} title={project.title} />
            </div>

            {/* Technical Problem & Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121624] p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="text-xs font-mono text-[#ccff00] uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#ccff00]" />
                  Technical Problem
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">{project.problem}</p>
              </div>

              <div className="bg-[#121624] p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="text-xs font-mono text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-violet-400" />
                  Engineering Implementation
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">{project.architecture}</p>
              </div>
            </div>

            {/* Engineering Decisions */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                // Critical Engineering Decisions
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {project.decisions.map((decision, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-gray-200 flex items-start gap-2.5">
                    <span className="font-mono text-[#ccff00] font-bold text-xs">[{idx + 1}]</span>
                    <span>{decision}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implemented vs Planned Functionality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Implemented */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Implemented & Verified
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {project.implementedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-emerald-950/20 border border-emerald-500/20 p-2.5 rounded-lg">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned */}
              {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Planned Roadmap Features
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {project.plannedFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-amber-950/20 border border-amber-500/20 p-2.5 rounded-lg">
                        <span className="text-amber-400 font-mono">→</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Verified Technology Stack */}
            <div className="space-y-3 border-t border-white/10 pt-6">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                // Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-[#182033] border border-white/10 text-xs font-mono text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <span className="text-[11px] font-mono text-gray-500">
              Repository Verified • Harathich/GitHub
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
