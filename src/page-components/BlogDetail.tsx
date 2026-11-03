import Link from "next/link";
import ProjectVisual from "../components/ProjectVisual";
import Prose from "../components/Prose";
import { Avatar } from "../components/Portrait";
import Icon from "../components/Icon";
import { getRelatedPosts, type BlogPost } from "../data/blogs";
import { SITE } from "../data/site";

export default function BlogDetail({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Header */}
      <section className="pt-24 lg:pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{post.category}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-normal -tracking-[2.4px] mb-7 text-black leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Avatar size={40} />
            <div className="text-left">
              <p className="text-sm font-medium text-black">{SITE.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500">{SITE.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-7.5">
          <div className="overflow-hidden rounded-[20px]">
            <ProjectVisual
              motif={post.motif}
              index={String(post.id).padStart(2, "0")}
              caption={post.category}
              className="h-56 sm:h-[340px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-lg text-gray-700 leading-[1.8] -tracking-[0.2px]">
            {post.intro.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-xl text-black leading-[1.75]" : undefined}>
                <Prose text={paragraph} />
              </p>
            ))}

            {post.sections.map((section, i) => (
              <div key={i} className="space-y-5">
                {section.heading && (
                  <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-6">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j}>
                    <Prose text={paragraph} />
                  </p>
                ))}
              </div>
            ))}

            {post.outro.map((paragraph, i) => (
              <p key={`outro-${i}`} className="border-l-2 border-black pl-5 text-black">
                <Prose text={paragraph} />
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E9E9EA]">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-[#E9E9EA] text-sm font-mono text-[#1D1F2C]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap justify-between items-center gap-6">
            <Link
              href="/blogs"
              className="group inline-flex gap-2 items-center text-sm font-medium text-black font-mono uppercase hover:text-gray-600 transition"
            >
              <Icon name="arrow_back" size={20} />
              Back to writing
            </Link>
            <Link href="/research" className="font-mono text-sm uppercase text-gray-500 hover:text-black transition">
              The research behind this →
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.92px] text-black mb-12">
            Related <span className="italic">notes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link href={`/blog/${item.slug}`} key={item.id} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] bg-white overflow-hidden transition hover:border-black hover:shadow-sm h-full flex flex-col">
                  <div className="overflow-hidden">
                    <ProjectVisual
                      motif={item.motif}
                      index={String(item.id).padStart(2, "0")}
                      caption={item.category}
                      className="h-44 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase text-[#1D1F2C]">{item.category}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="font-mono text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight">{item.title}</h3>
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
