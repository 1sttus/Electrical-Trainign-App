'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const stats = [
  { label: 'Practical modules', value: '10' },
  { label: 'Interactive diagrams', value: '12+' },
  { label: 'Exam questions', value: '800+' },
  { label: 'AI tutor sessions', value: '24/7' },
];

export default function StatsSection() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#07111f]/80 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeading title="A premium curriculum for Nigerian electricians" description="Real-world wiring skills, compliance with Nigerian installation standards, and exam-ready certification practice." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-semibold text-white">{stat.value}</p>
            <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
