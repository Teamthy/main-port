// Generates public/olusanya-timothy-resume.pdf.
//
// A four-section, two-page CV weighted towards AI red teaming, security and
// evaluation (roughly 70% of the page) with the platform engineering that
// supports it as the remaining 30%. Pure JavaScript via pdfkit, so it builds
// anywhere with no system fonts and no headless browser.
//
// Re-run with: npm run resume:build

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "olusanya-timothy-resume.pdf");
const portraitPath = path.join(outDir, "portrait", "olusanya-timothy-avatar.jpg");

const BLACK = "#141414";
const BODY = "#3D3D3D";
const SOFT = "#6B6B6B";
const RULE = "#D6D6D6";

const BODY_SIZE = 9.2;
const LEAD = 2.2;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 46, bottom: 50, left: 50, right: 50 },
  bufferPages: true,
  info: {
    Title: "Olusanya Timothy - AI Red Teaming and Evaluation Engineer",
    Author: "Olusanya Timothy",
    Subject: "Curriculum vitae: AI red teaming, AI evaluation and platform engineering",
    Keywords:
      "AI red teaming, AI evaluation, agent security, prompt injection, Go, TypeScript, Python, evidence bundles",
    Creator: "github.com/Teamthy/main-port",
  },
});

const M = doc.page.margins.left;
const PAGE_W = doc.page.width;
const CONTENT_W = PAGE_W - M * 2;
const PAGE_BOTTOM = doc.page.height - doc.page.margins.bottom - 26;

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

/** The CV copy must stay free of em and en dashes: plain hyphens only. */
function clean(text, where) {
  if (/[\u2013\u2014]/.test(text)) {
    throw new Error(`Dash check failed in ${where}: replace the en/em dash in "${text}"`);
  }
  return text;
}

function ensureSpace(needed) {
  if (doc.y + needed > PAGE_BOTTOM) doc.addPage();
}

function rule(y, color = RULE, weight = 0.7) {
  doc.moveTo(M, y).lineTo(PAGE_W - M, y).strokeColor(color).lineWidth(weight).stroke();
}

function section(title) {
  ensureSpace(46);
  doc.y += 11;
  doc
    .font("Helvetica-Bold")
    .fontSize(8.9)
    .fillColor(BLACK)
    .text(clean(title.toUpperCase(), "section"), M, doc.y, { characterSpacing: 1.25, lineGap: 0 });
  const y = doc.y + 3.5;
  rule(y);
  doc.y = y + 8.5;
}

function subhead(text) {
  ensureSpace(28);
  doc.y += 12;
  doc
    .font("Helvetica-Bold")
    .fontSize(8.2)
    .fillColor("#3A3A3A")
    .text(clean(text.toUpperCase(), "subhead"), M, doc.y, { characterSpacing: 1.1, lineGap: 0 });
  doc.y += 4;
}

function roleLine(title, context, period) {
  ensureSpace(32);
  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(9.7)
    .fillColor(BLACK)
    .text(clean(title, "role title"), M, y, { width: CONTENT_W - 92, lineGap: 1 });
  const afterTitle = doc.y;
  doc
    .font("Helvetica")
    .fontSize(8.3)
    .fillColor(SOFT)
    .text(clean(period, "role period"), M, y + 0.9, {
      width: CONTENT_W,
      align: "right",
      lineGap: 0,
      lineBreak: false,
    });
  doc.y = afterTitle;
  if (context) {
    doc
      .font("Helvetica")
      .fontSize(8.3)
      .fillColor(SOFT)
      .text(clean(context, "role context"), M, doc.y + 0.5, { width: CONTENT_W - 92, lineGap: 1 });
  }
  doc.y += 4;
}

function paragraph(text, { size = BODY_SIZE, color = BODY, width = CONTENT_W, lead = LEAD } = {}) {
  doc.font("Helvetica").fontSize(size).fillColor(color);
  const height = doc.heightOfString(clean(text, "paragraph"), { width, lineGap: lead });
  ensureSpace(height + 4);
  doc.text(clean(text, "paragraph"), M, doc.y, { width, lineGap: lead });
  doc.y += 4;
}

/**
 * A bullet with a bold lead-in (usually the project name) and ordinary prose
 * after it, so the page scans quickly but still reads like a person wrote it.
 */
function bullet(lead, body) {
  const textX = M + 13;
  const width = CONTENT_W - 13;
  const probe = `${lead} ${body}`;
  doc.font("Helvetica").fontSize(BODY_SIZE);
  const height = doc.heightOfString(clean(probe, "bullet"), { width, lineGap: LEAD });
  ensureSpace(height + 4);
  const y = doc.y;
  doc.save().fillColor("#2A2A2A").circle(M + 3.6, y + 4.3, 1.6).fill().restore();
  doc.font("Helvetica-Bold").fontSize(BODY_SIZE).fillColor(BLACK);
  if (body) {
    doc.text(clean(lead, "bullet lead"), textX, y, { width, lineGap: LEAD, continued: true });
    doc.font("Helvetica").fillColor(BODY).text(clean(body, "bullet body"), { width, lineGap: LEAD });
  } else {
    doc.text(clean(lead, "bullet"), textX, y, { width, lineGap: LEAD });
  }
  doc.y += 4;
}

function skillRow(label, items) {
  ensureSpace(22);
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(8.7).fillColor(BLACK).text(clean(label, "skill label"), M, y, {
    width: 88,
    lineGap: 1.4,
  });
  doc
    .font("Helvetica")
    .fontSize(8.7)
    .fillColor(BODY)
    .text(clean(items, "skill items"), M + 118, y, { width: CONTENT_W - 118, lineGap: 1.4 });
  doc.y += 3.4;
}

/**
 * A quiet strip of verified numbers under the profile. Every value here is a
 * measured result from a public repository, not a round number invented for a
 * summary line.
 */
function metricBand(items) {
  const colW = CONTENT_W / items.length;
  ensureSpace(70);
  doc.y += 7;
  rule(doc.y, "#DEDEDE", 0.6);
  const y = doc.y + 9;
  items.forEach((item, index) => {
    const x = M + colW * index;
    doc.font("Helvetica-Bold").fontSize(14.5).fillColor(BLACK).text(clean(item.value, "metric"), x, y, {
      width: colW - 12,
      lineGap: 0,
    });
    doc
      .font("Helvetica")
      .fontSize(7.2)
      .fillColor(SOFT)
      .text(clean(item.label, "metric label"), x, y + 18, { width: colW - 14, lineGap: 1.6 });
  });
  doc.y = y + 34;
  rule(doc.y, "#DEDEDE", 0.6);
  doc.y += 8;
}

// ---- Header -------------------------------------------------------------

function header() {
  const top = doc.y;
  const hasPortrait = fs.existsSync(portraitPath);
  const textWidth = hasPortrait ? CONTENT_W - 78 : CONTENT_W;

  doc.font("Helvetica-Bold").fontSize(23).fillColor(BLACK).text("Olusanya Timothy", M, top, {
    characterSpacing: 0.1,
    lineGap: 0,
  });
  doc.y += 1;
  doc
    .font("Helvetica")
    .fontSize(10.3)
    .fillColor("#2E2E2E")
    .text("AI Red Teaming and Evaluation Engineer", M, doc.y, { width: textWidth, lineGap: 0 });
  doc.y += 5;
  doc
    .font("Helvetica")
    .fontSize(8.3)
    .fillColor(SOFT)
    .text("Lagos, Nigeria  |  olusanyatimothy54@gmail.com  |  +234 812 786 8211", M, doc.y, {
      width: textWidth,
      lineGap: 1.8,
    });
  doc.text("olusanyatimothy.vercel.app  |  github.com/Teamthy  |  linkedin.com/in/olusanya-timothy", {
    width: textWidth,
    lineGap: 1.8,
  });

  if (hasPortrait) {
    const size = 62;
    const x = PAGE_W - M - size;
    doc.save();
    doc.roundedRect(x, top, size, size, 5).clip();
    doc.image(portraitPath, x, top, { width: size, height: size });
    doc.restore();
  }

  const bottom = Math.max(doc.y, hasPortrait ? top + 62 : 0) + 10;
  rule(bottom, "#BFBFBF", 0.9);
  doc.y = bottom + 12;
}

// ---- Content ------------------------------------------------------------

header();

section("Profile");
paragraph(
  "I test AI systems, then write down what happened in a form somebody else can check. Most of my public work is agent evaluation and red teaming: harnesses that keep raw model output, chain their records and let a reviewer re-derive every verdict without a model, a key or a network. I came to this after building the platforms being tested, which is why the rigs are small and the systems are real: Go services, fees in integer kobo, contracts enforced in CI. Given the choice, I would rather hand over a named gap than a green report."
);

metricBand([
  { value: "14/14", label: "verdicts re-derived from stored raw output" },
  { value: "0 FP / 0 FN", label: "across eight negative controls" },
  { value: "7 findings", label: "from 11 attacks, in under a second" },
  { value: "5 classes", label: "of AI failure, each with a runnable test" },
]);

section("Red teaming, security and evaluation");
roleLine("Independent AI security research", "Open source, published with the code  |  github.com/Teamthy", "2026 - present");
paragraph(
  "Four public harnesses, one method. A result is only worth the record behind it, so every run stores the raw input and output, binds each verdict to a check version and an effect reference, and writes down anything it cannot verify."
);

bullet(
  "tieout.",
  " Evidence-grade harness for agent evaluations and red-team runs (Python, MIT). Each verdict is one bound record inside a SHA-256 hash chain, with the raw exchange stored beside it. A keyless demo re-derives 14 of 14 verdicts from that stored output and reports 0 false positives and negatives across 8 negative controls, with Clopper-Pearson intervals instead of bare percentages. The judge is measured too: anchor agreement, perturbation flips and self-preference are reported every run."
);
bullet(
  "gatecheck.",
  " CI gate that answers the only question a pull request really asks: did the agent get easier to break? Findings are fingerprinted and diffed against a committed baseline, so known issues stop being news and only new or worsened ones block the merge. The default engine turns 11 attacks into 7 findings in under a second, including two multi-turn escalations, and reports them as SARIF on the pull request."
);
bullet(
  "host-failure-benchmark.",
  " Standard-library benchmark for crash consistency in agent audit trails. It kills the process mid-work and then asks what the record can still prove: 4 failure rows, 13 persistence and recovery checks, 3 verification checks on what survived, and 10 ways of damaging a run. The headline result is a named gap, including the case where the benchmark itself cannot tell that an action happened."
);
bullet(
  "ai-redteam-five-tests.",
  " A runnable harness for the five failures that ship quietly: prompt injection, poisoned retrieval, unread tool descriptions, monolingual refusals and rates quoted without a sample size. It points at any OpenAI-compatible endpoint, keeps the raw output for review, and tests refusals in English, Nigerian Pidgin and Yoruba."
);
subhead("How a review runs");
bullet(
  "Scope.",
  " What claim has to survive, who will audit it, and what the system is allowed to do. The questions come before the tooling, because the wrong corpus proves nothing."
);
bullet(
  "Corpus.",
  " Inputs fitted to the actual system prompt, including the multilingual cases and the boring failures people skip. Rates ship with a sample size and an interval, never as a bare percentage."
);
bullet(
  "Bundle.",
  " Raw transcripts, bound records, negative controls and a written list of named gaps, plus a command a non-author can run. A limitation nobody records becomes somebody else's assumption."
);

// Start the 30% section on its own page: it reads as a deliberate second half
// rather than a section that ran out of room.
doc.addPage();
section("Platform engineering");
roleLine("Product and client delivery", "Go, TypeScript, PostgreSQL", "2026");
bullet(
  "Famex OS.",
  " School operating system in production: 140+ API routes, 70 models and 898 tests gating the build. Fees are double-entry in signed kobo, an unbalanced journal is rejected by the database, and row-level security has its own CI coverage guard."
);
bullet(
  "EduMart OS.",
  " Exam-preparation platform serving a web app, a PWA and a native app from one Go API. All 48 routes are checked against the OpenAPI contract in both directions on every CI run, and deadlines, scoring and authorisation stay on the server."
);
bullet(
  "YK Virtual.",
  " Tutoring marketplace and virtual school built as a Go modular monolith. Escrow follows the booking lifecycle rather than a payment button, messaging is scoped to a booking, and OpenTelemetry and Prometheus were in place from the first commit."
);
bullet(
  "AssetFlow.",
  " Multi-tenant fixed-asset API on Express 5 and Drizzle, with permission-based RBAC across seven roles and branch scoping enforced at the data layer. The same client period included Olasco Autos, a rental and sales platform with Zod-validated intake, one WhatsApp handoff and documentation that separates what is live from what still needs owner approval."
);
bullet(
  "Also delivered.",
  " VisionForge (ONNX inference platform with a dead-letter queue and verified model artefacts), CDRL (Next.js and Express monorepo with five CI gates and gitleaks) and I CONFESS (three surfaces on one API, shipped in eight audited phases)."
);

section("Skills");
skillRow(
  "Security and evaluation",
  "Agent red teaming, prompt injection and multi-turn escalation, LLM judge auditing, negative controls, evidence bundles and hash chains, crash consistency, OWASP Agentic Top 10, MITRE ATLAS, NIST AI RMF"
);
skillRow("Languages", "Go, TypeScript, Python, SQL, Bash");
skillRow(
  "Backend and data",
  "chi, Express 5, Next.js route handlers, Prisma, Drizzle, PostgreSQL with row-level security, Redis, SQLite, REST and OpenAPI, SARIF"
);
skillRow("Frontend and mobile", "Next.js 15, React 19, Tailwind CSS, TanStack Query, Expo / React Native");
skillRow(
  "Operations",
  "GitHub Actions, Docker, OpenTelemetry, Prometheus, Grafana, gitleaks, contract checks in CI"
);

section("Writing and open source");
bullet(
  "The five boring failures that will ship with your AI feature.",
  " November 2026. The companion to ai-redteam-five-tests: which failures reach customers, why multilingual refusals break first, and the sample sizes behind every rate."
);
bullet(
  "Your eval passed. What exactly did it prove?",
  " November 2026. Why a green report is a self-grade, and what a bundle needs before a reviewer can check the result instead of trusting the operator."
);
bullet(
  "A red-team gate that only blocks when you get worse.",
  " October 2026. Baseline semantics, finding fingerprints, and the quiet cost of a security gate that cries wolf."
);
bullet(
  "What survives when the host dies.",
  " October 2026. Writing the record before the crash, and why a replay-carried decision time is source-asserted rather than verified."
);
bullet(
  "An API contract that fails the build when it drifts.",
  " September 2026. Checking a contract in both directions, so the client and the server cannot quietly disagree."
);
bullet(
  "Repositories and portfolio.",
  " github.com/Teamthy holds 115 public repositories, including the four harnesses above, all runnable from a cold clone with no credentials. Case studies and the rest of the writing live at olusanyatimothy.vercel.app."
);

doc.y += 2;
rule(doc.y, "#E4E4E4", 0.6);
doc.y += 9;
paragraph(
  "Open to full-time AI security and evaluation roles, and to contract reviews, red-team engagements and platform builds. Lagos (GMT+1), remote or on site.",
  { size: 8.6, color: SOFT }
);

// ---- Footer on every page ----------------------------------------------

const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i += 1) {
  doc.switchToPage(i);
  const oldBottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;
  const y = doc.page.height - 38;
  rule(y - 8, "#E4E4E4", 0.6);
  doc
    .font("Helvetica")
    .fontSize(7.6)
    .fillColor(SOFT)
    .text("Olusanya Timothy  |  AI red teaming, evaluation and platform engineering", M, y, {
      width: CONTENT_W - 70,
      lineGap: 0,
      lineBreak: false,
    });
  doc.text(`Page ${i + 1} of ${range.count}`, M, y, {
    width: CONTENT_W,
    align: "right",
    lineGap: 0,
    lineBreak: false,
  });
  doc.page.margins.bottom = oldBottom;
}

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`Resume written to ${outPath} (${kb} KB, ${range.count} page${range.count === 1 ? "" : "s"})`);
