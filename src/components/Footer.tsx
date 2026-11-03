import Link from "next/link";
import { SITE } from "../data/site";
import { Avatar } from "./Portrait";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-7.5">
        <div className="flex flex-col lg:flex-row gap-16 mb-16 lg:mb-20">
          {/* Left — statement */}
          <div className="lg:w-6/12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
              {SITE.location} · available for audits and builds
            </p>
            <h2 className="text-white text-3xl lg:text-5xl font-normal -tracking-[2.4px] mb-6 leading-tight">
              Let&apos;s check the claim, or <span className="italic">build the system</span>
            </h2>
            <p className="text-base text-white/50 leading-7 mb-8 max-w-md">
              AI red-team audits, Go and TypeScript platforms, and the verification work that makes both
              defensible. Every project on this site links to its repository.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="px-7 py-4 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition text-center"
              >
                Get in touch
              </Link>
              <a
                href={SITE.resume}
                download
                className="px-7 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — links */}
          <div className="lg:w-6/12 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider font-mono">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Research", href: "/research" },
                  { label: "Work", href: "/portfolio" },
                  { label: "Services", href: "/services" },
                  { label: "About", href: "/about" },
                  { label: "Writing", href: "/blogs" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 text-sm hover:text-white/90 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider font-mono">
                Harnesses
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "tieout", href: "/portfolio/tieout" },
                  { label: "gatecheck", href: "/portfolio/gatecheck" },
                  { label: "host-failure-benchmark", href: "/portfolio/host-failure-benchmark" },
                  { label: "five tests", href: "/portfolio/ai-redteam-five-tests" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 text-sm hover:text-white/90 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider font-mono">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-white/90 transition"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-white/90 transition"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="text-white/60 text-sm hover:text-white/90 transition">
                    Email
                  </a>
                </li>
                <li>
                  <a href={SITE.resume} download className="text-white/60 text-sm hover:text-white/90 transition">
                    Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Avatar size={28} className="ring-white/20" />
            <span className="text-white text-sm font-semibold">{SITE.name}</span>
          </div>
          <p className="text-white/50 text-sm text-center sm:text-right">
            © {year} {SITE.name}. Built with Next.js — every claim links to its source.
          </p>
        </div>
      </div>
    </footer>
  );
}
