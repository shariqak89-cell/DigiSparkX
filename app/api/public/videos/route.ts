import { NextResponse } from "next/server";
import { getPublishedCourseVideos } from "@/lib/published-content";

export async function GET() {
  const data = await getPublishedCourseVideos();

  return NextResponse.json({ data });
}
