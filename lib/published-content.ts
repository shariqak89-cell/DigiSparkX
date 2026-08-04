import { blogPosts, youtubeVideos } from "@/data/content";
import { prisma } from "@/lib/db";

export async function getPublishedBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: 50
    });
    return posts.length ? posts : blogPosts;
  } catch {
    return blogPosts;
  }
}

export async function getPublishedBlogPost(slug: string) {
  try {
    const post = await prisma.blogPost.findFirst({
      where: { slug, status: "PUBLISHED" }
    });
    return post || blogPosts.find((item) => item.slug === slug) || null;
  } catch {
    return blogPosts.find((item) => item.slug === slug) || null;
  }
}

export async function getPublishedCourseVideos() {
  try {
    const videos = await prisma.courseVideo.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      take: 30
    });
    return videos.length ? videos : youtubeVideos;
  } catch {
    return youtubeVideos;
  }
}
