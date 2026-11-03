import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE } from '../data/site';

// A single self-hosted family: JetBrains Mono (OFL), bundled as a variable
// woff2 in src/fonts. The whole site is monospace by design, so there is no
// second family to download and no render-blocking request to a font CDN.
const mono = localFont({
  src: '../fonts/jetbrains-mono-latin-wght-normal.woff2',
  weight: '100 800',
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: 'Olusanya Timothy · Software engineer, AI red team & evaluation',
    template: '%s',
  },
  description:
    'Lagos-based software engineer working on Go and TypeScript platforms and on evidence-grade AI red teaming and evaluation. Public projects, open harnesses and case studies.',
  keywords: [
    'Olusanya Timothy',
    'AI red teaming',
    'AI evaluation',
    'LLM security',
    'agent security',
    'Go engineer',
    'TypeScript',
    'software engineer Lagos',
    'prompt injection testing',
  ],
  authors: [{ name: SITE.name, url: SITE.siteUrl }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_NG',
    url: SITE.siteUrl,
    title: 'Olusanya Timothy · Software engineer, AI red team & evaluation',
    description:
      'I build the system, then try to break it. Go and TypeScript platforms, and open harnesses that make AI evaluations re-derivable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olusanya Timothy · Software engineer, AI red team & evaluation',
    description:
      'I build the system, then try to break it. Go and TypeScript platforms, and open harnesses that make AI evaluations re-derivable.',
  },
  alternates: { canonical: '/' },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  alternateName: 'Teamthy',
  jobTitle: 'Software engineer, AI red team & evaluation',
  description: SITE.shortBio,
  url: SITE.siteUrl,
  image: `${SITE.siteUrl}/portrait/olusanya-timothy-portrait.jpg`,
  email: `mailto:${SITE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  knowsAbout: [
    'AI red teaming',
    'AI evaluation and evidence',
    'Agent security',
    'Prompt injection',
    'Go',
    'TypeScript',
    'PostgreSQL',
    'Crash consistency',
    'API contracts',
    'System design',
  ],
  sameAs: [SITE.github, SITE.linkedin],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${SITE.name} · portfolio`,
  url: SITE.siteUrl,
  author: { '@type': 'Person', name: SITE.name, url: SITE.siteUrl },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
