import type { Metadata } from "next";
import Contact from "../../page-components/Contact";

export const metadata: Metadata = {
  title: "Contact · AI audits, platforms and verification work | Olusanya Timothy",
  description:
    "Start an AI red-team audit, a product build or a verification engagement with Olusanya Timothy, a Lagos-based software engineer.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}
