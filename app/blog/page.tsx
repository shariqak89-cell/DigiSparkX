import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { getPublishedBlogPosts } from "@/lib/published-content";

export const metadata = { title: "Blog" };
export const dynamic = "force-dynamic";

function asStringArray(value: unknown, fallback: string[]) {
  return Array.isArray(value) ? value.map(String) : fallback;
}

export default async function BlogPage() {
  const blogPosts = await getPublishedBlogPosts();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Blog" title="Insights, workflows and deep dives into practical AI." text="Cut through the AI hype with clear, actionable guides, tool reviews, productivity workflows and industry updates." />
        <div className="pill-list mb-10">
          {["AI Productivity Hacks", "Prompt Engineering Masterclasses", "Future of Work & Business", "DigiSparkX Updates"].map((category) => <span key={category}>{category}</span>)}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="premium-card overflow-hidden">
              {(post as any).featuredVideo ? (
                <video src={(post as any).featuredVideo} className="h-64 w-full object-cover" controls preload="metadata" />
              ) : post.featuredImage ? (
                <Image src={post.featuredImage} alt={post.title} width={1000} height={620} className="h-64 w-full object-cover" />
              ) : null}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {asStringArray(post.categories, ["AI"]).map((category) => <span key={category} className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-600">{category}</span>)}
                </div>
                <h2 className="mt-4 text-3xl font-black">{post.title}</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-secondary mt-6">Read Article</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
