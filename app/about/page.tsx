import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { company } from "@/data/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="About DigiSparkX" title="A digital company built for clients, learners and future-ready businesses." text="DigiSparkX combines strategy, design, engineering, marketing and education in one focused ecosystem." />
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="premium-card sticky top-28 p-6 text-center">
            <Image src={company.logo} alt="DigiSparkX logo" width={220} height={220} className="mx-auto rounded-[42px]" />
            <h2 className="mt-6 text-3xl font-black">{company.name}</h2>
            <p className="gradient-text mt-2 text-xl font-black">{company.tagline}</p>
            <div className="mt-6 grid gap-3 text-left">
              <Info label="CEO" value={company.ceo} />
              <Info label="Directors" value={company.directors.join(", ")} />
              <Info label="Official Email" value={company.email} />
            </div>
          </div>
          <div className="grid gap-5">
            {[
              ["Our Purpose", "DigiSparkX exists to help businesses look professional, operate smarter and grow digitally. We build websites, applications, branding systems, marketing campaigns and automations that convert ideas into real outcomes."],
              ["Client Services Division", "Our client services team works with businesses that need websites, web apps, mobile apps, UI/UX, graphic design, branding, SEO, digital marketing, ads, AI automation, CRM, ERP, e-commerce, hosting, domain setup and long-term website maintenance."],
              ["Academy Division", "DigiSparkX Academy helps learners gain practical, job-ready and freelance-ready skills in digital marketing, development, design, video editing, AI tools, ChatGPT, prompt engineering, SEO, ads, Canva, Photoshop, Illustrator, WordPress, programming, freelancing, business growth and personal branding."],
              ["Leadership", "Mohammed Javed leads DigiSparkX with a quality-first mindset, supported by directors Junaid Javed, Iqra Javed and Fatima Javed. The company is structured to serve both businesses and students with clarity, trust and modern execution."],
              ["Our Promise", "Every project and training program is handled with attention to detail, secure systems, responsive design, accessibility, SEO foundations and a long-term vision for growth."]
            ].map(([title, text]) => (
              <article key={title} className="premium-card p-7">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 text-lg leading-8 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-900/5 p-4 dark:bg-white/10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}
