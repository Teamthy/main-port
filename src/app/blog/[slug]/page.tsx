import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "../../../page-components/BlogDetail";
import { BLOG_POSTS, getBlogPost } from "../../../data/blogs";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found — Olusanya Timothy" };
  return {
    title: `${post.title} — Olusanya Timothy`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogDetail post={post} />;
}
