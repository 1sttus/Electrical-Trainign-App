'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function InstructorSection() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#07111f]/80 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeading title="Meet your instructors" description="Certified electrical professionals guiding every lesson with Nigerian compliance and hands-on practice." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-3">
        {[
          { name: 'Engr. Bukola', title: 'Lead Electrical Trainer', expertise: 'Residential wiring & compliance' },
          { name: 'Engr. Sani', title: 'Systems Engineer', expertise: 'Earthing, protection & testing' },
          { name: 'Engr. Ife', title: 'Practical Workshop Coach', expertise: 'Hands-on installation' },
        ].map((instructor) => (
          <div key={instructor.name} className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
            <div className="mb-6 h-24 w-24 rounded-3xl bg-gradient-to-br from-electric/30 to-emerald/20" />
            <p className="text-lg font-semibold text-white">{instructor.name}</p>
            <p className="mt-2 text-sm text-slate-400">{instructor.title}</p>
            <p className="mt-4 text-slate-300">{instructor.expertise}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
