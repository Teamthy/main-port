import type { Metadata } from "next";
import Blogs from "../../page-components/Blogs";

export const metadata: Metadata = {
  title: "Writing · AI security, evaluation and engineering | Olusanya Timothy",
  description:
    "Notes on evaluation evidence, red-team gates in CI, crash consistency, API contracts and financial data modelling.",
  alternates: { canonical: "/blogs" },
};

export default function Page() {
  return <Blogs />;
}
