import type { Metadata } from "next";
import Services from "../../page-components/Services";

export const metadata: Metadata = {
  title: "Services — Olusanya Timothy",
  description:
    "Web app development, API development, AI red teaming, and maintenance & growth. End-to-end engineering for modern products.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <Services />;
}
