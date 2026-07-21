export function SectionHeader({
  eyebrow,
  title,
  text,
  center = true
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{text}</p>}
    </div>
  );
}
