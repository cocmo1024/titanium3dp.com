# Industrial Article Image Prompt Protocol

This document defines the image-prompt generation logic for TITANIUM 3DP engineering articles. Use it whenever creating or updating long-form posts that need generated visuals.

The goal is not to add decorative images. Each visual must help a technical reader understand the trade space: failure, process route, cost, inspection evidence, or decision risk.

## 1. Input Analysis

Before writing prompts, extract these topic signals from the article:

- Primary constraint: cost, time, safety, precision, complexity, manufacturability, evidence, or acceptance risk.
- Audience role: engineer, procurement, operations, quality, management, or mixed technical buyer.
- Evidence level:
  - High: physical proof, inspection result, defect, failed part, approved part.
  - Medium: process data, parameter comparison, route matrix, inspection scope.
  - Low: conceptual guidance or early RFQ planning.
- Decision stage: research, comparison, implementation, troubleshooting, procurement approval.
- Selected narrative skeleton:
  - Problem-first: failure, analysis, fix, cost, verdict.
  - Gate-first: requirements, checklist, evidence, verdict.
  - Cost-ledger: cost breakdown, trade-offs, case, verdict.
  - Process-window: parameters, limits, case, optimization.
  - Comparison-ladder: alternatives, pros and cons, recommendation.
  - Myth-buster: myth, reality, evidence, practical advice.

Use these signals to decide visual role, figure count, placement, and prompt language.

## 2. Visual Role Selection

Choose visuals only where they add engineering value.

Evidence visuals:

- Use when the article discusses physical failure, inspection evidence, qualification, repair, accepted production, or a hard pass/fail condition.
- Place immediately after the paragraph that describes the failure, proof, or acceptance outcome.
- Show real-world evidence: CT cutaway, CMM datum check, fractured region, support damage, powder trap, coupon set, inspection report.

Explanation visuals:

- Use when the article explains a process route, physics mechanism, geometry constraint, or process chain.
- Place after the paragraph introducing the complex concept.
- Show cause and effect: build orientation, support contact, heat path, stress relief, HIP, machining datum, powder evacuation.

Data visuals:

- Use when the article includes a comparison table, cost breakdown, process matrix, or decision ladder.
- Place after the table or quantitative comparison.
- Show controlled comparison, not decorative charts: side-by-side process cells, risk matrix, decision gate, route map.

## 3. Figure Count and Density

Use article length and complexity to set an upper bound:

- Short article under 1200 words: 1 to 2 visuals.
- Medium article from 1200 to 2500 words: 2 to 4 visuals.
- Long article over 2500 words: 3 to 5 visuals.

Avoid placing figures at the same percentage points across articles. The visual should follow the narrative need, not a fixed template.

## 4. Figure Anchor Rules

When writing an article draft, insert anchors only where the visual is useful:

```md
[Figure 1]
```

Rules:

- Number sequentially: `[Figure 1]`, `[Figure 2]`, `[Figure 3]`.
- Do not invent figures after the article is complete unless the section genuinely needs visual evidence.
- If the article has no visual need, omit anchors and omit the manifest.
- A figure prompt must correspond to an actual anchor.

## 5. Prompt Construction Logic

Every figure prompt must include these fields:

```md
**[Figure X]**
**Subject**: [Engineering scene description]
**Prompt**:
[Subject/Action]: A photorealistic [view type] of [subject]...
[Camera/Lens]: [100mm Macro / 24mm Tilt-Shift / Isometric]. Aperture f/8.
[Composition]: [Rule of Thirds / Knolling / Symmetry / Cross-Section].
[Lighting]: Industrial clean room, cool white 6000K, distinct shadows, light volumetric haze.
[Material Physics]: [Specific textures and physical cues].
[Text Rendering]: Legible text labels inside image reading: "[label 1]", "[label 2]".
[Render Style]: Unreal Engine 5, Octane Render, 8k, technical documentation style. --style raw
**Aspect Ratio**: [--ar 16:9 / --ar 3:2]
**Negative Prompt (--no)**: blur, bokeh, cinematic, moody, dark, cartoon, distorted text, watermark, perfect, shiny
**Alt Text**: [SEO alt text]
**Caption**: [Engineering caption]
```

## 6. Camera, Composition, and Aspect Ratio

Camera/lens:

- 100mm Macro: defect close-ups, surface finish, support scar, fracture, coupon detail, CT defect area.
- 24mm Tilt-Shift: equipment view, process chain, machine cell, inspection station, clean industrial overview.
- Isometric: exploded view, route comparison, decision matrix, internal channel diagram, process map.

Composition:

- Rule of Thirds: standard professional scene with one primary part or process.
- Knolling: organized component sets, coupons, inspection documents, process deliverables.
- Symmetry: comparison visuals, process alternatives, balanced route choices.
- Cross-Section: internal channels, powder trap, porosity, CT slice, hidden geometry.

Aspect ratio:

- `--ar 16:9`: default for article hero-style, process overview, comparison panels.
- `--ar 3:2`: use when the subject benefits from more vertical detail or inspection-document framing.

## 7. Text Rendering Rules

Generated images may include short technical labels, but labels must be simple and legible.

Use labels for:

- Process names: `LPBF`, `EBM`, `DED`.
- Risk markers: `Support risk`, `Powder removal`, `Machining stock`.
- Evidence markers: `CMM datum`, `CT threshold`, `Coupon lot`.
- Decision labels: `Best fit`, `Conditional`, `Avoid`.

Avoid:

- Long paragraphs inside images.
- Dense tables inside the image.
- Tiny annotations that will fail at mobile size.
- Marketing claims such as "perfect", "revolutionary", or "best quality".

## 8. Negative Prompt Policy

Always suppress visuals that weaken technical credibility:

- blur
- bokeh
- cinematic
- moody
- dark
- cartoon
- distorted text
- watermark
- perfect
- shiny
- fantasy machinery
- impossible geometry
- human faces
- brand logos

Add topic-specific negatives when needed, such as:

- sparks, fire, molten explosion, dirty workshop
- exaggerated sci-fi lattice
- random aircraft logos
- medical implant claims
- unreadable labels

## 9. Alt Text and Caption Rules

Alt text:

- Describe what the image shows.
- Include the article topic naturally when useful.
- Do not keyword stuff.
- Keep it readable as standalone accessibility text.

Caption:

- Explain the engineering point of the image.
- State the trade-off, risk, or decision logic.
- Avoid repeating the heading.

## 10. Visual Manifest Placement

When a full writing artifact includes prompt output, place the manifest after the article body and after any required disclaimer.

Header:

```md
--- VISUAL MANIFEST (COPY TO AI) ---
```

For repository articles, do not paste the full manifest into the published Markdown unless explicitly requested. Store prompts in a planning document, issue note, or delivery response so the public article stays clean.

## 11. Quality Gate Before Image Generation

Before generating or handing off prompts, check:

- Does every prompt match a real article section?
- Does each figure serve evidence, explanation, or data?
- Are labels short enough to render?
- Is there visible titanium material behavior: powder, bead texture, support scars, machined surfaces, matte metallic finish?
- Does the image avoid decorative sci-fi or generic stock-photo composition?
- Does the prompt specify camera, composition, lighting, material physics, labels, aspect ratio, negative prompt, alt text, and caption?

## Example: Titanium AM Process Selection Article

Article: `Titanium AM Process Selection: LPBF vs EBM vs DED`

Topic signals:

- Primary constraint: process route selection and acceptance risk.
- Audience role: engineering plus procurement.
- Evidence level: medium.
- Decision stage: comparison and RFQ preparation.
- Narrative skeleton: comparison-ladder with a small cost-ledger component.

Recommended visual plan:

- Figure 1: data/explanation visual after the quick LPBF/EBM/DED comparison table.
- Figure 2: explanation visual after the LPBF and EBM route discussion.
- Figure 3: evidence/process visual after the DED section or cost section, showing DED as machining-stock/repair route rather than fine-detail powder-bed geometry.

--- VISUAL MANIFEST (COPY TO AI) ---

**[Figure 1]**
**Subject**: Titanium AM process selection matrix comparing LPBF, EBM, and DED
**Prompt**:
[Subject/Action]: A photorealistic isometric technical comparison scene showing three titanium additive manufacturing routes on one clean industrial bench: LPBF with a fine lattice bracket on a powder bed, EBM with a thicker titanium structure in a hot powder-bed chamber, and DED with a large near-net titanium deposit prepared for machining.
[Camera/Lens]: Isometric. Aperture f/8.
[Composition]: Symmetry, three equal process zones from left to right.
[Lighting]: Industrial clean room, cool white 6000K, distinct shadows, light volumetric haze.
[Material Physics]: Matte titanium surfaces, visible powder grains in LPBF and EBM zones, slightly rough DED bead texture, machined datum faces on selected surfaces, no mirror-polished parts.
[Text Rendering]: Legible text labels inside image reading: "LPBF: fine geometry", "EBM: hot powder bed", "DED: near-net + machining", "Route depends on geometry + evidence".
[Render Style]: Unreal Engine 5, Octane Render, 8k, technical documentation style. --style raw
**Aspect Ratio**: --ar 16:9
**Negative Prompt (--no)**: blur, bokeh, cinematic, moody, dark, cartoon, distorted text, watermark, perfect, shiny, fantasy machinery, brand logos, sparks, fire
**Alt Text**: Titanium AM process selection comparison showing LPBF, EBM, and DED routes.
**Caption**: LPBF, EBM, and DED solve different titanium manufacturing problems; the route should follow geometry, surface condition, machining access, and evidence needs.

**[Figure 2]**
**Subject**: LPBF and EBM powder-bed route risks for support, surface, and powder removal
**Prompt**:
[Subject/Action]: A photorealistic 24mm tilt-shift view of two titanium powder-bed build trays in a clean additive manufacturing lab, one LPBF tray with a fine lattice bracket and support structures, one EBM tray with a thicker titanium component and hot powder-bed context. Highlight support contact points, down-facing rough surfaces, and powder-removal paths.
[Camera/Lens]: 24mm Tilt-Shift. Aperture f/8.
[Composition]: Rule of Thirds with the LPBF tray in foreground and EBM tray in background, connected by subtle annotation arrows.
[Lighting]: Industrial clean room, cool white 6000K, distinct shadows, light volumetric haze.
[Material Physics]: Fine titanium powder texture, matte grey as-built surfaces, rough down-skin areas, thin support pins, visible trapped-powder warning zones.
[Text Rendering]: Legible text labels inside image reading: "Support contact", "Down-skin roughness", "Powder removal", "Finish critical faces".
[Render Style]: Unreal Engine 5, Octane Render, 8k, technical documentation style. --style raw
**Aspect Ratio**: --ar 16:9
**Negative Prompt (--no)**: blur, bokeh, cinematic, moody, dark, cartoon, distorted text, watermark, perfect, shiny, impossible overhangs, random aircraft logos
**Alt Text**: LPBF and EBM titanium powder-bed build trays showing support and powder-removal risks.
**Caption**: Powder-bed routes require early review of support placement, down-facing surfaces, and depowdering before a quote can be treated as production-ready.

**[Figure 3]**
**Subject**: DED titanium near-net deposition prepared for machining and inspection
**Prompt**:
[Subject/Action]: A photorealistic 100mm macro industrial scene of a large titanium DED near-net deposit clamped on a CNC fixture, with visible deposited bead texture, extra machining stock, a machined datum pad, and a CMM probe checking the final reference surface.
[Camera/Lens]: 100mm Macro. Aperture f/8.
[Composition]: Cross-Section with the rough DED bead texture on one side and machined datum surface on the other.
[Lighting]: Industrial clean room, cool white 6000K, distinct shadows, light volumetric haze.
[Material Physics]: Layered titanium deposition beads, matte grey metal, fresh milled finish on datum pads, fine chips near machining area, inspection probe touching a clean reference face.
[Text Rendering]: Legible text labels inside image reading: "DED bead texture", "Machining stock", "Final datum", "Inspect after machining".
[Render Style]: Unreal Engine 5, Octane Render, 8k, technical documentation style. --style raw
**Aspect Ratio**: --ar 3:2
**Negative Prompt (--no)**: blur, bokeh, cinematic, moody, dark, cartoon, distorted text, watermark, perfect, shiny, sparks, fire, melted blobs, unsafe workshop
**Alt Text**: Titanium DED near-net deposit with machining stock and CMM datum inspection.
**Caption**: DED is usually strongest when the final route includes machining stock, datum planning, and inspection after deposition.
