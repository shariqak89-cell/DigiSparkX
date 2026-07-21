import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  const items = ["Project timelines depend on confirmed scope, content availability, approvals and payment milestones.", "Client-provided assets must be legally usable.", "Custom development, creative work and training services are delivered according to agreed proposal terms.", "DigiSparkX may update website content, pricing and services as business needs evolve.", "Unauthorized copying, abuse or misuse of website systems is prohibited."];
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal" title="Terms & Conditions" /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
