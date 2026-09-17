# Barcook Gallery Company Profile Website

Premium one-page company profile prototype for Barcook Gallery.

## Prototype content

Editorial photography is sourced from Unsplash and stored in `public/images`; the original URLs are recorded in `public/images/sources.json`. These are reference images, not official Barcook photographs. The full product catalogue is generated from Barcook Bakery's four official All Products pages by `scripts/sync-barcook-products.mjs`, including product names, categories, detail links, and official photography. Outlet details, opening hours, and Malaysia contact information were adapted from Barcook Bakery's official website in September 2026. Product availability should be confirmed with the outlet before an official launch.

Official content references include the About, Locations, Baking Advisor, Custom Cake Order, Contact, Join Us, and product catalogue pages. Custom cake terms shown on the source site apply to Singapore; this prototype links to those details without presenting them as Malaysia outlet policy.

The page includes mobile navigation, reduced-motion support, local optimized images, and accessible keyboard focus states. Replace the metadata base URL in `src/app/layout.tsx` with the actual deployment domain before publishing.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Next Image

## Sections

- Hero
- About Barcook
- Signature Menu
- Barcook Experience
- Gallery
- Visit Us
- Footer

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
```
