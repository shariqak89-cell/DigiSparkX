import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, GraduationCap, Play, Sparkles } from "lucide-react";
import { company, courses, portfolioItems, serviceHighlights, services, stats, testimonials } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { CourseCard, PortfolioCard, ServiceCard, TestimonialCard } from "@/components/Cards";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <div className="hero-orb left-[8%] top-24 h-32 w-32 bg-orange-400/40" />
        <div className="hero-orb right-[10%] top-40 h-44 w-44 bg-blue-500/35" style={{ animationDelay: "1.2s" }} />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal">
            <span className="eyebrow"><Sparkles size={16} /> Digital Services + Academy</span>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] md:text-7xl">
              Build a brand that feels <span className="gradient-text">premium, fast and future-ready.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              DigiSparkX helps businesses launch powerful websites, software, branding, marketing and AI automation — while training learners with practical, career-ready digital skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Hire DigiSparkX <ArrowRight size={18} /></Link>
              <Link href="/academy" className="btn btn-secondary">Explore Academy <GraduationCap size={18} /></Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-3xl p-4">
                  <strong className="text-3xl font-black">{stat.value}</strong>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="premium-card relative p-5">
            <div className="absolute -right-6 -top-6 rounded-3xl bg-orange-500 px-5 py-3 font-black text-white shadow-glow">Live Growth Lab</div>
            <div className="rounded-[24px] bg-gradient-to-br from-blue-900 via-blue-700 to-orange-500 p-1">
              <div className="rounded-[22px] bg-white/10 p-7 text-white backdrop-blur-xl">
                <Image src={company.logo} alt="DigiSparkX logo" width={170} height={170} className="mx-auto rounded-[34px] bg-white/90 object-cover p-2" priority />
                <div className="mt-7 grid gap-4">
                  {["Websites & Web Apps", "Branding & Marketing", "AI + Business Automation", "Professional Training"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/12 p-4">
                      <CheckCircle2 className="text-orange-300" /> <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Trusted By" title="Built for founders, students, creators and growing businesses." text="From first landing page to full automation dashboard, our team connects strategy, design, engineering and learning." />
          <div className="grid-auto">
            {["Startups", "Local Businesses", "Institutes", "Creators", "E-commerce", "Service Brands"].map((logo) => (
              <div key={logo} className="glass rounded-3xl p-6 text-center text-xl font-black">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Why Choose DigiSparkX" title="One company, two powerful growth engines." />
          <div className="grid-auto">
            {serviceHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-7">
                  <Icon className="text-orange-500" size={34} />
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Featured Services" title="Premium digital services clients can hire us for." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <div className="mt-8 text-center"><Link href="/services" className="btn btn-secondary">View All Services</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Course Highlights" title="Learn professional skills with practical project experience." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Technology Videos" title="A quick glimpse of the DigiSparkX universe." text="Royalty-free stock video sources are referenced in the documentation; these cards are ready to connect with local or CDN video assets." />
          <div className="grid gap-5 lg:grid-cols-2">
            <VideoPanel title="Digital Services Studio" icon={<BrainCircuit />} src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" />
            <VideoPanel title="Academy Learning Lab" icon={<Play />} src="https://videos.pexels.com/video-files/5900947/5900947-hd_1920_1080_25fps.mp4" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Portfolio" title="Selected work concepts and production-ready case structures." />
          <div className="grid gap-5 lg:grid-cols-2">
            {portfolioItems.slice(0, 2).map((item) => <PortfolioCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Testimonials" title="A company experience built on clarity, quality and trust." />
          <div className="grid-auto">
            {testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="premium-card overflow-hidden p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <span className="eyebrow">Call to Action</span>
                <h2 className="mt-5 text-4xl font-black md:text-5xl">Ready to grow smarter and go digital?</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Share your goal. DigiSparkX will help you choose the right path: service, training or a complete digital growth system.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function VideoPanel({ title, src, icon }: { title: string; src: string; icon: React.ReactNode }) {
  return (
    <div className="premium-card overflow-hidden">
      <video className="h-[320px] w-full object-cover" autoPlay muted loop playsInline preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
      <div className="flex items-center gap-3 p-5">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-white">{icon}</span>
        <div>
          <h3 className="text-xl font-black">{title}</h3>
          <p className="text-sm text-slate-500">10-second-ready showcase module</p>
        </div>
      </div>
    </div>
  );
}
