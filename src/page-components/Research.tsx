import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import TerminalCard from "../components/TerminalCard";
import { ENGAGEMENTS, PILLARS, REPORTING, RESEARCH_ARTIFACTS, STANDARDS } from "../data/research";

const LAYERS = [
  { name: "Attacks", state: "crowded", examples: "garak · PyRIT · promptfoo · DeepTeam · Giskard · AgentDojo" },
  { name: "Evals", state: "crowded", examples: "OpenAI Evals · DeepEval · Inspect AI · commercial platforms" },
  { name: "Taxonomy", state: "standardised", examples: "OWASP Agentic Top 10 · MITRE ATLAS · NIST AI RMF" },
  { name: "Evidence", state: "empty", examples: "what a stranger can re-derive without trusting the operator" },
];

export default function Research() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-4">
                Research practice · AI red team &amp; evaluation
              </p>
              <h1 className="text-4xl lg:text-6xl font-normal -tracking-[2.4px] mb-6 text-black leading-[1.05]">
                The report is a claim.
                <br />
                The bundle is <span className="italic">the record.</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] max-w-2xl">
                I build open harnesses for agent evaluation and red-team runs that emit evidence, not reports.
                Every verdict is bound, chained and re-derivable; every limit is written down as a named gap;
                the judge is measured instead of trusted.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-9">
                <Link href="#artefacts" className="btn btn-primary group">
                  <span>Four artefacts</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/blog/your-eval-passed-what-did-it-prove" className="btn btn-outline uppercase">
                  <span>Why evidence</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <TerminalCard />
            </div>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="py-16 sm:py-20 bg-black rounded-4xl mx-3 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-4">The gap</p>
            <h2 className="text-3xl sm:text-4xl font-normal text-white -tracking-[1.6px] mb-5">
              Three layers are crowded. The fourth is <span className="italic">empty.</span>
            </h2>
            <p className="text-lg text-white/60 leading-7">
              Every tool uses a judge that lives inside the tool, the evaluator and the evaluated share an
              operator, and a green eval from such a tool is a self-grade. What is missing is an artefact that
              survives contact with a stranger.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.name}
                className={`rounded-[16px] border p-6 ${
                  layer.state === "empty"
                    ? "border-[#C7F24E]/50 bg-[#C7F24E]/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                    0{i + 1}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                      layer.state === "empty" ? "text-[#C7F24E]" : "text-white/30"
                    }`}
                  >
                    {layer.state}
                  </span>
                </div>
                <h3 className={`text-lg mb-3 ${layer.state === "empty" ? "text-[#C7F24E]" : "text-white"}`}>
                  {layer.name}
                </h3>
                <p className="text-sm text-white/50 leading-6">{layer.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artefacts */}
      <section id="artefacts" className="py-20 sm:py-25 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Artefacts</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black mb-5">
              Four harnesses, one <span className="italic">discipline</span>
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Each one is runnable from a cold clone, and each one is explicit about what it does not prove —
              because a suite that cannot state its limits is reporting its own confidence, not the system's
              behaviour.
            </p>
          </div>

          <div className="space-y-6">
            {RESEARCH_ARTIFACTS.map((artifact, i) => (
              <article key={artifact.name} className="rounded-[20px] border border-[#E9E9EA] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 bg-[#FAFAFA] p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#E9E9EA]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-gray-400">0{i + 1}</span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-400">
                        {artifact.status}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl text-black mb-4">{artifact.name}</h3>
                    <p className="text-lg text-black leading-7 mb-6">{artifact.doctrine}</p>
                    <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em]">
                      <Link href={`/portfolio/${artifact.slug}`} className="text-black hover:text-gray-500 transition">
                        Case study →
                      </Link>
                      <a
                        href={artifact.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition"
                      >
                        Repository ↗
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
                    <p className="text-base text-gray-700 leading-7 mb-5">{artifact.what}</p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                          What it proves
                        </p>
                        <p className="text-base text-gray-700 leading-7">{artifact.proves}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                          What it does not prove
                        </p>
                        <p className="text-base text-gray-600 leading-7">{artifact.doesNotProve}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Method</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black mb-5">
              Six pillars, all in <span className="italic">code</span>
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              The doctrine behind tieout. They are requirements rather than aspirations: each one is
              implemented, tested and visible in the output of a run.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="rounded-[18px] border border-[#E9E9EA] bg-white p-7">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs text-gray-400">{pillar.id}</span>
                  <h3 className="text-lg font-medium text-black -tracking-[0.2px]">{pillar.title}</h3>
                </div>
                <p className="text-base text-gray-600 leading-7">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">
                Reporting rules
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.6px] text-black mb-6">
                How a run is <span className="italic">written up</span>
              </h2>
              <p className="text-lg text-gray-700 leading-7 mb-8">
                The same rules apply whether the run is a two-week audit or a CI gate: a number without a
                denominator is a mood, and a limitation nobody wrote down becomes someone else's assumption.
              </p>
              <div className="rounded-[18px] border border-[#E9E9EA] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-3">
                  Standards referenced
                </p>
                <ul className="space-y-2">
                  {STANDARDS.map((standard) => (
                    <li key={standard} className="font-mono text-sm text-[#1D1F2C]">
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-[#E9E9EA] border-y border-[#E9E9EA]">
                {REPORTING.map((rule, i) => (
                  <li key={rule} className="flex gap-6 py-6">
                    <span className="font-mono text-xs text-gray-400 pt-1">0{i + 1}</span>
                    <p className="text-lg text-gray-700 leading-7">{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">
              Work with me
            </p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
              Three ways to <span className="italic">start</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ENGAGEMENTS.map((engagement) => (
              <div key={engagement.title} className="rounded-[20px] border border-[#E9E9EA] p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-medium text-black -tracking-[0.2px]">{engagement.title}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-400">
                    {engagement.length}
                  </span>
                </div>
                <p className="text-base text-gray-600 leading-7 mb-6 flex-1">{engagement.body}</p>
                <ul className="space-y-2.5 border-t border-[#E9E9EA] pt-5">
                  {engagement.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700 leading-6">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="btn btn-primary group">
              <span>Talk about a run</span>
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
