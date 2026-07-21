import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Careers" };

const roles = ["Frontend Developer Intern", "Graphic Design Intern", "Video Editing Intern", "Digital Marketing Intern", "AI Automation Trainee", "SEO Executive"];

export default function CareersPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Careers" title="Build your career inside a practical digital environment." text="DigiSparkX welcomes learners, interns and professionals who care about quality, creativity and honest growth." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role} className="premium-card p-6">
              <h2 className="text-2xl font-black">{role}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Work on real-world assignments, learn professional communication and build a portfolio with guidance.</p>
              <Link href={`/contact?subject=${encodeURIComponent(role)}`} className="btn btn-primary mt-6">Apply Now</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
