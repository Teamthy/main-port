"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget" },
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-50k", label: "$10k - $50k" },
  { value: "over-50k", label: "$50k+" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildCalendar(offset: number) {
  const now = new Date();
  const base = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const month = base.toLocaleString("en-US", { month: "long" });
  const year = base.getFullYear();
  const firstDay = base.getDay();
  const daysInMonth = new Date(year, base.getMonth() + 1, 0).getDate();
  const offsetCells = firstDay === 0 ? 6 : firstDay - 1; // week starts Monday
  const cells: (number | null)[] = [];
  for (let i = 0; i < offsetCells; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);
  const isCurrentMonth = offset === 0;
  return { month, year, cells, isCurrentMonth, today: now.getDate() };
}

function MiniCalendar() {
  const [offset, setOffset] = useState(0);
  const cal = useMemo(() => buildCalendar(offset), [offset]);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white text-base font-medium">{cal.month} {cal.year}</h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setOffset((o) => o - 1)}
            aria-label="Previous month"
            className="text-white/60 hover:text-white transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setOffset((o) => Math.min(o + 1, 11))}
            aria-label="Next month"
            className="text-white/60 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={offset >= 11}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center text-xs text-white/40 font-mono py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cal.cells.map((day, i) => (
          <div
            key={i}
            className={`text-center text-sm py-2 rounded-lg transition ${
              day && cal.isCurrentMonth && day === cal.today
                ? "bg-white text-black font-medium"
                : day
                  ? "text-white/80"
                  : ""
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs mt-4">
        After you send the form, I'll reply within 24 hours with available call slots.
      </p>
    </div>
  );
}

const inputClass =
  "px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full bg-white";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "That doesn't look like a valid email.";
    if (!form.message.trim()) next.message = "Please tell me a little about your project.";
    else if (form.message.trim().length < 20) next.message = "A bit more detail helps me prepare (20+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          budget: form.budget,
          message: form.message,
          website: form.website, // honeypot — humans never fill this
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again or email me directly.");
      }
      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="pt-15 lg:pt-30 lg:pb-30 pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="size-12 rounded-full bg-black flex items-center justify-center mx-auto mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              Message <span className="italic">received</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-10">
              Thanks for reaching out. I'll get back to you within 24 hours to schedule a discovery call.
            </p>
            <button onClick={() => setStatus("idle")} className="btn btn-primary uppercase">
              Send another message
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-15 lg:pt-30 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Contact</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              Let's discuss your <span className="italic">project</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              Tell me about your project and I'll schedule a discovery call to discuss timelines, budget, and the best approach.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:w-8/12">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        className={inputClass}
                      />
                      {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        aria-invalid={Boolean(errors.email)}
                        className={inputClass}
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-2">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-black mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">Budget</label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full appearance-none bg-white cursor-pointer"
                        >
                          {BUDGET_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#323544" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      aria-invalid={Boolean(errors.message)}
                      className="px-8 py-4 rounded-3xl border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 text-base w-full bg-white resize-none"
                    />
                    {errors.message && <p className="text-sm text-red-600 mt-2">{errors.message}</p>}
                  </div>

                  {/* Honeypot — hidden from humans, catches bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-600">{serverError}</p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn btn-primary uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Book a Call"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:w-4/12 ml-auto">
              <div className="bg-[#070707] rounded-[20px] p-8">
                <h3 className="text-white mb-4 text-2xl font-medium">Schedule a Discovery Call</h3>
                <p className="text-white/60 text-base mb-6">During this call we do a quick intro and discuss your project and its specific needs.</p>
                <MiniCalendar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Email</h3>
              <p className="text-base text-gray-500 font-mono">olusanyatimothy54@gmail.com</p>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Call Me</h3>
              <p className="text-base text-gray-500 font-mono">+234 812 786 8211</p>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Visit Me</h3>
              <p className="text-base text-gray-500 font-mono">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
