'use client';

import React from 'react';
import { Project } from '@/config/portfolio';
import { GithubIcon } from './SocialIcons';
import { ArrowUpRight, Sparkles, Radio, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isFeaturedPriority = project.featured && project.priority <= 2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl glass-panel transition-all duration-300 hover:border-[#ccff00]/40 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isFeaturedPriority ? 'md:col-span-2 bg-[#0f1422] border-[#ccff00]/30 shadow-lg' : 'col-span-1'
      }`}
      onClick={() => onSelect(project)}
    >
      {/* Top Banner & Badges */}
      <div className="p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#182033] text-[#ccff00] border border-[#ccff00]/30 font-mono text-[11px] font-semibold">
              {project.category}
            </span>
            {isFeaturedPriority && (
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 font-mono text-[11px] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Featured Highlight #{project.priority}
              </span>
            )}
          </div>

          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#ccff00] text-gray-400 group-hover:text-black flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-gray-400 leading-snug">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Mini Preview Graphic Box for Top 2 Featured Projects */}
        {isFeaturedPriority && (
          <div className="mt-4 p-4 rounded-xl bg-[#090c14] border border-white/10 font-mono text-xs text-gray-300 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.id === 'scamshield-ai' ? (
                <Shield className="w-5 h-5 text-[#ccff00]" />
              ) : (
                <Radio className="w-5 h-5 text-violet-400 animate-pulse" />
              )}
              <div>
                <span className="text-white font-bold block">{project.title} Core Engine</span>
                <span className="text-[10px] text-gray-400">{project.architecture.substring(0, 75)}...</span>
              </div>
            </div>
            <span className="text-[10px] bg-[#ccff00]/10 text-[#ccff00] px-2.5 py-1 rounded border border-[#ccff00]/30 hidden sm:inline-block">
              Inspect Specs →
            </span>
          </div>
        )}
      </div>

      {/* Footer Tech Stack & GitHub Action */}
      <div className="px-6 sm:px-7 py-4 bg-[#090b12]/80 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex flex-wrap gap-1.5 max-w-[80%]">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-gray-400 text-[10px]">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400 text-[10px]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
            title="View Code on GitHub"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
