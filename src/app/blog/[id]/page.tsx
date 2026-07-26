import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "../../../page-components/BlogDetail";
import { BLOG_POSTS, getBlogPost } from "../../../data/blogs";

type RouteParams = { id: string };

export function generateStaticParams(): RouteParams[] {
  return BLOG_POSTS.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(Number(id));
  if (!post) return { title: "Post Not Found — Olusanya Timothy" };
  return {
    title: `${post.title} — Olusanya Timothy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { id } = await params;
  const post = getBlogPost(Number(id));
  if (!post) notFound();

  return <BlogDetail params={{ id }} />;
}
