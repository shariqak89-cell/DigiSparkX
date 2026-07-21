import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { pricing } from "@/data/content";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Pricing" title="Flexible plans for services, training and custom systems." text="Final pricing depends on scope, content, integrations, timeline and support requirements." />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article key={plan.name} className={`premium-card relative p-7 ${plan.popular ? "ring-2 ring-orange-500" : ""}`}>
              {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-white">Popular</span>}
              <h2 className="text-3xl font-black">{plan.name}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{plan.description}</p>
              <p className="mt-6 text-4xl font-black">{plan.price}</p>
              <div className="mt-6 grid gap-3">
                {plan.features.map((feature) => <span key={feature} className="flex gap-2 font-semibold"><CheckCircle2 className="text-orange-500" /> {feature}</span>)}
              </div>
              <Link href="/contact" className="btn btn-primary mt-7 w-full">Request Quote</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
