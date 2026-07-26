import Link from "next/link";
import { getBlogPost, getRelatedPosts } from "../data/blogs";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = getBlogPost(Number(params.id));
  if (!post) return null; // guarded by notFound() in the route page

  const related = getRelatedPosts(post);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Header */}
      <section className="pt-15 lg:pt-30 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{post.category}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-sm font-medium">OT</div>
            <div className="text-left">
              <p className="text-sm font-medium text-black">Olusanya Timothy</p>
              <p className="text-xs text-gray-500">Software & AI Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12">
        <div className="max-w-[1440px] mx-auto px-7.5">
          <img src={post.image} alt={post.title} className="w-full rounded-[20px] h-64 sm:h-[400px] lg:h-[500px] object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-25">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-lg text-gray-700 leading-7 -tracking-[0.2px]">
            {post.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {post.sections.map((section, i) => (
              <div key={i} className="space-y-6">
                {section.heading && (
                  <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-4">{section.heading}</h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}

            {post.outro.map((para, i) => (
              <p key={`outro-${i}`}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E9E9EA]">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-[#E9E9EA] text-sm font-mono text-[#1D1F2C]">{tag}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link href="/blogs" className="group inline-flex gap-2 items-center text-sm font-medium text-black font-mono uppercase hover:text-gray-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12L12 19M5 12L12 5" /></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 sm:py-25 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-normal -tracking-[1.92px] text-black mb-12">
            Related <span className="italic">Articles</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link href={`/blog/${p.id}`} key={p.id} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] bg-white overflow-hidden transition hover:border-black hover:shadow-sm h-full">
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-52 object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase text-[#1D1F2C]">{p.category}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="font-mono text-xs text-gray-500">{p.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight">{p.title}</h3>
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
