'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { InteractiveCanvas } from '@/components/InteractiveCanvas';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Capabilities } from '@/components/Capabilities';
import { AboutEducation } from '@/components/AboutEducation';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080a0f] text-gray-100 selection:bg-[#ccff00] selection:text-black">
      {/* Background Interactive Ambient Canvas */}
      <InteractiveCanvas />

      {/* Header Navigation */}
      <Header onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Projects />
        <Capabilities />
        <AboutEducation />
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download / Update Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
