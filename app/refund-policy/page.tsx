import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  const items = [
    "Refunds depend on the agreed proposal, course policy, digital product terms and work already completed.",
    "Digital product sales may be non-refundable once access, download or delivery has been provided.",
    "Course enrollment cancellation requests must be made before substantial access, mentorship or materials have been used.",
    "Custom design, development, automation and enterprise training usually involve non-refundable planning and production time.",
    "Enterprise agreements follow the refund, cancellation and milestone terms stated in the signed proposal.",
    "For any refund request, email DigiSparkX with payment details, program/service name and reason."
  ];
  return (
    <section className="section"><div className="container max-w-4xl"><SectionHeader eyebrow="Legal & Compliance" title="Refund Policy" text="Transparent guidelines for courses, digital products, services and enterprise agreements." /><div className="premium-card p-8"><ul className="grid gap-4">{items.map((item) => <li key={item} className="text-lg text-slate-600 dark:text-slate-300">{item}</li>)}</ul></div></div></section>
  );
}
