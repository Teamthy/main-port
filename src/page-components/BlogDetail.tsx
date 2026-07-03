import Link from "next/link";
import { IMAGES } from "../data/images";

const blogData: Record<string, { title: string; category: string; date: string; image: string }> = {
  "1": { title: "The Future of Web Development: Trends to Watch", category: "Development", date: "Jan 15, 2025", image: IMAGES.blog[0] },
  "2": { title: "Building Scalable Design Systems for Growing Teams", category: "Design", date: "Jan 10, 2025", image: IMAGES.blog[1] },
  "3": { title: "Why Your Startup Needs a Strong Digital Presence", category: "Strategy", date: "Jan 5, 2025", image: IMAGES.blog[2] },
  "4": { title: "React vs Next.js: Choosing the Right Framework", category: "Development", date: "Dec 28, 2024", image: IMAGES.blog[3] },
  "5": { title: "Mobile-First Design: Best Practices for 2025", category: "Design", date: "Dec 20, 2024", image: IMAGES.blog[4] },
  "6": { title: "API Architecture Patterns for Modern Applications", category: "Development", date: "Dec 15, 2024", image: IMAGES.blog[5] },
};

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = blogData[id || "1"] || blogData["1"];

  return (
    <main>
      {/* Header */}
      <section className="pt-15 lg:pt-30 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]">{post.category}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="font-mono text-xs text-gray-500">5 min read</span>
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
            <p>
              The digital landscape is evolving at an unprecedented pace. New technologies, frameworks, and methodologies are emerging that fundamentally change how we build and deliver web applications. Staying ahead of these trends is crucial for teams that want to remain competitive and deliver exceptional user experiences.
            </p>

            <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-4">The Rise of AI-Powered Development</h2>
            <p>
              Artificial intelligence is no longer a futuristic concept — it's actively reshaping how developers write code, design interfaces, and optimize performance. AI-powered tools can now generate boilerplate code, suggest optimizations, and even create entire UI components from natural language descriptions.
            </p>
            <p>
              This shift doesn't replace developers but rather augments their capabilities, allowing them to focus on higher-level architecture decisions and creative problem-solving while AI handles repetitive tasks.
            </p>

            <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-4">Edge Computing and Performance</h2>
            <p>
              Edge computing is transforming how we think about application performance. By moving computation closer to the end user, edge platforms can dramatically reduce latency and improve the overall user experience. This is particularly impactful for applications that require real-time data processing.
            </p>
            <p>
              Modern frameworks are increasingly built with edge deployment in mind, offering server-side rendering capabilities that run at the edge, combining the benefits of dynamic content with the speed of static delivery.
            </p>

            <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-4">Component-Driven Architecture</h2>
            <p>
              The shift toward component-driven development continues to accelerate. Design systems built on reusable components enable teams to maintain consistency across products while moving faster. This approach reduces duplication, improves maintainability, and creates a shared language between designers and developers.
            </p>

            <h2 className="text-2xl font-medium text-black -tracking-[0.5px] pt-4">Looking Ahead</h2>
            <p>
              As we look toward the future, the teams that succeed will be those that embrace continuous learning, invest in strong development practices, and stay adaptable to change. The tools and technologies may evolve, but the fundamentals of building great products — understanding users, writing clean code, and delivering value — remain constant.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E9E9EA]">
            <div className="flex flex-wrap gap-3">
              {["Web Development", "Technology", "Trends", "AI"].map(tag => (
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
            {Object.entries(blogData).filter(([key]) => key !== id).slice(0, 3).map(([key, p]) => (
              <Link href={`/blog/${key}`} key={key} className="group">
                <article className="rounded-[20px] border border-[#E9E9EA] bg-white overflow-hidden transition hover:border-black hover:shadow-sm">
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
