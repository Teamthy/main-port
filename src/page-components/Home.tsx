"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { IMAGES } from "../data/images";

const clients = ["Spotify", "Slack", "Dropbox", "Airbnb", "Stripe", "Notion", "Linear"];
const marqueeItems = ["Web Development", "✦", "Mobile Apps", "✦", "UI/UX Design", "✦", "API Development", "✦", "Cloud Solutions", "✦", "Brand Strategy", "✦", "Product Design", "✦", "DevOps", "✦"];

const services = [
  { icon: "web", title: "Web App Development", desc: "We build scalable web applications using modern frameworks like React, Next.js, and Tailwind CSS." },
  { icon: "mobile", title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android with smooth, intuitive experiences." },
  { icon: "api", title: "API Development", desc: "Robust REST and GraphQL APIs that power your applications with security, speed, and reliability." },
  { icon: "growth", title: "Maintenance & Growth", desc: "Ongoing support, performance optimization, and feature development to keep your product growing." },
];

const projects = [
  { id: 1, title: "Finance Management System", type: "WEB APP", image: IMAGES.projects[0], category: "App Design" },
  { id: 2, title: "SaaS Dashboard UI", type: "WEB APP", image: IMAGES.projects[1], category: "SaaS" },
  { id: 3, title: "Crypto Trading Platform", type: "WEB APP", image: IMAGES.projects[2], category: "Webflow Development" },
  { id: 4, title: "E-commerce Redesign", type: "WEB APP", image: IMAGES.projects[3], category: "App Design" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechStart", quote: "Olusanya delivered a product that exceeded our expectations. The work understood our vision and built something truly exceptional.", initials: "SJ" },
  { name: "Michael Chen", role: "Founder, DataFlow", quote: "Working with Olusanya was a game-changer. He brought technical expertise and creative vision that transformed our platform.", initials: "MC" },
  { name: "Emily Rodriguez", role: "CTO, HealthSync", quote: "The project was delivered ahead of schedule. Attention to detail and commitment to quality was outstanding.", initials: "ER" },
];

const blogPosts = [
  { id: 1, title: "The Future of Web Development: Trends to Watch", category: "Development", date: "Jan 15, 2025", image: IMAGES.blog[0] },
  { id: 2, title: "Building Scalable Design Systems for Growing Teams", category: "Design", date: "Jan 10, 2025", image: IMAGES.blog[1] },
  { id: 3, title: "Why Your Startup Needs a Strong Digital Presence", category: "Strategy", date: "Jan 5, 2025", image: IMAGES.blog[2] },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "web") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M13.332 30H26.6654" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 25V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="8.33301" width="30" height="16.6667" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (type === "mobile") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="5" width="20" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 30H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  if (type === "api") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M15 13.333L8.33337 20L15 26.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 13.333L31.6667 20L25 26.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 8.33301L18 31.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 8.33301V31.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26.6667 13.333L20 8.33301L13.3334 13.333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.3334 20H6.66669" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="13.333" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  const dateStr = () => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return `${months[Math.floor(Math.random() * 12)]} ${new Date().getFullYear()}`;
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="pt-15 lg:pt-30 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-7/12 mb-10 lg:mb-0">
              <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
                I build software that's <span className="italic">fast & secure</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                I'm Olusanya Timothy — a software engineer specializing in backend systems, AI/ML engineering, and AI red teaming. I build and secure what matters.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/portfolio" className="group px-7 py-4 bg-black text-white font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gray-900 transition">
                    <span>Explore Projects</span>
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="px-7 py-4 border border-black text-sm font-mono uppercase tracking-wider rounded-full hover:bg-gray-50 transition">
                    Services
                  </Link>
              </div>
            </div>
            <div className="lg:w-5/12">
              <div className="relative">
                <img src={IMAGES.hero} alt="Team working" className="w-full rounded-[20px] object-cover" />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-medium border-2 border-white">J</div>
                      <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-medium border-2 border-white">A</div>
                      <div className="size-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white">M</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="bg-black py-6 overflow-hidden">
        <div className="flex flex-nowrap animate-infinite-scroll [&_li]:mx-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <li key={i} className="whitespace-nowrap text-base font-medium text-white/60 list-none font-mono">
              {item}
            </li>
          ))}
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500 text-center mb-8 font-mono uppercase tracking-wider">Trusted by leading companies</p>
          <div className="overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
            <div className="flex flex-nowrap animate-infinite-scroll [&_li]:mx-10">
              {[...clients, ...clients].map((brand, i) => (
                <li key={i} className="whitespace-nowrap text-2xl font-semibold text-black opacity-25 list-none -tracking-[0.5px]">
                  {brand}
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">What We Do</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[2.88px] text-black">
              Services we <span className="italic">offer</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link href="/services" key={i} className="group rounded-[20px] border border-[#E9E9EA] p-8 transition duration-300 hover:border-black hover:shadow-sm bg-white">
                <div className="mb-6 text-black">
                  <ServiceIcon type={s.icon} />
                </div>
                <h3 className="mb-3 text-lg font-medium text-black -tracking-[0.2px]">{s.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
              <Link href="/services" className="group px-7 py-4 border border-black text-sm font-mono uppercase tracking-wider rounded-full hover:bg-gray-50 transition">
                View All Services
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="lg:pt-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                Projects <span className="italic">by me</span>
            </h2>
          </div>
        </div>
        <div className="py-25 bg-black rounded-t-4xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {projects.map((p) => (
                <motion.article
                  key={p.id}
                  initial="initial"
                  whileHover="hover"
                  className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950"
                >
                  <h3 className="text-lg text-white -tracking-[0.2px]">
                    <Link href={`/portfolio/${p.id}`} className="hover:text-gray-300 transition">{p.title}</Link>
                  </h3>
                  <div className="flex py-6 text-white text-base justify-between font-mono">
                    <span>{p.type}</span>
                    <span>{dateStr()}</span>
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
            </div>
            <div className="mt-12">
                <Link href="/portfolio" className="group px-7 py-4 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition">
                  <span>Explore All Projects</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-6/12 mb-10 lg:mb-0">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">About</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black mb-6">
                We turn complex ideas into <span className="italic">elegant solutions</span>
              </h2>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-6">
                I build reliable web and mobile applications with a focus on security, scalability, and performance. I combine deep technical expertise with pragmatic design to deliver solutions that perform.
              </p>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-8">
                I work closely with clients to transform their vision into reality.
              </p>
              <Link href="/about" className="group px-6 py-4.5 inline-flex gap-2 items-center bg-black text-sm font-medium -tracking-[0.2px] leading-5 text-white rounded-full hover:bg-gray-900 transition-all duration-300">
                <span className="font-mono uppercase">Learn More</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:w-6/12">
              <div className="grid grid-cols-2 gap-6">
                  {[
                  { val: "200+", label: "Projects Delivered" },
                  { val: "50+", label: "Clients Served" },
                  { val: "98%", label: "Client Satisfaction" },
                  { val: "6+", label: "Years Experience" },
                ].map((s, i) => (
                  <div key={i} className="rounded-[20px] border border-[#E9E9EA] p-8">
                    <p className="text-4xl font-semibold text-black -tracking-[0.96px] mb-2">{s.val}</p>
                    <p className="text-base text-gray-500 font-mono">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
              What our clients <span className="italic">say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base text-black leading-7 -tracking-[0.2px] mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-black flex items-center justify-center text-white text-sm font-medium">{t.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-black">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div>
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Our Blog</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                Latest <span className="italic">insights</span>
              </h2>
            </div>
            <Link href="/blogs" className="mt-6 sm:mt-0 group px-6 py-4.5 inline-flex gap-2 items-center border border-black text-sm font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-50 transition-all duration-300 font-mono uppercase">
              View All Posts
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm">
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-52 object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{post.category}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="font-mono text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight">{post.title}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-[1440px] mx-auto px-7.5">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-mono text-sm uppercase text-white/60 -tracking-[0.18px] mb-5">Start a Project</p>
              <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-normal text-white -tracking-[2.88px] leading-tight mb-6">
                Ready to build something <span className="italic">amazing?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 -tracking-[0.2px] mb-10 max-w-xl mx-auto">
                Let's discuss your project and explore how we can help you build a digital product that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="group px-6 py-4.5 inline-flex gap-2 items-center bg-white text-sm font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-100 transition-all duration-300">
                  <span className="font-mono uppercase">Book a Call</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/portfolio" className="px-6 py-4.5 inline-flex items-center border border-[#1F1F1F] text-sm font-medium -tracking-[0.2px] leading-5 text-white rounded-full hover:bg-gray-900 transition font-mono uppercase">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
