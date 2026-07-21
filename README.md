# DigiSparkX Production Website

DigiSparkX is a production-ready Next.js company website for digital services and academy programs. It includes separate public pages, premium UI, dark/light mode, contact forms, ratings, blog architecture, protected admin dashboard, CMS-ready APIs, PostgreSQL schema, authentication and documentation.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM
- PostgreSQL
- Auth.js / NextAuth
- Nodemailer SMTP
- Zod validation

## Main Pages

- Home
- About
- Services
- Academy
- Portfolio
- Projects
- Testimonials
- Pricing
- Blog
- Careers
- FAQ
- Contact
- Privacy Policy
- Terms & Conditions
- Refund Policy
- Sitemap
- 404 Page
- Login
- Admin Dashboard

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy environment file:

```bash
cp .env.example .env
```

3. Add production values in `.env`, especially:

```env
DATABASE_URL=
AUTH_SECRET=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
ADMIN_EMAIL=digisparkxuniverse@gmail.com
ADMIN_PASSWORD=
```

4. Setup database:

```bash
npm run db:push
npm run seed
```

5. Run locally:

```bash
npm run dev
```

6. Open:

```text
http://localhost:3000
```

## Admin Login

After running the seed script, login at:

```text
/login
```

Use:

```text
Email: digisparkxuniverse@gmail.com
Password: value from ADMIN_PASSWORD
```

## Deployment

Recommended deployment:

- Frontend: Vercel
- Database: Supabase PostgreSQL / Railway PostgreSQL / Neon
- Assets: Cloudinary or Supabase Storage
- Email: Gmail App Password, Resend, Mailgun or Zoho SMTP

Set all environment variables in Vercel before deployment.

## Security Notes

- Never commit `.env`.
- Use a strong `AUTH_SECRET`.
- Use an SMTP app password, not a personal email password.
- Keep admin password strong.
- Use HTTPS in production.
- Keep dependencies updated.

## Project Owner

Company: DigiSparkX  
CEO: Mohammed Javed  
Directors: Junaid Javed, Iqra Javed, Fatima Javed  
Email: digisparkxuniverse@gmail.com
