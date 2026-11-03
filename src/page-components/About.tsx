import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import GitHubSignal from "../components/GitHubSignal";
import { Avatar, PortraitFigure } from "../components/Portrait";
import { NDA_NOTE, PRINCIPLES, SITE, STACK } from "../data/site";
import Icon from "../components/Icon";

const timeline = [
  {
    period: "2026 to now",
    title: "Verification-forward AI security",
    body: "tieout, gatecheck, host-failure-benchmark and ai-redteam-five-tests: four public harnesses for evidence, regression gating, crash consistency and the boring failures. Built, audited and documented in the open.",
    href: "/research",
  },
  {
    period: "2026",
    title: "Product platforms in Go and TypeScript",
    body: "EduMart OS, Famex OS, YK Virtual, I CONFESS and CDRL: school systems, a tutoring marketplace, an audio habit platform and a risk consultancy, each with a contract, a database model and a CI gate of its own.",
    href: "/portfolio",
  },
  {
    period: "2026",
    title: "Client backends and request platforms",
    body: "AssetFlow's multi-tenant fixed-asset API and Olasco Autos' request-led vehicle platform: RBAC, branch scoping, Zod-validated intake and a WhatsApp handoff that does not promise what the business cannot confirm.",
    href: "/portfolio",
  },
  {
    period: "Continuous",
    title: "The unglamorous layer",
    body: "Contracts checked in both directions, ledgers in integer kobo, row-level security, dead-letter queues, observability and runbooks. The work that decides whether the demo survives its first real month.",
    href: "/services",
  },
];

export default function About() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">About</p>
              <h1 className="text-3xl lg:text-4xl font-normal -tracking-[2.4px] mb-6 text-black">
                I build the product, then try to <span className="italic">break the claim</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-5">
                I am Olusanya Timothy, a software engineer in Lagos. I have been shipping software since 2024,
                mostly in Go, TypeScript, Node.js, JavaScript and Python, across two things that turn out to be
                the same thing: production platforms, and the evaluation infrastructure that decides whether an
                AI system actually held.
              </p>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-5">
                The work spans school operating systems and marketplaces, financial ledgers, computer-vision
                pipelines and public red-team harnesses. What connects them is a preference for claims that can
                be checked: a contract that fails the build, a ledger that cannot be unbalanced, a bundle a
                stranger can re-derive.
              </p>
              <p className="text-base text-gray-600 leading-7 -tracking-[0.2px] mb-8 border-l-2 border-black pl-5">
                {NDA_NOTE}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href={SITE.resume} download className="btn btn-primary group">
                  <span>Download CV</span>
                  <Icon name="download" size={18} />
                </a>
                <Link href="/contact" className="btn btn-outline uppercase">
                  <span>Work with me</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PortraitFigure
                caption="Olusanya Timothy · software engineer, Lagos"
                priority
              />
              <div className="mt-6 rounded-[24px] bg-[#0A0A0B] p-8 ring-1 ring-white/10">
                <div className="flex items-center gap-4 mb-7">
                  <Avatar size={56} tone="dark" className="ring-white/20" />
                  <div>
                    <p className="text-white text-lg">{SITE.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 mt-1">
                      {SITE.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  {[
                    { label: "Based", value: SITE.location },
                    { label: "Focus", value: "AI evaluation · agent security · Go platforms" },
                    { label: "Writes", value: "Python harnesses, Go services, TypeScript interfaces" },
                    { label: "Believes", value: "A named gap beats a green bundle" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4">
                      <span className="w-[7ch] shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 pt-0.5">
                        {row.label}
                      </span>
                      <span className="text-sm text-white/70 leading-6">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-2 gap-2 border-t border-white/10 pt-6">
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-3 py-2 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 hover:border-white/30 hover:text-white transition"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-3 py-2 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-white/60 hover:border-white/30 hover:text-white transition"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-black rounded-4xl mx-3 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-3">Trajectory</p>
            <h2 className="text-3xl sm:text-4xl font-normal text-white -tracking-[1.92px]">
              What I have been <span className="italic">building</span>
            </h2>
          </div>
          <ol className="space-y-0">
            {timeline.map((item) => (
              <li key={item.title} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-t border-white/10 py-8 first:border-t-0 first:pt-0">
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#C7F24E]">
                    {item.period}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-base text-white/55 leading-7">{item.body}</p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <Link
                    href={item.href}
                    className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50 hover:text-white transition"
                  >
                    Explore →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Principles</p>
            <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.92px] text-black">
              What <span className="italic">drives the work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.title} className="rounded-[20px] border border-[#E9E9EA] p-8">
                <span className="font-mono text-4xl font-semibold text-gray-200 mb-6 block">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-medium text-black -tracking-[0.2px] mb-3">{principle.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + GitHub */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Stack</p>
              <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.6px] text-black mb-8">
                Technologies I <span className="italic">use</span>
              </h2>
              <div className="space-y-6">
                {STACK.slice(0, 4).map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-2">
                      {group.group}
                    </p>
                    <p className="text-base text-gray-700 leading-7">{group.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Elsewhere</p>
              <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.6px] text-black mb-8">
                Working in the <span className="italic">open</span>
              </h2>
              <GitHubSignal />
              <div className="mt-6 rounded-[18px] border border-[#E9E9EA] bg-white p-6">
                <p className="text-base text-gray-600 leading-7">
                  The most reliable way to judge the work is to read it. Every project links to its repository,
                  and the research harnesses run from a cold clone with no credentials.
                </p>
                <div className="mt-4 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition">
                    GitHub ↗
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition">
                    LinkedIn ↗
                  </a>
                  <a href={`mailto:${SITE.email}`} className="text-black hover:text-gray-500 transition">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-7.5">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-normal text-white -tracking-[2.4px] leading-tight mb-6">
                Want to work <span className="italic">together?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">
                Audits, product builds and long-term engineering. The first reply is a scope and a set of
                questions, not a pitch deck.
              </p>
              <Link href="/contact" className="btn btn-icon btn-secondary group">
                <span className="font-mono uppercase">Get in touch</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
