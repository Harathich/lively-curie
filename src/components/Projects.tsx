'use client';

import React, { useState } from 'react';
import { portfolioConfig, Project } from '@/config/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ['All', 'AI/ML', 'Software Engineering', 'Full-Stack'];

  const filteredProjects = portfolioConfig.projects
    .filter((p) => (activeFilter === 'All' ? true : p.category === activeFilter))
    .sort((a, b) => a.priority - b.priority);

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Selected Projects & Systems
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl">
            Verified implementation details, system architecture flows, and repository sources for software and AI/ML applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl border transition-all ${
                activeFilter === cat
                  ? 'bg-[#ccff00] text-black font-bold border-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
