import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioItems } from "@/data/content";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Digital projects designed around measurable outcomes." />
        <div className="grid gap-5">
          {portfolioItems.map((item) => (
            <article key={item.title} className="premium-card grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">{item.category}</p>
                <h2 className="mt-2 text-3xl font-black">{item.title}</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
              <Link href="/portfolio" className="btn btn-secondary">View Case <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
