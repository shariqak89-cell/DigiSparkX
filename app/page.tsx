import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Megaphone, Palette, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { company, services, stats } from "@/data/content";

const featured = services.filter((service) =>
  ["website-development", "web-applications", "logo-branding", "digital-marketing", "ai-automation", "ecommerce-solutions", "custom-crm-erp", "hosting-domain-maintenance"].includes(service.slug)
);

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[#f7f2e9]">
        <div className="container grid min-h-[590px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="py-16 md:py-24">
            <div className="cmyk-line mb-7" />
            <p className="eyebrow text-orange-600">Digital Services Company</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(48px,6vw,78px)] font-black leading-[.95] tracking-[-.055em]">
              Grow smarter with <span className="gradient-text">premium digital solutions.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#67635d]">
              DigiSparkX builds modern websites, software, branding, marketing systems and AI automation for businesses that want a sharp professional online presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary rounded-[4px]">Start a Project <ArrowRight size={18} /></Link>
              <Link href="/services" className="btn btn-secondary rounded-[4px]">View Services</Link>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-tl-[90px] bg-[#171717] p-8 shadow-2xl">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%, #0ca7d2, transparent 26rem), radial-gradient(circle at 80% 70%, #ff7a00, transparent 24rem)" }} />
            <div className="relative z-10 grid h-full place-items-center">
              <Image src={company.logo} alt="DigiSparkX logo" width={430} height={430} className="animate-[float_7s_ease-in-out_infinite] object-contain drop-shadow-2xl" priority />
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 bg-black/75 p-4 text-center text-[11px] font-black uppercase tracking-[.14em] text-white">
              <span>Design</span>
              <span>Develop</span>
              <span>Grow</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d1c5] bg-[#fffdf8]">
        <div className="container grid min-h-24 grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-center border-r border-[#d9d1c5] px-5 py-5 last:border-r-0">
              <strong className="text-3xl font-black text-[#07295f]">{stat.value}</strong>
              <span className="text-sm font-bold text-[#67635d]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-orange-600">Our Services</p>
              <h2 className="mt-4 max-w-3xl text-[clamp(38px,4.6vw,62px)] font-black leading-[1.02] tracking-[-.045em]">Everything your business needs to go digital.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 border-b border-[#171717] pb-1 font-black">All Services <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((service, index) => (
              <article key={service.slug} id={service.slug} className="group border-t border-[#d9d1c5] pt-5 transition hover:-translate-y-1">
                <div className="mb-5 grid h-52 place-items-center overflow-hidden bg-[#eee7dc]">
                  <ServiceVisual index={index} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-[#67635d]">{service.description}</p>
                <Link href={`/contact?service=${service.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-orange-600">Enquire Now <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] py-24">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden rounded-tr-[80px] bg-[#171717] p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,41,95,.85),rgba(255,122,0,.65))]" />
            <div className="relative z-10 grid h-full place-items-center text-center text-white">
              <div>
                <Sparkles className="mx-auto mb-5 text-orange-300" size={52} />
                <h2 className="text-5xl font-black tracking-[-.045em]">DigiSparkX</h2>
                <p className="mt-4 text-lg text-white/80">Grow Smarter, Go Digital</p>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow text-orange-600">About Company</p>
            <h2 className="mt-4 text-[clamp(38px,4.6vw,62px)] font-black leading-[1.03] tracking-[-.045em]">A creative digital partner for modern businesses.</h2>
            <p className="mt-5 text-lg leading-8 text-[#67635d]">
              Led by Mohammed Javed, DigiSparkX brings together website development, design, branding, marketing and automation. We focus on clean design, practical technology and business results — not confusing jargon.
            </p>
            <div className="mt-7 grid gap-4 border-t border-[#d9d1c5] pt-6">
              {["Professional design and development", "SEO-ready and mobile responsive websites", "Business automation and digital growth support"].map((item) => (
                <span key={item} className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-[#15984b]" /> {item}</span>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary mt-8 rounded-[4px]">Know More</Link>
          </div>
        </div>
      </section>

      <section className="section bg-[#fffdf8]">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="eyebrow text-orange-600">Our Process</p>
            <h2 className="mt-4 text-[clamp(38px,4.6vw,62px)] font-black leading-[1.03] tracking-[-.045em]">Simple process. Premium output.</h2>
          </div>
          <div className="grid border-y border-[#171717] md:grid-cols-4">
            {[
              ["01", "Understand your business"],
              ["02", "Design clean user experience"],
              ["03", "Develop responsive website"],
              ["04", "Launch, optimize and support"]
            ].map(([num, text]) => (
              <div key={num} className="border-b border-[#d9d1c5] p-8 md:border-b-0 md:border-r md:last:border-r-0">
                <b className="text-4xl font-black text-orange-600">{num}</b>
                <h3 className="mt-5 text-xl font-black">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-24 text-white">
        <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow border-white/20 bg-white/5 text-orange-300">Start Your Project</p>
            <h2 className="mt-5 text-[clamp(40px,5vw,68px)] font-black leading-[1.02] tracking-[-.045em]">Let’s build your digital presence properly.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Send your requirement. We will help you choose the right website, branding, marketing or automation solution for your business.
            </p>
          </div>
          <div className="bg-[#f2ede4] p-8 text-[#171717]">
            <div className="cmyk-line mb-6" />
            <h3 className="text-3xl font-black">Contact DigiSparkX</h3>
            <p className="mt-4 leading-8 text-[#67635d]">Share your requirement through our professional contact form. Your enquiry will go to DigiSparkX email and database when production keys are connected.</p>
            <div className="mt-6 grid gap-3 text-sm font-bold">
              <span>{company.email}</span>
              <span>{company.phone}</span>
            </div>
            <Link href="/contact" className="btn btn-primary mt-8 rounded-[4px]">Open Contact Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceVisual({ index }: { index: number }) {
  const icons = [Code2, Workflow, Palette, Megaphone, Rocket, ShieldCheck, Code2, Workflow];
  const Icon = icons[index % icons.length];
  return (
    <div className="relative grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_30%,rgba(12,167,210,.25),transparent_15rem),radial-gradient(circle_at_70%_70%,rgba(255,122,0,.25),transparent_13rem)]">
      <div className="absolute left-5 top-5 h-16 w-16 border-l-4 border-t-4 border-[#07295f]" />
      <div className="absolute bottom-5 right-5 h-16 w-16 border-b-4 border-r-4 border-orange-500" />
      <Icon size={70} className="text-[#07295f] transition group-hover:scale-110" />
    </div>
  );
}
