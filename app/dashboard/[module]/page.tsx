import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Plus } from "lucide-react";
import { auth } from "@/lib/auth";

export default async function DashboardModulePage({ params }: { params: Promise<{ module: string }> }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { module } = await params;
  const title = module.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return (
    <section className="section">
      <div className="container">
        <Link href="/dashboard" className="btn btn-secondary mb-6"><ArrowLeft size={16} /> Back</Link>
        <div className="premium-card p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="eyebrow">Dashboard Module</span>
              <h1 className="mt-4 text-4xl font-black">{title}</h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">This module is connected to the CMS API architecture. Add table UI, filters and editor forms according to your operational workflow.</p>
            </div>
            <button className="btn btn-primary"><Plus size={16} /> Add New</button>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/5 dark:bg-white/10">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Updated</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {["Content item", "Featured record", "SEO entry"].map((item) => (
                  <tr key={item} className="border-t border-slate-200 dark:border-white/10">
                    <td className="p-4 font-bold">{item}</td>
                    <td className="p-4">Ready</td>
                    <td className="p-4">Today</td>
                    <td className="p-4"><button className="font-bold text-orange-500">Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
