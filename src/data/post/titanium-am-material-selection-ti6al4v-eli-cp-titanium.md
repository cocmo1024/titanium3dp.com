---
title: 'Titanium AM Material Selection: TC4, Ti-6Al-4V, ELI, and CP Titanium'
publishDate: 2026-01-05
updateDate: 2026-07-09
excerpt: 'How to choose TC4, Ti-6Al-4V Grade 5, Ti-6Al-4V ELI Grade 23, TA1, TA2, or CP Ti for titanium LPBF/EBM parts based on fatigue, ductility, corrosion, and evidence needs.'
category: 'Case Studies'
tags: ['materials', 'tc4', 'ti6al4v', 'grade-5-titanium', 'eli', 'cp-titanium', 'ta1', 'ta2', 'lpbf', 'ebm']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/1.webp
metadata:
  title: 'TC4 and Ti-6Al-4V Titanium AM Material Selection'
  description: 'Material selection guide for titanium additive manufacturing: TC4, Ti-6Al-4V Grade 5, Ti-6Al-4V ELI Grade 23, TA1, TA2, and CP Ti in LPBF and EBM.'
  canonical: https://titanium3dp.com/posts/titanium-am-material-selection-ti6al4v-eli-cp-titanium/
---

Titanium is not one material choice. In additive manufacturing, the alloy grade controls strength, ductility, oxygen sensitivity, fatigue assumptions, post-processing, and the evidence package needed for acceptance. A good RFQ names the material, but it also explains why that material is required.

Search wording matters. "Titanium" is useful as a category term, but buyers often search with material names: TC4 3D printing, Ti-6Al-4V LPBF, Grade 5 titanium parts, Ti64 additive manufacturing, TA1 titanium, TA2 titanium, CP titanium, or Grade 2 titanium corrosion parts. Use those aliases for discovery, then lock the actual material requirement with a recognized standard and supplier evidence.

## Material Name Map for RFQs

| Search or drawing term | Practical interpretation | What to specify before quote |
| --- | --- | --- |
| TC4 | Common Chinese material term for the Ti-6Al-4V / Grade 5 / Ti64 family | Standard, AM route, heat treatment, chemistry, tensile basis, and inspection |
| Ti-6Al-4V | International alloy name for Grade 5-type titanium | Process route, post-processing, surface state, and acceptance evidence |
| Grade 5 titanium | ASTM grade wording often used by global buyers | Whether the project follows AM, wrought, customer, or drawing-specific requirements |
| Ti64 | Short sourcing shorthand for Ti-6Al-4V | Replace with a controlled material line before purchase |
| Ti-6Al-4V ELI / Grade 23 | Lower-interstitial version used for selected ductility, fracture, or medical-adjacent requirements | Oxygen/interstitial limits, standard, heat treatment, and evidence package |
| TA1 / TA2 | Common Chinese CP titanium sourcing terms | Exact grade, chemistry, corrosion basis, and whether the AM supplier can print CP Ti |
| CP Ti / Grade 1-4 | Commercially pure titanium family | Which grade, why it is needed, and how it will be inspected |

## Ti-6Al-4V Grade 5

Ti-6Al-4V Grade 5, also searched as TC4 titanium alloy, Grade 5 titanium, or Ti64, is the default starting point for many titanium AM structural parts because it offers high strength-to-weight performance and broad process familiarity. It is common in aerospace, motorsport, robotics, industrial housings, and lightweight brackets.

Choose Grade 5 when the requirement is structural performance and the acceptance path can tolerate the material's normal interstitial range. The quote should still define the standard, process route, post-processing, and inspection scope. A generic "Ti64" note is not enough for production-intent work.

If the process route is still open, pair the material decision with [Titanium AM Process Selection: LPBF vs EBM vs DED](/posts/titanium-am-process-selection-lpbf-ebm-ded/) so alloy, geometry, surface condition, and evidence are reviewed together.

## Ti-6Al-4V ELI Grade 23

Grade 23 ELI has tighter interstitial limits, especially oxygen and often nitrogen/hydrogen. This can support fracture toughness and fatigue-sensitive requirements in certain applications. It is often discussed for medical-adjacent parts and high-reliability structures.

Use ELI when the evidence requirement justifies it. If the only reason is "higher quality," the RFQ is underspecified. State the mechanical requirement, standard, surface condition, post-processing, and documentation expectation.

For cyclic loading or high-reliability structures, use the [Titanium 3D Printing Fatigue Design](/posts/titanium-3d-printing-fatigue-design-surface-finish-hip/) guide before assuming that material grade alone solves fatigue risk.

## CP Titanium Grades 1-4

Commercially pure titanium is reviewed when ductility, corrosion behavior, or a non-structural titanium requirement matters more than maximum strength. CP Ti can be relevant for chemical, corrosion, or special forming behavior, but process availability and parameter control must be checked. In Chinese sourcing language, buyers may use TA1 or TA2 when they mean commercially pure titanium hardware; the final RFQ should still define the exact grade and standard.

The RFQ should state which grade is required and why. CP Ti Grade 1 and Grade 4 do not represent the same design space.

## Powder and Chemistry Controls

For titanium powder, interstitial elements matter. Oxygen, nitrogen, and hydrogen influence strength, ductility, and fatigue. Powder particle size distribution, morphology, apparent density, tap density, reuse state, and storage controls can affect recoating and build stability.

High-risk applications should define chemistry limits, PSD reporting, powder lot traceability, and reuse policy. If reuse state matters, it must be documented as part of traceability.

## Selection Checklist

- Alloy grade and standard.
- Process route: LPBF, EBM, DED, or conventional alternative.
- Service environment: temperature, corrosion, fatigue, biocompatibility, or leak concern.
- Post-processing: stress relief, anneal, HIP, machining, surface finish, cleaning.
- Evidence: COA, COC, build record, CMM, CT, coupons, density, traceability.

The fastest material decision starts from acceptance criteria, not from a material name alone.

Once the alloy is selected, define the supporting evidence with [Titanium AM Qualification and Inspection Evidence](/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/) and normalize purchasing scope with the [Titanium AM RFQ and Procurement Guide](/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/).
