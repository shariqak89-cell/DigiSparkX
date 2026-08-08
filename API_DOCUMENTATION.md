# API Documentation

## POST `/api/contact`

Stores a client enquiry and sends email to `digisparkxuniverse@gmail.com`.

Fields:

- `name`
- `email`
- `phone`
- `subject`
- `service`
- `message`
- `budget`
- `attachment`

Response:

```json
{ "ok": true, "stored": true }
```

## POST `/api/popup-lead`

Stores the delayed popup enquiry and sends email.

Fields:

- `name`
- `phone`
- `email`
- `service`
- `message`

## GET `/api/ratings`

Returns approved reviews and average rating.

## POST `/api/ratings`

Creates a review with `approved=false` for admin moderation.

Fields:

- `name`
- `rating`
- `review`

## Admin CMS APIs

Protected routes:

- `GET /api/admin/[model]`
- `POST /api/admin/[model]`
- `PATCH /api/admin/[model]/[id]`
- `DELETE /api/admin/[model]/[id]`

Allowed models:

- `lead`
- `course`
- `service`
- `portfolioItem`
- `review`
- `blogPost`
- `mediaAsset`
- `setting`
- `activityLog`

Authentication is required. Delete is admin-only.
