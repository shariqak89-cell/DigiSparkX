import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

const allowed = new Set(["lead", "course", "service", "portfolioItem", "review", "blogPost", "mediaAsset", "setting"]);

function clientFor(model: string) {
  return (prisma as unknown as Record<string, { update: Function; delete: Function }>)[model];
}

export async function PATCH(request: Request, { params }: { params: Promise<{ model: string; id: string }> }) {
  const session = await auth();
  if (!session?.user || !["ADMIN", "EDITOR", "INSTRUCTOR"].includes(session.user.role)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { model, id } = await params;
  if (!allowed.has(model)) return NextResponse.json({ error: "Model not allowed" }, { status: 400 });
  const data = await request.json();
  const updated = await clientFor(model).update({ where: { id }, data });
  return NextResponse.json({ data: updated });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ model: string; id: string }> }) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") return NextResponse.json({ error: "Admin only" }, { status: 401 });
  const { model, id } = await params;
  if (!allowed.has(model)) return NextResponse.json({ error: "Model not allowed" }, { status: 400 });
  await clientFor(model).delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
