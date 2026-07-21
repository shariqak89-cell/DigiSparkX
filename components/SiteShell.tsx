"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Menu, Moon, Search, Send, Sun, X } from "lucide-react";
import { allLinks, company, courses, navItems, services } from "@/data/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [popup, setPopup] = useState(false);
  const [query, setQuery] = useState("");
  const audio = useRef<AudioContext | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("digisparkx-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("digisparkx-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (localStorage.getItem("digisparkx-popup-seen") === "yes") return;
    const timer = window.setTimeout(() => setPopup(true), 10 * 60 * 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return [
      ...services.map((item) => ({ label: item.title, href: `/services#${item.slug}`, type: "Service" })),
      ...courses.map((item) => ({ label: item.title, href: `/academy#${item.slug}`, type: "Course" })),
      ...allLinks.map((item) => ({ ...item, type: "Page" }))
    ].filter((item) => item.label.toLowerCase().includes(q)).slice(0, 7);
  }, [query]);

  function magicClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.currentTarget.getBoundingClientRect();
    const cx = target.left + target.width / 2;
    const cy = target.top + target.height / 2;

    for (let i = 0; i < 12; i += 1) {
      const node = document.createElement("span");
      node.className = "particle";
      node.style.left = `${cx}px`;
      node.style.top = `${cy}px`;
      node.style.setProperty("--x", `${Math.cos(i) * (42 + i * 3)}px`);
      node.style.setProperty("--y", `${Math.sin(i) * (42 + i * 3)}px`);
      document.body.appendChild(node);
      window.setTimeout(() => node.remove(), 800);
    }

    try {
      audio.current ??= new AudioContext();
      const osc = audio.current.createOscillator();
      const gain = audio.current.createGain();
      osc.frequency.value = 560;
      gain.gain.value = 0.018;
      osc.connect(gain);
      gain.connect(audio.current.destination);
      osc.start();
      osc.stop(audio.current.currentTime + 0.055);
    } catch {
      // Silent fallback if browser blocks sound.
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl dark:bg-[#050915]/70">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="DigiSparkX Home">
            <Image src={company.logo} alt="DigiSparkX logo" width={54} height={54} className="rounded-2xl object-cover shadow-blueglow" priority />
            <div className="leading-tight">
              <strong className="text-lg">{company.name}</strong>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">Grow Smarter</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10">
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10">
                More <ChevronDown size={16} />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 rounded-[28px] border border-slate-200 bg-white p-5 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 dark:border-white/10 dark:bg-[#071126]">
                <div className="grid grid-cols-3 gap-4">
                  <MegaGroup title="Company" links={allLinks.filter((x) => ["/about", "/projects", "/testimonials", "/careers", "/faq"].includes(x.href))} />
                  <MegaGroup title="Services" links={services.slice(0, 8).map((s) => ({ label: s.title, href: `/services#${s.slug}` }))} />
                  <MegaGroup title="Academy" links={courses.slice(0, 8).map((c) => ({ label: c.title, href: `/academy#${c.slug}` }))} />
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <label className="sr-only" htmlFor="site-search">Search DigiSparkX</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} className="field h-11 w-48 rounded-full pl-9 text-sm" placeholder="Search" />
              {searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-white/10 dark:bg-[#071126]">
                  {searchResults.map((item) => (
                    <Link key={`${item.type}-${item.href}`} href={item.href} className="block rounded-2xl px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10" onClick={() => setQuery("")}>
                      <span className="font-bold">{item.label}</span>
                      <span className="ml-2 text-xs text-slate-500">{item.type}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setDark((value) => !value)} className="btn btn-secondary h-11 px-4 text-sm" aria-label={dark ? "Light Mode" : "Dark Mode"}>
              {dark ? <Sun size={16} /> : <Moon size={16} />} {dark ? "Light Mode" : "Dark Mode"}
            </button>
            <Link href="/contact" onClick={magicClick} className="btn btn-primary h-11 px-5 text-sm">Get Proposal</Link>
          </div>

          <button className="btn btn-secondary lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="ml-auto h-full w-[88%] max-w-sm bg-white p-6 shadow-2xl dark:bg-[#071126]" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
              <div className="mb-6 flex items-center justify-between">
                <Image src={company.logo} alt="DigiSparkX logo" width={52} height={52} className="rounded-2xl" />
                <button className="btn btn-secondary" onClick={() => setMobile(false)} aria-label="Close menu"><X /></button>
              </div>
              <div className="grid gap-2">
                {allLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-bold hover:bg-slate-100 dark:hover:bg-white/10" onClick={() => setMobile(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <button onClick={() => setDark((value) => !value)} className="btn btn-secondary mt-5 w-full">
                {dark ? <Sun size={16} /> : <Moon size={16} />} {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">{children}</main>

      <footer className="border-t border-slate-200/70 py-14 dark:border-white/10">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image src={company.logo} alt="DigiSparkX logo" width={76} height={76} className="mb-4 rounded-3xl shadow-glow" />
            <h2 className="text-2xl font-black">{company.name}</h2>
            <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">A digital services and academy company helping clients build, brand, automate and grow while training the next generation of skilled professionals.</p>
            <div className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-2"><Mail size={16} /> {company.email}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> {company.address}</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <FooterGroup title="Quick Links" links={allLinks.slice(0, 6)} />
            <FooterGroup title="Services" links={services.slice(0, 6).map((s) => ({ label: s.title, href: `/services#${s.slug}` }))} />
            <FooterGroup title="Courses" links={courses.slice(0, 6).map((c) => ({ label: c.title, href: `/academy#${c.slug}` }))} />
          </div>
        </div>
        <div className="container mt-10 grid gap-5 rounded-[28px] border border-slate-200 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5 lg:grid-cols-2">
          <form className="flex flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
            <input className="field" type="email" name="email" placeholder="Enter email for newsletter" aria-label="Newsletter email" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          <iframe title="DigiSparkX Google Map" className="h-44 w-full rounded-3xl border-0" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} />
        </div>
        <div className="container mt-8 flex flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} DigiSparkX. All rights reserved.</p>
          <p><Link href="/privacy-policy">Privacy</Link> · <Link href="/terms-and-conditions">Terms</Link> · <Link href="/refund-policy">Refund</Link></p>
        </div>
      </footer>

      <AnimatePresence>
        {popup && <PopupLead onClose={() => { localStorage.setItem("digisparkx-popup-seen", "yes"); setPopup(false); }} />}
      </AnimatePresence>
    </>
  );
}

function MegaGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{title}</h3>
      <div className="grid gap-1">
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 font-black">{title}</h3>
      <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
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
      window.setTimeout(onClose, 1500);
    }
  }

  return (
    <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/55 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="premium-card w-full max-w-xl p-6" initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">Need a digital partner?</span>
            <h2 className="mt-3 text-3xl font-black">Tell us what you want to build.</h2>
          </div>
          <button className="btn btn-secondary" onClick={onClose} aria-label="Close popup"><X /></button>
        </div>
        {sent ? (
          <div className="rounded-3xl bg-emerald-500/15 p-5 font-bold text-emerald-700 dark:text-emerald-200">Thank you. DigiSparkX will contact you soon.</div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="field" name="name" placeholder="Name" required />
              <input className="field" name="phone" placeholder="Phone" required />
              <input className="field" name="email" type="email" placeholder="Email" required />
              <select className="field" name="service" defaultValue="">
                <option value="" disabled>Interested Service</option>
                {services.slice(0, 10).map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
            </div>
            <textarea className="field min-h-28" name="message" placeholder="Message" />
            <button className="btn btn-primary" type="submit"><Send size={18} /> Send to DigiSparkX</button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
