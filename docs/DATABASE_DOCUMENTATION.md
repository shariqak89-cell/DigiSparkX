# Database Documentation

The website uses PostgreSQL with Prisma ORM.

## Core Models

- `User` — admin, editor and instructor accounts.
- `Lead` — contact form submissions.
- `PopupLead` — timed popup form submissions.
- `Review` — user ratings and testimonials with moderation.
- `Service` — client services with features, process and FAQs.
- `Course` — academy courses.
- `PortfolioItem` — portfolio and project case studies.
- `BlogPost` — CMS blog posts with SEO fields and scheduling support.
- `MediaAsset` — media library.
- `Setting` — configurable site settings.
- `ActivityLog` — admin audit logs.

## Roles

- `ADMIN`
- `EDITOR`
- `INSTRUCTOR`

## Publishing Status

- `DRAFT`
- `SCHEDULED`
- `PUBLISHED`

## Recommended Indexes

Already included in schema:

- Lead email/status/date
- Blog status/published date
- Unique slugs for services, courses and posts
