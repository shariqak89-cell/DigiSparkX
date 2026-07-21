import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  const items = ["Refunds depend on the agreed proposal, course policy and work already completed.", "Custom design, development and digital services usually involve non-refundable planning and production time.", "Course refunds, if applicable, must be requested before substantial access, mentorship or materials have been used.", "Approved refunds are processed through the original payment mode when possible.", "For any refund request, email DigiSparkX with payment details and reason."];
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal" title="Refund Policy" /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
