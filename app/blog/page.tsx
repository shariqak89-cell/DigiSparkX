import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts } from "@/data/content";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Blog" title="Ideas on digital growth, skills, design and automation." text="The CMS supports draft, publish, schedule, SEO fields, categories, tags and featured images." />
        <div className="grid gap-5 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="premium-card overflow-hidden">
              {post.featuredImage && <Image src={post.featuredImage} alt={post.title} width={1000} height={620} className="h-64 w-full object-cover" />}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => <span key={category} className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-600">{category}</span>)}
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
