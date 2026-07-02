"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "../components/ArrowIcon";
import { IMAGES } from "../data/images";

const categories = ["All", "App Design", "SaaS", "Webflow Development"];

function getProjects() {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const year = new Date().getFullYear();
  const d = () => `${months[Math.floor(Math.random()*12)]} ${year}`;
  return [
    { id: 1, title: "Finance Management System", type: "WEB APP", date: d(), image: IMAGES.projects[0], category: "App Design" },
    { id: 2, title: "SaaS Dashboard UI", type: "WEB APP", date: d(), image: IMAGES.projects[1], category: "SaaS" },
    { id: 3, title: "Crypto Trading Platform", type: "WEB APP", date: d(), image: IMAGES.projects[2], category: "Webflow Development" },
    { id: 4, title: "E-commerce Redesign", type: "WEB APP", date: d(), image: IMAGES.projects[3], category: "App Design" },
    { id: 5, title: "Health & Fitness App", type: "MOBILE APP", date: d(), image: IMAGES.projects[4], category: "SaaS" },
    { id: 6, title: "Real Estate Portal", type: "WEB SITE", date: d(), image: IMAGES.projects[5], category: "Webflow Development" },
    { id: 7, title: "Banking App Interaction", type: "MOBILE APP", date: d(), image: IMAGES.projects[6], category: "App Design" },
    { id: 8, title: "Analytics Dashboard", type: "WEB APP", date: d(), image: IMAGES.projects[7], category: "SaaS" },
  ];
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const projects = useMemo(() => getProjects(), []);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <main>
      <section className="pt-15 lg:pt-30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black text-3xl sm:text-5xl font-normal -tracking-[1.92px] mb-16">
            Projects by <span className="italic">Olusanya Timothy</span>
          </h2>
          <div className="mb-12">
            <ul className="flex gap-3 flex-wrap">
              {categories.map(cat => (
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

        <div className="py-25 bg-black rounded-4xl min-h-[500px]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map(p => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover="hover"
                    className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950"
                  >
                    <h3 className="text-lg text-white -tracking-[0.2px]">
                      <Link href={`/portfolio/${p.id}`} className="hover:text-gray-300 transition">{p.title}</Link>
                    </h3>
                    <div className="flex py-6 text-white text-base justify-between font-mono">
                      <span>{p.type}</span>
                      <span>{p.date}</span>
                    </div>
                    <Link href={`/portfolio/${p.id}`} className="block overflow-hidden rounded-2xl">
                      <motion.img
                        variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        src={p.image}
                        alt={p.title}
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-25">
        <div className="max-w-[1440px] mx-auto px-7.5">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-normal text-white -tracking-[2.88px] leading-tight mb-6">
                Have a project in <span className="italic">mind?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">Let's discuss how we can help you bring your vision to life.</p>
              <Link href="/contact" className="group px-6 py-4.5 inline-flex gap-2 items-center bg-white text-sm font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-100 transition-all duration-300">
                <span className="font-mono uppercase">Book a Call</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
