---
title: 'Titanium AM Material Selection: Grade 5 vs Grade 23 vs CP Titanium'
publishDate: 2026-01-05
updateDate: 2026-07-19
excerpt: 'Choose TC4, Ti-6Al-4V Grade 5, Ti-6Al-4V ELI Grade 23, or CP titanium for an AM part by service duty, specification route, feedstock controls, delivered condition, and acceptance evidence.'
category: 'Case Studies'
tags: ['materials', 'tc4', 'ti6al4v', 'grade-5-titanium', 'eli', 'cp-titanium', 'ta1', 'ta2', 'lpbf', 'ebm']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/1.webp
metadata:
  title: 'Titanium AM Materials | Grade 5 vs 23 vs CP Ti'
  description: 'Decision guide for selecting TC4 or Ti-6Al-4V Grade 5, Ti-6Al-4V ELI Grade 23, and CP titanium for LPBF or EBM parts, specifications, feedstock, and RFQs.'
  canonical: https://titanium3dp.com/posts/titanium-am-material-selection-ti6al4v-eli-cp-titanium/
---

Titanium AM material selection is not a choice between three rows in a property table. It is a purchasing decision that must connect the **material name**, **powder and process route**, **delivered condition**, **service environment**, and **evidence required to accept the part**.

TC4, Ti-6Al-4V, Grade 5, and Ti64 can refer to the same broad alloy family in different markets, but those names do not automatically define one controlled additive-manufacturing requirement. Ti-6Al-4V ELI / Grade 23 has a different interstitial-control basis. Commercially pure titanium is a family rather than a single grade, and TA1, TA2, Grade 1, and Grade 2 should not be treated as certificate-level synonyms.

## Short Answer

Use **Ti-6Al-4V Grade 5 / TC4** as the first material review for many structural titanium AM parts when strength-to-weight performance, process availability, and a defined powder bed fusion purchasing route are central.

Use **Ti-6Al-4V ELI Grade 23** when the controlled requirement calls for the extra-low-interstitial alloy and the buyer can define the applicable component specification, thermal condition, testing, and documentation. Do not choose ELI merely as a label for “higher quality.”

Review a specific **CP titanium grade** when corrosion exposure, ductility, chemistry, or a customer-controlled non-alloyed titanium requirement drives the part. First confirm that the supplier has a qualified or otherwise defensible AM route for that exact grade. A wrought Grade 2 or TA2 callout does not by itself define an AM component.

If none of these routes has a clear functional advantage, compare machining, forming, casting, forging, or a hybrid route before locking additive manufacturing. The [titanium 3D printing vs CNC decision guide](/posts/when-not-to-use-titanium-additive-manufacturing/) provides that manufacturing screen.

## Grade 5 vs Grade 23 vs CP Titanium Decision Table

| RFQ decision | Ti-6Al-4V Grade 5 / TC4 | Ti-6Al-4V ELI Grade 23 | CP titanium grade |
| --- | --- | --- | --- |
| Primary reason to review | Structural titanium AM route with broad Ti-6Al-4V familiarity | A controlled ELI chemistry and component requirement | A defined corrosion, ductility, chemistry, or customer-material requirement |
| Material definition | State Grade 5, TC4, Ti-6Al-4V, or Ti64 terminology, then lock the governing specification and revision | State Ti-6Al-4V ELI / Grade 23 and the governing specification and revision | State the exact CP grade or Chinese designation and the governing chemistry/product requirement |
| AM route question | Confirm LPBF, EBM, or another route against geometry and acceptance | Confirm full process, thermal, HIP, machining, testing, and documentation route | Confirm powder availability, parameter control, prior evidence, and whether a conventional route is stronger |
| Typical risk gate | Fatigue surface, support scars, orientation, heat treatment, machining, inspection | Interstitial control, material substitution, qualification scope, medical or other regulated-use assumptions | False grade equivalence, limited AM availability, corrosion extrapolation, use of wrought data for a printed component |
| Buyer output | Comparable delivered-part quote with material and process evidence | Purchase requirement tied to ELI component acceptance | Supplier feasibility response before design freeze or material substitution |

This table is a routing tool, not a design-allowables table. Mechanical or corrosion values require the exact specification, build route, orientation, thermal condition, surface state, test method, and source.

## Separate Search Names From Purchase Requirements

Search language helps buyers find suppliers, but procurement language controls the part.

| Search or drawing term | What it may mean | What the RFQ still needs |
| --- | --- | --- |
| TC4 | Chinese sourcing language for a Ti-6Al-4V-family alloy | Applicable Chinese, ASTM, customer, or drawing requirement; chemistry; AM route; condition; evidence |
| Ti-6Al-4V / Ti64 | International alloy name or shorthand | Grade, component specification, process, heat treatment, surface state, and acceptance |
| Grade 5 | ASTM-oriented grade language | Confirmation that the requirement is for an AM component rather than a wrought product form |
| Ti-6Al-4V ELI / Grade 23 | Extra-low-interstitial Ti-6Al-4V | Applicable component specification, ELI chemistry basis, thermal condition, testing, and records |
| TA1 / TA2 / TA2G | Chinese CP titanium sourcing terms | Exact designation, specification, chemistry, service basis, product form, and AM feasibility |
| CP Ti / Grade 1-4 | Commercially pure titanium family | One exact grade, the reason it is required, and a defensible manufacturing and acceptance route |

Do not approve an equivalence from a name map alone. Compare the controlled documents, revisions, chemistry limits, manufacturing route, heat history, mechanical-property basis, test methods, and supplementary requirements.

## Build the Specification Hierarchy Before Choosing the Alloy

A production-intent material line normally sits inside a hierarchy:

1. Customer drawing and purchase order.
2. Component or material specification with revision.
3. Powder/feedstock requirements and lot controls.
4. Qualified machine, parameter set, build orientation, and manufacturing plan as required.
5. Thermal processing, HIP if justified, support removal, machining, and surface condition.
6. Inspection, test methods, acceptance criteria, certification, and traceability.

[ASTM F2924-14(2021)](https://store.astm.org/standards/f2924) is an active specification for additively manufactured Ti-6Al-4V components produced by full-melt powder bed fusion. ASTM states that it is intended for purchasers and producers defining requirements and component properties, and it allows more stringent buyer requirements through supplementary purchase-order requirements. It is not a universal approval for every Grade 5 part or application.

[ASTM F3001-14(2021)](https://store.astm.org/standards/f3001) is the corresponding active specification for full-melt powder bed fusion Ti-6Al-4V ELI components. Its public scope covers purchasing and production topics including feedstock, manufacturing, chemistry, thermal processing, inspection, certification, and quality requirements. It does not make a finished medical device, flight part, pressure component, or other regulated product approved.

For a controlled Grade 5 purchase path, use the dedicated [TC4 / Ti-6Al-4V Grade 5 guide](/materials/tc4-ti6al4v-grade-5/). For an ELI requirement, use the [ASTM F3001 / Grade 23 guide](/materials/ti6al4v-eli-grade-23-astm-f3001/).

## Ti-6Al-4V Grade 5 / TC4: Structural Starting Point

Grade 5 is often the strongest first conversation for brackets, housings, mounts, manifolds, and other structural titanium AM parts. That does not mean the grade alone decides suitability. The buyer still needs to state the load case, fatigue sensitivity, temperature, corrosion exposure, critical surfaces, dimensional interfaces, and release evidence.

A Grade 5 RFQ should distinguish:

- A prototype used to assess geometry or assembly fit.
- A functional test part with defined loads, environment, and inspection.
- A production-intent component with a controlled material and process route.
- A part offered as an alternate to wrought, forged, or machined material.

Those four projects can share the same alloy name and still require very different evidence. The [titanium AM process-selection guide](/posts/titanium-am-process-selection-lpbf-ebm-ded/) helps separate LPBF, EBM, DED, and conventional routes before the material note becomes a manufacturing assumption.

## Grade 23 ELI: Use the Requirement, Not the Reputation

Grade 23 is not an automatic upgrade from Grade 5. Select it because the drawing, component specification, service-risk assessment, or qualification plan requires an ELI route. Then state the standard revision, component classification or supplementary requirements where applicable, manufacturing process, thermal condition, HIP requirement if any, machining, testing, and records.

For medical-device work, a Grade 23 material specification is only one input. Device design controls, validation, cleaning, sterilization, biocompatibility, regulatory responsibility, and product-specific acceptance remain separate. For fatigue-sensitive work, material grade also cannot replace surface and defect control; use the [titanium AM fatigue guide](/posts/titanium-3d-printing-fatigue-design-surface-finish-hip/) to define that evidence chain.

## CP Titanium: Confirm the Exact Grade and the AM Route

CP titanium may be reviewed when a specific chemistry, corrosion exposure, ductility requirement, or customer material system makes it preferable to Ti-6Al-4V. The first question is not “Can titanium be printed?” It is whether the supplier can support the exact CP grade with controlled feedstock, parameters, thermal history, test evidence, and traceability.

Do not transfer a value from sheet, plate, bar, billet, or surgical mill-product data directly to a powder bed fusion component. Product-form standards can help define chemistry or procurement terminology, but the AM part needs its own process and acceptance basis. Corrosion behavior also depends on the exact medium, concentration, temperature, aeration, contaminants, crevices, flow, galvanic contact, surface condition, and cleaning history.

The [Grade 2 / TA2 / TA2G / CP titanium AM guide](/materials/grade-2-cp-titanium-ta2-3d-printing/) separates naming, wrought-standard limits, supplier feasibility, and RFQ evidence. Use it before treating TA2 and Grade 2 as a drop-in substitution.

## Powder Evidence Is Part of Material Selection

The alloy note does not control the feedstock by itself. [ISO/ASTM 52907:2019](https://www.iso.org/standard/73565.html), confirmed by ISO in 2025, covers methods and technical requirements for characterizing metal AM powders, including documentation and traceability, sampling, particle-size distribution, chemistry, characteristic densities, morphology, flowability, contamination, packaging, storage, and used powder.

For a risk-based RFQ, decide which powder evidence matters to acceptance:

- Powder manufacturer, alloy designation, lot, and certificate.
- Sampling and chemistry-reporting basis.
- Particle-size-distribution reporting when it is part of the controlled process.
- Virgin, blended, or reused powder policy and traceability.
- Storage, handling, screening, and contamination controls.
- Link from powder lot to build lot and delivered serial or batch identity.

[ISO/ASTM 52928:2024](https://www.iso.org/standard/78527.html) extends the discussion into powder lifecycle management for virgin and used feedstock. Neither standard means every powder metric must appear on every prototype certificate. The evidence depth should follow the part risk and the approved manufacturing plan.

Use the [titanium AM powder reuse, oxygen-control, and traceability guide](/posts/titanium-am-powder-reuse-oxygen-control-traceability/) to turn those feedstock decisions into genealogy, sampling, conformance, and RFQ requirements without relying on reuse count alone.

## Common Material-Selection Failure Modes

**Failure: “Ti64” is treated as a complete requirement.** The supplier may quote a familiar alloy route that does not match the buyer's component specification, condition, or evidence needs.

**Failure: Grade 23 is selected as a premium label.** The project pays for ELI material without defining the requirement it is meant to satisfy.

**Failure: TA2, Grade 2, and CP titanium are declared equivalent.** Chemistry, product form, test method, and AM-process differences are hidden inside a shorthand substitution.

**Failure: wrought properties are copied into an AM drawing.** Orientation, process, thermal condition, surface state, specimen type, and test basis are missing.

**Failure: the powder certificate is accepted as part qualification.** Feedstock evidence does not prove geometry, surface condition, internal defects, mechanical performance, or finished-part acceptance.

**Failure: the material is chosen before the environment is defined.** Corrosion, temperature, fatigue, pressure, cleaning, or galvanic interfaces later force a redesign.

## Titanium AM Material RFQ Checklist

Send suppliers the same controlled inputs:

- Part number, revision, STEP or native CAD, and controlled drawing.
- Exact alloy/grade terminology and governing specification revision.
- Reason the grade is required; do not use “best titanium available.”
- LPBF, EBM, or open process-selection posture.
- Prototype, test, or production-intent status and quantity/lot definition.
- Loads, temperature, media, pressure, fatigue, cleaning, and regulatory boundaries.
- Delivered condition: stress relief or other heat treatment, HIP if justified, machining, finish, and cleaning.
- Critical datums, interfaces, sealing surfaces, and fatigue-sensitive regions.
- Powder, build, thermal-process, and part traceability expectations.
- CMM, CT, coupons, chemistry, microstructure, mechanical tests, COA/COC, or other evidence tied to acceptance.
- Required deviations, substitutions, and supplier assumptions shown separately in the quote.

The [titanium AM RFQ checklist](/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/) explains how to package these inputs so competing quotes cover the same delivered part.

## Sources and Scope

This guide uses the public scopes of ISO/ASTM 52907:2019, ISO/ASTM 52928:2024, ASTM F2924-14(2021), and ASTM F3001-14(2021). The official standards should be checked again for current status and purchased or accessed through an authorized source when they govern a contract.

The standards support feedstock characterization and purchasing frameworks for defined AM material routes. They do not establish universal design allowables, approve a supplier, validate a finished product, or replace customer drawings, regulatory requirements, qualification plans, and application-specific acceptance criteria.

Material selection is complete only when the grade, powder, process, delivered condition, service duty, and evidence all point to the same purchasable component.
