"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, Phone, Send, X } from "lucide-react";
import { company, navItems, services } from "@/data/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobile, setMobile] = useState(false);
  const [popup, setPopup] = useState(false);
  const audio = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (localStorage.getItem("digisparkx-popup-seen") === "yes") return;
    const timer = window.setTimeout(() => setPopup(true), 10 * 60 * 1000);
    return () => window.clearTimeout(timer);
  }, []);

  function magicClick(event: React.MouseEvent<HTMLElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    for (let i = 0; i < 10; i += 1) {
      const node = document.createElement("span");
      node.className = "particle";
      node.style.left = `${cx}px`;
      node.style.top = `${cy}px`;
      node.style.setProperty("--x", `${Math.cos(i) * (35 + i * 4)}px`);
      node.style.setProperty("--y", `${Math.sin(i) * (35 + i * 4)}px`);
      document.body.appendChild(node);
      window.setTimeout(() => node.remove(), 800);
    }
    try {
      audio.current ??= new AudioContext();
      const osc = audio.current.createOscillator();
      const gain = audio.current.createGain();
      osc.frequency.value = 620;
      gain.gain.value = 0.012;
      osc.connect(gain);
      gain.connect(audio.current.destination);
      osc.start();
      osc.stop(audio.current.currentTime + 0.045);
    } catch {}
  }

  return (
    <>
      <div className="topbar">
        <div className="container flex h-9 items-center justify-between gap-4 text-white/85">
          <span className="hidden items-center gap-2 sm:flex"><Mail size={14} /> {company.email}</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Delhi, India</span>
          <span className="hidden items-center gap-2 md:flex"><Phone size={14} /> {company.phone}</span>
        </div>
      </div>

      <header className="javed-header sticky top-0 z-50">
        <div className="container flex h-[92px] items-center gap-8">
          <Link href="/" className="mr-auto flex items-center gap-3" aria-label="DigiSparkX Home">
            <Image src={company.logo} alt="DigiSparkX logo" width={112} height={80} className="h-20 w-28 object-contain" priority />
            <div className="hidden leading-tight sm:block">
              <strong className="text-2xl font-black tracking-tight text-[#07295f]">{company.name}</strong>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">{company.tagline}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" onClick={magicClick} className="btn btn-primary hidden rounded-[4px] px-5 text-sm md:inline-flex">
            Start Project
          </Link>

          <button className="btn btn-secondary rounded-[4px] lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="ml-auto h-full w-[86%] max-w-sm bg-[#fffdf8] p-6 shadow-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
              <div className="mb-6 flex items-center justify-between">
                <Image src={company.logo} alt="DigiSparkX logo" width={96} height={74} className="h-16 w-24 object-contain" />
                <button className="btn btn-secondary rounded-[4px]" onClick={() => setMobile(false)} aria-label="Close menu"><X /></button>
              </div>
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="border-b border-[#d9d1c5] px-2 py-4 font-black" onClick={() => setMobile(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 w-full rounded-[4px]" onClick={() => setMobile(false)}>Start Project</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="border-t border-[#d9d1c5] bg-[#eee7dc]">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <Image src={company.logo} alt="DigiSparkX logo" width={230} height={150} className="h-32 w-56 object-contain" />
            <p className="mt-4 max-w-md leading-7 text-[#67635d]">
              DigiSparkX helps businesses grow with websites, branding, marketing, software and automation — with a practical training mindset behind every project.
            </p>
          </div>
          <FooterGroup title="Quick Links" links={navItems} />
          <FooterGroup title="Services" links={services.slice(0, 6).map((s) => ({ label: s.title, href: `/services#${s.slug}` }))} />
          <div>
            <h3 className="mb-4 text-xl font-black">Contact</h3>
            <div className="grid gap-3 text-sm leading-7 text-[#67635d]">
              <span>{company.email}</span>
              <span>{company.phone}</span>
              <span>{company.address}</span>
            </div>
            <iframe title="DigiSparkX Google Map" className="mt-5 h-44 w-full border-0 grayscale" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} />
          </div>
        </div>
        <div className="border-t border-[#d9d1c5]">
          <div className="container flex flex-col justify-between gap-3 py-5 text-xs text-[#67635d] md:flex-row">
            <p>© {new Date().getFullYear()} DigiSparkX. All rights reserved.</p>
            <p><Link href="/privacy-policy">Privacy</Link> · <Link href="/terms-and-conditions">Terms</Link> · <Link href="/refund-policy">Refund</Link></p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {popup && <PopupLead onClose={() => { localStorage.setItem("digisparkx-popup-seen", "yes"); setPopup(false); }} />}
      </AnimatePresence>
    </>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-black">{title}</h3>
      <div className="grid gap-3 text-sm font-semibold text-[#67635d]">
        {links.map((link) => <Link key={link.href + link.label} href={link.href} className="hover:text-orange-500">{link.label}</Link>)}
      </div>
    </div>
  );
}

function PopupLead({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/popup-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      setSent(true);
      localStorage.setItem("digisparkx-popup-seen", "yes");
      window.setTimeout(onClose, 1300);
    }
  }

  return (
    <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/55 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="premium-card w-full max-w-xl p-7" initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="cmyk-line mb-4" />
            <h2 className="text-3xl font-black">Need a digital project?</h2>
            <p className="mt-2 text-[#67635d]">Send enquiry to DigiSparkX.</p>
          </div>
          <button className="btn btn-secondary rounded-[4px]" onClick={onClose} aria-label="Close popup"><X /></button>
        </div>
        {sent ? (
          <div className="bg-emerald-500/15 p-5 font-bold text-emerald-700">Thank you. DigiSparkX will contact you soon.</div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="field rounded-[4px]" name="name" placeholder="Name" required />
              <input className="field rounded-[4px]" name="phone" placeholder="Phone" required />
              <input className="field rounded-[4px]" name="email" type="email" placeholder="Email" required />
              <select className="field rounded-[4px]" name="service" defaultValue="">
                <option value="" disabled>Interested Service</option>
                {services.slice(0, 8).map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
            </div>
            <textarea className="field min-h-28 rounded-[4px]" name="message" placeholder="Message" />
            <button className="btn btn-primary rounded-[4px]" type="submit"><Send size={18} /> Send</button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
