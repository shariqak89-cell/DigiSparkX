import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const allowedTypes = new Set(["video/mp4", "video/webm", "video/ogg", "image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || !["ADMIN", "EDITOR", "INSTRUCTOR"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  if (!allowedTypes.has(file.type)) {
    return NextResponse.json({ error: "Only image files or MP4, WebM, OGG videos are allowed" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const isImage = file.type.startsWith("image/");
  const ext = file.name.split(".").pop()?.toLowerCase() || (isImage ? "jpg" : "mp4");
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const folder = isImage ? "images" : "videos";
  const uploadDir = path.join(process.cwd(), "public", "uploads", folder);
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, safeName), bytes);

  return NextResponse.json({ url: `/uploads/${folder}/${safeName}`, type: isImage ? "IMAGE" : "VIDEO" });
}
