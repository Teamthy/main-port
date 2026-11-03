import type { Metadata } from "next";
import Research from "../../page-components/Research";

export const metadata: Metadata = {
  title: "Research — evidence-grade AI red teaming & evaluation | Olusanya Timothy",
  description:
    "Four open-source harnesses for AI red teaming and evaluation that emit evidence rather than reports: tieout, gatecheck, host-failure-benchmark and ai-redteam-five-tests.",
  alternates: { canonical: "/research" },
};

export default function Page() {
  return <Research />;
}
