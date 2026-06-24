'use client';

type ProgressRingProps = {
  label: string;
  value: number;
  max: number;
  accent?: string;
};

export default function ProgressRing({ label, value, max, accent = 'text-electric' }: ProgressRingProps) {
  const progress = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#06101d]/90 p-5">
      <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-900/50">
        <svg viewBox="0 0 36 36" className="h-full w-full">
          <path
            d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
            strokeLinecap="round"
            className={`text-electric`}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-sm font-semibold text-white">{progress}%</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="mt-1 text-xl font-semibold text-white">{value}/{max}</p>
      </div>
    </div>
  );
}
