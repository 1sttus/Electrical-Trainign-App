import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function CertificationSection() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeading title="Certification path" description="Complete the curriculum, pass module assessments, and earn a recognized residential wiring certificate." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Foundation', description: 'Nigerian standards, safety, and wiring principles.' },
          { title: 'Practitioner', description: 'Hands-on installation, protection, and testing practice.' },
          { title: 'Master', description: 'System design, inspection, and advanced compliance.' },
        ].map((step) => (
          <div key={step.title} className="rounded-3xl border border-white/10 bg-[#06111c]/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{step.title}</p>
            <p className="mt-4 text-lg font-semibold text-white">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
