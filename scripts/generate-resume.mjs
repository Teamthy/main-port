// Generates public/olusanya-timothy-resume.pdf — a clean, ATS-friendly CV.
// Pure-JS (pdfkit ships Helvetica), so it runs anywhere with no system fonts.
// Re-run with: npm run resume:build
//
// Content mirrors the work published on the site: public repositories at
// github.com/Teamthy, with only claims that appear in those repositories.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "olusanya-timothy-resume.pdf");

const BLACK = "#111111";
const GRAY = "#555555";
const LINE = "#D9D9D9";

const doc = new PDFDocument({ size: "A4", margin: 54, bufferPages: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const PAGE_BOTTOM = doc.page.height - doc.page.margins.bottom - 28;

function ensureSpace(needed) {
  if (doc.y + needed > PAGE_BOTTOM) {
    doc.addPage();
  }
}

function header() {
  doc.fillColor(BLACK).fontSize(22).text("OLUSANYA TIMOTHY", { lineGap: 1 });
  doc.fontSize(11).fillColor(GRAY).text("Software Engineer — AI Red Team & Evaluation", { lineGap: 1 });
  doc.moveDown(0.3);
  doc
    .fontSize(8.5)
    .fillColor(GRAY)
    .text(
      "Lagos, Nigeria  |  olusanyatimothy54@gmail.com  |  +234 812 786 8211  |  olusanyatimothy.dev",
      { lineGap: 1 }
    );
  doc
    .fontSize(8.5)
    .text("github.com/Teamthy  |  linkedin.com/in/olusanya-timothy", { lineGap: 1 });
  doc.moveDown(0.4);
  doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor(LINE).lineWidth(1).stroke();
  doc.moveDown(0.5);
}

function section(title) {
  ensureSpace(28);
  doc.moveDown(0.4);
  doc.fontSize(10.5).fillColor(BLACK).text(title.toUpperCase(), { lineGap: 1, characterSpacing: 1 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .strokeColor(LINE)
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.4);
}

function para(text, opts = {}) {
  doc.fontSize(9.5).fillColor(opts.color || GRAY).text(text, { lineGap: 2, align: opts.align });
  doc.moveDown(0.3);
}

function role(title, meta) {
  ensureSpace(40);
  doc.fontSize(10.5).fillColor(BLACK).text(title, { lineGap: 1 });
  doc.fontSize(9).fillColor(GRAY).text(meta, { lineGap: 1 });
  doc.moveDown(0.2);
}

function bullets(items) {
  doc.list(items, doc.page.margins.left + 6, doc.y, {
    bulletRadius: 1.4,
    textIndent: 6,
    lineGap: 2,
  });
  // pdfkit leaves doc.font at body size; reset color/size for following content
  doc.fillColor(GRAY).fontSize(9.5);
  doc.moveDown(0.4);
}

function competency(label, items) {
  ensureSpace(16);
  doc.fontSize(9.5).fillColor(BLACK).text(label + ":  ", { continued: true });
  doc.fillColor(GRAY).text(items);
  doc.moveDown(0.2);
}

// ---- Build the document ----
header();

para(
  "Software engineer working across two sides of the same problem: production platforms in Go and TypeScript, and the evaluation infrastructure that decides whether an AI system actually held. I build the unglamorous layer — contracts checked in CI, double-entry ledgers in integer kobo, row-level security, dead-letter queues — and open-source harnesses that emit evidence rather than reports.",
  { color: BLACK }
);

section("Core Competencies");
competency("Languages", "Go, TypeScript, Python, SQL, Bash");
competency(
  "Backend",
  "chi, Express 5, Next.js route handlers, Prisma, Drizzle, PostgreSQL (RLS), Redis, SQLite, REST / OpenAPI"
);
competency("Frontend", "Next.js 15, React 19, Tailwind CSS, TanStack Query, Expo / React Native");
competency(
  "AI & security",
  "Agent red teaming, prompt injection, LLM-judge auditing, evidence bundles, crash consistency, ONNX Runtime, OWASP Agentic Top 10, MITRE ATLAS, NIST AI RMF"
);
competency(
  "Practices",
  "API contracts enforced in CI, double-entry ledgers, RBAC and tenant isolation, OpenTelemetry / Prometheus, GitHub Actions, Docker, technical writing"
);

section("AI Red Team & Evaluation — Open Source");
role("Independent research practice", "2026 – Present  |  github.com/Teamthy");
bullets([
  "tieout — evidence-grade agent evaluation harness. Every verdict is a bound, chained, re-derivable event; `tieout verify` re-derives 14/14 verdicts from stored raw output with no model, no key and no network. Ships negative controls (0 FP / 0 FN), judge-audit metrics and exact Clopper-Pearson intervals.",
  "gatecheck — CI security gate for agents that blocks a pull request only when the agent gets easier to break. Fingerprinted findings diffed against a committed baseline; 7 findings from 11 attacks in under a second, including multi-turn escalation; SARIF and PR comments.",
  "host-failure-benchmark — standard-library benchmark for crash consistency in agent audit trails. Four failure rows, 13 persistence checks, 3 verification checks, and a mutation suite (10 damage modes plus regression cases per audited finding).",
  "ai-redteam-five-tests — runnable harness for five recurring AI failures (prompt injection, poisoned retrieval, unread tool descriptions, monolingual refusals, unmeasured rates) against any OpenAI-compatible endpoint, including mixed Pidgin/Yoruba refusals.",
]);

section("Platform Engineering");
role("Product delivery — Go and TypeScript", "2026");
bullets([
  "EduMart OS — exam-preparation platform for Nigerian learners: Go API serving a Next.js web app, PWA and Expo app. 48 documented routes checked against the router in both directions on every CI run; server owns session state, deadlines, scoring and authorisation.",
  "Famex OS — single-school operating system: 140+ API routes, 70 models, a double-entry ledger in signed kobo with an unbalanced-journal constraint, PostgreSQL row-level security with a CI coverage guard, and a test suite of roughly 900 tests.",
  "YK Virtual — curriculum-governed tutoring marketplace and virtual school: Go modular monolith with escrow, booking-scoped messaging, staged vetting and an OpenAPI contract as the source of truth; OpenTelemetry and Prometheus from day one.",
  "I CONFESS — daily confession and audio platform: Go API with a Next.js web app and Flutter client, delivered across eight audited phases with CI/CD workflows.",
  "VisionForge — computer-vision inference platform: Go API, Python ONNX service, Redis workers with visibility timeouts and a dead-letter queue, presigned S3/MinIO uploads and full Prometheus/Grafana instrumentation.",
]);

section("Client Backends");
bullets([
  "AssetFlow — Express 5 + Drizzle multi-tenant fixed-asset API: permission-based RBAC across seven roles, branch-scoped queries enforced at the data layer, JWT access and refresh tokens, Swagger contract at /api/docs.",
  "Olasco Autos — request-led vehicle platform for Lagos and Abuja: Zod-validated intake persisted with Prisma/PostgreSQL, one WhatsApp handoff, and documentation that states plainly what the platform does not promise.",
  "CDRL — pnpm monorepo for the Centre for Digital Risk & Leadership: Next.js site plus Express/Prisma API, CI running typecheck, zero-warning lint, Vitest, production builds, dependency audit and gitleaks.",
]);

section("Open Source, Writing & Links");
bullets([
  "Public repositories and case studies: github.com/Teamthy (115 repositories, Go / TypeScript / Python).",
  "Long-form notes on evaluation evidence, red-team gates in CI, crash consistency and financial data modelling.",
  "Portfolio and research: olusanyatimothy.dev",
]);

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`Resume written to ${outPath} (${kb} KB)`);
