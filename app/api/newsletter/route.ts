import { NextResponse } from "next/server";
import { leadEmailTemplate, sendMail } from "@/lib/email";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  if (!email.includes("@")) return NextResponse.redirect(new URL("/", request.url));

  await sendMail({
    subject: "New DigiSparkX newsletter subscriber",
    replyTo: email,
    html: leadEmailTemplate("New Newsletter Subscriber", { email })
  });

  return NextResponse.redirect(new URL("/", request.url));
}
