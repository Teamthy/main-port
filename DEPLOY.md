# Deploy runbook

The site is a standard Next.js 15 app with no database and no required secrets. Deploying it is a
`git push` away.

---

## 1. Verify locally

```bash
npm install
npm run build      # type-checks and renders all static pages
npm run start      # smoke-test the production build on :3000
```

Optional sanity checks:

```bash
npm run check:json
npm run resume:build   # regenerate the CV PDF if content changed
```

---

## 2. Push to GitHub

The remote is `https://github.com/Teamthy/main-port.git`.

```bash
git remote -v
git push origin main
```

If authentication fails, use the GitHub CLI (`gh auth login && gh auth setup-git`) or a personal access
token with `Contents: Read and write` on this repository.

---

## 3. Deploy to Vercel

### Via the dashboard

1. [vercel.com/new](https://vercel.com/new) → **Import** the repository.
2. Framework preset auto-detects **Next.js** and keeps the defaults.
3. Add environment variables (section 4) — optional for a working site, needed for the contact form.
4. **Deploy.** Pushes to `main` become production; pull requests get preview URLs.

### Via the CLI

```bash
npm i -g vercel
vercel link
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add RESEND_API_KEY production
vercel env add CONTACT_TO_EMAIL production
vercel env add CONTACT_FROM_EMAIL production
vercel --prod
```

---

## 4. Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin (`https://olusanyatimothy.dev`). Used by metadata, sitemap, robots and JSON-LD. |
| `RESEND_API_KEY` | For email | Without it the contact route logs submissions and returns success — fine for previews. |
| `CONTACT_TO_EMAIL` | Optional | Defaults to `olusanyatimothy54@gmail.com`. |
| `CONTACT_FROM_EMAIL` | Optional | Must be a Resend-verified sender, e.g. `Portfolio <hello@yourdomain.com>`. |
| `GITHUB_TOKEN` | Optional | Raises the GitHub API rate limit used by the live repository snapshot. A read-only token is enough. |

---

## 5. Custom domain

Vercel → Project → **Settings → Domains** → add the domain and follow the DNS instructions. Then update
`NEXT_PUBLIC_SITE_URL` to the canonical `https://…` origin and redeploy, so canonical URLs and the
sitemap point at the live host.

---

## 6. Post-deploy checklist

- [ ] `/` renders the evidence terminal and the four research artefacts.
- [ ] `/portfolio` filters by category and all twelve case studies open.
- [ ] `/research` shows artefacts, pillars, reporting rules and engagements.
- [ ] `/blogs` and all six articles render, with related posts.
- [ ] `/sitemap.xml` and `/robots.txt` reference the production origin.
- [ ] Contact form: submit a test message; confirm delivery (or the logged fallback) and the rate limit.
- [ ] CV download returns the regenerated PDF.
- [ ] Lighthouse pass on mobile: no remote image or font requests.

---

## 7. Updating content

- **Projects:** `src/data/projects.ts` — the sitemap, filters, home page and detail routes all derive from it.
- **Research copy:** `src/data/research.ts`.
- **Writing:** `src/data/blogs.ts`.
- **Identity, nav, stack, principles:** `src/data/site.ts`.
- **CV:** edit `scripts/generate-resume.mjs`, then `npm run resume:build`.
