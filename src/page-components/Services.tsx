import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { CAPABILITIES, PRINCIPLES, SITE, STACK } from "../data/site";

const process = [
  {
    step: "01",
    title: "Scope the claim",
    desc: "What are we trying to be able to say, and to whom? A number for a dashboard, a bundle for a reviewer and a gate for CI are three different deliverables.",
  },
  {
    step: "02",
    title: "Find the failure that matters",
    desc: "I write the tests before the code: the input classes, the known-broken controls, and the specific way this system is most likely to be wrong.",
  },
  {
    step: "03",
    title: "Build the boundary",
    desc: "Contracts, sessions, ledgers and permissions are enforced where they cannot be skipped — in the schema, the router and the CI check rather than in a code review habit.",
  },
  {
    step: "04",
    title: "Make it verifiable",
    desc: "Every deliverable ships with a command, a baseline or a document that lets someone who was not in the room check the result without taking my word for it.",
  },
  {
    step: "05",
    title: "Hand over the runbook",
    desc: "Repository, documentation, deployment notes and the honest limits. If a thing is unverified, that is written down, not left for you to discover.",
  },
];

const engagements = [
  {
    title: "Audit",
    detail: "Fixed scope, 1–2 weeks, written report plus raw artefacts.",
    href: "/research",
  },
  {
    title: "Build",
    detail: "Product or platform delivery in Go and TypeScript, milestone by milestone.",
    href: "/portfolio",
  },
  {
    title: "Long-term",
    detail: "Ongoing engineering and verification support for a team that already ships.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">
                Services
              </p>
              <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.4px] mb-6 text-black">
                Build it, then prove it <span className="italic">holds</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] max-w-2xl">
                I work in three modes: adversarial testing of AI systems, engineering of the platforms around
                them, and the verification layer that makes both claims checkable. Most engagements combine at
                least two.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-10">
              <div className="rounded-[18px] border border-[#E9E9EA] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-3">
                  Based in
                </p>
                <p className="text-base text-black mb-4">{SITE.location} · working remotely</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-2">
                  Best fit
                </p>
                <p className="text-base text-gray-600 leading-6">
                  Teams shipping agents or financial software who need an engineer that writes the failure
                  tests too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 sm:py-20 bg-black rounded-4xl mx-3 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-3">Capabilities</p>
            <h2 className="text-3xl sm:text-5xl font-normal text-white -tracking-[1.92px]">
              What I actually <span className="italic">do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, i) => (
              <div key={capability.id} className="rounded-[20px] border border-white/10 bg-white/[0.02] p-8 flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30 mb-5">
                  0{i + 1}
                </span>
                <h3 className="text-xl text-white mb-4">{capability.title}</h3>
                <p className="text-base text-white/60 leading-7 mb-6">{capability.detail}</p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30 mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {capability.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-white/70 leading-6">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-[#C7F24E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Process</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                Five steps, no <span className="italic">theatre</span>
              </h2>
            </div>
            <p className="text-base text-gray-600 leading-7 max-w-sm">
              No discovery deck that could have been written before I met you. Scope, tests, build, verification,
              handover.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <div key={item.step} className="rounded-[20px] border border-[#E9E9EA] bg-white p-8">
                <span className="font-mono text-4xl font-semibold text-gray-200 mb-6 block">{item.step}</span>
                <h3 className="text-lg font-medium text-black -tracking-[0.2px] mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Principles</p>
              <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.6px] text-black mb-6">
                How I <span className="italic">work</span>
              </h2>
              <p className="text-lg text-gray-700 leading-7 mb-8">
                These are the rules that survive a deadline. They are also the reason a deliverable is worth
                reading after the meeting.
              </p>
              <div className="rounded-[18px] border border-[#E9E9EA] bg-white p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-3">
                  Engagement shapes
                </p>
                <ul className="space-y-4">
                  {engagements.map((engagement) => (
                    <li key={engagement.title}>
                      <Link href={engagement.href} className="group block">
                        <span className="font-mono text-sm text-black group-hover:underline underline-offset-4">
                          {engagement.title}
                        </span>
                        <span className="block text-sm text-gray-500 leading-6 mt-0.5">{engagement.detail}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-[#E9E9EA] border-y border-[#E9E9EA]">
                {PRINCIPLES.map((principle) => (
                  <li key={principle.title} className="py-7">
                    <h3 className="text-lg font-medium text-black mb-2">{principle.title}</h3>
                    <p className="text-base text-gray-600 leading-7">{principle.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Stack</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
              Tools I reach <span className="italic">for</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STACK.map((group) => (
              <div key={group.group} className="rounded-[18px] border border-[#E9E9EA] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-4">
                  {group.group}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[#1D1F2C] leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-7.5">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">Next step</p>
              <h2 className="text-3xl sm:text-5xl font-normal text-white -tracking-[2.4px] leading-tight mb-6">
                Have a system worth <span className="italic">checking?</span>
              </h2>
              <p className="text-base text-white/60 leading-7 mb-10 max-w-xl mx-auto">
                Tell me what it does, who depends on it, and what you would not want to find out in production.
                I will reply with a scope, not a brochure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-icon btn-secondary group">
                  <span className="font-mono uppercase">Start a conversation</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/research"
                  className="btn btn-outline btn-icon group uppercase text-white border-[#1F1F1F] hover:bg-gray-900"
                >
                  <span>See the method</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
