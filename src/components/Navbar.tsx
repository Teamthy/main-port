"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/blogs", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E9E9EA]">
      <nav className="max-w-[1440px] mx-auto px-7.5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="black" />
            <path d="M8 10L16 18L24 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15L16 23L24 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-black text-lg font-medium">
            Olusanya<span className="italic font-normal">Timothy</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className={`font-mono text-sm uppercase tracking-wider text-black hover:text-gray-600 transition ${pathname === l.to ? "font-medium" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-7 py-4 bg-black text-white font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gray-900 transition"
          >
            Get Started
            
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

        {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E9E9EA] bg-white px-7.5 py-6 space-y-1 [&>li>a]:block [&>li>a]:py-3 [&>li>a]:text-base [&>li>a]:text-black [&>li>a]:uppercase [&>li>a]:font-normal">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link href={l.to} onClick={() => setOpen(false)} className="block py-3 text-base text-black">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-6 py-4 inline-flex items-center bg-black text-sm font-medium text-white rounded-full"
            >
              <span className="font-mono uppercase">Book a Call</span>
            </Link>
          </div>
        </div>
      )}
      </nav>
    </header>
  );
}
