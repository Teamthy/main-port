import Link from "next/link";
import ProjectVisual from "../components/ProjectVisual";
import { BLOG_POSTS } from "../data/blogs";

export default function Blogs() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 lg:pb-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Writing</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.4px] mb-6 text-black">
              Notes from the <span className="italic">work</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              Six pieces on the parts that are easy to skip: what an evaluation can actually prove, why security
              gates die of noise, what survives a host crash, and why money should never be a float.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="flex flex-col lg:flex-row rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm">
              <div className="lg:w-1/2 overflow-hidden">
                <ProjectVisual
                  motif={featured.motif}
                  index="01"
                  caption={featured.category}
                  className="h-64 lg:h-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:w-1/2 p-7 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="font-mono text-xs text-gray-500">{featured.date}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="font-mono text-xs text-gray-500">{featured.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-medium text-black -tracking-[0.96px] leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px] mb-6">{featured.excerpt}</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black">
                  Read the piece →
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group h-full">
                <article className="rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm h-full flex flex-col">
                  <div className="overflow-hidden">
                    <ProjectVisual
                      motif={post.motif}
                      index={String(i + 2).padStart(2, "0")}
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
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-6 -tracking-[0.2px] flex-1">{post.excerpt}</p>
                    <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400 group-hover:text-black transition">
                      {post.readTime} →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
