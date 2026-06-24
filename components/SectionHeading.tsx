type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export default function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {subtitle ? <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{subtitle}</p> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-300 leading-8">{description}</p> : null}
    </div>
  );
}
