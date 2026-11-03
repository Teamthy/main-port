import type { Metadata } from "next";
import About from "../../page-components/About";

export const metadata: Metadata = {
  title: "About · software engineer & AI red teamer in Lagos | Olusanya Timothy",
  description:
    "Olusanya Timothy is a Lagos-based software engineer working on AI red teaming and evaluation, Go and TypeScript platforms, and verification-first engineering.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}
