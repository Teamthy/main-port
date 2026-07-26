import type { Metadata } from "next";
import Contact from "../../page-components/Contact";

export const metadata: Metadata = {
  title: "Contact — Olusanya Timothy",
  description:
    "Start a project or book a discovery call. Based in Lagos, Nigeria — working with teams worldwide.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}
