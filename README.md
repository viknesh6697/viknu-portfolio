# Viknu Portfolio (v1)

Initial portfolio codebase inspired by modern premium developer portfolios.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- cmdk command menu
- Zod validation

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included pages

- `/`
- `/about`
- `/work`
- `/blogs`
- `/labs`
- `/links`
- `/uses`
- `/guestbook`
- `/book`

## Notes

- Guestbook uses in-memory storage in `app/api/guestbook/route.ts` (replace with a database in v2).
- Replace placeholder values in `data/site.ts` and `metadataBase` in `app/layout.tsx`.
