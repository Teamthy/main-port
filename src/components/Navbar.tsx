"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E9E9EA]">
      <nav className="max-w-[1440px] mx-auto px-6 sm:px-7.5 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Olusanya Timothy — home">
          <span className="text-black text-lg font-medium">
            Olusanya<span className="italic font-normal"> Timothy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-mono text-sm uppercase tracking-wider transition ${
                  isActive(link.href)
                    ? "text-black underline decoration-2 underline-offset-8"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black transition"
          >
            GitHub ↗
          </a>
          <a href={SITE.resume} download className="btn btn-outline">
            CV
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E9E9EA] bg-white px-6 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${
                    isActive(link.href) ? "text-black font-medium" : "text-black/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 space-y-3">
            <a
              href={SITE.resume}
              download
              onClick={() => setOpen(false)}
              className="btn btn-outline w-full justify-center"
            >
              <span className="font-mono uppercase">Download CV</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full justify-center"
            >
              <span className="font-mono uppercase">Get in touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
