import type { Metadata } from "next";
import Services from "../../page-components/Services";

export const metadata: Metadata = {
  title: "Services · AI audits, platforms and verification | Olusanya Timothy",
  description:
    "AI red-team audits, Go and TypeScript platform engineering, and verification work: contracts, ledgers, crash consistency and CI security gates.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <Services />;
}
