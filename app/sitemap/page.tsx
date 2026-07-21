import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { allLinks } from "@/data/content";

export const metadata = { title: "Sitemap" };

export default function SitemapPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Sitemap" title="All DigiSparkX website pages." />
        <div className="grid-auto">
          {allLinks.map((link) => <Link key={link.href} href={link.href} className="premium-card p-5 text-lg font-black hover:text-orange-500">{link.label}</Link>)}
        </div>
      </div>
    </section>
  );
}
