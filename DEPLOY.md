# Push & Deploy Runbook

Everything below assumes you are in the project root (`main-port/`). The finished
code from this workspace is committed on the `main` branch (see `git log`).

---

## 1. Get the finished code onto your machine

The new commits currently live in this Arena workspace, **not** on GitHub yet.
Pick whichever path is easiest:

### Option A — Apply the changes to your existing local clone (recommended)

A portable patch of every commit since the original repo state is included in the
workspace at `../push-deploy/` (relative to this repo):

- `0001-*.patch`, `0002-*.patch`, `0003-*.patch` — one per commit (preserves history)
- `all-changes.patch` — a single combined diff

From your local clone (which should be at the original `4842cfb` commit):

```bash
cd ~/path/to/your/main-port          # your clone
git status                            # confirm clean working tree
git am /path/to/workspace/push-deploy/0*.patch
# if a patch hiccups on whitespace:  git am --whitespace=fix ...
npm install
npm run resume:build                  # regenerates the CV PDF (already in the patch too)
npm run build                         # sanity check
```

### Option B — Take the whole workspace tree

The workspace folder *is* the finished project. Copy it over your clone (keeping
your `.git`), or zip it from the workspace and replace your local files, then
`git add -A && git commit` once.

> Tip: `node_modules/` and the local git identity are **not** part of the saved
> workspace, so always run `npm install` after copying.

---

## 2. Push to GitHub

The remote is already set to `https://github.com/Teamthy/main-port.git`.

```bash
git remote -v                         # confirm origin
git push origin main
```

If `git push` asks for credentials, authenticate once with any of:

- **GitHub CLI** (easiest): `gh auth login`, then `gh auth setup-git`, then push.
- **Personal Access Token**: use the token as the password when prompted (classic
  token needs the `repo` scope; fine-grained needs *Contents: Read and write*).
  Cache it so you aren't prompted again: `git config --global credential.helper store`.
- **SSH**: `git remote set-url origin git@github.com:Teamthy/main-port.git` after
  adding your SSH key to GitHub.

---

## 3. Deploy to Vercel

### Via the web (zero-config)

1. Go to [vercel.com/new](https://vercel.com/new) → **Import** the GitHub repo.
2. Framework preset auto-detects **Next.js** — keep the defaults
   (`next build` / `next start`, output `.next`).
3. Under **Environment Variables**, add (see section 4):
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional — defaults to `olusanyatimothy54@gmail.com`)
   - `CONTACT_FROM_EMAIL` (optional — a Resend-verified sender)
   - `NEXT_PUBLIC_SITE_URL` (your production domain, e.g. `https://olusanyatimothy.dev`)
4. Click **Deploy**. Pushes to `main` auto-deploy to production; PRs get preview URLs.

### Via the Vercel CLI (alternative)

```bash
npm i -g vercel
vercel login
vercel                # link + preview deploy
vercel --prod         # production deploy
vercel env add RESEND_API_KEY production   # repeat for each var, then redeploy
```

No `vercel.json` is needed — the project is a standard Next.js app.

---

## 4. Environment variables reference

| Variable | Required? | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For live email | Sends contact-form messages. **If unset**, the API route logs the message to the server console instead (handy in dev / before you add a key). |
| `CONTACT_TO_EMAIL` | no | Inbox that receives enquiries (default `olusanyatimothy54@gmail.com`). |
| `CONTACT_FROM_EMAIL` | no | Verified Resend sender, e.g. `Portfolio Contact <hello@yourdomain.com>`. Without it, Resend's onboarding sender is used (delivers only to your own inbox). |
| `NEXT_PUBLIC_SITE_URL` | no | Drives canonical URLs, OpenGraph tags, `sitemap.xml`, and `robots.txt`. |

Get a Resend key at [resend.com/api-keys](https://resend.com/api-keys). To send
from your own domain, verify it in Resend (DNS records) and set `CONTACT_FROM_EMAIL`
to an address on that domain.

---

## 5. Post-deploy verification checklist

After the production URL is live, confirm each returns **200**:

```bash
URL=https://your-domain.com
curl -s -o /dev/null -w "%{http_code}\n" $URL/                 # home (hero carousel)
curl -s -o /dev/null -w "%{http_code}\n" $URL/portfolio/1      # a case study
curl -s -o /dev/null -w "%{http_code}\n" $URL/blog/1           # an article
curl -s -o /dev/null -w "%{http_code}\n" $URL/portfolio/999    # should be 404
curl -s -o /dev/null -w "%{http_code}\n" $URL/sitemap.xml      # SEO sitemap
curl -s -o /dev/null -w "%{http_code}\n" $URL/robots.txt       # crawler rules
curl -s -o /dev/null -w "%{http_code}\n" $URL/olusanya-timothy-resume.pdf  # CV download
curl -sI $URL/ | grep -iE 'strict-transport|content-type-options|referrer-policy'  # security headers
```

Also in the browser: tab once on the home page → the **Skip to content** link
should appear; the hero carousel should autoplay and respond to the arrows/dots;
submit the contact form (with no `RESEND_API_KEY` it still shows the success
screen and logs server-side — add the key to receive real email).

---

## 6. Useful local commands

```bash
npm install          # install deps
npm run dev          # dev server on :3000
npm run build        # type-check + production build
npm start            # serve the production build
npm run resume:build # regenerate public/olusanya-timothy-resume.pdf after editing the script
npm run check:json   # validate every JSON file in the repo
```

---

## 7. Personalization checklist (before you go live)

The two lead projects — **Fincash** and **LandSecure** — already use your real
copy and screenshots. The remaining projects, the blog, and the CV still carry
template content. Swap these for your real details:

- **Project data** lives in one file: `src/data/projects.ts`. Each entry has
  `title`, `summary`, `description[]`, `challenges[]`, `solutions[]`, `results[]`,
  `metrics[]`, `stack[]`, `similar[]`, plus `image`/`cover`/`gallery`. Edit the
  placeholder projects (ids 3–8) or replace them with your own; add screenshots
  by dropping files in `src/data/`, importing them at the top of
  `src/data/images.ts`, and referencing `IMAGES.yourImage.src`.
- **CV** (`scripts/generate-resume.mjs` → then `npm run resume:build`): employer
  names, role dates, degree/university, and the contact line. The "Selected
  Projects" block already lists Fincash + LandSecure.
- **Social links** in `src/components/Footer.tsx` and the JSON-LD block in
  `src/app/layout.tsx` (`sameAs`) — currently `@olusanyatimothy` on each network.
- **Stats** (`200+ projects`, `50+ clients`, `98%`, `8+ years`) in
  `src/page-components/Home.tsx` and `About.tsx` — adjust to your real numbers.
- **Blog** content lives in `src/data/blogs.ts` (intro/sections/outro per post).
- **Contact details** in `src/page-components/Contact.tsx` (phone, email, location).
- **Superseded file**: delete `src/data/portfolioProjects.ts` if present — the
  portfolio now reads from `src/data/projects.ts`.

> Encoding note: `.editorconfig` + `.gitattributes` (included) force UTF-8 and LF
> so em dashes, bullets (✦), and middots (·) never corrupt again. If an editor
> still shows garbled characters, set its file encoding to **UTF-8** and line
> endings to **LF**, then re-save.
