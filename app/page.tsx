'use client';

import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ModulesSection from '@/components/ModulesSection';
import CertificationSection from '@/components/CertificationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InstructorSection from '@/components/InstructorSection';
import AiTutorSection from '@/components/AiTutorSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import CurriculumExplorer from '@/components/CurriculumExplorer';
import HouseSimulator from '@/components/HouseSimulator';
import DiagramViewer from '@/components/diagramViewer';
import ToolLibrary from '@/components/ToolLibrary';
import PpeLibrary from '@/components/PpeLibrary';
import AssessmentPreview from '@/components/AssessmentPreview';
import StudentJourney from '@/components/StudentJourney';

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden"
      >
        <HeroSection />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <StatsSection />
          <CurriculumExplorer />
          <ModulesSection />
          <CertificationSection />
          <div className="mt-16 grid gap-8 xl:grid-cols-2">
            <HouseSimulator />
            <DiagramViewer />
          </div>
          <ToolLibrary />
          <PpeLibrary />
          <AssessmentPreview />
          <StudentJourney />
          <TestimonialsSection />
          <InstructorSection />
          <AiTutorSection />
          <FaqSection />
        </div>
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
