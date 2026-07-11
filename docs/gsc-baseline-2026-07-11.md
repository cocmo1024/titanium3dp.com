# Google Search Console Baseline - 2026-07-11

## Source

- Export: `C:\Users\79211\Downloads\titanium3dp.com-Performance-on-Search-2026-07-11.xlsx`
- Search type: Web
- Exported range: Past 3 months
- Daily data: 2026-04-10 through 2026-07-09
- Search Console data has reporting delays, privacy filtering, and dimension-specific aggregation. Do not add totals across the query, page, country, and device sheets.

## Baseline

- 96 impressions
- 3 clicks
- 3.13% CTR
- 18.52 impression-weighted average position calculated from the daily export
- 50 of 91 days had at least one impression
- First 30 days: 44 impressions, 0 clicks
- Middle 31 days: 20 impressions, 0 clicks
- Last 30 days: 32 impressions, 3 clicks
- Last 14 days: 21 impressions, 2 clicks

The sample is too small to claim sustained growth or to judge individual application articles as failures. It is large enough to show that the site has not yet developed broad query or page coverage.

## Exported Queries

Only four queries were included after Search Console privacy filtering:

| Query                        | Clicks | Impressions | Position | Action                                                        |
| ---------------------------- | -----: | ----------: | -------: | ------------------------------------------------------------- |
| astm f3001                   |      0 |           2 |       71 | Build a distinct Ti-6Al-4V ELI Grade 23 / F3001 material path |
| titanium 3                   |      0 |           1 |       81 | Too ambiguous for a dedicated page                            |
| 3d4dp                        |      0 |           1 |       84 | No clear commercial relevance; do not target                  |
| titanium 3d printing service |      0 |           1 |      100 | Align the capabilities page with explicit service intent      |

Because the query sheet accounts for only 5 of 96 impressions, do not infer the remaining query mix from these four rows.

## Exported Pages

| Page                                     | Clicks | Impressions |   CTR | Position | Action                                                         |
| ---------------------------------------- | -----: | ----------: | ----: | -------: | -------------------------------------------------------------- |
| `https://titanium3dp.com/`               |      3 |          53 | 5.66% |    19.60 | Do not optimize the homepage in this content round             |
| `https://www.titanium3dp.com/`           |      0 |          37 |    0% |    12.65 | Redirect the duplicate host to the canonical apex domain       |
| `https://www.titanium3dp.com/materials/` |      0 |           8 |    0% |    32.38 | Consolidate host and strengthen distinct material paths        |
| AM-vs-CNC post                           |      0 |           7 |    0% |     8.71 | Retain URL; the buyer-intent rewrite shipped after this export |
| `/rfq/`                                  |      0 |           5 |    0% |     4.20 | Improve title and snippet alignment for quote/RFQ intent       |

The page sheet can include different aggregation behavior than the daily sheet. Use it for page prioritization, not as a replacement for the daily total.

## Audience Signals

- United States: 55 impressions and 2 clicks; this is the largest visible market in the export.
- Desktop: 82 impressions and all 3 clicks.
- Mobile: 14 impressions and 0 clicks, with an average position of 5.79.

These are directional only. The sample is too small for country-specific or device-specific content expansion.

## Decisions Triggered by This Export

1. Redirect `www.titanium3dp.com` to `titanium3dp.com` with a permanent host-level redirect while preserving path and query.
2. Retitle and rewrite the `/rfq/` search entry around `titanium 3D printing quote` and delivered-part scope.
3. Retitle `/capabilities/` around `titanium 3D printing services` instead of creating a duplicate service article.
4. Add `/materials/ti6al4v-eli-grade-23-astm-f3001/` as a distinct commercial material page.
5. Keep the newly rewritten AM-vs-CNC page and measure it after recrawling; do not judge it using pre-rewrite data.
6. Do not delete or consolidate the 26 application-template posts from this export alone. Reassess when page/query data has enough volume and the rewritten cluster has had time to be crawled.

## Measurement Rules

- Export Search Console page and query data monthly using a fixed comparison window.
- Track indexed pages, non-brand impressions, clicks, CTR, average position, RFQ page visits, email clicks, and submitted inquiries separately.
- Evaluate content by search intent and commercial contribution, not word count or publishing frequency.
- Avoid declaring success from isolated high-position impressions or failure from zero-click pages with very low impression counts.
