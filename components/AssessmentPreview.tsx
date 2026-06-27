'use client';

import { motion } from 'framer-motion';
import { modules } from '@/lib/courseData';

const sampleQuestions = [
  {
    question: 'Which device protects a circuit from earth leakage?',
    answer: 'RCCB',
  },
  {
    question: 'What should be verified before energizing a distribution board?',
    answer: 'Correct connections and protective devices',
  },
  {
    question: 'Why is bonding important in a residential installation?',
    answer: 'It prevents dangerous potential differences between metallic parts.',
  },
];

export default function AssessmentPreview() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Assessment system</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Practice quizzes, mock exams, and certification readiness</h2>
        </div>
        <div className="rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-sm text-electric">
          5,000+ question bank ready
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#06111c]/90 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Mock exam snapshot</p>
          <div className="mt-6 space-y-4">
            {sampleQuestions.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-slate-300">{item.question}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-300">Answer: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-[#06111c]/90 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Exam coverage</p>
          <div className="mt-5 grid gap-3">
            {modules.slice(0, 5).map((module) => (
              <div key={module.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{module.title}</p>
                <p className="mt-2 text-sm text-slate-400">Scenario-based, calculation, and troubleshooting questions included.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
