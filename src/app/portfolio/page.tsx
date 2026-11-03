import type { Metadata } from "next";
import Portfolio from "../../page-components/Portfolio";

export const metadata: Metadata = {
  title: "Work · twelve public projects | Olusanya Timothy",
  description:
    "AI security harnesses, Go and TypeScript product platforms, and backend builds, every project linked to its public repository.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return <Portfolio />;
}
