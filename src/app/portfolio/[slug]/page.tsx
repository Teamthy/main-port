import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetail from "../../../page-components/PortfolioDetail";
import { PROJECTS, getProject } from "../../../data/projects";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found — Olusanya Timothy" };
  return {
    title: `${project.title} — ${project.kicker} | Olusanya Timothy`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.kicker}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <PortfolioDetail project={project} />;
}
