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

const BODY_SIZE = 8.4;
const LEAD = 2.5;

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

doc.registerFont("body", path.resolve(__dirname, "..", "src/fonts/jetbrains-mono-regular.ttf"));
doc.registerFont("bold", path.resolve(__dirname, "..", "src/fonts/jetbrains-mono-bold.ttf"));

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
    .font("bold")
    .fontSize(8.4)
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
    .font("bold")
    .fontSize(7.8)
    .fillColor("#3A3A3A")
    .text(clean(text.toUpperCase(), "subhead"), M, doc.y, { characterSpacing: 1.1, lineGap: 0 });
  doc.y += 4;
}

function roleLine(title, context, period) {
  ensureSpace(32);
  const y = doc.y;
  doc
    .font("bold")
    .fontSize(8.9)
    .fillColor(BLACK)
    .text(clean(title, "role title"), M, y, { width: CONTENT_W - 92, lineGap: 1 });
  const afterTitle = doc.y;
  doc
    .font("body")
    .fontSize(7.5)
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
      .font("body")
      .fontSize(7.5)
      .fillColor(SOFT)
      .text(clean(context, "role context"), M, doc.y + 0.5, { width: CONTENT_W - 92, lineGap: 1 });
  }
  doc.y += 4;
}

function paragraph(text, { size = BODY_SIZE, color = BODY, width = CONTENT_W, lead = LEAD } = {}) {
  doc.font("body").fontSize(size).fillColor(color);
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
  doc.font("body").fontSize(BODY_SIZE);
  const height = doc.heightOfString(clean(probe, "bullet"), { width, lineGap: LEAD });
  ensureSpace(height + 4);
  const y = doc.y;
  doc.save().fillColor("#2A2A2A").circle(M + 3.6, y + 4.3, 1.6).fill().restore();
  doc.font("bold").fontSize(BODY_SIZE).fillColor(BLACK);
  if (body) {
    doc.text(clean(lead, "bullet lead"), textX, y, { width, lineGap: LEAD, continued: true });
    doc.font("body").fillColor(BODY).text(clean(body, "bullet body"), { width, lineGap: LEAD });
  } else {
    doc.text(clean(lead, "bullet"), textX, y, { width, lineGap: LEAD });
  }
  doc.y += 4;
}

function skillRow(label, items) {
  const labelWidth = 116;
  const itemsWidth = CONTENT_W - labelWidth - 6;
  doc.font("bold").fontSize(7.9);
  const labelHeight = doc.heightOfString(clean(label, "skill label"), { width: labelWidth, lineGap: 1.4 });
  doc.font("body").fontSize(7.9);
  const itemsHeight = doc.heightOfString(clean(items, "skill items"), { width: itemsWidth, lineGap: 1.4 });
  ensureSpace(Math.max(labelHeight, itemsHeight) + 6);
  const y = doc.y;
  doc.font("bold").fontSize(7.9).fillColor(BLACK).text(clean(label, "skill label"), M, y, {
    width: labelWidth,
    lineGap: 1.4,
  });
  doc
    .font("body")
    .fontSize(7.9)
    .fillColor(BODY)
    .text(clean(items, "skill items"), M + labelWidth + 6, y, { width: itemsWidth, lineGap: 1.4 });
  doc.y = y + Math.max(labelHeight, itemsHeight) + 4.5;
}

/**
 * A quiet strip of verified numbers under the profile. Every value is a measured
 * result from a public repository, not a round number invented for a summary.
 */
function metricBand(items) {
  const colW = CONTENT_W / items.length;
  doc.font("body").fontSize(6.6);
  const labelHeight = Math.max(
    ...items.map((item) => doc.heightOfString(clean(item.label, "metric label"), { width: colW - 14, lineGap: 1.6 }))
  );
  ensureSpace(24 + labelHeight + 20);
  doc.y += 6;
  rule(doc.y, "#DEDEDE", 0.6);
  const y = doc.y + 8;
  items.forEach((item, index) => {
    const x = M + colW * index;
    doc.font("bold").fontSize(12.5).fillColor(BLACK).text(clean(item.value, "metric"), x, y, {
      width: colW - 12,
      lineGap: 0,
    });
    doc
      .font("body")
      .fontSize(6.6)
      .fillColor(SOFT)
      .text(clean(item.label, "metric label"), x, y + 17, { width: colW - 14, lineGap: 1.6 });
  });
  doc.y = y + 17 + labelHeight + 6;
  rule(doc.y, "#DEDEDE", 0.6);
  doc.y += 4;
}

// ---- Header -------------------------------------------------------------

function header() {
  const top = doc.y;
  const hasPortrait = fs.existsSync(portraitPath);
  const textWidth = hasPortrait ? CONTENT_W - 78 : CONTENT_W;

  doc.font("bold").fontSize(20).fillColor(BLACK).text("Olusanya Timothy", M, top, {
    characterSpacing: 0.1,
    lineGap: 0,
  });
  doc.y += 1;
  doc
    .font("body")
    .fontSize(9.4)
    .fillColor("#2E2E2E")
    .text("AI Red Teaming and Evaluation Engineer", M, doc.y, { width: textWidth, lineGap: 0 });
  doc.y += 5;
  doc
    .font("body")
    .fontSize(7.5)
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
  "I test AI systems, then write down what happened in a form somebody else can check. I have shipped software since 2024, mostly in Go, TypeScript, Node.js and Python. Most of my public work now is agent evaluation and red teaming: harnesses that keep raw output, chain their records and let a reviewer re-derive every verdict without a model, a key or a network. I would rather hand over a named gap than a green report.",
  { color: BLACK }
);

metricBand([
  { value: "14/14", label: "verdicts re-derived from raw output" },
  { value: "0 FP / 0 FN", label: "on eight negative controls" },
  { value: "7 findings", label: "from 11 attacks in under a second" },
  { value: "5 classes", label: "of AI failure, each tested" },
]);

section("Red teaming, security and evaluation");
roleLine("Independent AI security research", "Open source, published with the code  |  github.com/Teamthy", "2026 - present");
paragraph(
  "Four public harnesses and one method: keep the raw output, bind every verdict to the thing it decided, and write down whatever the run cannot verify."
);

bullet(
  "tieout.",
  " Evidence-grade harness for agent evaluations (Python, MIT). A keyless demo re-derives 14 of 14 verdicts from stored raw output and reports 0 false positives and negatives across 8 negative controls, with Clopper-Pearson intervals instead of bare percentages."
);
bullet(
  "gatecheck.",
  " CI gate that answers one question: did this agent get easier to break? Fingerprinted findings are diffed against a committed baseline, so only new or worsened issues block a merge. 11 attacks become 7 findings in under a second, reported as SARIF on the pull request."
);
bullet(
  "host-failure-benchmark.",
  " Standard-library benchmark for crash consistency in agent audit trails: 4 failure rows, 13 persistence and recovery checks, 3 verification checks and 10 ways to damage a run. The result is a named gap, including the case where the benchmark itself cannot tell that an action happened."
);
bullet(
  "ai-redteam-five-tests.",
  " The five failures that ship quietly, each with a runnable test: prompt injection, poisoned retrieval, unread tool descriptions, monolingual refusals and rates quoted without a sample size. Refusals are tested in English, Nigerian Pidgin and Yoruba."
);
bullet(
  "Under NDA.",
  " Several larger red-team engagements are private, so they are not listed here. The harnesses above are the method I bring to them, published wherever a client allows it."
);

section("Platform engineering");
roleLine("Product and client delivery", "Go, TypeScript, Node.js, PostgreSQL", "2024 - 2026");
bullet(
  "Famex OS.",
  " School operating system in production: 140+ API routes, 70 models and 898 tests. Fees are double-entry in signed kobo, an unbalanced journal is rejected by the database, and row-level security has its own CI coverage guard."
);
bullet(
  "EduMart OS.",
  " Exam-preparation platform serving a web app, a PWA and a native app from one Go API. All 48 routes are checked against the OpenAPI contract in both directions on every CI run, while deadlines, scoring and authorisation stay on the server."
);
bullet(
  "YK Virtual.",
  " Tutoring marketplace and virtual school built as a Go modular monolith: escrow tied to the booking lifecycle, messaging scoped to a booking, and OpenTelemetry and Prometheus in place from the first commit."
);
bullet(
  "AssetFlow.",
  " Multi-tenant fixed-asset API on Express 5 and Drizzle, with permission-based RBAC across seven roles, branch scoping at the data layer, and JWT access and refresh tokens."
);
bullet(
  "Also delivered.",
  " VisionForge (ONNX inference platform with a dead-letter queue), CDRL (Next.js and Express monorepo with five CI gates and gitleaks) and I CONFESS (three surfaces on one API)."
);

section("Skills");
skillRow(
  "Red teaming and evaluation",
  "Agent red teaming, prompt injection and multi-turn escalation, LLM judge auditing, negative controls, evidence bundles and hash chains, crash consistency, OWASP Agentic Top 10, MITRE ATLAS, NIST AI RMF"
);
skillRow("Languages", "Go, TypeScript, Node.js, JavaScript, Python, SQL, Bash");
skillRow(
  "Backend and data",
  "chi, Express 5, Next.js route handlers, Prisma, Drizzle, PostgreSQL with row-level security, Redis, SQLite, REST and OpenAPI, SARIF"
);
skillRow("Frontend and mobile", "Next.js 15, React 19, Tailwind CSS, TanStack Query, Expo");
skillRow("Operations", "GitHub Actions, Docker, OpenTelemetry, Prometheus, Grafana, gitleaks");

section("Writing and open source");
bullet(
  "The five boring failures that will ship with your AI feature.",
  " November 2026. Which failures reach customers, why multilingual refusals break first, and the sample sizes behind every rate."
);
bullet(
  "Your eval passed. What exactly did it prove?",
  " November 2026. Why a green report is a self-grade, and what a bundle needs before a reviewer can check it."
);
bullet(
  "A red-team gate that only blocks when you get worse.",
  " October 2026. Baseline semantics, finding fingerprints, and what a gate costs when it cries wolf."
);
bullet(
  "What survives when the host dies.",
  " October 2026. Writing the record before the crash, and why a replay-carried decision time is source-asserted."
);
bullet(
  "Repositories.",
  " github.com/Teamthy holds 115 public repositories, including the four harnesses above, all runnable from a cold clone with no credentials. Case studies and writing live at olusanyatimothy.vercel.app."
);

section("How I work");
bullet(
  "Evidence first.",
  " A result ships with the raw output and a command that reproduces it, or it is a claim rather than a result."
);
bullet(
  "Contracts at the boundary.",
  " Drift fails the build in both directions, on the router and on the client, instead of being caught in review."
);
bullet(
  "Named gaps.",
  " Anything unverified is written down with its reason and scope, so a limit is known rather than discovered later."
);

doc.y += 3;
rule(doc.y, "#E4E4E4", 0.6);
doc.y += 8;
paragraph(
  "Open to full-time AI security and evaluation roles, and to contract reviews, red-team engagements and platform builds. Lagos (GMT+1), remote or on site.",
  { size: 7.6, color: SOFT }
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
    .font("body")
    .fontSize(6.9)
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
