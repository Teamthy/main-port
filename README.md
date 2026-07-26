# Olusanya Timothy — Portfolio

Personal portfolio site for Olusanya Timothy, software & AI engineer. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Pages:** Home, Services, Portfolio (with case studies), Blog, About, Contact, 404
- **Case studies:** 8 detailed project write-ups with challenges, solutions, results, and metrics
- **Blog:** 6 full-length articles with structured sections and related posts
- **Contact form:** validated, rate-limited, honeypot-protected; emails via [Resend](https://resend.com)
- **SEO:** per-page metadata + OpenGraph tags, canonical URLs, static generation for all content routes

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — see Environment variables
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Environment variables

All variables are **optional in development**. See `.env.example` for the full list.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends contact-form emails. If unset, submissions are logged to the server console instead. |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries (default: `olusanyatimothy54@gmail.com`) |
| `CONTACT_FROM_EMAIL` | Verified Resend sender (e.g. `Portfolio Contact <hello@yourdomain.com>`) |
| `NEXT_PUBLIC_SITE_URL` | Used for canonical URLs and OpenGraph metadata |

## Editing content

Content lives in typed data files — no CMS required:

- `src/data/projects.ts` — portfolio projects & case studies
- `src/data/blogs.ts` — blog posts (intro, sections, outro)
- `src/data/images.ts` — stock imagery URLs (served from Pexels, allow-listed in `next.config.js`)

Add an entry to either array and it appears across the site (home page, listings, detail pages, related items) automatically.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com): **Add New → Project**, import the repo.
3. Framework preset **Next.js** is auto-detected — defaults (`next build` / `next start`) are correct.
4. Add the environment variables from `.env.example` under **Project → Settings → Environment Variables**.
5. Deploy. Every push to `main` ships to production; pull requests get preview URLs.

Any other Node host works too — the app is a standard Next.js project with no Vercel-specific APIs.

## Project structure

```
src/
├── app/                 # Next.js App Router routes
│   ├── api/contact/     # Contact form endpoint (Resend)
│   ├── blog/[id]/       # Blog post pages (static + 404 for unknown ids)
│   ├── portfolio/[id]/  # Case study pages (static + 404 for unknown ids)
│   └── ...              # Static pages
├── components/          # Shared UI (Navbar, Footer, ArrowIcon)
├── data/                # Typed content: projects, blogs, images
├── page-components/     # One presentational component per page
└── utils/               # cn() helper
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (type-checks included) |
| `npm start` | Serve the production build |
| `npm run check:json` | Validate all JSON files in the repo |
