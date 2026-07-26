"use client";

import { useState } from "react";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="pt-16 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black text-3xl sm:text-5xl font-normal -tracking-[1.92px] mb-16">
            Projects by <span className="italic">Olusanya Timothy</span>
          </h2>
          <div className="mb-12">
            <ul className="flex gap-3 flex-wrap">
              {["All", ...PROJECT_CATEGORIES].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2.5 rounded-full text-base font-mono font-normal -tracking-[0.32px] cursor-pointer transition relative border ${active === cat ? "text-white border-transparent bg-black" : "text-[#1D1F2C] border-[#E9E9EA] hover:border-black"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-24 bg-black rounded-4xl min-h-[500px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950 transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="text-lg text-white -tracking-[0.2px]">
                    <Link href={`/portfolio/${p.id}`} className="hover:text-gray-300 transition">{p.title}</Link>
                  </h3>
                  <div className="flex py-6 text-white text-base justify-between font-mono">
                    <span>{p.type}</span>
                    <span>{p.date}</span>
                  </div>
                  <Link href={`/portfolio/${p.id}`} className="block overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-normal text-white -tracking-[2.88px] leading-tight mb-6">
                Have a project in <span className="italic">mind?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">Let's discuss how I can help you bring your vision to life.</p>
              <Link href="/contact" className="btn btn-icon btn-secondary group">
                <span>Book a Call</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
