import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { company } from "@/data/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Tell DigiSparkX what you want to build, grow or learn." text="Your message is sent to the official email and stored in the secure database when backend environment variables are configured." />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-4">
            <Info icon={<Mail />} title="Email" text={company.email} />
            <Info icon={<Phone />} title="Phone" text={company.phone} />
            <Info icon={<MapPin />} title="Location" text={company.address} />
            <iframe title="DigiSparkX Google Map" className="h-80 w-full rounded-[28px] border-0 shadow-blueglow" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} />
          </div>
          <Suspense fallback={<div className="premium-card p-8">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="premium-card flex gap-4 p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-500 text-white">{icon}</span>
      <div>
        <h2 className="font-black">{title}</h2>
        <p className="text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}
