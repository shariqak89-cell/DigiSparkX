import { blogPosts, youtubeVideos } from "@/data/content";
import { prisma } from "@/lib/db";

const DIGISPARKX_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "UCrD5FioPlzseHNhM8J_8r8A";

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

async function getYouTubeChannelVideos() {
  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${DIGISPARKX_CHANNEL_ID}`, {
      next: { revalidate: 60 * 30 }
    });
    if (!response.ok) return [];
    const xml = await response.text();
    return Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)).slice(0, 12).map((entry, index) => {
      const block = entry[1];
      const youtubeId = block.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || "";
      const title = decodeXml(block.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "DigiSparkX Video");
      const description = decodeXml(block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || "Latest DigiSparkX YouTube lesson.");
      return {
        title,
        description,
        youtubeUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
        youtubeId,
        videoFileUrl: null,
        source: "YOUTUBE_CHANNEL",
        category: "DigiSparkX Channel",
        status: "PUBLISHED",
        order: index
      };
    }).filter((video) => video.youtubeId);
  } catch {
    return [];
  }
}

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
    const [videos, channelVideos] = await Promise.all([
      prisma.courseVideo.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      take: 30
      }),
      getYouTubeChannelVideos()
    ]);
    const merged = [...videos, ...channelVideos].filter((video, index, list) => {
      const key = video.youtubeId || video.youtubeUrl || video.videoFileUrl || video.title;
      return list.findIndex((item) => (item.youtubeId || item.youtubeUrl || item.videoFileUrl || item.title) === key) === index;
    });
    return merged.length ? merged : youtubeVideos;
  } catch {
    const channelVideos = await getYouTubeChannelVideos();
    return channelVideos.length ? channelVideos : youtubeVideos;
  }
}
