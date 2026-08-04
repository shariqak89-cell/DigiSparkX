"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bot, BrainCircuit, BriefcaseBusiness, Check, Code2, Film,
  Globe2, Image as ImageIcon, LineChart, Mail, MapPin, Megaphone,
  Palette, Phone, Quote, Search, Send, ShoppingCart, Sparkles,
  Store, Workflow, X
} from "lucide-react";
import { company } from "@/data/content";

export const whatsapp = `https://wa.me/919899284296?text=${encodeURIComponent("Hello DigiSparkX, I would like a digital project quote.")}`;

type DigiService = [string, string, string, React.ComponentType<{ size?: number }>];

export const digiServices: DigiService[] = [
  ["Website Development", "Modern responsive websites built for trust, speed and lead generation.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", Code2],
  ["Web Applications", "Dashboards, portals and business tools with secure professional workflows.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", Workflow],
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
  ["Website Maintenance", "Updates, backups, speed checks, care plans and ongoing improvements.", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", Workflow],
  ["AI Chatbots", "Website, WhatsApp and support chatbots for smarter lead handling.", "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80", Bot],
  ["Business CRM Setup", "Lead pipelines, customer records, reminders and sales tracking.", "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80", Workflow],
  ["ERP Systems", "Inventory, billing, operations and reporting systems for growing teams.", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", BriefcaseBusiness],
  ["Portfolio Websites", "Personal, creator and professional portfolio sites with premium presentation.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80", Code2],
  ["Landing Pages", "High-converting campaign pages for ads, products and launches.", "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80", LineChart],
  ["Social Media Management", "Monthly content plans, captions, designs, reels ideas and posting support.", "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80", Megaphone],
  ["Reels & Shorts Editing", "Short-form videos for Instagram, YouTube Shorts and Facebook reels.", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80", Film],
  ["YouTube Channel Setup", "Channel branding, thumbnails, SEO descriptions and upload workflow.", "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80", Film],
  ["Thumbnail Design", "Clickable YouTube and social thumbnails with clear visual hierarchy.", "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80", ImageIcon],
  ["Canva Training", "Practical Canva design lessons for students, creators and business owners.", "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80", Palette],
  ["Photoshop Training", "Photo editing, poster design, social creatives and professional workflows.", "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80", Palette],
  ["Illustrator Training", "Vector artwork, logos, icons, patterns and brand assets.", "https://images.unsplash.com/photo-1626785774625-0b1c2c4c4c2b?auto=format&fit=crop&w=900&q=80", Palette],
  ["WordPress Websites", "WordPress business websites, blogs, landing pages and maintenance.", "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80", Globe2],
  ["No-Code Automation", "Zapier-style workflows, forms, sheets, emails and task automation.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80", Workflow],
  ["AI Image Generation", "Creative AI visuals for ads, posts, concepts and product campaigns.", "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["AI Video Creation", "AI-assisted videos, scripts, scenes and digital campaign content.", "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80", Film],
  ["Product Photography", "Styled product images, digital enhancement and e-commerce presentation.", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80", ImageIcon],
  ["Business Profile Design", "Professional company profiles, pitch decks and presentation layouts.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80", BriefcaseBusiness],
  ["Brochure & Catalogue Design", "Digital brochures, catalogues and marketing documents for brands.", "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80", ImageIcon],
  ["Banner & Poster Design", "Event, offer, outdoor, social and promotional banner designs.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", ImageIcon],
  ["Book Cover Design", "Professional covers for books, eBooks, course material and reports.", "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", Palette],
  ["eBook Formatting", "Clean eBook layout, formatting, cover-ready structure and publishing support.", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80", Globe2],
  ["Course Video Production", "Course planning, recording support, editing and learning content packaging.", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80", Film],
  ["Online Course Setup", "Course pages, LMS setup, payment-ready flow and student onboarding.", "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80", Globe2],
  ["Occasion Song Creation", "Custom songs for weddings, birthdays, anniversaries and special events.", "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Wedding Digital Invites", "Animated invites, e-cards, videos and social-ready invitation designs.", "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Birthday Creative Packages", "Birthday posters, invitation videos, photo edits and celebration creatives.", "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Event Branding", "Complete branding for seminars, workshops, launches and celebrations.", "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80", Megaphone],
  ["Email Marketing", "Newsletter design, campaign setup, automation and audience communication.", "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80", Mail],
  ["Analytics & Tracking", "Google Analytics, pixels, conversion tracking and clear performance reports.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", LineChart],
  ["Cybersecurity Basics", "Security checks, SSL, safe forms, backups and website hardening guidance.", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80", Workflow],
  ["Domain Email Setup", "Professional business email, DNS records and deliverability setup.", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80", Mail],
  ["Startup Launch Kit", "Logo, website, landing page, pitch profile and launch creatives in one package.", "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Much More Digital Solutions", "Tell us your idea; we can plan, design, develop, market, automate and improve it.", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", Sparkles]
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
      {!compact && <label>Organization / Company<input name="Organization / Company" placeholder="Company, school, college or individual" /></label>}
      <label>Area of interest
        <select name="Service" required defaultValue="">
          <option value="" disabled>Select an area</option>
          <option>AI Foundation Program</option>
          <option>Corporate AI Training</option>
          <option>AI for Schools & Colleges</option>
          <option>Digital Products</option>
          <option>General Inquiry</option>
          {digiServices.map(([title]) => <option key={title}>{title}</option>)}
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
