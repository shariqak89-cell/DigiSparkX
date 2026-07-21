import Link from "next/link";
import { redirect } from "next/navigation";
import { Activity, Bell, Database, Lock, Mail, Settings } from "lucide-react";
import { dashboardCards } from "@/data/content";
import { auth } from "@/lib/auth";

export const metadata = { title: "Admin Dashboard" };

const modules = [
  "Analytics", "Users", "Leads", "Courses", "Services", "Portfolio", "Testimonials", "Blogs", "Pages", "Media Library", "Settings", "Themes", "SEO", "Emails", "Notifications", "Backup", "Security", "Logs", "Role Management", "Permissions"
];

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <section className="section">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Admin Panel</span>
            <h1 className="mt-4 text-5xl font-black">DigiSparkX Command Center</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Manage content, leads, services, academy, reviews, SEO and settings from one dashboard.</p>
          </div>
          <Link href="/login" className="btn btn-secondary">Secure Login</Link>
        </div>

        <div className="grid-auto mb-8">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="premium-card p-6">
                <Icon className="text-orange-500" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
                <h2 className="mt-1 text-3xl font-black">{card.value}</h2>
              </div>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
          <div className="premium-card p-6">
            <h2 className="text-2xl font-black">CMS Modules</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <Link key={module} href={`/dashboard/${module.toLowerCase().replaceAll(" ", "-")}`} className="rounded-2xl border border-slate-200 p-4 font-bold hover:border-orange-400 dark:border-white/10">
                  {module}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <DashNote icon={<Database />} title="Database" text="PostgreSQL + Prisma schema with relationships, indexes and validation-ready APIs." />
            <DashNote icon={<Lock />} title="Security" text="Auth.js, roles, validation, secure environment variables and admin API protection." />
            <DashNote icon={<Mail />} title="Email" text="Nodemailer SMTP integration sends leads to digisparkxuniverse@gmail.com." />
            <DashNote icon={<Bell />} title="Notifications" text="Lead and review flows are ready for email and dashboard notification expansion." />
            <DashNote icon={<Activity />} title="Logs" text="ActivityLog model supports audit trails for admin actions." />
            <DashNote icon={<Settings />} title="Settings" text="Brand logo, theme, SEO and site settings are designed for CMS control." />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashNote({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="premium-card flex gap-4 p-5">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">{icon}</span>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}
