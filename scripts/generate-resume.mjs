// Generates public/olusanya-timothy-resume.pdf — a clean, ATS-friendly CV.
// Pure-JS (pdfkit ships Helvetica), so it runs anywhere with no system fonts.
// Re-run with: npm run resume:build
//
// NOTE: this is a TEMPLATE populated from the portfolio persona. Replace the
// placeholder employer names, dates, degree, and links with real details
// (see DEPLOY.md / the project README for the personalization checklist).

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
  doc.fontSize(11).fillColor(GRAY).text("Software & AI Engineer", { lineGap: 1 });
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
    .text("github.com/olusanyatimothy  |  linkedin.com/in/olusanyatimothy", { lineGap: 1 });
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
  const left = doc.page.margins.left;
  doc.fontSize(9.5).fillColor(BLACK).text(label + ":  ", { continued: true });
  doc.fillColor(GRAY).text(items);
  doc.moveDown(0.2);
}

// ---- Build the document ----
header();

para(
  "Software & AI engineer with 8+ years building reliable, secure systems end to end. I specialize in backend architecture and system design, ship polished full-stack products, and harden AI systems through adversarial testing and red teaming. I help startups and enterprises turn complex problems into simple, performant software.",
  { color: BLACK }
);

section("Core Competencies");
competency("Languages", "TypeScript, JavaScript, Go, Python, SQL");
competency("Backend & Infra", "Node.js, FastAPI, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS");
competency("Frontend", "React, Next.js, Tailwind CSS, accessible component systems");
competency("AI / Security", "ML pipelines, anomaly detection, AI red teaming, threat modeling, OWASP");
competency("Practices", "System design, API design (REST/GraphQL/gRPC), CI/CD, observability, TDD");

section("Selected Experience");

role("Software & AI Engineer — Independent / Contract", "2019 – Present  |  Lagos, Nigeria (remote-friendly)");
bullets([
  "Designed and built a multi-entity finance platform on a double-entry, event-sourced ledger; cut month-end close by ~60% with zero balance discrepancies across 12 entities.",
  "Built a high-throughput crypto trading backend in Go (matching engine, wallet controls, multi-sig approvals); sustained 10k matched orders/min at <50ms latency with 99.99% uptime.",
  "Delivered an ML-powered analytics platform (Kafka + scikit-learn) detecting anomalies across 5M+ events/day at 94% precision, reducing manual review effort by ~80%.",
  "Performed AI red teaming and threat modeling on AI-powered features, surfacing and mitigating prompt-injection and abuse risks pre-launch; external pentests closed with no critical findings.",
  "Rebuilt headless e-commerce and mobile banking frontends, lifting conversion +32% and core task completion to 92% through performance and UX work.",
]);

role("Senior Backend Engineer — Northwind Systems", "2018 – 2019  |  Lagos, Nigeria");
bullets([
  "Owned core REST/GraphQL services and the release pipeline; reduced p95 API latency by ~40% via caching, query optimization, and connection pooling.",
  "Introduced contract testing and structured code review, cutting production regressions and enabling parallel frontend/backend delivery.",
  "Mentored two junior engineers and led the migration of a monolith module to independently deployable services.",
]);

role("Software Engineer — BrightPath Labs", "2016 – 2018  |  Lagos, Nigeria");
bullets([
  "Shipped customer-facing features across the stack (React + Node + PostgreSQL) on two-week iteration cycles.",
  "Built internal tooling that automated manual reporting, saving the operations team several hours per week.",
]);

section("Selected Projects");
bullets([
  "Fincash — all-in-one fintech mobile app (React Native): unified dashboard + instant payments; 4× faster key actions, ~60% less navigation time.",
  "LandSecure — PropTech platform (Next.js + Solidity): on-chain document stamping, escrow, GIS mapping; verification cut to under 72 hours.",
  "CloudMetrics — real-time analytics dashboard with a typed component library; +45% daily active usage, 2× feature velocity.",
]);

section("Education");
role("B.Sc. Computer Science", "University of Lagos  |  2012 – 2016");

section("Focus Areas & Continuous Learning");
para(
  "AI safety and red teaming, distributed systems and event-driven architecture, application security (OWASP Top 10, threat modeling), and platform reliability / SRE practices.",
  { color: GRAY }
);

doc.moveDown(0.6);
doc
  .fontSize(7.5)
  .fillColor("#999999")
  .text(
    "Template CV — employer names, dates, degree, and links above are placeholders; replace with verified details before sending.",
    { align: "center" }
  );

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`Resume written to ${outPath} (${kb} KB)`);
