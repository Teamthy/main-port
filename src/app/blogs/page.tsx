import type { Metadata } from "next";
import Blogs from "../../page-components/Blogs";

export const metadata: Metadata = {
  title: "Blog — Olusanya Timothy",
  description:
    "Writing on software engineering, system design, AI, and building reliable digital products.",
  alternates: { canonical: "/blogs" },
};

export default function Page() {
  return <Blogs />;
}
