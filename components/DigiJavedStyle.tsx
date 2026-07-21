"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bot, BrainCircuit, BriefcaseBusiness, Check, Code2, Film,
  Globe2, Image as ImageIcon, LineChart, Mail, MapPin, Megaphone,
  Palette, Phone, Quote, Search, Send, ShoppingCart, Sparkles,
  Store, Workflow, X
} from "lucide-react";
import { company, services } from "@/data/content";

export const whatsapp = `https://wa.me/919899284296?text=${encodeURIComponent("Hello DigiSparkX, I would like a digital project quote.")}`;

type DigiService = [string, string, string, React.ComponentType<{ size?: number }>];

export const digiServices: DigiService[] = [
  ["Website Development", "Modern responsive websites built for trust, speed and lead generation.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", Code2],
  ["Web Applications", "Dashboards, portals and business tools with secure backend workflows.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", Workflow],
  ["E-commerce Solutions", "Online stores, catalogues and conversion-ready shopping experiences.", "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80", ShoppingCart],
  ["UI/UX Design", "Clean product interfaces, user flows and premium web experiences.", "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80", Palette],
  ["Graphic Design", "Social creatives, business profiles, brochures and brand visuals.", "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80", ImageIcon],
  ["Logo & Branding", "Identity systems, color palettes and professional brand guidelines.", "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Digital Marketing", "Content, campaigns, funnels and growth plans that connect with customers.", "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80", Megaphone],
  ["SEO", "Technical SEO, on-page optimization and structured search growth.", "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=900&q=80", Search],
  ["Google & Facebook Ads", "Performance campaigns with tracking, creatives and optimization.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", LineChart],
  ["AI Automation", "AI workflows, smart forms, lead routing and business automation.", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80", BrainCircuit],
  ["ChatGPT & AI Tools", "Practical AI systems for teams, content, support and productivity.", "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80", Bot],
  ["Software Development", "Custom software, CRM, ERP and internal operation systems.", "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80", BriefcaseBusiness],
  ["Mobile Apps", "App experiences for business, education, commerce and operations.", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80", Store],
  ["Video Editing", "Reels, ads, course videos and brand storytelling for digital platforms.", "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80", Film],
  ["Hosting & Domain", "Domain setup, hosting guidance, SSL, maintenance and support.", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80", Globe2],
  ["Website Maintenance", "Updates, backups, speed checks, care plans and ongoing improvements.", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", Workflow]
];

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="shell">
        <div className="cmyk-line" />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="shell trust-grid">
        {["Professional experience", "Design-to-digital expertise", "Quality checked", "On-time support"].map((x) => (
          <div key={x}><Check size={18} strokeWidth={3} /><span>{x}</span></div>
        ))}
      </div>
    </div>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? digiServices.slice(0, limit) : digiServices;
  return (
    <div className="service-grid">
      {list.map(([name, desc, image, Icon], i) => (
        <article className="service-card reveal" key={String(name)} style={{ "--delay": `${(i % 4) * 70}ms` } as React.CSSProperties}>
          <div className="service-image">
            <Image src={String(image)} alt={`${name} by DigiSparkX`} width={800} height={520} loading="lazy" />
          </div>
          <div className="service-copy">
            <Icon size={23} />
            <h3>{name}</h3>
            <p>{desc}</p>
            <Link href="/contact">Ask for a quote <ArrowRight size={16} /></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function DigiContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "quote-form compact" : "quote-form"} action={`https://formsubmit.co/${company.email}`} method="POST" encType="multipart/form-data">
      <input type="hidden" name="_subject" value="New DigiSparkX website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_autoresponse" value="Thank you for contacting DigiSparkX. We have received your enquiry and will get back to you soon." />
      <label>Full name<input name="Name" required placeholder="Your name" /></label>
      <label>Phone number<input name="Phone" required inputMode="tel" placeholder="+91" /></label>
      {!compact && <label>Email<input type="email" name="Email" required placeholder="you@example.com" /></label>}
      <label>What do you need?
        <select name="Service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.slice(0, 20).map((s) => <option key={s.slug}>{s.title}</option>)}
        </select>
      </label>
      {!compact && (
        <>
          <label>Project scale<input name="Project scale" placeholder="e.g. 5 pages / CRM / campaign" /></label>
          <label>Budget<select name="Budget"><option>Not sure — please advise</option><option>Below ₹15,000</option><option>₹15,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000+</option></select></label>
          <label>Required by<input type="date" name="Deadline" /></label>
          <label>Reference / file link<input name="Reference link" placeholder="Drive / Cloudinary / website link" /></label>
          <label className="full">Project details<textarea name="Project details" required placeholder="Tell us what you want designed, developed, marketed or automated…" /></label>
          <label className="full file">Attach file<input type="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.zip" /></label>
        </>
      )}
      <button className="button dark full" type="submit">Send enquiry <Send size={17} /></button>
    </form>
  );
}

export function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="shell quote-grid">
        <div>
          <Quote />
          <span className="eyebrow yellow">Have a project in mind?</span>
          <h2>Let’s build something your business can proudly share.</h2>
          <p>Send the details now or speak directly with DigiSparkX.</p>
          <div className="hero-actions">
            <Link className="button light" href="/contact">Start your enquiry <ArrowRight size={17} /></Link>
            <a className="button ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
          </div>
        </div>
        <DigiContactForm compact />
      </div>
    </section>
  );
}

export function GalleryGrid() {
  const gallery = digiServices.slice(0, 12).map((s) => [String(s[0]), String(s[2])] as [string, string]);
  return (
    <div className="gallery-grid">
      {gallery.map(([name, img]) => (
        <button type="button" key={name}>
          <Image src={img} alt={name} width={900} height={650} loading="lazy" />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
}

export function ContactAside() {
  return (
    <aside className="contact-aside">
      <div><Phone /><h3>Call or WhatsApp</h3><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></div>
      <div><Mail /><h3>Email</h3><a href={`mailto:${company.email}`}>{company.email}</a></div>
      <div><MapPin /><h3>Company</h3><p>DigiSparkX<br />CEO: Mohammed Javed<br />Delhi, India</p></div>
      <iframe title="DigiSparkX location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} />
    </aside>
  );
}

export function FloatingWhatsApp() {
  return <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with DigiSparkX on WhatsApp"><Phone /></a>;
}

export function CursorFX() {
  return <><span className="cursor-dot" /><span className="cursor-ring" /></>;
}
