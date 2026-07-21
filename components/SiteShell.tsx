"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { company, navItems } from "@/data/content";
import { CursorFX, FloatingWhatsApp, whatsapp } from "@/components/DigiJavedStyle";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const audio = useRef<AudioContext | null>(null);

  useEffect(() => {
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    tick();
    return () => window.removeEventListener("mousemove", move);
  }, []);

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
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(".button, button, .phone-link, .text-link")) return;
      magicAt(event.clientX, event.clientY);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  function magicAt(cx: number, cy: number) {
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
    <div>
      <CursorFX />
      <div className="topbar">
        <div className="shell topbar-inner">
          <span><MapPin size={15} /> DigiSparkX, Delhi, India</span>
          <span><Mail size={15} /> {company.email}</span>
        </div>
      </div>
      <header className="header">
        <div className="shell nav-wrap">
          <Link href="/" className="logo-link" aria-label="DigiSparkX home">
            <Image src={company.logo} alt="DigiSparkX" width={96} height={86} priority />
            <span className="logo-word"><b>DigiSparkX</b><span>Grow Smarter</span></span>
          </Link>
          <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <a className="mobile-call" href={`tel:${company.phone.replace(/\s/g, "")}`}><Phone /> {company.phone}</a>
          </nav>
          <div className="nav-actions">
            <a className="phone-link" href={`tel:${company.phone.replace(/\s/g, "")}`}><Phone fill="currentColor" /><span>{company.phone}</span></a>
            <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? "Light Mode" : "Night Mode"}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="button green small" href={whatsapp} target="_blank" rel="noreferrer">Get a Quote</a>
            <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src={company.logo} alt="DigiSparkX" width={170} height={125} />
          <p>Professional digital services, practical automation and growth-focused creative solutions for modern businesses.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">Our story</Link>
          <Link href="/services">All services</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>DigiSparkX<br />Delhi, India<br />CEO: Mohammed Javed</p>
        </div>
        <div>
          <h3>Working Hours</h3>
          <p>Monday–Saturday<br />10:00 AM–7:30 PM</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="copyright"><div className="shell">© {new Date().getFullYear()} DigiSparkX. Crafted for digital growth, AI and business automation.</div></div>
    </footer>
  );
}
