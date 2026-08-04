import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, PlayCircle } from "lucide-react";
import { QuoteBand, ServiceGrid, TrustStrip, whatsapp } from "@/components/DigiJavedStyle";

const audiences = [
  ["Students", "Build future-ready AI skills, improve productivity and prepare for emerging careers."],
  ["Professionals", "Work smarter, automate repetitive tasks and increase efficiency using AI."],
  ["Entrepreneurs", "Use AI to improve marketing, customer engagement, content creation and business operations."],
  ["Teachers & Educators", "Discover practical ways to integrate AI into teaching and learning."],
  ["Content Creators", "Create better content faster while maintaining quality, creativity and consistency."],
  ["Small Businesses", "Use affordable AI solutions to save time, reduce costs and improve growth."]
];

const learn = [
  "Artificial Intelligence Fundamentals",
  "Prompt Engineering",
  "AI Content Creation",
  "AI for Business",
  "AI Productivity",
  "Digital Marketing with AI",
  "Automation Workflows",
  "Personal Branding",
  "Website and Content Strategy",
  "Ethical and Responsible AI"
];

const approach = [
  ["01", "Learn", "Understand AI concepts in simple language."],
  ["02", "Practice", "Apply your knowledge through guided projects."],
  ["03", "Build", "Create a portfolio with practical work."],
  ["04", "Grow", "Use your skills for career, business or personal projects."],
  ["05", "Earn", "Turn knowledge into opportunities through freelancing, jobs, entrepreneurship or digital products."]
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="cmyk-line" />
            <span className="eyebrow">Practical AI learning and business growth</span>
            <h1>Learn AI.<br />Build Skills.<br /><em>Create Income.</em></h1>
            <p>Practical Artificial Intelligence training for students, professionals, entrepreneurs, educators and businesses.</p>
            <p>DigiSparkX is an AI learning and business growth platform designed to help people understand, apply and benefit from Artificial Intelligence through practical, project-based learning.</p>
            <div className="hero-actions">
              <a className="button green" href={whatsapp} target="_blank" rel="noreferrer">Start Your AI Journey Today <ArrowRight size={17} /></a>
              <a className="button outline" href="tel:+919899284296"><Phone size={17} /> Call now</a>
            </div>
          </div>
          <div className="hero-media">
            <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="AI learning and technology workspace for DigiSparkX" width={1200} height={800} priority />
            <div className="image-note"><span>AI</span><span>Skills</span><span>Growth</span></div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow pink">Why DigiSparkX?</span>
              <h2>AI tools are everywhere. The real skill is knowing how to use them.</h2>
            </div>
          </div>
          <div className="info-grid">
            <article className="info-card"><h3>The context</h3><p>Artificial Intelligence is changing the way people learn, work, communicate and build businesses.</p></article>
            <article className="info-card"><h3>The problem</h3><p>The challenge is not access to AI tools. The challenge is knowing how to use them effectively.</p></article>
            <article className="info-card"><h3>The solution</h3><p>We simplify AI into practical skills anyone can learn and apply through real projects, useful workflows and measurable outcomes.</p></article>
          </div>
        </div>
      </section>

      <section className="section story-band">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow">Who we help</span><h2>Built for learners, creators and growing businesses.</h2></div>
          </div>
          <div className="audience-grid">
            {audiences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow pink">What you will learn</span><h2>Practical AI skills that create real value.</h2><p>From prompts and content to automation, business workflows and ethical AI.</p></div>
            <Link className="text-link" href="/academy">Explore programs <ArrowRight size={17} /></Link>
          </div>
          <div className="pill-list">{learn.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head centered"><div><span className="eyebrow pink">Our learning approach</span><h2>Learn by doing, then turn skills into opportunity.</h2></div></div>
          <div className="approach-grid">
            {approach.map(([n, title, text]) => <article key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell split">
          <div><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="AI business training workshop" width={1200} height={900} /></div>
          <div>
            <span className="eyebrow yellow">Mission, vision and values</span>
            <h2>The future belongs to people who know how to work with AI.</h2>
            <p><b>Mission:</b> To empower people with practical Artificial Intelligence knowledge that helps them solve problems, improve productivity, create value and build sustainable digital opportunities.</p>
            <p><b>Vision:</b> To become one of India&apos;s trusted AI learning platforms by making AI practical, accessible, ethical and useful for everyone.</p>
            <p><b>Core values:</b> Integrity, practical learning, innovation, continuous improvement, ethical AI, lifelong learning and community growth.</p>
            <Link className="button light" href="/contact">Join DigiSparkX Today <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow pink">Digital services</span><h2>Need us to build for you? We do that too.</h2><p>Websites, branding, marketing, AI automation and business systems under one roof.</p></div>
            <Link className="text-link" href="/services">View all services <ArrowRight size={17} /></Link>
          </div>
          <ServiceGrid limit={8} />
        </div>
      </section>

      <section className="section video-section">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow pink">Course videos</span><h2>Learn digital skills with real tools</h2><p>Short computer and technology clips for a modern academy-style feel.</p></div>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <video autoPlay muted loop playsInline preload="metadata"><source src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" /></video>
              <div><h3><PlayCircle size={26} /> Website Development</h3><p>Modern coding, design and web development learning.</p></div>
            </article>
            <article className="video-card">
              <video autoPlay muted loop playsInline preload="metadata"><source src="https://videos.pexels.com/video-files/4495983/4495983-hd_1920_1080_25fps.mp4" type="video/mp4" /></video>
              <div><h3><PlayCircle size={26} /> Digital Marketing & AI</h3><p>Professional skills for growth, automation and online business.</p></div>
            </article>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
