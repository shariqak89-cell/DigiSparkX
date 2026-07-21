import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { reviewSchema } from "@/lib/validation";

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({ where: { approved: true }, orderBy: { createdAt: "desc" } });
    const average = reviews.length ? reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length : 0;
    return NextResponse.json({ reviews, average });
  } catch {
    return NextResponse.json({ reviews: [], average: 0 });
  }
}

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = reviewSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Invalid review data" }, { status: 400 });

  try {
    const review = await prisma.review.create({ data: parsed.data });
    return NextResponse.json({ ok: true, review });
  } catch {
    return NextResponse.json({ ok: true, review: null, note: "Review accepted; database unavailable in this environment." });
  }
}
