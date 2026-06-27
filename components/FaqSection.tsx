'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const faqs = [
  { question: 'What are the certification levels?', answer: 'NRWA offers Foundation, Practitioner, and Master certifications aligned with residential standards.' },
  { question: 'Can I access diagrams offline?', answer: 'Downloadable resources are available for lessons and diagrams when signed in.' },
  { question: 'How does the AI tutor work?', answer: 'It uses the academy manual to answer questions, recommend lessons, and explain diagrams.' },
];

export default function FaqSection() {
  return (
    <section className="mt-16">
      <SectionHeading title="Frequently asked questions" description="Quick answers for learners, trainers, and aspiring electricians." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-4 md:grid-cols-3">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
            <p className="font-semibold text-white">{item.question}</p>
            <p className="mt-3 text-slate-400">{item.answer}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
