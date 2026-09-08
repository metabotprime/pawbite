import { socialMetadata } from '@/lib/social';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
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
    default: `${SITE_NAME} | Dog Supplements for Gut, Joints & Calm`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ['dog probiotic', 'dog joint supplement', 'calming chews for dogs', 'dog gut health'],
  authors: [{ name: SITE_NAME }],
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  ...socialMetadata(),
  icons: {
    icon: [
      { url: '/brand/pawbite-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg?v=2', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-5 focus:py-3"
        >
          Skip to content
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyATCBar />
        <Analytics />
      </body>
    </html>
  );
}
