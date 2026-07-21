# Folder Structure

```text
digisparkx/
  app/
    api/
    dashboard/
    about/
    services/
    academy/
    portfolio/
    projects/
    testimonials/
    pricing/
    blog/
    careers/
    faq/
    contact/
    privacy-policy/
    terms-and-conditions/
    refund-policy/
    sitemap/
    login/
  components/
  data/
  docs/
  lib/
  prisma/
  public/
    brand/
```

## Important Files

- `app/layout.tsx` — SEO metadata, shell and schema.
- `app/page.tsx` — landing page.
- `components/SiteShell.tsx` — header, footer, theme toggle, mega menu, popup lead form.
- `components/ContactForm.tsx` — contact form.
- `lib/db.ts` — Prisma client.
- `lib/auth.ts` — Auth.js configuration.
- `lib/email.ts` — SMTP email sending.
- `prisma/schema.prisma` — database schema.
