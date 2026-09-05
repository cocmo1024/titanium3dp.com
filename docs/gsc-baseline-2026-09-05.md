# Google Search Console Baseline - 2026-09-05

## Source

- Export: `C:\Users\79211\Downloads\titanium3dp.com-Performance-on-Search-2026-09-05.xlsx`
- Search type: Web
- Exported range: Past 3 months
- Daily data: 2026-06-04 through 2026-09-03
- Search Console data has reporting delays, privacy filtering, and dimension-specific aggregation. Do not add totals across the query, page, country, and device sheets.

## Baseline

- 598 impressions
- 6 clicks
- 1.00% CTR
- 27.67 impression-weighted average position calculated from the daily export
- 72 of 92 days had at least one impression
- First 30 days: 18 impressions, 3 clicks
- Middle 31 days: 92 impressions, 1 click
- Last 31 days: 488 impressions, 2 clicks

Visibility expanded sharply in the final month, but clicks did not grow at the same rate. Treat this as an intent-alignment and search-entry problem, not evidence that the site needs more near-duplicate pages. The sample is now useful for prioritizing existing URLs, but it is still too small for irreversible consolidation decisions across the application clusters.

## Exported Queries

| Query                  | Clicks | Impressions | Position | Decision                                                                 |
| ---------------------- | -----: | ----------: | -------: | ------------------------------------------------------------------------ |
| `astm f3001`           |      0 |          45 |    16.20 | Strengthen the existing Grade 23 page; do not create another F3001 page  |
| `ti6al4v 3d printing`  |      0 |          38 |    63.08 | Keep the existing Grade 5 / TC4 material path and improve it only later  |
| `analyse astm f3001`   |      0 |          18 |    18.39 | Answer the explanatory intent on the same Grade 23 page                  |
| `tc4 titanium`         |      0 |           9 |    43.67 | Keep the existing TC4 page; sample and rank do not justify a new variant |
| `titanium grade 4 t60` |      0 |           8 |    77.50 | Do not expand around an unclear, likely off-intent query                 |
| `titanium tc4`         |      0 |           6 |    52.17 | Keep the existing TC4 page; no new URL                                   |
| `astm f3001-14`        |      0 |           2 |     2.00 | Preserve the F3001 URL and current standards context                     |

The query sheet is privacy-filtered and does not explain all 598 impressions. Do not infer exact query-to-page pairings where the export does not provide them.

## Exported Pages

| Page                             | Clicks | Impressions |   CTR | Position | Decision                                                          |
| -------------------------------- | -----: | ----------: | ----: | -------: | ----------------------------------------------------------------- |
| Homepage                         |      5 |         108 | 4.63% |    20.95 | Keep stable; it already earns most recorded clicks                |
| TC4 / Ti-6Al-4V Grade 5 material |      0 |         100 |    0% |    42.57 | Retain; no duplicate Ti64 or TC4 page                             |
| Grade 23 / ASTM F3001 material   |      0 |          81 |    0% |    13.07 | Align title, H1, summary, and scope with explanatory F3001 intent |
| Materials hub                    |      0 |          47 |    0% |    50.62 | Keep as the stable material-navigation hub                        |
| Heat exchanger guide             |      0 |          42 |    0% |     9.93 | Improve search entry and the fit / hybrid / conventional decision |
| Grade 2 material                 |      1 |          41 | 2.44% |    15.24 | Keep stable; it is already earning a click                        |
| Case studies hub                 |      0 |          35 |    0% |    58.74 | Keep as a hub; no new broad application roundup                   |
| RFQ                              |      0 |          29 |    0% |    13.90 | Align title and hero with quote-from-CAD intent                   |
| AM-vs-CNC / no-go guide          |      0 |          25 |    0% |    10.20 | Align title and opening answer with the existing no-go URL        |
| Cost guide                       |      0 |          20 |    0% |    25.65 | Keep stable for another measurement cycle                         |

Page rows beyond these have low impression counts. High positions on one-digit samples are directional, not proof of durable rankings.

## Content Inventory and Overlap Review

- 42 Markdown articles were reviewed.
- Article body length ranged from 1,463 to 3,527 words, with an average of 2,533 words.
- No exact duplicate titles or descriptions were found.
- No article lacked a body-level internal link.
- The strongest topical overlaps are expected application clusters: chemical processing / desalination / valves, DLE / geothermal, robotics / humanoid robotics, and qualification / standards.
- The strongest measured article similarity was 0.562. This is a monitoring signal, not sufficient evidence for URL deletion or consolidation.
- The medical-device and standards-map articles had the fewest article-body incoming links in the source scan, but hubs and template navigation mean this is not proof that either page is orphaned.

## Decisions Triggered by This Export

1. Keep all current URLs and canonicals.
2. Do not create a second F3001, Ti64, TC4, heat-exchanger, or AM-vs-CNC page.
3. Update the existing F3001 page around `ASTM F3001 explained`, while retaining Grade 23 purchasing and RFQ scope.
4. Update the existing heat-exchanger guide around an explicit AM / hybrid / conventional fit decision.
5. Update the existing no-go guide so its title and opening answer match its stable URL and buyer decision.
6. Update the RFQ title and hero around submitting CAD for a titanium 3D printing quote.
7. Preserve the homepage and Grade 2 page in this round because they already earn recorded clicks.
8. Monitor application-cluster overlap for at least one more fixed-window export before considering consolidation.

## Measurement Rules

- Export a fixed 3-month Search Console workbook monthly.
- Compare the same URL's impressions, clicks, CTR, and average position before and after title or opening-copy changes.
- Treat a page as a consolidation candidate only when its intent materially overlaps another URL and it has enough page/query evidence to judge.
- Measure RFQ visits, email clicks, form starts, valid submissions, and qualified inquiries separately from organic traffic.
- Do not publish pages for small query variations. Improve the best existing URL that already owns the intent.
- Do not change `updateDate` unless the visible body content changes materially.
