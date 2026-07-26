import Link from "next/link";

const services = [
  {
    title: "Web App Development",
    desc: "I build scalable web applications using modern frameworks like React and Next.js, focusing on performance, accessibility, and security.",
    features: ["React & Next.js", "TypeScript", "Responsive UI", "Performance Optimization", "Accessibility"],
    icon: "web",
  },
  {
    title: "API Development",
    desc: "I design and implement robust REST and GraphQL APIs that power reliable backends and integrations.",
    features: ["REST & GraphQL", "Authentication & Authorization", "Scaling & Caching", "Postgres & NoSQL"],
    icon: "api",
  },
  {
    title: "AI Red Teaming",
    desc: "I perform adversarial testing, threat modeling, and robustness evaluations to surface and mitigate AI risks.",
    features: ["Adversarial Testing", "Threat Modeling", "Bias & Safety", "Robustness Evaluation"],
    icon: "api",
  },
  {
    title: "Maintenance & Growth",
    desc: "I provide ongoing maintenance, performance tuning, and feature delivery to help your product grow and stay reliable.",
    features: ["Monitoring & Alerting", "Performance Optimization", "Feature Iteration", "Security Patching"],
    icon: "growth",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "I start by understanding your goals, audience, and constraints to shape a clear technical direction." },
  { step: "02", title: "Strategy & Planning", desc: "I define the roadmap, technical architecture, and delivery plan aligned with your objectives." },
  { step: "03", title: "Design & Prototype", desc: "I deliver high-fidelity mockups and interactive prototypes, iterating with feedback." },
  { step: "04", title: "Development", desc: "I implement the product using industry best practices, with regular demos and code reviews." },
  { step: "05", title: "Testing & QA", desc: "I run comprehensive testing to ensure quality, performance, and reliability." },
  { step: "06", title: "Launch & Support", desc: "I deploy the product and provide ongoing support and growth work to keep it healthy." },
];

export default function Services() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Services I offer</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              End-to-end digital solutions for <span className="italic">modern businesses</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              From prototyping to production, I help build and secure systems that scale and deliver measurable value.
            </p>
          </div>
        </div>
      </section>


      {/* Services Detail */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((s, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-6/12">
                <div className="rounded-[20px] bg-[#FBFBFB] border border-[#E9E9EA] p-10 lg:p-14 h-full flex flex-col justify-center">
                  <span className="font-mono text-sm text-gray-500 uppercase mb-4 block">0{i + 1}</span>
                  <h3 className="text-2xl lg:text-3xl font-medium text-black -tracking-[0.96px] mb-4">{s.title}</h3>
                  <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">{s.desc}</p>
                </div>
              </div>
              <div className="lg:w-6/12">
                <div className="rounded-[20px] bg-black p-10 lg:p-14 h-full">
                  <h4 className="text-white text-lg font-medium mb-6">What's included</h4>
                  <ul className="space-y-4">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/80 text-base">
                        <svg className="w-5 h-5 text-white/60 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">My Process</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[2.88px] text-black">
              How I <span className="italic">work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
                <span className="font-mono text-4xl font-semibold text-gray-200 mb-6 block">{p.step}</span>
                <h3 className="text-lg font-medium text-black -tracking-[0.2px] mb-3">{p.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{p.desc}</p>
              </div>
            ))}
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
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">Let's discuss how I can help you bring your vision to life with the right technology and security posture.</p>
              <Link href="/contact" className="btn btn-secondary">
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
