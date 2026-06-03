/**
 * Shared schemas for SEO content pages.
 * Every blog post / breed / concern / ingredient / vs page conforms to one of these.
 * The content `body` field is plain text/markdown — rendered with simple paragraph splitting.
 */

export type ContentSection = {
  heading: string;
  /** Plain text. Newlines split paragraphs. Use **bold** and *italic* for emphasis. */
  body: string;
};

export type ContentSource = {
  author: string;
  year: number;
  title: string;
  journal?: string;
};

export type ContentFAQ = {
  question: string;
  answer: string;
};

export type DataTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ContentByline = {
  author: string;
  reviewedBy: string;
  publishedDate: string; // ISO date
  updatedDate: string; // ISO date
};

export type ProductRecommendation = 'daily-probiotic' | 'hip-and-joint' | 'calm' | 'daily-duo';
