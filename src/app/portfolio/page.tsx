import type { Metadata } from "next";
import Portfolio from "../../page-components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Olusanya Timothy",
  description:
    "Case studies across web apps, mobile apps, AI/ML, and SaaS — finance systems, trading platforms, analytics, and more.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return <Portfolio />;
}
