import type { Metadata } from "next";
import Home from "../page-components/Home";

export const metadata: Metadata = {
  title: "Olusanya Timothy — Software & AI Engineer",
  description:
    "Olusanya Timothy is a software & AI engineer specializing in backend systems, system design, AI/ML engineering, and AI red teaming. Based in Lagos, Nigeria.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
