import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape every user-controlled value before it enters the notification HTML.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "olusanyatimothy54@gmail.com";

const BUDGET_LABELS: Record<string, string> = {
  "under-2k": "Under $2k",
  "2k-10k": "$2k - $10k",
  "over-10k": "$10k+",
  unsure: "Not sure yet",
};

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes.
// Resets on redeploy / serverless cold start, adequate for a portfolio site.
const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_ATTEMPTS) {
    attempts.set(ip, recent);
    return true;
  }
  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const budget = String(body.budget || "").trim();
  const message = String(body.message || "").trim();
  const website = String(body.website || "").trim(); // honeypot field

  // Bots that fill the hidden field get a fake success response.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation: never trust the client.
  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Name is required.";
  if (!email) fieldErrors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Invalid email address.";
  if (!message) fieldErrors.message = "Message is required.";
  else if (message.length < 20) fieldErrors.message = "Message is too short.";
  if (message.length > 5000) fieldErrors.message = "Message is too long.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", fields: fieldErrors }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const budgetLabel = budget ? BUDGET_LABELS[budget] || budget : "Not specified";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not specified");
  const safeMessage = escapeHtml(message);

  const html = `
    <h2>New project enquiry from ${safeName}</h2>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budgetLabel)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${safeMessage}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Development fallback: no API key configured, so log instead of sending.
    console.info("[contact] RESEND_API_KEY not set, message not emailed:", {
      name,
      email,
      company,
      budget: budgetLabel,
      message,
    });
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_TO,
      replyTo: email,
      subject: `New project enquiry from ${name.replace(/[\r\n]/g, " ").slice(0, 120)}`,
      html,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the message right now. Please email me directly." },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Could not send the message right now. Please email me directly." },
      { status: 500 }
    );
  }
}
