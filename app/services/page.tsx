import { PageHero, QuoteBand, ServiceGrid } from "@/components/DigiJavedStyle";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Digital services. One dependable team." title="From first idea to digital growth." text="Explore website, branding, marketing, AI and software services tailored to real business needs." />
      <section className="section"><div className="shell"><ServiceGrid /></div></section>
      <QuoteBand />
    </>
  );
}
