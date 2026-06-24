import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const quotes = [
  {
    quote: 'NRWA transformed my wiring practice. I now design safe home installations with confidence.',
    author: 'Chinedu, Lagos',
    role: 'Apprentice Electrician',
  },
  {
    quote: 'The practical modules and interactive diagrams are exactly what Nigerian trainees need.',
    author: 'Ada, Abuja',
    role: 'Electrical Trainer',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mt-16">
      <SectionHeading title="What learners say" description="Trusted by aspiring installers, vocational trainers, and compliance professionals." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-2">
        {quotes.map((item) => (
          <div key={item.author} className="rounded-[2rem] border border-white/10 bg-[#06111d]/90 p-8 shadow-glow">
            <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-500">{item.role}</p>
            <p className="mt-2 font-semibold text-white">{item.author}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
