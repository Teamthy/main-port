import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import ProjectVisual from "../components/ProjectVisual";
import Prose from "../components/Prose";
import { getSimilarProjects, type Project } from "../data/projects";
import { SITE } from "../data/site";

function Section({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="border-t border-[#E9E9EA] pt-10 pb-10">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-gray-400 mb-3">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-normal text-black -tracking-[0.9px] mb-5">{title}</h2>
      <div className="space-y-5">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-lg text-gray-700 leading-8 -tracking-[0.2px]">
            <Prose text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioDetail({ project }: { project: Project }) {
  const similar = getSimilarProjects(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    codeRepository: project.repo,
    url: `${SITE.siteUrl}/portfolio/${project.slug}`,
    programmingLanguage: project.stack.join(", "),
    applicationCategory: project.category,
    dateCreated: project.year,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.siteUrl,
      sameAs: [SITE.github, SITE.linkedin],
    },
  };

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-14 lg:pb-20 bg-black rounded-b-4xl">
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
            <Link href="/portfolio" className="hover:text-white transition">
              Work
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{project.category}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#C7F24E] mb-4">
                {project.kicker} · {project.status}
              </p>
              <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl font-normal -tracking-[2.4px] mb-5">
                {project.title}
              </h1>
              <p className="text-lg text-white/60 leading-7 -tracking-[0.2px]">{project.tagline}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <span>Repository ↗</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-icon text-white border-white/20 hover:bg-white/10 uppercase"
                >
                  <span>Live site ↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] ring-1 ring-white/10">
            <ProjectVisual
              motif={project.motif}
              index={String(project.id).padStart(2, "0")}
              caption={`${project.title} · ${project.kicker}`}
              className="h-[260px] sm:h-[380px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[18px] border border-[#E9E9EA] p-6">
                <p className="text-3xl sm:text-4xl font-semibold text-black -tracking-[0.96px] mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500 leading-6 font-mono">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <div className="rounded-[18px] border border-[#E9E9EA] p-6 space-y-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1.5">Year</p>
                  <p className="font-mono text-base text-black">{project.year}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1.5">Category</p>
                  <p className="font-mono text-base text-black">{project.category}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1.5">Status</p>
                  <p className="font-mono text-base text-black">{project.status}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#E9E9EA] px-3 py-1 font-mono text-[11px] text-[#1D1F2C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#E9E9EA] pt-5 space-y-2.5">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm text-black hover:text-gray-500 transition"
                  >
                    Repository ↗
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-sm text-black hover:text-gray-500 transition"
                    >
                      Live site ↗
                    </a>
                  )}
                  <Link href="/contact" className="block font-mono text-sm text-black hover:text-gray-500 transition">
                    Talk about similar work →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Narrative */}
            <div className="lg:col-span-8">
              <section className="pb-10">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-gray-400 mb-3">Overview</p>
                <h2 className="text-2xl sm:text-3xl font-normal text-black -tracking-[0.9px] mb-5">
                  What it is
                </h2>
                <p className="text-lg text-gray-700 leading-8 -tracking-[0.2px]">
                  <Prose text={project.summary} />
                </p>
              </section>

              <Section eyebrow="01 / The problem" title="Why it needed building" paragraphs={project.problem} />
              <Section eyebrow="02 / The build" title="What I made" paragraphs={project.approach} />
              <Section eyebrow="03 / Verification" title="How you can check it" paragraphs={project.evidence} />

              <section className="border-t border-[#E9E9EA] pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-gray-400 mb-3">
                  04 / What stands out
                </p>
                <h2 className="text-2xl sm:text-3xl font-normal text-black -tracking-[0.9px] mb-6">
                  Engineering details
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-4">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-black" />
                      <span className="text-base sm:text-lg text-gray-700 leading-8">
                        <Prose text={highlight} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Similar */}
      <section className="lg:pt-0">
        <div className="py-20 sm:py-25 bg-black rounded-t-4xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <h2 className="text-white text-3xl sm:text-4xl font-normal -tracking-[2.4px]">
                Related <span className="italic">work</span>
              </h2>
              <Link href="/portfolio" className="btn btn-secondary group">
                <span>All projects</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {similar.map((item) => (
                <article key={item.id} className="group">
                  <Link href={`/portfolio/${item.slug}`} className="block overflow-hidden rounded-[18px]">
                    <ProjectVisual
                      motif={item.motif}
                      index={String(item.id).padStart(2, "0")}
                      caption={item.title}
                      className="h-48 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-lg text-white -tracking-[0.2px] mb-2">
                    <Link href={`/portfolio/${item.slug}`} className="hover:text-gray-300 transition">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-white/50 leading-6">{item.kicker}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
