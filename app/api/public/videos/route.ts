import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.courseVideo.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    take: 30
  });

  return NextResponse.json({ data });
}
