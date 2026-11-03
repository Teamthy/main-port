"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import ProjectVisual from "../components/ProjectVisual";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "../data/projects";
import { SITE } from "../data/site";

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo<Project[]>(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === active)),
    [active],
  );

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="pt-16 lg:pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-black text-3xl sm:text-4xl font-normal -tracking-[2.4px] mb-5">
                Twelve projects, all <span className="italic">public</span>
              </h1>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                Four red-team harnesses, five product platforms and three backend builds. Every card links to
                the repository it came from, including the ones where the honest answer is “this is a request
                platform, not a checkout”.
              </p>
            </div>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline shrink-0"
            >
              <span>github.com/{SITE.githubHandle} ↗</span>
            </a>
          </div>

          <div className="mt-12">
            <ul className="flex gap-3 flex-wrap">
              {["All", ...PROJECT_CATEGORIES].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActive(category)}
                    aria-pressed={active === category}
                    className={`px-4 py-2.5 rounded-full text-sm font-mono -tracking-[0.2px] cursor-pointer transition border ${
                      active === category
                        ? "text-white border-transparent bg-black"
                        : "text-[#1D1F2C] border-[#E9E9EA] hover:border-black"
                    }`}
                  >
                    {category}
                    <span className={`ml-2 text-xs ${active === category ? "text-white/50" : "text-gray-400"}`}>
                      {category === "All"
                        ? PROJECTS.length
                        : PROJECTS.filter((project) => project.category === category).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {filtered.map((project) => (
              <article key={project.id} className="group flex flex-col">
                <Link href={`/portfolio/${project.slug}`} className="block overflow-hidden rounded-[18px]">
                  <ProjectVisual
                    motif={project.motif}
                    index={String(project.id).padStart(2, "0")}
                    caption={project.title}
                    className="h-60 sm:h-72 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500 mb-3">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl text-black -tracking-[0.5px] mb-1.5">
                    <Link href={`/portfolio/${project.slug}`} className="hover:text-gray-600 transition">
                      {project.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-sm text-gray-500 mb-4">{project.kicker}</p>
                  <p className="text-base text-gray-600 leading-7 mb-5 flex-1">{project.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#E9E9EA] px-3 py-1 font-mono text-[11px] text-[#1D1F2C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 border-t border-[#F0F0F1] pt-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                    <Link href={`/portfolio/${project.slug}`} className="text-black hover:text-gray-500 transition">
                      Case study →
                    </Link>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-black transition"
                    >
                      Repository ↗
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-[20px] border border-[#E9E9EA] bg-[#FBFBFB] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl text-black mb-2">Want the short version?</h2>
              <p className="text-base text-gray-600 leading-7">
                The CV collects the same work in one page, and the research page explains the method behind the
                four harnesses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={SITE.resume} download className="btn btn-primary group">
                <span>Download CV</span>
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link href="/research" className="btn btn-secondary uppercase">
                <span>Research</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
