import type { Metadata } from "next";
import About from "../../page-components/About";

export const metadata: Metadata = {
  title: "About — Olusanya Timothy",
  description:
    "Software & AI engineer since 2018. I build reliable, secure systems for startups and enterprises across fintech, healthcare, e-commerce, and SaaS.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}
