# Favicons and link previews

The default sharing card uses the current Calm, Hip & Joint, and Gut Health studio photos. Product URLs use their matching card; Daily Duo uses Hip & Joint and Gut Health. All cards are 1200 × 630 PNGs and use the existing PawBite wordmark.

`lib/social.ts` supplies both Open Graph and Twitter metadata. Use `socialMetadata()` when overriding page metadata, since Next replaces nested objects rather than merging their images.

Run `npm run assets:share` with Node 20 to rebuild the cards, wordmark exports, SVG and multi-size ICO favicon, 192px PNG icon, and Apple touch icon. The generator preserves the existing SVG artwork and product photographs. Sharp decodes the WebP sources for Next 14's image renderer; it is a development dependency.

The versioned `/share/*-v2.png` URLs avoid reusing the old preview image URL. `/og-default.png` also contains the new default card for older references. Sharing services may retain a cached preview of a page until they fetch it again.
