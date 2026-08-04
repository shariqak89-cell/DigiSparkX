import { CourseCard } from "@/components/Cards";
import { QuoteBand } from "@/components/DigiJavedStyle";
import { SectionHeader } from "@/components/SectionHeader";
import { courses } from "@/data/content";

export const metadata = { title: "Academy" };

const modules = [
  "The AI Landscape & Core Concepts - LLMs, neural networks simplified and tool mapping.",
  "Advanced Prompt Engineering - system prompts, context windows, chaining and better prompting habits.",
  "Generative Media & Content Strategy - text, image, audio and video synthesis for modern creators.",
  "Workflow Automation - connecting tools like Zapier, Make and custom AI agents.",
  "Monetization & Portfolio Building - turning skills into freelance income, agency services or internal growth."
];

const corporate = [
  ["Executive Strategy", "Helping leadership identify high-ROI AI integration points."],
  ["Departmental Workflows", "Tailored modules for Marketing, HR, Customer Support, Finance and Engineering."],
  ["Security & Governance", "Setting safe standards for internal and external AI tool usage."]
];

const academic = [
  ["Faculty Enablement Programs", "Training teachers to integrate AI safely and creatively into lesson planning."],
  ["Student Bootcamps", "Hands-on workshops that introduce computational thinking and generative tools."],
  ["Curriculum Integration Support", "Modular frameworks that slot into existing academic calendars."]
];

const products = [
  ["Prompt Architecture Kits", "Field-tested prompt chains for marketing, writing and research."],
  ["Automation Blueprints", "Ready-to-import workflows for routine business tasks."],
  ["Niche Playbooks", "Step-by-step guides for launching solo digital micro-businesses using AI."]
];

export default function AcademyPage() {
  return (
    <>
      <section className="section program-hero">
        <div className="shell">
          <span className="eyebrow yellow">AI Foundation Program</span>
          <h1>Master the core of Artificial Intelligence.</h1>
          <p className="lead">The flagship program designed to take you from a curious beginner to a confident AI practitioner.</p>
          <div className="metric-row"><span>8 Weeks Duration</span><span>Project-Based Curriculum</span><span>Zero Coding Required</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">What modules are included</span><h2>Simple lessons. Real projects. Practical outcomes.</h2></div></div>
          <div className="info-grid">{modules.map((item, index) => <article className="info-card" key={item}><h3>Module {index + 1}</h3><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="section story-band">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow">Who is this for?</span><h2>For anyone ready to future-proof their work.</h2></div></div>
          <div className="pill-list">
            <span>Individuals looking to future-proof careers</span>
            <span>Freelancers wanting to multiply output by 10x</span>
            <span>Professionals stuck in repetitive manual tasks</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">Corporate AI Training</span><h2>Accelerate your enterprise with applied AI.</h2><p>Custom AI upskilling programs designed for modern teams, operations and leadership.</p></div></div>
          <div className="info-grid">{corporate.map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow yellow">AI for Schools & Colleges</span><h2>Preparing the next generation for an AI-first world.</h2><p>We bring structured, age-appropriate AI learning pathways directly into classrooms and campuses.</p></div></div>
          <div className="info-grid">{academic.map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">Digital Products</span><h2>Ready-to-use AI workflows, prompts and playbooks.</h2><p>Skip trial and error with production-ready digital assets built by AI experts.</p></div></div>
          <div className="info-grid">{products.map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="More DigiSparkX courses" title="Learn professional digital skills with practical training." text="Courses are built around real tools, real workflows and portfolio-building assignments." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
