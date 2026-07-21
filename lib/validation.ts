import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().max(30).optional().or(z.literal("")),
  subject: z.string().min(2).max(160),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(5000),
  budget: z.string().max(80).optional().or(z.literal("")),
  attachment: z.string().url().optional().or(z.literal(""))
});

export const popupLeadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().min(6).max(30),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal(""))
});

export const reviewSchema = z.object({
  name: z.string().min(2).max(120),
  rating: z.coerce.number().int().min(1).max(5),
  review: z.string().min(10).max(1500)
});

export type ContactInput = z.infer<typeof contactSchema>;
export type PopupLeadInput = z.infer<typeof popupLeadSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
