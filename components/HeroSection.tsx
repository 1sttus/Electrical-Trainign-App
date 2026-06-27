'use client';

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div className="absolute inset-0 bg-electrical-grid opacity-80" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#0c1220]/80 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              Premium Electrical Training · Built for Nigerian installers
            </p>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Nigerian Residential Wiring Academy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Master Nigerian residential electrical installation standards with world-class modules, interactive diagrams, AI tutoring, and certification-ready assessments.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="#dashboard" className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold text-navy transition hover:bg-cyan-400">
                Start learning
              </Link>
              <Link href="#modules" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-300">
                View course modules
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">97%</p>
                <p className="mt-2 text-sm text-slate-400">Certification pass-rate</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">12k+</p>
                <p className="mt-2 text-sm text-slate-400">Students trained</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">10</p>
                <p className="mt-2 text-sm text-slate-400">Core modules</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/80 p-8 shadow-glow backdrop-blur-2xl">
              <div className="absolute -right-16 top-8 h-32 w-32 rounded-full bg-electric/20 blur-3xl" aria-hidden="true" />
              <div className="absolute left-0 top-24 h-24 w-24 rounded-full bg-emerald/10 blur-3xl" aria-hidden="true" />
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Certification Path</p>
                      <p className="mt-3 text-2xl font-semibold text-white">Foundation → Practitioner → Master</p>
                    </div>
                    <span className="inline-flex rounded-full bg-emerald/15 px-3 py-1 text-sm text-emerald-300">Structured</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-5">
                    <p className="text-sm text-slate-400">Current module</p>
                    <p className="mt-3 text-xl font-semibold text-white">Load Design</p>
                    <p className="mt-2 text-sm text-slate-400">4 of 10 modules completed</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-5">
                    <p className="text-sm text-slate-400">AI tutor</p>
                    <p className="mt-3 text-xl font-semibold text-white">Ask about earthing</p>
                    <p className="mt-2 text-sm text-slate-400">Instant explanations & guided practice</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Network snapshot</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl bg-[#081528] p-4">
                      <p className="text-2xl font-semibold text-white">8/10</p>
                      <p className="text-sm text-slate-400">Certified modules</p>
                    </div>
                    <div className="rounded-3xl bg-[#081528] p-4">
                      <p className="text-2xl font-semibold text-white">1.2k</p>
                      <p className="text-sm text-slate-400">Active learners</p>
                    </div>
                    <div className="rounded-3xl bg-[#081528] p-4">
                      <p className="text-2xl font-semibold text-white">4.9/5</p>
                      <p className="text-sm text-slate-400">Student satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
