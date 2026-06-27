'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const tools = [
  {
    name: 'Screwdrivers',
    description: 'Used for fixing terminals, plates, and mounting accessories.',
    use: 'Terminal tightening, accessory installation',
    safety: 'Use insulated handles and verify power is isolated.',
  },
  {
    name: 'Pliers',
    description: 'Helpful for gripping conductors, cutting wire, and shaping bends.',
    use: 'Cable handling and terminal work',
    safety: 'Keep fingers clear of the cutting edge.',
  },
  {
    name: 'Wire Strippers',
    description: 'Strip conductor insulation cleanly without damaging the copper.',
    use: 'Preparing cable ends for terminals',
    safety: 'Adjust the stripping depth to avoid nicking conductors.',
  },
  {
    name: 'Multimeter',
    description: 'Measures voltage, resistance, and continuity for testing circuits.',
    use: 'Troubleshooting and verification',
    safety: 'Use the correct range and test leads.',
  },
  {
    name: 'Clamp Meter',
    description: 'Measures current without opening the circuit path.',
    use: 'Load current checks',
    safety: 'Do not exceed the meter rating.',
  },
  {
    name: 'Megger',
    description: 'Tests insulation resistance for long-term safety.',
    use: 'Insulation verification',
    safety: 'Discharge the circuit after testing.',
  },
];

export default function ToolLibrary() {
  const [query, setQuery] = useState('');
  const filteredTools = useMemo(() => {
    const term = query.toLowerCase();
    return tools.filter((tool) => [tool.name, tool.description, tool.use].some((value) => value.toLowerCase().includes(term)));
  }, [query]);

  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#08121e]/80 p-8 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tool library</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Search the essential residential wiring toolkit</h2>
        </div>
        <label className="flex items-center gap-3 rounded-full border border-white/10 bg-[#06111c]/90 px-4 py-3 text-sm text-slate-300">
          <Search className="h-4 w-4 text-electric" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tools"
            className="w-40 bg-transparent outline-none"
          />
        </label>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <div key={tool.name} className="rounded-[1.5rem] border border-white/10 bg-[#06111c]/90 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">⚡</div>
            <h3 className="mt-4 text-xl font-semibold text-white">{tool.name}</h3>
            <p className="mt-3 text-sm text-slate-400">{tool.description}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Uses</p>
              <p className="mt-2">{tool.use}</p>
            </div>
            <div className="mt-3 text-sm text-slate-400">
              <span className="font-semibold text-white">Safety:</span> {tool.safety}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
