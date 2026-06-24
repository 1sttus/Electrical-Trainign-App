'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { rooms } from '@/lib/houseData';

export default function HouseSimulator() {
  const [selected, setSelected] = useState(rooms[0].id);
  const room = rooms.find((item) => item.id === selected) ?? rooms[0];

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#08111f]/80 p-6 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">2D house simulator</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Learn room wiring routes</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {rooms.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${selected === item.id ? 'border-electric bg-electric/15 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-electric/30 hover:bg-white/10'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <div className="relative h-full w-full rounded-3xl border border-cyan-300/10 bg-[#06121c] p-4">
              <p className="text-sm font-semibold text-slate-200">{room.label}</p>
              <div className="mt-6 grid gap-3">
                {room.features.map((feature) => (
                  <div key={feature} className="rounded-3xl bg-slate-950/80 p-3 text-sm text-slate-300">{feature}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-[#06101d]/90 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selected room</p>
          <h4 className="text-xl font-semibold text-white">{room.label}</h4>
          <p className="text-slate-300">{room.description}</p>
          <div className="grid gap-3">
            {room.highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">{highlight}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
