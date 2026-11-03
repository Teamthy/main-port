# Olusanya Timothy — portfolio & research site

Personal site for **Olusanya Timothy** ([@Teamthy](https://github.com/Teamthy)) — a Lagos-based
software engineer working on AI red teaming and evaluation, plus Go/TypeScript product platforms.

**Live:** https://olusanyatimothy.vercel.app (Vercel project `olusanyatimothy`, production branch `main`).

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS**. Every project
on the site links to its public repository, and every copy claim is taken from that repository's README,
docs or committed test output — no invented clients, testimonials or metrics.

## What is here

| Route | Purpose |
| --- | --- |
| `/` | Positioning, evidence terminal, research artefacts, selected work, GitHub signal, latest writing |
| `/research` | The AI red-team & evaluation practice: the evidence gap, four artefacts, six pillars, reporting rules, engagement shapes |
| `/portfolio` | Twelve projects with category filters, each linked to its repository |
| `/portfolio/[slug]` | Case study: metrics, problem, build, **how it can be verified**, engineering details, related work |
| `/services` | Three capability areas, deliverables, five-step process and principles |
| `/about` | Trajectory, principles, stack, live GitHub snapshot |
| `/blogs` + `/blog/[slug]` | Six long-form notes on evaluation evidence, CI gates, crash consistency, contracts and ledgers |
| `/contact` | Validated, rate-limited, honeypot-protected contact form (Resend) |
| `/api/contact` | Form handler with server-side validation and HTML escaping |

## Design notes

- **One real face, rendered in black and white.** The only photograph on the site is the portrait of
  Olusanya in `public/portrait` — greyscale, used as the favicon set (512px PNG, 180px Apple icon and a
  48/32/16 `.ico`), in the navbar and footer, on the About and home "About" sections, on article bylines
  and inside the generated Open Graph card. Project and article artwork stays as deterministic SVG motifs
  (`src/components/ProjectVisual.tsx`), so there are no stock images, remote image dependencies or fake
  screenshots. `scripts/build-brand-assets.sh <photo>` regenerates every portrait and icon derivative.
- **Fonts are bundled** in `src/fonts` (Inter variable, Anonymous Pro) and loaded with `next/font/local`,
  so builds never depend on a font CDN. Both families are OFL-licensed; provenance is in `src/fonts/README.md`.
- **GitHub data is fetched at build/revalidate time** (`src/lib/github.ts`, hourly ISR) and the UI degrades
  to a committed snapshot if the API is rate-limited or unreachable.

## Content model

- `src/data/site.ts` — identity, links, capabilities, stack, principles (single source of truth).
- `src/data/projects.ts` — the twelve projects: slug, repo, live URL, metrics, problem/build/verification copy.
- `src/data/research.ts` — artefacts, six pillars, reporting rules, engagement shapes.
- `src/data/blogs.ts` — long-form posts (sections, tags, motif).

Adding a project only requires a new entry in `projects.ts`; `generateStaticParams`, the sitemap, the
portfolio grid and the detail route all derive from it.

## Local development

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # type-check + production build
npm run start          # serve the production build
npm run resume:build   # regenerate public/olusanya-timothy-resume.pdf
npm run check          # JSON + content integrity + production build
npm run check:json     # JSON sanity check (used in CI)
npm run check:content  # slugs, cross-references and internal links resolve
```

## Environment

Copy `.env.example` to `.env.local`. Everything is optional for local development:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, sitemap and JSON-LD |
| `RESEND_API_KEY` | Contact form email delivery (without it, submissions are logged) |
| `CONTACT_TO_EMAIL` | Where enquiries are delivered |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |
| `GITHUB_TOKEN` | Optional; raises the GitHub API rate limit for the live snapshot |

## Deployment

Deployed on Vercel as the `olusanyatimothy` project (see `DEPLOY.md`). Because Git-driven deployments
are disabled on that project, a production release is created explicitly from the `main` branch.

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main`: install, JSON check, resume
regeneration and a production build (which includes type-checking).
