import Link from "next/link";
import { IMAGES } from "../data/images";

const posts = [
  { id: 1, title: "The Future of Web Development: Trends to Watch", category: "Development", date: "Jan 15, 2025", image: IMAGES.blog[0], excerpt: "Explore the latest trends shaping the future of web development, from AI-powered tools to edge computing." },
  { id: 2, title: "Building Scalable Design Systems for Growing Teams", category: "Design", date: "Jan 10, 2025", image: IMAGES.blog[1], excerpt: "Learn how design systems can streamline your product development process and ensure consistency." },
  { id: 3, title: "Why Your Startup Needs a Strong Digital Presence", category: "Strategy", date: "Jan 5, 2025", image: IMAGES.blog[2], excerpt: "Key technical decisions every startup founder should consider when building products for growth." },
  { id: 4, title: "React vs Next.js: Choosing the Right Framework", category: "Development", date: "Dec 28, 2024", image: IMAGES.blog[3], excerpt: "A comprehensive comparison of React and Next.js to help you pick the best tool for your project." },
  { id: 5, title: "Mobile-First Design: Best Practices for 2025", category: "Design", date: "Dec 20, 2024", image: IMAGES.blog[4], excerpt: "Essential mobile-first design strategies that deliver great user experiences across all devices." },
  { id: 6, title: "API Architecture Patterns for Modern Applications", category: "Development", date: "Dec 15, 2024", image: IMAGES.blog[5], excerpt: "Explore the most effective API architecture patterns for building robust, scalable applications." },
];

export default function Blogs() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-16 lg:pt-32 lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3">Blog</p>
            <h1 className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black">
              Insights & articles from <span className="italic">me</span>
            </h1>
            <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
              Thoughts on design, development, and building great digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link href={`/blog/${posts[0].id}`} className="group block">
            <article className="flex flex-col lg:flex-row gap-8 rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm">
              <div className="lg:w-7/12 overflow-hidden">
                <img src={posts[0].image} alt={posts[0].title} className="w-full h-64 lg:h-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="lg:w-5/12 p-6 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{posts[0].category}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="font-mono text-xs text-gray-500">{posts[0].date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-medium text-black -tracking-[0.96px] leading-tight mb-4">{posts[0].title}</h2>
                <p className="text-base text-gray-600 leading-7 -tracking-[0.2px]">{posts[0].excerpt}</p>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] overflow-hidden transition hover:border-black hover:shadow-sm h-full">
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-52 object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{post.category}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="font-mono text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black -tracking-[0.2px] leading-tight mb-3">{post.title}</h3>
                    <p className="text-sm text-gray-600 leading-6 -tracking-[0.2px]">{post.excerpt}</p>
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
