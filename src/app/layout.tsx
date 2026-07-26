import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Anonymous_Pro } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Self-hosted fonts (next/font): no render-blocking 3rd-party CSS, no layout shift,
// and Anonymous Pro is finally wired up as the monospace accent the design intends.
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Anonymous_Pro({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://olusanyatimothy.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Olusanya Timothy — Software & AI Engineer',
    template: '%s',
  },
  description:
    'Olusanya Timothy is a software & AI engineer specializing in backend systems, system design, AI/ML engineering, and AI red teaming.',
  openGraph: {
    type: 'website',
    siteName: 'Olusanya Timothy',
    title: 'Olusanya Timothy — Software & AI Engineer',
    description:
      'Backend systems, system design, AI/ML engineering, and AI red teaming. I build and secure what matters.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olusanya Timothy — Software & AI Engineer',
    description:
      'Backend systems, system design, AI/ML engineering, and AI red teaming. I build and secure what matters.',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Olusanya Timothy',
  jobTitle: 'Software & AI Engineer',
  url: SITE_URL,
  email: 'mailto:olusanyatimothy54@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  knowsAbout: [
    'Backend Engineering',
    'System Design',
    'AI/ML Engineering',
    'AI Red Teaming',
    'Web Development',
    'API Design',
    'Cloud & DevOps',
  ],
  sameAs: [
    'https://twitter.com/olusanyatimothy',
    'https://linkedin.com/in/olusanyatimothy',
    'https://github.com/olusanyatimothy',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
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
      </body>
    </html>
  );
}
