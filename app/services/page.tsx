import { PageHero, QuoteBand, ServiceGrid } from "@/components/DigiJavedStyle";

export const metadata = { title: "Services" };

const serviceGroups = [
  ["Client Services", "Website development, web applications, mobile apps, UI/UX, branding, SEO, ads, digital marketing, AI automation, CRM, ERP, hosting and maintenance."],
  ["AI Learning", "Practical AI foundation programs, prompt engineering, AI content creation, productivity workflows and ethical AI training."],
  ["Corporate Training", "Custom AI upskilling for teams, leadership, departments, security standards and measurable productivity gains."],
  ["Schools & Colleges", "Faculty enablement, student bootcamps and curriculum integration support for AI-first education."],
  ["Digital Products", "Prompt kits, automation blueprints and playbooks that help learners and businesses save time."]
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services & AI training" title="From first idea to intelligent growth." text="Hire DigiSparkX for digital services, AI automation and practical training built around real-world results." />

      <section className="section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">What we offer</span><h2>One platform for services, learning and business growth.</h2></div></div>
          <div className="info-grid">
            {serviceGroups.map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section story-band">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow">Client services</span><h2>Complete digital solutions for modern businesses.</h2><p>Everything your business needs, under one roof.</p></div></div>
          <ServiceGrid />
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
