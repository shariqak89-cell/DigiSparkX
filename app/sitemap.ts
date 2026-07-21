import type { MetadataRoute } from "next";
import { allLinks } from "@/data/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return allLinks.map((link) => ({
    url: absoluteUrl(link.href),
    lastModified: new Date(),
    changeFrequency: link.href === "/" ? "daily" : "weekly",
    priority: link.href === "/" ? 1 : 0.8
  }));
}
