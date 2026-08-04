import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  const items = [
    "We collect contact, enquiry, enrollment and communication details only to respond to users, support learners and improve DigiSparkX services.",
    "Website analytics may be used to understand traffic, content performance and user experience.",
    "Personal information is stored carefully and used only for legitimate business, learning, support and communication purposes.",
    "Form submissions may be sent to the official DigiSparkX email and stored carefully for follow-up communication.",
    "We do not sell personal data to third parties.",
    "Users can request correction or deletion of their personal enquiry data by emailing DigiSparkX."
  ];
  return <Policy title="Privacy Policy" intro="How DigiSparkX collects, stores and protects user data." items={items} />;
}

function Policy({ title, intro, items }: { title: string; intro: string; items: string[] }) {
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal & Compliance" title={title} text={intro} /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
