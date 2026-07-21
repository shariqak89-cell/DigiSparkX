import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <Policy title="Privacy Policy" items={["We collect contact and enquiry data only to respond to clients and learners.", "Form submissions may be stored securely in the DigiSparkX database and sent to the official email.", "We do not sell personal data.", "Admin users must protect login credentials and follow role-based permissions.", "Users can request correction or deletion of their personal enquiry data by emailing DigiSparkX."]} />;
}

function Policy({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal" title={title} /> <div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
