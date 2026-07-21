import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadEmailTemplate, sendMail } from "@/lib/email";
import { popupLeadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = popupLeadSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Invalid popup form data" }, { status: 400 });

  const data = parsed.data;
  let stored = true;
  try {
    await prisma.popupLead.create({ data });
  } catch (error) {
    stored = false;
    console.warn("Popup lead storage skipped or failed", error);
  }

  await sendMail({
    subject: `New DigiSparkX popup lead: ${data.service || "General"}`,
    replyTo: data.email,
    html: leadEmailTemplate("New DigiSparkX Popup Lead", data)
  });

  return NextResponse.json({ ok: true, stored });
}
