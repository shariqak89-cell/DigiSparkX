import { ServiceCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map((service) => service.category)));
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Client Services" title="Hire DigiSparkX for professional digital execution." text="Each service includes strategy, clear process, premium UI/UX, secure implementation and launch support." />
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="mb-5 text-3xl font-black">{category}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.filter((service) => service.category === category).map((service) => <ServiceCard key={service.slug} service={service} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
