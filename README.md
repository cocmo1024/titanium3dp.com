# TITANIUM 3DP Website

Astro static site for `titanium3dp.com`.

The site is a B2B lead-generation and engineering reference site for titanium additive manufacturing RFQs. It focuses on Ti-6Al-4V, Ti-6Al-4V ELI, CP titanium, LPBF/EBM process fit, DfAM review, post-processing, inspection evidence, traceability, and procurement-ready RFQ inputs.

> **Updating content?** Read [`CONTENT_UPDATE_GUIDE.md`](CONTENT_UPDATE_GUIDE.md) first. It defines the engineering-claim boundaries, URL/SEO rules and required release checks.

## Local Commands

- `npm install`
- `npm run dev`
- `npm run check`
- `npm run build`
- `npm run preview`
- `npm exec -- wrangler deploy --dry-run`

## Content Protocols

- [`docs/industrial-article-image-prompt-protocol.md`](docs/industrial-article-image-prompt-protocol.md): image-prompt generation logic for future engineering articles.
- [`docs/seo-content-roadmap-2026-2027.md`](docs/seo-content-roadmap-2026-2027.md): inventory-first topic architecture, publishing gates, internal-link rules, cadence, and measurement.

## Public Routes

- `/`
- `/materials/`
- `/materials/tc4-ti6al4v-grade-5/`
- `/materials/ti6al4v-eli-grade-23-astm-f3001/`
- `/materials/grade-2-cp-titanium-ta2-3d-printing/`
- `/applications/`
- `/capabilities/`
- `/rfq/`
- `/faq/`
- `/contact/`
- `/about/`
- `/case-studies/` (visible label: Engineering Guides)
- `/posts/.../`

RFQ contact email: `info@szcomo.com`.
