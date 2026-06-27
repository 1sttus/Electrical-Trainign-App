'use client';

import { motion } from 'framer-motion';

const steps = [
  { title: 'Foundation', description: 'Build knowledge of standards, safety, and load planning.' },
  { title: 'Practice', description: 'Explore diagrams, simulations, and tool use in a guided lab.' },
  { title: 'Assess', description: 'Complete quizzes and receive feedback on weak topics.' },
  { title: 'Certify', description: 'Earn course completion certification and practical readiness badges.' },
];

export default function StudentJourney() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Student journey</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">A complete pathway from beginner to competent installer</h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-[#06111c]/90 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-lg font-semibold text-electric">{index + 1}</div>
            <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
