import nodemailer from "nodemailer";
import { company } from "@/data/content";

type MailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendMail({ subject, html, replyTo }: MailPayload) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 587);
  const from = process.env.SMTP_FROM || `"${company.name}" <${company.email}>`;

  if (!host || !user || !pass) {
    console.warn("SMTP is not configured. Email skipped:", subject);
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  await transporter.sendMail({
    from,
    to: company.email,
    subject,
    html,
    replyTo
  });

  return { skipped: false };
}

export function leadEmailTemplate(title: string, data: Record<string, unknown>) {
  const rows = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;text-transform:capitalize">${key}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${String(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="color:#0b58d9">${title}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px">${rows}</table>
      <p style="color:#6b7280;margin-top:18px">Sent from DigiSparkX website.</p>
    </div>
  `;
}
