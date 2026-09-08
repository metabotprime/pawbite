// Deterministic website assets: preserve the existing SVG artwork and studio photos.
// Run with Node 20: node scripts/generate-share-assets.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';
import sharp from 'sharp';

const blue = '#293DA6';
const cream = '#F8F0E3';
const svgData = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
const wordmarkSource = await readFile('components/brand/wordmark.tsx', 'utf8');
const paths = wordmarkSource.match(/<path\s+d="[^"]+"\s*\/>/g).join('');
const wordmark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 873.85 283.34" fill="${blue}">${paths}</svg>`;
const pawSource = await readFile('components/brand/illustrations/icons/paw.tsx', 'utf8');
const pawShapes = pawSource.match(/<(?:ellipse|path)\s+[^>]+\/>/g).join('');
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="${blue}"/><svg x="10" y="9" width="44" height="44" viewBox="0 0 24 24" fill="${cream}">${pawShapes}</svg></svg>`;
const logo = (width = 290) =>
  h('img', { src: svgData(wordmark), width, height: (width * 283.34) / 873.85 });
const photo = async (slug) =>
  `data:image/png;base64,${(await sharp(`public/products/studio/${slug}.webp`).png().toBuffer()).toString('base64')}`;
const items = [
  { slug: 'calm', label: 'Calming', detail: '30 soft chews', image: await photo('calm') },
  {
    slug: 'hip-and-joint',
    label: 'Hip & Joint',
    detail: '60 soft chews',
    image: await photo('hip-and-joint'),
  },
  {
    slug: 'daily-probiotic',
    label: 'Gut Health',
    detail: '30 soft chews',
    image: await photo('daily-probiotic'),
  },
];
async function png(element, width, height) {
  return Buffer.from(await new ImageResponse(element, { width, height }).arrayBuffer());
}
const box = (style, ...children) => h('div', { style: { display: 'flex', ...style } }, ...children);
const canvas = (children) =>
  box(
    { width: '100%', height: '100%', background: cream, color: blue, fontFamily: 'sans-serif' },
    ...children,
  );
function collection(selected) {
  const count = selected.length;
  const w = count === 3 ? 350 : 390;
  return canvas([
    box({ position: 'absolute', left: 48, top: 24 }, logo(300)),
    box({ position: 'absolute', right: 50, top: 52, fontSize: 26 }, 'For the dog in your life.'),
    box(
      { position: 'absolute', top: 144, left: 0, width: 1200, justifyContent: 'center', gap: 22 },
      ...selected.map((item) =>
        box(
          { flexDirection: 'column', width: w },
          h('img', {
            src: item.image,
            width: w,
            height: 350,
            style: { objectFit: 'cover', borderRadius: 20 },
          }),
          box(
            { fontSize: 29, fontWeight: 700, marginTop: 17, justifyContent: 'center' },
            item.label,
          ),
        ),
      ),
    ),
    box({ position: 'absolute', bottom: 29, left: 48, fontSize: 20 }, 'Dog supplement chews'),
    box({ position: 'absolute', bottom: 29, right: 48, fontSize: 20 }, 'pawbite.com'),
  ]);
}
await mkdir('public/share', { recursive: true });
await mkdir('public/brand', { recursive: true });
const defaultCard = await png(collection(items), 1200, 630);
await writeFile('public/share/pawbite-line-v2.png', defaultCard);
await writeFile('public/og-default.png', defaultCard);
await writeFile(
  'public/share/daily-duo-v2.png',
  await png(collection([items[1], items[2]]), 1200, 630),
);
for (const item of items) {
  const element = canvas([
    box({ position: 'absolute', left: 52, top: 42 }, logo(330)),
    box(
      { position: 'absolute', left: 52, top: 242, width: 480, flexDirection: 'column' },
      box({ fontSize: 65, fontWeight: 700, lineHeight: 1.08 }, item.label),
      box({ fontSize: 34, marginTop: 15 }, 'Chews for dogs.'),
      box({ fontSize: 23, marginTop: 26 }, item.detail),
    ),
    h('img', {
      src: item.image,
      width: 564,
      height: 564,
      style: { position: 'absolute', right: 33, top: 33, borderRadius: 26 },
    }),
    box({ position: 'absolute', left: 52, bottom: 44, fontSize: 22 }, 'pawbite.com'),
  ]);
  await writeFile(`public/share/${item.slug}-v2.png`, await png(element, 1200, 630));
}
await writeFile('public/brand/pawbite-wordmark.svg', wordmark + '\n');
await writeFile('public/brand/pawbite-wordmark.png', await png(logo(874), 874, 284));
await writeFile('app/icon.svg', icon + '\n');
await writeFile(
  'app/apple-icon.png',
  await png(h('img', { src: svgData(icon), width: 180, height: 180 }), 180, 180),
);
await writeFile(
  'public/brand/pawbite-icon-192.png',
  await png(h('img', { src: svgData(icon), width: 192, height: 192 }), 192, 192),
);
// ICO directory with PNG entries, used by clients that request /favicon.ico directly.
const sizes = [16, 32, 48, 64, 128, 256];
const images = await Promise.all(
  sizes.map((size) => png(h('img', { src: svgData(icon), width: size, height: size }), size, size)),
);
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((bytes, index) => {
  const at = 6 + index * 16;
  header[at] = header[at + 1] = sizes[index] === 256 ? 0 : sizes[index];
  header.writeUInt16LE(1, at + 4);
  header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(bytes.length, at + 8);
  header.writeUInt32LE(offset, at + 12);
  offset += bytes.length;
});
await writeFile('app/favicon.ico', Buffer.concat([header, ...images]));
console.log('Generated 5 sharing cards, SVG/PNG wordmark, SVG/ICO favicon and Apple icon.');
