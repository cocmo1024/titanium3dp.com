---
title: 'Titanium 3D Printing Post-Processing: Heat Treatment, HIP, Machining, and Finish'
publishDate: 2026-01-03
updateDate: 2026-07-19
excerpt: 'Plan titanium AM post-processing as a controlled route through stress relief or heat treatment, HIP when justified, support removal, machining, surface finishing, cleaning, inspection, and release.'
category: 'Case Studies'
tags: ['post-processing', 'hip', 'stress-relief', 'machining', 'surface-finish', 'inspection']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/titanium-3d-printing-post-processing-hip-machining-surface-finish.webp
metadata:
  title: 'Titanium AM Post-Processing | HIP, CNC & Finish'
  description: 'Decision guide for titanium AM stress relief, heat treatment, HIP, support removal, CNC machining, surface finish, cleaning, inspection, and RFQ scope.'
  canonical: https://titanium3dp.com/posts/titanium-3d-printing-post-processing-hip-machining-surface-finish/
---

Titanium 3D printing post-processing is the route that turns an as-built shape into a **defined material condition, finished geometry, controlled surface, clean part, and auditable release package**. It is not a menu of optional upgrades added after the print price is agreed.

The sequence matters. Thermal processing can change material condition and residual stress. Plate separation and support removal can release distortion or damage protected surfaces. Machining creates final datums and interfaces. Surface finishing changes roughness and sometimes geometry. Cleaning removes process residue. Inspection must measure the part in the state the drawing accepts.

## Short Answer

Define post-processing before quotation by answering five questions:

1. What is the required delivered material and thermal condition?
2. Does HIP address a stated fatigue, defect, density, or pressure-boundary risk?
3. Which features are as-built, which are finished, and which are machined?
4. What cleaning and surface condition does the function require?
5. At which process stage will each inspection or test make a release decision?

Do not request universal heat-treatment temperatures, times, HIP cycles, roughness values, or machining allowances without the governing specification, alloy, process route, section geometry, starting condition, and acceptance basis. Ask suppliers to quote the controlled route and identify deviations.

## Post-Processing Decision Table

| Operation | Decision it should support | What it does not prove | RFQ output |
| --- | --- | --- | --- |
| Stress relief or other thermal treatment | Required material condition, residual-stress management, dimensional stability, or microstructure | Final dimensions, acceptable surface, absence of defects, or part qualification | Governing specification, cycle basis, sequence, furnace/batch record, acceptance evidence |
| Plate separation and support removal | Safe release of the part while protecting geometry and functional zones | That support scars or distortion meet the drawing | Removal method, protected zones, intermediate inspection, rework limits |
| HIP | Risk-based treatment for internal porosity or specified material-property route | Correction of geometry, removal of surface-connected defects, repair of every lack-of-fusion condition, or improvement of an inaccessible surface | Requirement/basis, sequence, cycle record, post-HIP tests and dimensional plan |
| Machining | Final datums, bores, threads, seals, flatness, and interfaces | Internal cleanliness, material conformity, or hidden-feature acceptance | Stock, setups, datum sequence, finished dimensions, CMM plan |
| Surface finishing | Functional roughness, fatigue, flow, sealing, cleaning, wear, or appearance requirement | A universal improvement to every surface or defect type | Surface map, method, material-removal control, measurement method |
| Cleaning and packaging | Removal of powder, media, chips, chemistry, or residue to a defined delivery state | Sterility, biocompatibility, oxygen service, UHV readiness, or regulatory approval unless separately validated | Cleanliness requirement, method, verification, drying, protection, packaging |
| Inspection and documentation | Evidence that the delivered state meets defined acceptance criteria | Product approval beyond the scope of the tests | Hold points, methods, acceptance criteria, reports, traceability, deviation control |

This table keeps procurement focused on outcomes. “Include HIP and polishing” is not enough if the failure mode, surfaces, state, and release evidence are undefined.

## Define As-Built, Intermediate, and Delivered States

A controlled drawing and purchase order should distinguish at least three states:

- **As-built:** geometry and surface before plate separation, support removal, thermal processing, or finishing as applicable.
- **Intermediate:** the part after selected thermal operations, separation, support removal, or datum creation but before final finishing and release.
- **Delivered:** the condition against which the buyer accepts dimensions, material state, surface, cleanliness, tests, and documents.

Mixing these states causes avoidable disputes. An as-built wall may later be machined. A datum may not exist until a setup cut is complete. CT performed before HIP answers a different question from CT performed after HIP. A leak test before final machining may not represent the finished ports and seals.

The [titanium tolerance, datum, and CMM guide](/posts/titanium-3d-printing-tolerances-datum-planning-cmm/) helps define state-aware dimensions. The [titanium DfAM guide](/posts/titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls/) reserves machining access, support zones, and inspection features in CAD.

## Stress Relief and Heat Treatment Are Different Requirements

“Heat treated” is not a complete delivery condition. A project may need a stress-management step before separation, a material-property heat-treatment route, or a sequence that combines operations under a component specification. The purpose and governing document must be stated.

Ask the supplier to identify:

- Starting alloy and build process.
- Applicable material/component specification and revision.
- Required final condition or property basis.
- Thermal operation, sequence, atmosphere, and batch traceability.
- Whether supports or the build plate remain during the operation.
- How dimensional change is handled before final machining.
- Which coupons, chemistry, microstructure, or mechanical tests apply.
- Reheat or rework limits and approval requirements.

[ASTM F3301](https://store.astm.org/f3301-18.html) specifies requirements for thermal post-processing of metal powder bed fusion parts to achieve material properties and microstructure required by engineering requirements, including titanium alloys within its stated material scope. It is intended to work with the relevant material/part-property specification; it is not a standalone instruction to apply one cycle to every titanium AM part.

[ASTM F2924-14(2021)](https://store.astm.org/standards/f2924) and [ASTM F3001-14(2021)](https://store.astm.org/standards/f3001) provide purchasing frameworks for full-melt powder bed fusion Ti-6Al-4V and Ti-6Al-4V ELI components. Confirm the actual revision and contract requirements rather than copying a thermal condition from a different material form or supplier route.

## HIP: Define the Failure Mode First

HIP can be justified when internal porosity reduction, fatigue/fracture evidence, density, or pressure-boundary risk is part of the approved material and part route. It should not be added automatically to make a quote look “aerospace grade” or “medical grade.”

HIP does not machine a distorted bore, remove support scars, clean a channel, smooth a down-skin surface, or make an uninspectable cavity acceptable. It also should not be described as guaranteed repair for every lack-of-fusion or surface-connected defect. The relevant defect morphology, surface condition, inspection capability, and acceptance criteria still matter.

Before specifying HIP, answer:

- Which failure mode or requirement is HIP intended to address?
- Is it required by the governing specification, customer, or qualification plan?
- Does HIP occur before or after a particular inspection or machining stage?
- What dimensional change or machining stock must be managed?
- What test, coupon, microstructure, density, CT, leak, or other evidence is needed after the cycle?
- Can the supplier maintain traceability between the part/build lot and HIP batch?

For fatigue-sensitive parts, combine HIP decisions with surface state, support contact, orientation, and coupon relevance using the [titanium AM fatigue guide](/posts/titanium-3d-printing-fatigue-design-surface-finish-hip/).

## Plate Separation and Support Removal Need a Controlled Route

Part removal changes the restraint condition. A thin frame, long plate, or asymmetric structure may move when it is separated even if it measured acceptably on the build plate. The thermal sequence, fixture concept, separation method, cut location, and intermediate measurement plan should be reviewed together.

Support removal also affects the final surface. Manual tools, machining, wire EDM, sawing, grinding, or another controlled method may be appropriate depending on geometry and access. The decision should protect datums, sealing faces, fatigue zones, thin features, and internal openings.

Require the quote to state:

- Plate-separation method and retained sacrificial stock.
- Support-removal method by region.
- Surfaces where marks are allowed, removed, or prohibited.
- Intermediate straightness, distortion, or visual checks if they change the next operation.
- Repair/rework limits and approval before altering a critical surface.

If a support cannot be reached or removed without damaging the part, the problem belongs in DfAM—not in a last-minute finishing operation.

## Machining Creates the Functional Part

Many titanium AM projects rely on additive manufacturing for near-net geometry and CNC machining for final interfaces. Typical machined features include datums, bearing bores, threads, sealing lands, O-ring grooves, mounting faces, precision ports, and contact surfaces.

The RFQ should define:

- Which CAD model represents the printed blank and which represents the final part.
- Stock on each machined feature rather than one blanket allowance.
- Stable fixture and datum surfaces after thermal processing and separation.
- Tool access, cutter reach, chip evacuation, and protection of thin features.
- The sequence for datum creation and final feature finishing.
- Finished-state GD&T and CMM reporting.
- Whether removed witness material, coupons, or tabs have a test or traceability role.

An inexpensive print can become an expensive part when the machining plan requires several custom setups, inaccessible tools, or re-establishment of a datum lost during support removal. Compare delivered cost using the [titanium 3D printing cost guide](/posts/titanium-3d-printing-cost-drivers-rfq-price-reduction/).

## Specify Surface Finish by Function and Zone

“Smooth finish” is not auditable. Divide surfaces by what they must do:

| Surface zone | Functional question | Possible route to evaluate |
| --- | --- | --- |
| Seal or gasket face | What flatness, texture, edge, and leak requirement applies? | Machining, lapping, or another controlled finishing route |
| Fatigue-sensitive surface | Where can cracks initiate and how is the final state verified? | Machining, polishing, peening, or other qualified route with inspection |
| Internal flow path | How do roughness, blockage, particles, and cleaning affect flow? | Accessible finishing, process-specific internal treatment, flow/pressure-drop evidence |
| Sliding or bearing interface | What fit, wear, and alignment condition is required? | Machining and measured final geometry |
| Corrosion/cleanliness surface | What media, residue, contamination, and cleaning limits apply? | Defined cleaning and surface-treatment route supported by the application |
| Nonfunctional exterior | Is appearance the only requirement? | Minimal blasting or cosmetic treatment if it does not damage functional zones |

Blasting can change appearance without producing a sealing or fatigue surface. Polishing can remove material and soften edges. Internal finishing may be limited by access and may change passage geometry. Every method needs a surface map, dimensional allowance, and verification method.

For enclosed paths, use the [internal-channel and CT guide](/posts/titanium-3d-printed-internal-channels-powder-removal-ct/) to connect finishing with powder removal, cleanliness, CT, flow, and leak acceptance.

## Cleaning, Passivation, and Packaging Need an Application Basis

Cleaning may need to remove loose powder, support-removal debris, machining chips, abrasive media, polishing compounds, oils, or chemical residue. The correct method depends on geometry, material condition, service environment, and customer specification.

Passivation or another surface treatment should be specified only when the applicable process and acceptance basis require it. Do not imply that a generic “passivated” note proves corrosion performance, medical cleanliness, oxygen compatibility, vacuum cleanliness, or regulatory acceptance.

State the required cleanliness outcome, verification method, drying, protection of ports and seals, and packaging. If sterilization, biocompatibility, cleanroom, UHV, oxygen, semiconductor, or other special handling applies, it remains a separate controlled requirement.

## Inspection Must Follow Operations That Can Change Acceptance

[ISO/ASTM 52908:2023](https://www.iso.org/standard/81779.html) covers qualification, quality assurance, post-processing, inspection, and testing for metal powder bed fusion parts at defined quality levels. Its public scope is aimed at both part providers and customers. Use that framework to define hold points rather than ordering every available test.

A risk-based sequence may include:

- Powder/build records and in-process evidence retained for traceability.
- Pre-HIP CT or other inspection only when it answers a defined process question.
- Post-thermal dimensional checks before committing to final machining.
- Final CMM after the datum and critical features exist.
- CT after the operation whose output the scan is intended to accept.
- Roughness measurement on the named final surface and by the specified method.
- Leak, pressure, flow, or cleanliness test after relevant ports, seals, and surfaces are finished.
- Coupon or mechanical testing tied to the defined build lot, orientation, and thermal condition.

[NIST's Additive Manufacturing Part Qualification project](https://www.nist.gov/programs-projects/additive-manufacturing-part-qualification) identifies complex geometry, surface topography, internal defects, residual stresses, anisotropy, and post-processing as linked measurement challenges. One report rarely proves all of them. Select evidence by failure mode and release decision.

## Common Post-Processing Failure Modes

**The quote says “heat treat” without a condition or specification.** Suppliers price different cycles and deliver non-comparable material states.

**HIP is treated as universal defect removal.** Surface-connected defects, support scars, distortion, roughness, and inaccessible residue remain.

**Supports are removed before the distortion strategy is agreed.** The part moves after release and loses machining stock or datum stability.

**Machining is priced after the print.** Tool access, setups, fixtures, stock, and finished inspection were not included in supplier comparison.

**One finish is applied everywhere.** Noncritical exterior treatment is mistaken for a functional seal, fatigue, flow, or clean surface.

**Inspection occurs in the wrong state.** A pre-finish report is submitted for a feature changed by machining, polishing, HIP, or cleaning.

**Cleaning is defined by method, not outcome.** Powder or process residue remains in a part that looks clean externally.

## Titanium AM Post-Processing RFQ Checklist

Send:

- Controlled CAD and drawing, part revision, quantity, and lot intent.
- Exact titanium grade, component specification, and required delivered condition.
- Build process and whether supplier process selection remains open.
- Thermal-treatment purpose, governing requirement, sequence, and records.
- HIP requirement or request for a risk-based recommendation with stated evidence.
- Plate-separation and support-removal assumptions, protected surfaces, and rework limits.
- Printed-blank and final-machined geometry, stock, setups, and datum sequence.
- Surface map with functional requirement, method, and measurement for each critical zone.
- Cleaning, drying, port protection, contamination, and packaging requirements.
- CMM, CT, roughness, coupons, density, leak/pressure/flow tests, COA/COC, and traceability tied to acceptance.
- Supplier deviations, excluded operations, subcontracted steps, and hold points shown separately.

Normalize the complete route with the [titanium AM RFQ and procurement checklist](/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/). A comparable quote should make clear whether it covers a print-only shape or a delivered and accepted component.

## Sources and Scope

This guide uses the public scopes of ASTM F3301, ASTM F2924-14(2021), ASTM F3001-14(2021), ISO/ASTM 52908:2023, and NIST's AM Part Qualification project. Confirm current status and the contractually applicable revision before release.

These sources support structured thermal processing, post-processing, inspection, and qualification planning. They do not establish one universal sequence or numeric requirement for every titanium alloy, machine, geometry, application, or supplier. Customer drawings, material/component specifications, regulatory requirements, approved process plans, and acceptance criteria remain authoritative.

The post-processing plan is complete when every operation has a reason, an input state, an output state, an acceptance method, and traceability to the delivered titanium part.
