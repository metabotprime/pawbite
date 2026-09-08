import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './seo';

export const SHARE_IMAGE = '/share/pawbite-line-v2.png';

/** Next replaces nested metadata objects; keep every override's image intact. */
export function socialMetadata({
  title = `${SITE_NAME} | Dog Supplements for Gut, Joints & Calm`,
  description = SITE_DESCRIPTION,
  type = 'website',
  url = SITE_URL,
  image = SHARE_IMAGE,
}: {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'profile';
  url?: string;
  image?: string;
} = {}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const images = [
    {
      url: new URL(image, SITE_URL).toString(),
      width: 1200,
      height: 630,
      alt: `${title}, PawBite dog supplement chews`,
    },
  ];
  return {
    openGraph: { type, locale: 'en_US', url, siteName: SITE_NAME, title, description, images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}
