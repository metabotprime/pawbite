import type { Metadata } from 'next';
import { fontDisplay, fontSerif, fontSans, fontHand, fontMono } from '@/lib/fonts';
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/seo';
import { WelcomeBanner } from '@/components/layout/welcome-banner';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyATCBar } from '@/components/layout/sticky-atc-bar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — The good stuff your dog needs. Nothing weird.`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'dog probiotic',
    'dog joint supplement',
    'vet-formulated dog supplements',
    'dog gut health',
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSerif.variable} ${fontSans.variable} ${fontHand.variable} ${fontMono.variable}`}
    >
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="flex min-h-screen flex-col bg-cream text-forest">
        <WelcomeBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyATCBar />
      </body>
    </html>
  );
}
