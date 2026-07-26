import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetail from "../../../page-components/PortfolioDetail";
import { PROJECTS, getProject } from "../../../data/projects";

type RouteParams = { id: string };

export function generateStaticParams(): RouteParams[] {
  return PROJECTS.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(Number(id));
  if (!project) return { title: "Project Not Found — Olusanya Timothy" };
  return {
    title: `${project.title} — Olusanya Timothy`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: [project.cover],
    },
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { id } = await params;
  const project = getProject(Number(id));
  if (!project) notFound();

  return <PortfolioDetail params={{ id }} />;
}
