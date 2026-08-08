# Deployment Guide

## 1. Create Database

Create PostgreSQL on Supabase, Railway, Neon or another managed provider.

Copy the connection string into:

```env
DATABASE_URL=
```

## 2. Configure Email

Use SMTP credentials:

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="DigiSparkX <digisparkxuniverse@gmail.com>"
```

For Gmail, create an App Password.

## 3. Configure Auth

Generate a secure secret:

```env
AUTH_SECRET=
AUTH_TRUST_HOST=true
ADMIN_EMAIL=digisparkxuniverse@gmail.com
ADMIN_PASSWORD=strong-password-here
```

## 4. Push Database

```bash
npm run db:push
npm run seed
```

## 5. Deploy on Vercel

1. Push repository to GitHub.
2. Import repository in Vercel.
3. Add environment variables.
4. Deploy.
5. Run database seed locally or through a secure deployment job.

## 6. Post-Deployment Checklist

- Test contact form.
- Test popup form.
- Test admin login.
- Test rating submission.
- Verify `/sitemap.xml`.
- Verify `/robots.txt`.
- Run Lighthouse.
- Confirm HTTPS.
