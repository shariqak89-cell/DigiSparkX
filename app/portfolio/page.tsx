import { PortfolioCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioItems } from "@/data/content";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Portfolio" title="Projects, case studies and client-ready presentation modules." text="Filters and CMS management are supported in the dashboard data model." />
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => <span key={category} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold dark:border-white/10">{category}</span>)}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioItems.map((item) => <PortfolioCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}
