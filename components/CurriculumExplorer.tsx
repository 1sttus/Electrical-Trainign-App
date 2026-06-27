'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { modules } from '@/lib/courseData';

export default function CurriculumExplorer() {
  return (
    <section id="curriculum" className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Curriculum explorer</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Learn by module, lesson, and practical task</h2>
        </div>
        <Link href="#modules" className="text-sm font-semibold text-electric transition hover:text-cyan-300">
          Jump to modules →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {modules.slice(0, 6).map((module, index) => (
            <motion.article
              key={module.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-[#06111c]/90 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Module {module.number}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{module.summary}</p>
                </div>
                <div className="rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-sm text-electric">
                  {module.lessons.length} lesson{module.lessons.length > 1 ? 's' : ''}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {module.topics.map((topic) => (
                  <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#06111c]/90 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Learning flow</p>
          <div className="mt-6 space-y-4">
            {[
              ['Learn', 'Understand standards, diagrams, and theory.'],
              ['Practice', 'Apply wiring methods in guided exercises.'],
              ['Test', 'Complete quizzes and mock certification checks.'],
              ['Build', 'Design and troubleshoot complete residential systems.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-emerald/20 bg-emerald/10 p-5">
            <p className="text-sm font-semibold text-emerald-300">Certification readiness</p>
            <p className="mt-2 text-sm text-slate-300">Students who complete the practical worksheets and quizzes are prepared for trade test preparation and employer-ready field work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
