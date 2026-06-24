type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
};

export default function DashboardCard({ title, value, description, icon }: DashboardCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#06101d]/90 p-6 shadow-glow">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="rounded-3xl bg-electric/10 p-3 text-electric">{icon}</div>
      </div>
      <p className="mt-4 text-sm text-slate-400">{description}</p>
    </div>
  );
}
