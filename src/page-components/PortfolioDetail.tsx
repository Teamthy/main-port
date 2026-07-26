import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { getProject, getSimilarProjects, type Project } from "../data/projects";

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const project = getProject(Number(params.id));
  if (!project) return null; // guarded by notFound() in the route page

  const similar = getSimilarProjects(project);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Cover */}
      <section className="py-25 bg-black rounded-b-4xl">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-3xl sm:text-5xl font-normal -tracking-[2.88px] mb-6">{project.title}</h2>
          <img src={project.cover} alt={project.title} className="rounded-2xl w-full h-64 sm:h-96 object-cover" />
        </div>
      </section>

      {/* Details */}
      <section className="py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between gap-10 flex-col lg:flex-row">
            <div className="lg:w-5/12">
              <h3 className="text-2xl font-medium text-black -tracking-[0.96px] mb-3">Project Description</h3>
              {project.description.map((para, i) => (
                <p key={i} className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-5">
                  {para}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-[#E9E9EA] text-sm font-mono text-[#1D1F2C]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-5/12">
              <div className="grid grid-cols-2 gap-10 sm:gap-20">
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Published</h4>
                  <span className="text-lg font-mono text-black">{project.date}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Services</h4>
                  <span className="text-lg font-mono text-black">{project.service}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Industry</h4>
                  <span className="text-lg font-mono text-black">{project.industry}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Client</h4>
                  <span className="text-lg font-mono text-black">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-12 sm:pb-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="rounded-[20px] border border-[#E9E9EA] p-8">
                <p className="text-4xl font-semibold text-black -tracking-[0.96px] mb-2">{m.value}</p>
                <p className="text-base text-gray-500 font-mono">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Challenges</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              {project.challenges.map((para, i) => (
                <p key={i} className="text-lg text-black leading-7 -tracking-[0.2px]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Solutions</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              {project.solutions.map((para, i) => (
                <p key={i} className="text-lg text-black leading-7 -tracking-[0.2px]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Results</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              {project.results.map((para, i) => (
                <p key={i} className="text-lg text-black leading-7 -tracking-[0.2px]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-7.5 py-12 sm:py-25">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} preview ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[20px] h-64 sm:h-80 object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {/* Similar Projects */}
      <section className="lg:pt-30">
        <div className="py-25 bg-black rounded-t-4xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl sm:text-5xl font-normal -tracking-[2.88px] mb-16">
              Similar <span className="italic">Projects you may like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {similar.map((p: Project) => (
                <article key={p.id} className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950 group">
                  <h3 className="text-lg text-white -tracking-[0.2px] mb-6">
                    <Link href={`/portfolio/${p.id}`} className="hover:text-gray-300 transition">{p.title}</Link>
                  </h3>
                  <div className="flex py-6 text-white text-base justify-between font-mono mb-6">
                    <span>{p.type}</span>
                    <span>{p.date}</span>
                  </div>
                  <Link href={`/portfolio/${p.id}`} className="block overflow-hidden rounded-2xl">
                    <img src={p.image} alt={p.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                  </Link>
                </article>
              ))}
            </div>
            <Link href="/portfolio" className="btn btn-secondary group">
              <span>Explore All Projects</span>
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
