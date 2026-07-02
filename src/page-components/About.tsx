import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { IMAGES } from "../data/images";

const values = [
  { title: "Quality First", desc: "We never cut corners. Every line of code and every pixel is crafted with care and attention to detail." },
  { title: "Collaboration", desc: "We work alongside our clients as partners, keeping communication open and transparent at every stage." },
  { title: "Innovation", desc: "We stay ahead of the curve, embracing new technologies and approaches to deliver cutting-edge solutions." },
  { title: "Results Driven", desc: "We focus on outcomes that matter — growth, engagement, and measurable impact for your business." },
];

const team = [
  { name: "Olusanya Timothy", role: "Software & AI Engineer", img: IMAGES.team[0] },
  { name: "Open-source Contributor", role: "Collaborator", img: IMAGES.team[1] },
  { name: "Independent Consultant", role: "Advisor", img: IMAGES.team[2] },
  { name: "Freelance Designer", role: "Design Partner", img: IMAGES.team[3] },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-15 lg:pt-30 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">About</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              I'm a software engineer and <span className="italic">problem solver</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              I'm a software & AI engineer specializing in backend systems, AI/ML engineering, and AI red teaming. I help teams build and secure systems that power products.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-20">
        <div className="max-w-[1440px] mx-auto px-7.5">
          <img src={IMAGES.hero} alt="Olusanya Timothy" className="w-full rounded-[20px] h-[400px] lg:h-[500px] object-cover" />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[2.88px] text-black">
                Built on passion for <span className="italic">great products</span>
              </h2>
            </div>
            <div className="lg:w-7/12 space-y-5">
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                I started building software professionally in 2018 with a simple mission: to help teams design and operate systems that truly matter. Over the years I've worked across startups and enterprise projects, focusing on reliable architecture and pragmatic delivery.
              </p>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                Over the years, we've partnered with startups, scale-ups, and enterprise companies across fintech, healthcare, e-commerce, and SaaS. Our approach combines deep technical expertise with creative design thinking to deliver solutions that don't just look beautiful — they perform exceptionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-25 bg-black rounded-4xl mx-4 sm:mx-6 lg:mx-7.5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
              { val: "200+", label: "Projects Delivered" },
              { val: "50+", label: "Clients Served" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "6+", label: "Years Experience" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-semibold text-white -tracking-[1.92px] mb-2">{s.val}</p>
                <p className="text-base text-white/60 font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[2.88px] text-black">
              What <span className="italic">drives us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-[20px] border border-[#E9E9EA] p-8">
                <span className="font-mono text-4xl font-semibold text-gray-200 mb-6 block">0{i + 1}</span>
                <h3 className="text-lg font-medium text-black -tracking-[0.2px] mb-3">{v.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[2.88px] text-black">
              Meet the <span className="italic">people</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="rounded-[20px] border border-[#E9E9EA] bg-white overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black -tracking-[0.2px]">{m.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">{m.role}</p>
                </div>
              </div>
            ))}
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
                Want to work <span className="italic">with us?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">Let's discuss your project and see how I can help bring your vision to life.</p>
              <Link href="/contact" className="group px-6 py-4.5 inline-flex gap-2 items-center bg-white text-sm font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-100 transition-all duration-300">
                <span className="font-mono uppercase">Get in Touch</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
