'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
  Video,
  Zap,
} from 'lucide-react';

const tutorRules = [
  'Answer from NRWA wiring lessons and current IEE/NIS-IEC safety guidance.',
  'Show calculations step by step before giving the final conductor or device size.',
  'Ask for missing circuit details before advising on field work.',
  'Flag any unsafe installation practice clearly and recommend instructor review.',
];

const quickPrompts = [
  'Size a protective conductor',
  'Explain RCCB trip current',
  'Check a lighting circuit',
];

export default function AiTutorSection() {
  return (
    <section id="ai-tutor" className="mt-16 overflow-hidden rounded-[1.5rem] bg-[#f0f3f8] text-[#191c1e] shadow-[0_30px_90px_rgba(0,80,203,0.22)]">
      <div className="border-b border-white/70 bg-[#f7f9fb]/80 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-[#0050cb] transition hover:bg-[#e0e3e5]/70" aria-label="Back to dashboard">
              <ArrowLeft size={20} />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#727687]">NRWA Academy</p>
              <h2 className="text-2xl font-bold tracking-tight text-[#0050cb]">AI Tutor</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full border border-[#0050cb]/20 bg-[#0066ff]/10 px-3 py-1.5 text-sm font-semibold text-[#0050cb] sm:flex">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#0050cb]" />
              High-Precision Mode
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0050cb] text-white shadow-md">
              <Sparkles size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="px-5 py-8 sm:px-8 lg:px-10"
        >
          <div className="mx-auto flex max-w-[800px] flex-col gap-6">
            <div className="flex justify-center">
              <span className="rounded-full bg-[#e6e8ea] px-4 py-1 text-sm font-semibold text-[#727687]">Today, 14:20</span>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0050cb] p-5 text-white shadow-lg">
                <p className="leading-relaxed">How do I calculate the earthing conductor size for a 60A main switch?</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066ff] text-white shadow-sm">
                <Sparkles size={20} />
              </div>
              <div className="max-w-[92%] space-y-4">
                <div className="rounded-2xl rounded-tl-sm border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-2xl">
                  <p className="leading-relaxed text-[#191c1e]">
                    Start by confirming the phase conductor size and installation method. For a common 60A residential supply using a 16mm2 copper phase conductor, the protective earthing conductor is usually sized from the same conductor table rather than guessed from the breaker rating alone.
                  </p>
                  <p className="mt-4 leading-relaxed text-[#191c1e]">
                    If the phase conductor is 16mm2 copper, use <strong className="text-[#0050cb]">16mm2 copper CPC</strong> when the protective conductor is the same material. If your calculation lands between standard sizes, choose the next larger approved size.
                  </p>

                  <div className="mt-5 rounded-xl border border-[#c2c6d8]/60 border-l-[#0050cb] border-l-4 bg-white/75 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-[#0050cb]" size={22} />
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#424656]">Reference Standard</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-[#0050cb]">NIS-IEC 60364-5-54</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-[#eceef0] p-3">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#727687]">Phase S</span>
                        <span className="font-mono text-sm font-bold">S &lt;= 16mm2</span>
                      </div>
                      <div className="rounded-lg border border-[#0050cb]/10 bg-[#0066ff]/10 p-3">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0050cb]">Earth Sp</span>
                        <span className="font-mono text-sm font-bold text-[#0050cb]">Sp = S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      className="rounded-full border border-[#0050cb]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0050cb] shadow-sm transition hover:border-[#0050cb]/40 hover:bg-[#dae1ff]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="group flex items-center gap-3 rounded-full border border-[#0050cb]/20 bg-white px-5 py-3 text-sm font-semibold text-[#0050cb] shadow-sm transition hover:shadow-md">
                <span className="h-2 w-2 rounded-full bg-[#0050cb] group-hover:animate-ping" />
                Enable Live Wiring Feedback Mode
                <Video size={18} />
              </button>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/75 p-3 shadow-[0_18px_50px_rgba(0,80,203,0.16)] backdrop-blur-2xl">
              <div className="flex items-end gap-3">
                <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#727687] transition hover:bg-[#e0e3e5]" aria-label="Attach file">
                  <Paperclip size={20} />
                </button>
                <textarea
                  className="max-h-32 min-h-11 flex-1 resize-none border-none bg-transparent py-3 text-base text-[#191c1e] outline-none placeholder:text-[#727687] focus:ring-0"
                  placeholder="Ask about wiring, standards, or upload a photo..."
                  rows={1}
                />
                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0050cb] text-white shadow-lg transition hover:brightness-110" aria-label="Send message">
                  <Send size={20} />
                </button>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-[#727687]">AI can make mistakes. Verify with current IEE regulations and instructor guidance.</p>
            </div>
          </div>
        </motion.div>

        <aside className="border-t border-white/70 bg-[#f7f9fb]/80 p-6 backdrop-blur-xl lg:border-l lg:border-t-0">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#727687]">Tutor Profile</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#191c1e]">Precision-first electrical coaching</h3>
              <p className="mt-3 leading-7 text-[#424656]">
                The assistant is tuned to teach residential wiring with Nigerian academy context, practical checks, and safety-first escalation.
              </p>
            </div>

            <div className="space-y-3">
              {tutorRules.map((rule) => (
                <div key={rule} className="flex gap-3 rounded-xl bg-white/75 p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#0050cb]" size={18} />
                  <p className="text-sm leading-6 text-[#424656]">{rule}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl bg-[#eceef0] p-4">
                <BookOpen className="text-[#0050cb]" size={20} />
                <p className="mt-3 text-sm font-semibold text-[#191c1e]">Lesson aware</p>
                <p className="mt-1 text-xs leading-5 text-[#424656]">Recommends modules after each answer.</p>
              </div>
              <div className="rounded-xl bg-[#dae1ff] p-4">
                <Zap className="text-[#003fa4]" size={20} />
                <p className="mt-3 text-sm font-semibold text-[#001849]">Calculation ready</p>
                <p className="mt-1 text-xs leading-5 text-[#374762]">Keeps formulas visible and auditable.</p>
              </div>
              <div className="rounded-xl bg-[#ffdcc3] p-4">
                <ShieldCheck className="text-[#894900]" size={20} />
                <p className="mt-3 text-sm font-semibold text-[#2f1500]">Safety gated</p>
                <p className="mt-1 text-xs leading-5 text-[#6e3900]">Stops before unsafe field instructions.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
