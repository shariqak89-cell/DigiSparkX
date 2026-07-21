import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/data/content";

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Common questions before working or learning with DigiSparkX." />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="premium-card group p-6">
              <summary className="cursor-pointer text-xl font-black">{faq.q}</summary>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
