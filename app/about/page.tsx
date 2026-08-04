import Image from "next/image";
import { BrainCircuit, Check, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { PageHero, QuoteBand } from "@/components/DigiJavedStyle";

export const metadata = { title: "About Us" };

const different = [
  ["Product-Minded Learning", "We treat education like a premium software product - sleek, intuitive and designed for immediate utility."],
  ["Zero Fluff, High Impact", "Every module is built around solving a concrete operational, creative or career hurdle."],
  ["Ethics at the Core", "As AI reshapes society, we champion responsible usage, data privacy and ethical implementation above all else."]
];

const values = ["Integrity", "Practical Learning", "Innovation", "Continuous Improvement", "Ethical AI", "Lifelong Learning", "Community Growth"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About DigiSparkX" title="Redefining how the world learns AI." text="A practical AI learning and business growth platform led by CEO Mohammed Javed." />

      <section className="section about-story-section">
        <div className="shell about-story-grid">
          <div className="about-story-title">
            <span className="eyebrow pink">The story behind the brand</span>
            <h2>Built for an AI-driven future, not an outdated syllabus.</h2>
            <div className="about-stamp"><b>AI</b><span>Practical learning</span></div>
          </div>
          <div className="about-rich-copy">
            <p>Traditional education is built for an industrial past, not an AI-driven future. While legacy institutes often focus on outdated syllabi and empty placement promises, the real world demands agility, practical execution and problem-solving.</p>
            <p>DigiSparkX was founded to bridge this gap. We stripped away the jargon to build a modern, SaaS-grade learning ecosystem where anyone - from a college student to a legacy business owner - can master AI without a computer science degree.</p>
            <p>Our focus is simple: help people learn useful AI skills, apply them on real problems, build confidence and create meaningful opportunities through freelancing, employment, entrepreneurship, business growth or digital products.</p>
          </div>
        </div>
      </section>

      <section className="section dark-section about-capabilities">
        <div className="shell split">
          <div><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Modern AI learning team" width={1200} height={900} /></div>
          <div>
            <span className="eyebrow yellow">Why we are different</span>
            <h2>Education designed like a premium digital product.</h2>
            <div className="feature-list">
              {different.map(([title, text]) => (
                <div key={title}><Sparkles /><span><b>{title}</b>{text}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell mission-grid">
          <article>
            <span className="eyebrow pink">Leadership</span>
            <h2>CEO Mohammed Javed</h2>
            <p>DigiSparkX is led by Mohammed Javed with a philosophy rooted in practical learning, honesty, continuous improvement and real-world execution.</p>
            <p>With decades of professional exposure across business, computers, design, publishing workflows and client service, he believes that technology becomes powerful only when people learn how to apply it with confidence, discipline and ethics.</p>
            <p>His vision for DigiSparkX is to make Artificial Intelligence simple, useful and opportunity-focused for students, professionals, entrepreneurs, teachers and growing businesses.</p>
            <p>Directors: Junaid Javed, Iqra Javed and Fatima Javed.</p>
            <div className="feature-list">
              <div><UserRound /><span><b>People-first learning</b>Built for students, professionals, educators and business owners.</span></div>
            </div>
          </article>
          <article>
            <span className="eyebrow yellow">Philosophy</span>
            <h2>AI is an amplifier of human capability.</h2>
            <p>AI is not a threat to human capability; it is an amplifier. Our goal is to democratize this amplifier so that individual initiative matters more than institutional privilege.</p>
            <div className="feature-list">
              <div><BrainCircuit /><span><b>Practical AI</b>Clear workflows, guided projects and real business use cases.</span></div>
              <div><ShieldCheck /><span><b>Responsible use</b>Ethical AI, data privacy and safe implementation at the core.</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div>
            <span className="eyebrow pink">Founder vision</span>
            <h2>Mohammed Javed — guiding DigiSparkX with experience, trust and innovation.</h2>
            <p>From practical computer learning to modern AI workflows, Mohammed Javed&apos;s journey reflects the DigiSparkX promise: learn continuously, solve real problems and help others grow with technology.</p>
            <p>Under his leadership, DigiSparkX focuses on applied AI education, ethical digital transformation, practical mentorship and business growth systems that can be understood and used by real people.</p>
          </div>
          <div className="ceo-showcase">
            <Image src="/brand/mohammed-javed-ceo-3d.png" alt="Mohammed Javed CEO of DigiSparkX" width={1122} height={1402} />
            <div className="ceo-badge"><b>Mohd. Javed</b><span>CEO • DigiSparkX</span></div>
          </div>
        </div>
      </section>

      <section className="section story-band">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow">Our values</span><h2>The principles behind DigiSparkX.</h2></div></div>
          <div className="why-grid">{values.map((item) => <div key={item}><Check size={18} strokeWidth={3} /><span>{item}</span></div>)}</div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
