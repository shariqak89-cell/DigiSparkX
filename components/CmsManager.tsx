"use client";

import { useEffect, useMemo, useState } from "react";

type CmsItem = Record<string, any>;

const modelMap: Record<string, string> = {
  blogs: "blogPost",
  "course-videos": "courseVideo"
};

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function youtubeId(url: string) {
  if (!url.trim()) return "";
  const patterns = [/youtu\.be\/([^?&/]+)/, /youtube\.com\/watch\?v=([^?&]+)/, /youtube\.com\/embed\/([^?&/]+)/];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return url.trim();
}

export function CmsManager({ module }: { module: string }) {
  const model = modelMap[module];
  const isBlog = module === "blogs";
  const isVideo = module === "course-videos";
  const [items, setItems] = useState<CmsItem[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const title = useMemo(() => isBlog ? "Blog CMS" : "Course Video CMS", [isBlog]);

  async function load() {
    if (!model) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/${model}`, { cache: "no-store" });
      const json = await res.json();
      setItems(json.data || []);
    } catch {
      setMessage("Unable to load records. Please check backend/database connection.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [model]);

  async function submit(formData: FormData) {
    if (!model) return;
    setMessage("Saving...");
    const titleValue = String(formData.get("title") || "");
    const status = String(formData.get("status") || "PUBLISHED");
    let uploadedVideoUrl = "";
    const videoFile = formData.get("videoFile");
    if (isVideo && videoFile instanceof File && videoFile.size > 0) {
      setMessage("Uploading video...");
      const uploadForm = new FormData();
      uploadForm.set("file", videoFile);
      const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: uploadForm });
      const uploadJson = await uploadRes.json().catch(() => ({}));
      if (!uploadRes.ok) {
        setMessage(uploadJson.error || "Video upload failed.");
        return;
      }
      uploadedVideoUrl = uploadJson.url || "";
    }
    const videoUrlValue = String(formData.get("youtubeUrl") || "");
    const payload = isBlog
      ? {
          title: titleValue,
          slug: slugify(String(formData.get("slug") || titleValue)),
          excerpt: String(formData.get("excerpt") || ""),
          content: String(formData.get("content") || ""),
          status,
          publishedAt: status === "PUBLISHED" ? new Date().toISOString() : null,
          categories: String(formData.get("categories") || "AI").split(",").map((x) => x.trim()).filter(Boolean),
          tags: String(formData.get("tags") || "ai").split(",").map((x) => x.trim()).filter(Boolean),
          featuredImage: String(formData.get("featuredImage") || ""),
          seoTitle: String(formData.get("seoTitle") || titleValue),
          seoDescription: String(formData.get("seoDescription") || formData.get("excerpt") || "")
        }
      : {
          title: titleValue,
          description: String(formData.get("description") || ""),
          youtubeUrl: videoUrlValue,
          youtubeId: youtubeId(videoUrlValue),
          videoFileUrl: uploadedVideoUrl || String(formData.get("videoFileUrl") || ""),
          source: uploadedVideoUrl ? "UPLOAD" : "YOUTUBE",
          category: String(formData.get("category") || "Course Video"),
          status,
          order: Number(formData.get("order") || 0)
        };

    const res = await fetch(`/api/admin/${model}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setMessage("Saved successfully. Website will show published content from backend.");
      await load();
    } else {
      const json = await res.json().catch(() => ({}));
      setMessage(json.error || "Save failed.");
    }
  }

  async function remove(id: string) {
    if (!model) return;
    if (!confirm("Delete this item?")) return;
    const res = await fetch(`/api/admin/${model}/${id}`, { method: "DELETE" });
    setMessage(res.ok ? "Deleted." : "Delete failed.");
    await load();
  }

  if (!model) return null;

  return (
    <div className="grid gap-6">
      <div className="premium-card p-6">
        <h2 className="text-2xl font-black">{title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {isBlog ? "Add blog posts here. Published posts appear on the Blog page." : "Add YouTube course links here. Published videos appear in the homepage animated slider."}
        </p>
        <form action={submit} className="mt-6 grid gap-4">
          <input className="cms-input" name="title" required placeholder={isBlog ? "Blog title" : "Video title"} />
          {isBlog && <input className="cms-input" name="slug" placeholder="Slug auto-generated if empty" />}
          {isBlog ? (
            <>
              <textarea className="cms-input min-h-24" name="excerpt" required placeholder="Short excerpt" />
              <textarea className="cms-input min-h-44" name="content" required placeholder="Full blog content" />
              <input className="cms-input" name="featuredImage" placeholder="Featured image URL" />
              <input className="cms-input" name="categories" placeholder="Categories comma separated" />
              <input className="cms-input" name="tags" placeholder="Tags comma separated" />
              <input className="cms-input" name="seoTitle" placeholder="SEO title" />
              <input className="cms-input" name="seoDescription" placeholder="SEO description" />
            </>
          ) : (
            <>
              <input className="cms-input" name="youtubeUrl" placeholder="YouTube video URL" />
              <input className="cms-input" name="videoFileUrl" placeholder="Or direct video file URL" />
              <label className="grid gap-2 text-sm font-black text-slate-600 dark:text-slate-300">
                Upload course video
                <input className="cms-input" name="videoFile" type="file" accept="video/mp4,video/webm,video/ogg" />
              </label>
              <textarea className="cms-input min-h-24" name="description" placeholder="Video description" />
              <input className="cms-input" name="category" placeholder="Category e.g. AI Course" />
              <input className="cms-input" name="order" type="number" placeholder="Order" />
            </>
          )}
          <select className="cms-input" name="status" defaultValue="PUBLISHED">
            <option>PUBLISHED</option>
            <option>DRAFT</option>
            <option>SCHEDULED</option>
          </select>
          <button className="btn btn-primary" type="submit">Add {isBlog ? "Blog Post" : "YouTube Video"}</button>
        </form>
        {message && <p className="mt-4 font-bold text-orange-500">{message}</p>}
      </div>

      <div className="premium-card overflow-hidden p-6">
        <h2 className="text-2xl font-black">Saved Records</h2>
        {loading ? <p className="mt-4">Loading...</p> : (
          <div className="mt-5 grid gap-3">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <h3 className="font-black">{item.title || item.name}</h3>
                    <p className="text-sm text-slate-500">{item.status || item.category} {item.youtubeUrl ? `• ${item.youtubeUrl}` : ""}</p>
                  </div>
                  <button className="font-black text-red-500" type="button" onClick={() => remove(item.id)}>Delete</button>
                </div>
              </div>
            ))}
            {!items.length && <p className="text-slate-500">No records yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
