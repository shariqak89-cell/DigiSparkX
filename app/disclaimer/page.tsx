import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  const items = [
    "DigiSparkX provides practical AI education, digital training, digital products and business services for learning and growth purposes.",
    "Earnings, freelancing success, business growth, career outcomes and productivity gains depend on personal effort, implementation, consistency, market conditions and many external factors.",
    "AI tools can produce errors or biased output, so users should review, verify and use outputs responsibly.",
    "Training content, strategies and workflows are educational guidance, not guaranteed income, employment, ranking, revenue or business results.",
    "Businesses using AI should follow relevant privacy, compliance, security and ethical standards."
  ];
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal & Compliance" title="Disclaimer" text="Important notes about AI learning, digital products and outcome expectations." /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
