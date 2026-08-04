import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: 50
  });

  return NextResponse.json({ data });
}
