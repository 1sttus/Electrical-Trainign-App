'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { modules } from '@/lib/courseData';

export default function ModulesSection() {
  return (
    <section id="modules" className="mt-16">
      <SectionHeading title="Course modules" description="Structured learning paths with theory, practical wiring, diagrams, and exam preparation." />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-6 lg:grid-cols-2">
        {modules.map((module) => (
          <motion.article key={module.id} className="group rounded-[2rem] border border-white/10 bg-[#06101d]/90 p-8 shadow-glow transition hover:-translate-y-1 hover:border-electric/50" whileHover={{ y: -4 }}>
            <div className="flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-electric/10 text-electric ring-1 ring-electric/20">
                {module.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{module.focus}</p>
              </div>
            </div>
            <p className="mt-6 text-slate-300">{module.summary}</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-400">
              {module.topics.slice(0, 4).map((topic) => (
                <span key={topic} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {topic}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
