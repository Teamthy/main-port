import type { Metadata } from "next";
import Home from "../page-components/Home";

export const metadata: Metadata = {
  title: "Olusanya Timothy — Software engineer, AI red team & evaluation",
  description:
    "Lagos-based software engineer working on Go and TypeScript platforms and evidence-grade AI red teaming and evaluation. Public projects, harnesses and case studies.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
