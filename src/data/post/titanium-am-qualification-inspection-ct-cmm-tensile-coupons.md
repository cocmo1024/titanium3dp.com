---
title: 'Titanium AM Qualification and Inspection Evidence'
publishDate: 2026-01-01
updateDate: 2026-05-24
excerpt: 'How to specify CT, CMM, tensile coupons, density, surface roughness, COA/COC, build records, and traceability for titanium AM parts.'
category: 'Case Studies'
tags: ['qualification', 'inspection', 'ct', 'cmm', 'coupons', 'traceability', 'density']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/5.webp
metadata:
  title: 'Titanium AM Inspection Evidence'
  description: 'Titanium AM qualification guide covering CT, CMM, tensile coupons, density, surface roughness, COA, COC, build records, and traceability.'
  canonical: https://titanium3dp.com/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/
---

Titanium AM approvals are driven by evidence packages, not marketing claims. The right inspection plan depends on the part risk, acceptance criteria, and what data will actually change the decision.

## CMM and Datum Strategy

CMM is useful only when the drawing defines stable, accessible datums. Datums on rough down-skin surfaces, support-scarred regions, or flexible thin walls can create ambiguous inspection.

If datums are created by machining, the drawing and inspection plan should reflect the sequence: print, stress relief, machine datum, finish critical features, inspect.

For more detail on route-aware datums, machining stock, and CMM scope, use [Titanium 3D Printing Tolerances: Datum Planning and CMM](/posts/titanium-3d-printing-tolerances-datum-planning-cmm/).

## CT Scanning

CT can validate internal geometry and detect voids above the effective scan resolution. It cannot prove "no porosity." It proves no detectable defect above the threshold under the selected scan settings.

For CT to be useful, specify:

- Feature or defect type to detect.
- Effective resolution or detection threshold.
- Acceptance criteria.
- Areas of interest.
- Whether internal channels, lattices, or wall thickness are part of the scope.

When the CT scope includes enclosed flow paths, pair the evidence plan with [Titanium 3D Printed Internal Channels: Powder Removal and CT](/posts/titanium-3d-printed-internal-channels-powder-removal-ct/).

## Mechanical Coupons

Coupons support process evidence, but only if they represent the build direction, post-processing condition, and acceptance question. For high-risk production work, coupons may be tied to each build lot or a defined sampling frequency. For prototypes, coupons may be optional.

Avoid asking for generic coupons if the result will not change approval.

## Density and Porosity

Bulk density methods can provide average density, but they do not show defect size, shape, or location. CT or metallography may be needed when fatigue or leak behavior depends on defect morphology.

For critical parts, average density alone is not enough evidence.

## Surface Roughness

Surface condition affects fatigue, sealing, friction, flow, and corrosion initiation. Down-facing and internal surfaces are often rougher than upward-facing surfaces. If roughness matters, specify the surface, target, measurement method, and finishing route.

For fatigue-sensitive surfaces, connect roughness requirements to the full route in [Titanium 3D Printing Fatigue Design](/posts/titanium-3d-printing-fatigue-design-surface-finish-hip/), not only to a generic finish note.

## Traceability Documents

Traceability connects the delivered part to powder lot, reuse state, build file, machine, parameter set, build date, post-processing batch, inspection results, and certificates.

Common documents include COA, COC, dimensional report, post-processing record, and labels. Higher evidence packages may add build records, CT reports, coupon results, density evidence, and deviation logs.

Evidence should be proportional to risk. Under-specifying evidence creates approval delays; over-specifying evidence adds cost without improving the decision.

For aerospace and defense sourcing, traceability also affects alternate-route approval; see [Titanium 3D Printing for Aerospace and Defense Supply Chains](/posts/titanium-3d-printing-aerospace-defense-supply-chain-resilience/).
