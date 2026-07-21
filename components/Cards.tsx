import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function ServiceCard({ service }: { service: any }) {
  return (
    <article id={service.slug} className="premium-card reveal flex h-full flex-col p-6">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">{service.category}</p>
      <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
      <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">{service.description}</p>
      <div className="mt-5 grid gap-2">
        {service.features.slice(0, 4).map((feature: string) => (
          <span key={feature} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="text-orange-500" size={17} /> {feature}</span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="font-black">{formatCurrency(service.priceFrom)} onwards</span>
        <Link href={`/contact?service=${service.slug}`} className="btn btn-primary text-sm">Start <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
}

export function CourseCard({ course }: { course: any }) {
  return (
    <article id={course.slug} className="premium-card p-6">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-500">{course.category}</p>
      <h3 className="mt-3 text-2xl font-black">{course.title}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{course.description}</p>
      <div className="mt-5 grid gap-2 text-sm font-semibold">
        <span>Duration: {course.duration}</span>
        <span>Difficulty: {course.difficulty}</span>
        <span>Mentor: {course.mentor}</span>
        <span>Certificate: {course.certificate ? "Included" : "No"}</span>
      </div>
      <Link href={`/contact?course=${course.slug}`} className="btn btn-primary mt-6 w-full">Enroll Now</Link>
    </article>
  );
}

export function PortfolioCard({ item }: { item: any }) {
  return (
    <article className="premium-card overflow-hidden">
      {item.image && <Image src={item.image} alt={item.title} width={900} height={580} className="h-60 w-full object-cover" />}
      <div className="p-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">{item.category}</p>
        <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tech: string) => <span key={tech} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-bold dark:bg-white/10">{tech}</span>)}
        </div>
        <p className="mt-4 text-sm italic text-slate-600 dark:text-slate-300">“{item.review}”</p>
        <div className="mt-5 flex gap-3">
          <Link href={item.liveUrl || "#"} className="btn btn-primary text-sm">Live Preview</Link>
          <Link href={item.githubUrl || "#"} className="btn btn-secondary text-sm">GitHub</Link>
        </div>
      </div>
    </article>
  );
}

export function TestimonialCard({ item }: { item: any }) {
  return (
    <article className="premium-card p-6">
      <div className="flex gap-1 text-orange-500">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
      <p className="mt-4 text-slate-700 dark:text-slate-200">“{item.text}”</p>
      <div className="mt-5">
        <strong>{item.name}</strong>
        <p className="text-sm text-slate-500">{item.role}</p>
      </div>
    </article>
  );
}
