import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import ProjectVisual from "../components/ProjectVisual";
import TerminalCard from "../components/TerminalCard";
import GitHubSignal from "../components/GitHubSignal";
import { PortraitFigure } from "../components/Portrait";
import { PROJECTS, FEATURED_PROJECT_IDS } from "../data/projects";
import { RESEARCH_ARTIFACTS } from "../data/research";
import { BLOG_POSTS } from "../data/blogs";
import { CAPABILITIES, PRINCIPLES, SITE } from "../data/site";

const marqueeItems = [
  "Evidence over reports",
  "✦",
  "Named gaps beat green bundles",
  "✦",
  "Block on regression",
  "✦",
  "Contracts fail the build",
  "✦",
  "Money in kobo",
  "✦",
  "No model · no key · no network",
  "✦",
];

const tools = [
  "Go",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Next.js",
  "chi",
  "Prisma",
  "Drizzle",
  "Redis",
  "Docker",
  "OpenTelemetry",
  "Prometheus",
  "ONNX",
  "Expo",
  "GitHub Actions",
  "Vercel",
];

/** Service icons kept from the previous design system. */
function CapabilityIcon({ id }: { id: string }) {
  if (id === "red-team")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 5L32 10V18C32 25.5 26.8 32.3 20 35C13.2 32.3 8 25.5 8 18V10L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 20L18.5 23.5L25 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (id === "platform")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="5" y="8.333" width="30" height="16.667" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M13.332 30H26.665M20 25V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13.333" stroke="currentColor" strokeWidth="2" />
      <path d="M20 8.333V31.666M26.667 13.333L20 8.333L13.333 13.333M33.333 20H6.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const featured = FEATURED_PROJECT_IDS.map((id) => PROJECTS.find((project) => project.id === id)).filter(
    (project): project is NonNullable<typeof project> => Boolean(project),
  );
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* ===== HERO ===== */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#1D1F2C] mb-6">
                {SITE.role} · {SITE.city}, NG
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal -tracking-[2.4px] mb-6 text-black leading-[1.05]">
                I build the system,
                <br />
                then try to <span className="italic">break it.</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] max-w-xl">
                {SITE.shortBio}
              </p>
              <p className="mt-4 text-base text-gray-500 leading-7 max-w-xl">
                Go and TypeScript platforms in production. Red-team harnesses that emit evidence instead of
                reports. Both are the same job: making sure the thing you claim is the thing that runs.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
                <Link href="/portfolio" className="btn btn-primary group">
                  <span>See the work</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/research" className="btn btn-outline uppercase">
                  <span>Read the research</span>
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-gray-500">
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                  github.com/{SITE.githubHandle}
                </a>
                <span className="text-gray-300">/</span>
                <span>Open to audits and contract builds</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <TerminalCard />
            </div>
          </div>

          {/* Tools strip */}
          <div className="mt-16 lg:mt-20">
            <p className="text-xs text-gray-400 mb-6 font-mono uppercase tracking-wider">
              The tools behind the work
            </p>
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex flex-nowrap animate-infinite-scroll [&_li]:mx-8">
                {[...tools, ...tools].map((tool, i) => (
                  <li
                    key={i}
                    className="whitespace-nowrap text-xl sm:text-2xl font-medium text-black opacity-25 list-none -tracking-[0.5px]"
                  >
                    {tool}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="bg-black py-6 overflow-hidden">
        <ul className="flex flex-nowrap animate-infinite-scroll [&_li]:mx-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <li key={i} className="whitespace-nowrap text-base font-medium text-white/60 list-none font-mono">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== RESEARCH ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">
                Research practice
              </p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                The report is a claim. <span className="italic">Evidence is the gap.</span>
              </h2>
              <p className="mt-5 text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                Attacks and evals are commoditised. The missing layer is evidence: an artefact a stranger can
                re-derive without trusting the tool, the judge or the team that ran it. Four open-source
                harnesses work on that problem.
              </p>
            </div>
            <Link href="/research" className="btn btn-outline group shrink-0">
              <span>Read the research</span>
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_ARTIFACTS.map((artifact, i) => (
              <Link
                key={artifact.name}
                href={`/portfolio/${artifact.slug}`}
                className="group rounded-[20px] border border-[#E9E9EA] bg-white p-8 transition duration-300 hover:border-black hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="font-mono text-xs text-gray-400">0{i + 1}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-400">
                    {artifact.status}
                  </span>
                </div>
                <h3 className="font-mono text-xl text-black mb-3">{artifact.name}</h3>
                <p className="text-base text-gray-700 leading-7 -tracking-[0.2px] mb-6">{artifact.doctrine}</p>
                <div className="flex items-center justify-between border-t border-[#F0F0F1] pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
                    {artifact.what.split(":")[0]}
                  </span>
                  <span className="text-black transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">
                Selected work
              </p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                Shipped, not <span className="italic">screenshotted</span>
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-outline uppercase">
              All twelve projects
            </Link>
          </div>
        </div>

        <div className="py-20 sm:py-25 bg-black rounded-t-4xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featured.map((project) => (
                <article key={project.id} className="group">
                  <Link href={`/portfolio/${project.slug}`} className="block overflow-hidden rounded-[18px]">
                    <ProjectVisual
                      motif={project.motif}
                      index={String(project.id).padStart(2, "0")}
                      caption={project.title}
                      className="h-56 sm:h-64 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="pt-6">
                    <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl text-white -tracking-[0.2px] mb-2">
                      <Link href={`/portfolio/${project.slug}`} className="hover:text-gray-300 transition">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-base text-white/60 leading-7 mb-5">{project.summary}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
                      <Link href={`/portfolio/${project.slug}`} className="text-white/80 hover:text-[#C7F24E] transition">
                        Case study →
                      </Link>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition"
                      >
                        Repository ↗
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white transition"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-14">
              <Link href="/portfolio" className="btn btn-secondary group">
                <span>Explore all projects</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">What I do</p>
            <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
              Three kinds of <span className="italic">work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability) => (
              <Link
                key={capability.id}
                href="/services"
                className="group rounded-[20px] border border-[#E9E9EA] p-8 transition duration-300 hover:border-black hover:shadow-sm bg-white flex flex-col"
              >
                <div className="mb-6 text-black">
                  <CapabilityIcon id={capability.id} />
                </div>
                <h3 className="mb-3 text-lg font-medium text-black -tracking-[0.2px]">{capability.title}</h3>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px] flex-1">{capability.short}</p>
                <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 group-hover:text-black transition">
                  What you get →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT + GITHUB ===== */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">About</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black mb-6">
                I care about what <span className="italic">survives</span>
              </h2>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-5">
                I work in Lagos, building products for Nigerian schools, churches, marketplaces and
                consultancies — and building the verification around them, because “it works on my machine” is
                not a claim anyone can audit.
              </p>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-8">
                My research practice grew out of a specific frustration: evaluations that could not be checked,
                audit logs that could not be trusted, and security tools that report everything until nobody
                reads them.
              </p>
              <ul className="space-y-5 mb-8">
                {PRINCIPLES.slice(0, 3).map((principle) => (
                  <li key={principle.title} className="border-l-2 border-black pl-5">
                    <p className="text-base font-medium text-black mb-1">{principle.title}</p>
                    <p className="text-base text-gray-600 leading-7">{principle.body}</p>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary btn-icon group">
                <span className="font-mono uppercase">More about me</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-8">
              <PortraitFigure
                className="w-full max-w-[380px]"
                caption="Olusanya Timothy · Lagos, NG"
              />
              <GitHubSignal />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WRITING ===== */}
      <section className="py-20 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
            <div>
              <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Writing</p>
              <h2 className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black">
                Notes from the <span className="italic">work</span>
              </h2>
            </div>
            <Link href="/blogs" className="btn btn-outline btn-icon group uppercase">
              <span>All notes</span>
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm h-full flex flex-col">
                  <div className="overflow-hidden">
                    <ProjectVisual
                      motif={post.motif}
                      index={String(post.id).padStart(2, "0")}
                      caption={post.category}
                      className="h-44 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="font-mono text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight">{post.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 leading-6">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-7.5">
          <div className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700 rounded-full opacity-25 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-mono text-sm uppercase text-white/60 -tracking-[0.18px] mb-5">Start here</p>
              <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-normal text-white -tracking-[2.88px] leading-tight mb-6">
                Test the claims, or <span className="italic">build the thing</span>
              </h2>
              <p className="text-base text-white/60 leading-7 -tracking-[0.2px] mb-10 max-w-xl mx-auto">
                If you have an agent in production and no idea what it does under pressure, that is a two-week
                audit. If you have a product to build and want the contracts and failure paths right the first
                time, that is a build engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-icon btn-secondary group">
                  <span className="font-mono uppercase">Start a conversation</span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={SITE.resume}
                  download
                  className="btn btn-outline btn-icon group uppercase text-white border-[#1F1F1F] hover:bg-gray-900"
                >
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
