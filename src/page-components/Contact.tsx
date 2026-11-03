"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { SITE } from "../data/site";
import Icon from "../components/Icon";

const BUDGET_OPTIONS = [
  { value: "", label: "Budget (optional)" },
  { value: "under-2k", label: "Under $2k" },
  { value: "2k-10k", label: "$2k – $10k" },
  { value: "over-10k", label: "$10k+" },
  { value: "unsure", label: "Not sure yet" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NEXT_STEPS = [
  {
    title: "I read it properly",
    body: "Every enquiry gets a reply from me, not a template, usually within two working days.",
  },
  {
    title: "We scope the claim",
    body: "A short call to establish what you need to be able to say, and to whom. If it is not a fit, I say so.",
  },
  {
    title: "You get a written scope",
    body: "Deliverables, timeline and price before any work starts. No retainer surprises.",
  },
];

const inputClass =
  "px-6 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-14 text-base w-full bg-white";

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
    if (!form.message.trim()) next.message = "Please tell me a little about the system.";
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
          website: form.website, // honeypot, humans never fill this
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
        <section className="pt-24 lg:pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="size-12 rounded-full bg-black flex items-center justify-center mx-auto mb-8">
              <Icon name="check" size={24} className="text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-normal -tracking-[2.4px] mb-6 text-black">
              Message <span className="italic">received</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-10">
              Thanks for reaching out. I&apos;ll reply within two working days with questions and a suggested
              scope.
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
      <section className="pt-16 lg:pt-32 lg:pb-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Contact</p>
            <h1 className="text-3xl lg:text-4xl font-normal -tracking-[2.4px] mb-6 text-black">
              Tell me what you&apos;re <span className="italic">checking</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              An agent in production, a product to build, or an eval that needs to survive a review, describe
              the system and what you would not want to find out later. I will reply with a scope.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="lg:w-7/12">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Full name *
                      </label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
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
                      <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company or team"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                        Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="px-6 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-14 text-base w-full appearance-none bg-white cursor-pointer"
                        >
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="keyboard_arrow_down"
                          size={24}
                          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#323544]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      What are we looking at? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What the system does, who depends on it, what has been tested so far, and what worries you."
                      rows={6}
                      aria-invalid={Boolean(errors.message)}
                      className="px-6 py-4 rounded-3xl border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 text-base w-full bg-white resize-none"
                    />
                    {errors.message && <p className="text-sm text-red-600 mt-2">{errors.message}</p>}
                  </div>

                  {/* Honeypot, hidden from humans and catches bots */}
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
                    <p role="alert" className="text-sm text-red-600">
                      {serverError}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn btn-primary uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                    </button>
                    <p className="text-sm text-gray-500">
                      Or email{" "}
                      <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:text-black">
                        {SITE.email}
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:w-5/12">
              <div className="bg-[#0A0A0B] rounded-[20px] p-8 ring-1 ring-white/10">
                <h3 className="text-white mb-2 text-2xl font-medium">What happens next</h3>
                <p className="text-white/50 text-base mb-7">
                  No funnel, no discovery deck. Three steps, in this order.
                </p>
                <ol className="space-y-5">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-mono text-xs text-[#C7F24E] pt-1">0{i + 1}</span>
                      <div>
                        <p className="text-white text-base mb-1">{step.title}</p>
                        <p className="text-white/50 text-sm leading-6">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30 mb-3">
                    Or read first
                  </p>
                  <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.14em]">
                    <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
                      GitHub ↗
                    </a>
                    <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
                      LinkedIn ↗
                    </a>
                    <a href={SITE.resume} download className="text-white/60 hover:text-white transition">
                      CV ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <Icon name="mail" size={24} />
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Email</h3>
              <a href={`mailto:${SITE.email}`} className="text-base text-gray-500 font-mono hover:text-black transition">
                {SITE.email}
              </a>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <Icon name="code" size={24} />
              </div>
              <h3 className="text-lg font-medium text-black mb-2">GitHub</h3>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 font-mono hover:text-black transition">
                github.com/{SITE.githubHandle} ↗
              </a>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <Icon name="location_on" size={24} />
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Location</h3>
              <p className="text-base text-gray-500 font-mono">{SITE.location} (WAT) · remote</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
