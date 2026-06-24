import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function AiTutorSection() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#081323]/80 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeading title="AI Tutor" description="Ask questions, get wiring explanations, and receive lesson recommendations from your virtual instructor." />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ask the AI</p>
          <p className="mt-4 text-2xl font-semibold text-white">Explain an earthing system in simple terms.</p>
          <p className="mt-4 text-slate-300">The AI uses the academy training manual to answer clearly, recommend lessons, and highlight safety best practices.</p>
          <div className="mt-8 space-y-4 rounded-3xl bg-[#07111f]/90 p-6">
            <p className="text-sm font-semibold text-slate-200">Recommended topics</p>
            <ul className="space-y-3 text-slate-400">
              <li>Earthing fundamentals</li>
              <li>RCCB testing</li>
              <li>Load design</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-8">
          <div className="rounded-3xl bg-[#08131d]/90 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Sample chat</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-[#0b1728]/90 p-4">
                <p className="text-sm font-semibold text-white">Student</p>
                <p className="mt-2 text-slate-300">How do I pick the right RCCB for a residential circuit?</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#08111e]/90 p-4">
                <p className="text-sm font-semibold text-electric">NRWA Tutor</p>
                <p className="mt-2 text-slate-300">Choose RCCBs based on current rating, earth fault sensitivity, and the protective requirements of the circuit.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
