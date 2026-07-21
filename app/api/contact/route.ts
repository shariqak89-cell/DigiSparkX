import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadEmailTemplate, sendMail } from "@/lib/email";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Invalid form data" }, { status: 400 });

  const data = parsed.data;
  let stored = true;
  try {
    await prisma.lead.create({ data: { ...data, subject: data.subject || "Website enquiry" } });
  } catch (error) {
    stored = false;
    console.warn("Lead storage skipped or failed", error);
  }

  await sendMail({
    subject: `New DigiSparkX enquiry: ${data.subject}`,
    replyTo: data.email,
    html: leadEmailTemplate("New DigiSparkX Contact Enquiry", data)
  });

  return NextResponse.json({ ok: true, stored });
}
