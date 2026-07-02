"use client";

import { ChangeEvent, useState } from "react";

const calendar = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const firstDay = new Date(year, now.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);
  return { month, year, days, cells, today: now.getDate() };
};

function MiniCalendar() {
  const cal = calendar();
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white text-base font-medium">{cal.month} {cal.year}</h4>
        <div className="flex gap-2">
          <button className="text-white/60 hover:text-white transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="text-white/60 hover:text-white transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {cal.days.map(d => (
          <div key={d} className="text-center text-xs text-white/40 font-mono py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cal.cells.map((day, i) => (
          <div key={i} className={`text-center text-sm py-2 rounded-lg cursor-pointer transition ${day === cal.today ? "bg-white text-black font-medium" :
              day ? "text-white/80 hover:bg-white/10" : ""
            }`}>
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    alert("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", company: "", budget: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-15 lg:pt-30 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Contact</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              Let's discuss your <span className="italic">project</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              Tell us about your project and we'll schedule a discovery call to discuss timelines, budget, and the best approach.
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
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Budget</label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16 text-base w-full appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select budget</option>
                        <option value="under-5k">Under $5k</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="over-50k">$50k+</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#323544" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="px-8 py-4 rounded-3xl border border-[#E9E9EA] focus:outline-none focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 text-base w-full bg-white resize-none"
                  />
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="px-7 py-4.5 flex gap-2 items-center bg-black text-base font-medium -tracking-[0.2px] leading-5 text-white rounded-full hover:bg-gray-900 transition font-mono uppercase"
                  >
                    Book a Call
                  </button>
                </div>
              </div>
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
              <p className="text-base text-gray-500 font-mono">hi@olusanyatimothy.dev</p>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Call Us</h3>
              <p className="text-base text-gray-500 font-mono">+1 (555) 123-4567</p>
            </div>
            <div className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
              <div className="size-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Visit Us</h3>
              <p className="text-base text-gray-500 font-mono">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
