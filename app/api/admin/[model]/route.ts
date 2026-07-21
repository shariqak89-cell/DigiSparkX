import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

const allowed = new Set(["lead", "course", "service", "portfolioItem", "review", "blogPost", "mediaAsset", "setting", "activityLog"]);

function clientFor(model: string) {
  return (prisma as unknown as Record<string, { findMany: Function; create: Function }>)[model];
}

export async function GET(_request: Request, { params }: { params: Promise<{ model: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { model } = await params;
  if (!allowed.has(model)) return NextResponse.json({ error: "Model not allowed" }, { status: 400 });
  const client = clientFor(model);
  const data = await client.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ data });
}

export async function POST(request: Request, { params }: { params: Promise<{ model: string }> }) {
  const session = await auth();
  if (!session?.user || !["ADMIN", "EDITOR", "INSTRUCTOR"].includes(session.user.role)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { model } = await params;
  if (!allowed.has(model)) return NextResponse.json({ error: "Model not allowed" }, { status: 400 });
  const client = clientFor(model);
  const data = await request.json();
  const created = await client.create({ data });
  return NextResponse.json({ data: created });
}
