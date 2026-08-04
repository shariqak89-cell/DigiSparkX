import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  const items = [
    "Users must use DigiSparkX content, courses, digital products and services responsibly and lawfully.",
    "Course access, digital assets and training material are provided according to the agreed program or purchase terms.",
    "Project timelines depend on confirmed scope, content availability, approvals and payment milestones.",
    "Client-provided assets must be legally usable and must not violate third-party rights.",
    "Unauthorized copying, resale, abuse or misuse of DigiSparkX website systems, course content or digital products is prohibited.",
    "DigiSparkX may update website content, pricing, services and policies as business needs evolve."
  ];
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal & Compliance" title="Terms & Conditions" text="Rules for using DigiSparkX services, programs, digital products and website systems." /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
