"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Send, UploadCloud } from "lucide-react";
import { services } from "@/data/content";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="premium-card grid gap-4 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm font-bold">Name</span>
          <input className="field" name="name" required placeholder="Your full name" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Email</span>
          <input className="field" name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Phone</span>
          <input className="field" name="phone" placeholder="+91..." />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Subject</span>
          <input className="field" name="subject" required placeholder="Project / course enquiry" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Service</span>
          <select className="field" name="service" defaultValue={searchParams.get("service") || searchParams.get("course") || ""}>
            <option value="">Select service/course</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
          </select>
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Budget</span>
          <select className="field" name="budget" defaultValue="">
            <option value="">Select budget</option>
            <option>Below ₹15,000</option>
            <option>₹15,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option>
            <option>₹1,00,000+</option>
            <option>Course enquiry</option>
          </select>
        </label>
      </div>
      <label>
        <span className="mb-2 block text-sm font-bold">Message</span>
        <textarea className="field min-h-40" name="message" required placeholder="Tell us what you want to build, learn or improve." />
      </label>
      <label>
        <span className="mb-2 block text-sm font-bold">Attachment URL</span>
        <div className="relative">
          <UploadCloud className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input className="field pl-11" name="attachment" placeholder="Paste Google Drive / Cloudinary / file link" />
        </div>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        <Send size={18} /> {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p className="rounded-2xl bg-emerald-500/15 p-4 font-bold text-emerald-700 dark:text-emerald-200">Thank you. Your enquiry has been sent and saved.</p>}
      {status === "error" && <p className="rounded-2xl bg-red-500/15 p-4 font-bold text-red-700 dark:text-red-200">Something went wrong. Please try again or email DigiSparkX directly.</p>}
    </form>
  );
}
