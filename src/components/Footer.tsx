import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "Pages",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "Blog", to: "/blogs" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-950 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-7.5">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16 lg:mb-25">
          {/* Left - CTA */}
          <div className="lg:w-5/12">
            <h2 className="text-white text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6">
              Let's build something <span className="italic">great together</span>
            </h2>
            <Link
              href="/contact"
              className="px-7 py-4 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right - Links */}
          <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider font-mono">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.to} className="text-white/60 text-sm hover:text-white/80 transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider font-mono">
                Connect
              </h4>
                <ul className="space-y-3">
                  <li><a href="https://twitter.com/olusanyatimothy" className="text-white/60 text-sm hover:text-white/80 transition">Twitter / X</a></li>
                  <li><a href="https://linkedin.com/in/olusanyatimothy" className="text-white/60 text-sm hover:text-white/80 transition">LinkedIn</a></li>
                  <li><a href="https://github.com/olusanyatimothy" className="text-white/60 text-sm hover:text-white/80 transition">GitHub</a></li>
                  <li><a href="mailto:hello@olusanyatimothy.dev" className="text-white/60 text-sm hover:text-white/80 transition">Email</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="white" />
              <path d="M8 10L16 18L24 10" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 15L16 23L24 15" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-sm font-semibold">Olusanya Timothy</span>
          </div>
          <p className="text-white/60 text-sm">
            © {year} Olusanya Timothy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
