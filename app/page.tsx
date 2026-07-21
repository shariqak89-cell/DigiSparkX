import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { DigiContactForm, QuoteBand, ServiceGrid, TrustStrip, digiServices, whatsapp } from "@/components/DigiJavedStyle";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="cmyk-line" />
            <span className="eyebrow">Delhi&apos;s digital growth partner</span>
            <h1>Premium websites.<br />Powerful marketing.<br /><em>Smart AI automation.</em></h1>
            <p>From websites and e-commerce to digital marketing, branding, AI automation and software solutions — DigiSparkX helps businesses look sharp, communicate clearly and grow smarter.</p>
            <div className="hero-actions">
              <a className="button green" href={whatsapp} target="_blank" rel="noreferrer">Get a Quote on WhatsApp <ArrowRight size={17} /></a>
              <a className="button outline" href="tel:+919899284296"><Phone size={17} /> Call now</a>
            </div>
          </div>
          <div className="hero-media">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="DigiSparkX digital strategy workspace" width={1200} height={800} priority />
            <div className="image-note"><span>Design</span><span>Marketing</span><span>AI</span></div>
          </div>
        </div>
      </section>
      <TrustStrip />
      <section className="section services-home">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow pink">Our services</span><h2>Complete digital solutions</h2><p>Everything your business needs, under one roof.</p></div>
            <Link className="text-link" href="/services">View all services <ArrowRight size={17} /></Link>
          </div>
          <ServiceGrid limit={8} />
        </div>
      </section>
      <section className="section story-band">
        <div className="shell story-grid">
          <div className="story-image"><Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="AI automation and digital systems" width={1200} height={900} /></div>
          <div>
            <span className="eyebrow">Built one project at a time</span>
            <h2>From a small vision to a complete digital partner.</h2>
            <p>DigiSparkX began with a simple commitment: help businesses grow smarter through practical digital solutions. Today that same spirit connects websites, branding, marketing, AI automation, software and e-commerce under one roof.</p>
            <p>We also share real professional knowledge with students and learners, helping them understand how actual client work moves from idea to finished digital result.</p>
            <Link className="button dark" href="/about">Read our story <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="shell">
          <div className="section-head centered"><div><span className="eyebrow pink">How it works</span><h2>Clear from brief to launch</h2></div></div>
          <div className="process-grid">
            {[["01", "Tell us what you need"], ["02", "Approve plan & estimate"], ["03", "We design, build and test"], ["04", "Launch and support"]].map(([n, t]) => <div key={n}><b>{n}</b><h3>{t}</h3></div>)}
          </div>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
