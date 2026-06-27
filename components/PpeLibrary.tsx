'use client';

import { motion } from 'framer-motion';

const ppe = [
  { name: 'Helmet', purpose: 'Protects the head from impact and falling objects.' },
  { name: 'Electrical Gloves', purpose: 'Insulated gloves for shock protection when handling live systems.' },
  { name: 'Safety Boots', purpose: 'Provides footing and protects feet against dropped tools.' },
  { name: 'Goggles', purpose: 'Shields eyes from sparks, dust, and debris.' },
  { name: 'Reflective Vest', purpose: 'Improves visibility on-site and in low-light areas.' },
  { name: 'Arc Flash Clothing', purpose: 'Adds protection for medium-risk switchboard and fault-exposure work.' },
];

export default function PpeLibrary() {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">PPE library</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Essential safety gear for every installation task</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ppe.map((item) => (
          <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-[#06111c]/90 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">🛡️</div>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-sm text-slate-400">{item.purpose}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
