'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { diagrams } from '@/lib/diagramData';

export default function DiagramViewer() {
  const [active, setActive] = useState(diagrams[0].id);
  const diagram = useMemo(() => diagrams.find((item) => item.id === active) ?? diagrams[0], [active]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#08111f]/80 p-6 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interactive diagrams</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Explore wiring diagrams</h3>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {diagrams.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${active === item.id ? 'bg-electric text-navy' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-950/40 p-4">
            <div className="relative h-full w-full rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-slate-950/90 via-[#07111f] to-slate-950/95">
              <div className="absolute inset-0 p-6 text-slate-200">
                <p className="text-lg font-semibold">{diagram.label}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{diagram.description}</p>
                <div className="mt-6 grid gap-2 text-sm text-slate-300">
                  {diagram.hotspots.map((hotspot) => (
                    <button key={hotspot.id} type="button" onClick={() => setActive(diagram.id)} className="text-left text-slate-300 underline decoration-slate-600 decoration-dotted underline-offset-4 transition hover:text-white">
                      • {hotspot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Details</p>
          <p className="text-white">{diagram.details}</p>
          <div className="space-y-3">
            {diagram.hotspots.map((hotspot) => (
              <div key={hotspot.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{hotspot.label}</p>
                <p className="mt-2 text-sm text-slate-300">{hotspot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
