import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/content";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="section">
      <div className="container max-w-4xl">
        <span className="eyebrow">DigiSparkX Blog</span>
        <h1 className="mt-5 text-5xl font-black tracking-tight">{post.title}</h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        {post.featuredImage && <Image src={post.featuredImage} alt={post.title} width={1200} height={720} className="my-8 rounded-[34px] object-cover shadow-blueglow" />}
        <div className="premium-card p-8 text-lg leading-9 text-slate-700 dark:text-slate-200">
          {post.content.split("\n").map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
