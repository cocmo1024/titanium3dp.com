---
title: 'Titanium AM Qualification and Inspection: CT, CMM, NDT and Acceptance Evidence'
publishDate: 2026-01-01
updateDate: 2026-07-19
excerpt: 'How to turn CT, CMM, NDT, coupons, surface data, build records, and traceability into a risk-based acceptance plan for titanium additive manufacturing parts.'
category: 'Case Studies'
tags: ['qualification', 'inspection', 'ct', 'cmm', 'coupons', 'traceability', 'density']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/titanium-am-qualification-inspection-ct-cmm-tensile-coupons.webp
metadata:
  title: 'Titanium AM Qualification and Inspection Evidence'
  description: 'Specify titanium AM qualification evidence: CT detectability, CMM datums, NDT, coupons, surface condition, traceability, acceptance authority, and RFQ inputs.'
  canonical: https://titanium3dp.com/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/
---

Titanium additive manufacturing qualification is not a certificate that a supplier attaches after printing. It is a controlled argument that the selected material, machine, process route, post-processing, inspection methods, and delivered records are sufficient for a defined part and use.

The practical buyer question is therefore not, “Do you provide CT and tensile coupons?” It is, “Which evidence can detect or control each release risk, at what threshold, and who has authority to accept the result?” A long inspection list without a drawing-based acceptance plan can add cost while leaving the actual approval decision unresolved.

## Quick Answer

Build the evidence plan from the failure mode backward:

1. Define the part function, risk class, service conditions, and acceptance authority.
2. Identify the geometry, material, surface, internal-defect, and traceability risks that can change release.
3. Assign a method, coverage, detectability or measurement uncertainty, sampling rule, and acceptance criterion to each risk.
4. Tie every report to the delivered part, build, powder or feedstock lot, thermal batch, machining state, and approved deviation history.
5. Treat standards as scoped tools. A defect vocabulary, an NDT practice, or a material specification does not by itself qualify a part.

For a prototype, visual review and dimensional checks may answer the decision. For a fatigue-, pressure-, medical-, or flight-related component, qualification can extend across design control, machine and process qualification, material allowables, build control, post-processing, NDT, destructive testing, and configuration management. The customer or responsible engineering authority must define that boundary.

## Qualification Is a Chain, Not a Single Test

The word *qualification* is often used for different decisions. Separate them before requesting evidence.

| Decision | Evidence may include | What it does not prove |
| --- | --- | --- |
| Feedstock acceptance | Chemistry, particle-size distribution, morphology, contamination controls, lot identity, reuse history | That the final part has acceptable microstructure or mechanical performance |
| Machine and process control | Qualified parameter set, calibration and maintenance status, build records, witness artifacts, monitoring data | That every feature on the delivered part meets drawing requirements |
| Material/process basis | Specimens with defined orientation, location, thermal state, surface state, and test method | Universal properties for every geometry, machine, or supplier |
| Part conformance | CMM, gauges, CT, surface measurements, leak or pressure tests, NDT, visual inspection | Fitness for use unless acceptance limits reflect the actual design risk |
| Lot or build release | Traceable reports, sampling results, deviation disposition, certificates and signatures | Long-term process stability outside the approved sampling and change-control plan |

This separation prevents a common procurement error: using a powder certificate as proof of part properties, or using an average density value as proof that no harmful local defect exists.

The [titanium powder reuse and traceability guide](/posts/titanium-am-powder-reuse-oxygen-control-traceability/) separates feedstock genealogy, sampling, oxygen and chemistry controls, built-material evidence, and finished-part acceptance.

NIST describes part qualification as a measurement challenge involving complex surfaces, internal defects, anisotropy, residual stress, post-processing, and mechanical performance. Its work supports measurement science and test methods; NIST is not the authority that approves a customer’s aerospace, medical, or other regulated part. That distinction is explicit in the [NIST qualification program description](https://www.nist.gov/programs-projects/qualification-additive-manufacturing-materials-processes-and-parts).

## The 2026 Defect-Classification Boundary

[ISO/ASTM 52948:2026](https://www.iso.org/standard/84919.html) provides a classification of imperfections that can occur in metallic laser- and electron-beam powder bed fusion. It also identifies probable causes and includes illustrations. This is useful for a shared vocabulary among design, manufacturing, NDT, and quality teams.

It does **not** provide acceptance criteria, dimensional descriptions, or a severity scale for those imperfections. A purchase order that says only “inspect to ISO/ASTM 52948” is incomplete. The engineering organization still needs to define:

- Which imperfection classes matter for the part and why.
- Critical zones, orientations, and surfaces.
- Maximum allowable size, population, spacing, or other disposition rule.
- The method and demonstrated detectability used to find them.
- The response to an indication: accept, reject, rework, additional inspection, or engineering review.

Classification makes reports more consistent. It does not convert an indication into an automatic pass or fail.

## What ASTM F3704/F3704M-24 Adds

[ASTM F3704/F3704M-24](https://store.astm.org/f3704_f3704m-24.html) is a standard practice for NDT inspection levels, methods, and acceptance criteria for parts made by laser-based powder bed fusion. Its scope is narrower than “all metal AM.” It applies to PBF-LB parts and recognizes that flaw detectability depends on flaw characteristics and orientation relative to the method.

The ASTM summary also sets an important implementation boundary: the practice requires an individual-part NDT technique, concurrence by the cognizant engineering organization, and applicable NDT Level 3 approval of the work instruction or technique. Some details require agreement between that engineering organization and the AM supplier.

This means a supplier should not simply state “ASTM F3704 compliant” without identifying the part-specific technique and approvals. The RFQ should ask which inspection level is proposed, what NDT method is used, which zones are covered, what reference or validation demonstrates capability, and who approves the technique.

HIP creates another decision point. ASTM notes that HIP can partially or completely close certain defects, so an NDT method used after HIP may not detect a collapsed indication. The user of the standard must decide whether that condition is rejectable and which method or process evidence addresses it. Post-HIP CT alone should not be treated as proof that no pre-HIP defect existed.

## Select Inspection by the Question It Must Answer

### CMM and dimensional metrology

CMM is appropriate for accessible external geometry when the drawing establishes stable datums, inspection state, and tolerances. A datum placed on rough down-skin, support-scarred material, or a compliant thin wall can create an unstable result. If machining creates the functional datum, the route should normally read: build, thermal processing, create machining datums, finish critical features, then inspect in the delivered state.

Specify the datum reference frame, inspected characteristics, sampling, fixture assumptions, temperature or environmental requirements where relevant, and the reporting format. For route-aware dimensional planning, see [Titanium 3D Printing Tolerances: Datum Planning and CMM](/posts/titanium-3d-printing-tolerances-datum-planning-cmm/).

### Industrial CT

CT can evaluate internal geometry, wall continuity, trapped material, and indications above the demonstrated detection capability of the selected scan and reconstruction. It cannot establish “zero porosity.” Detectability changes with material thickness, part size, attenuation path, voxel size, indication orientation, reconstruction settings, and analysis method.

A useful CT requirement states:

- The feature or imperfection being evaluated.
- Regions of interest and excluded or limited regions.
- Required detectability, not merely nominal voxel size.
- Reference artifacts, validation method, or probability-of-detection basis where required.
- Analysis and segmentation rules.
- Acceptance criteria and indication disposition.
- Whether the scan occurs before or after HIP, machining, or other processing.

For enclosed flow paths, coordinate CT with depowdering, cleaning, and flow or leak evidence using the [internal-channel acceptance guide](/posts/titanium-3d-printed-internal-channels-powder-removal-ct/).

### Surface condition

Surface state can drive fatigue initiation, sealing, friction, flow loss, cleaning, and corrosion behavior. “Ra required” is insufficient if the drawing does not identify the measured surfaces, cutoff and evaluation method, direction, access, and delivered finish. Down-facing, internal, support-contact, machined, blasted, polished, and chemically treated surfaces are not interchangeable.

For fatigue-sensitive zones, connect surface requirements to orientation, support removal, thermal processing, machining, and inspection rather than treating finish as a cosmetic note. The [titanium AM fatigue guide](/posts/titanium-3d-printing-fatigue-design-surface-finish-hip/) covers that evidence chain.

### Density, metallography, and mechanical coupons

Bulk density can support process monitoring, but it does not locate defects or describe their morphology. Metallography samples only the prepared section. Tensile, fatigue, fracture, or chemistry specimens answer different questions and must be tied to build orientation, location, feedstock lot, parameter set, thermal/HIP state, surface state, test method, and sampling plan.

A coupon that passes does not automatically release an adjacent complex part. It provides evidence within the representativeness established by the qualification plan. Ask what decision the coupon supports and what action follows a failed result. If neither answer is clear, the coupon may be an expensive ritual rather than useful evidence.

### Leak, pressure, and functional tests

For pressure or flow hardware, CT does not replace a defined leak or pressure test, and a pressure test does not map internal geometry. State the medium, pressure or vacuum condition, stabilization, duration, allowable leakage, temperature, safety boundary, cleanliness state, and test sequence. The engineering authority must decide whether proof, leak, burst, flow, or another functional test is appropriate.

## In-Situ Monitoring Is Supporting Evidence

Melt-pool, thermal, optical, acoustic, or layer imaging data can support process understanding and anomaly review. It should not be presented as an automatic substitute for validated post-process inspection or mechanical evidence unless the program has established the correlation, thresholds, uncertainty, data integrity, and change-control rules.

NIST’s 2026 [in-situ metrology roadmap workshop](https://www.nist.gov/news-events/events/2026/04/roadmapping-situ-metrology-metal-alloy-additive-manufacturing) focuses on measurement gaps, structural and microstructural evolution, residual stress, data, AI, standards, and qualification-ready manufacturing. The initiative is evidence that in-process measurement remains an active qualification problem. It is not a published universal release method.

For sensor configuration, anomaly correlation, model governance, data retention, and RFQ controls, use the dedicated [titanium AM in-situ monitoring and melt-pool data guide](/posts/titanium-am-in-situ-monitoring-melt-pool-data-qualification/).

## Risk-Based Evidence Levels

| Project condition | Proportionate starting package | Escalation trigger |
| --- | --- | --- |
| Fit-check or non-functional prototype | Material identity, visual review, key dimensions, delivered-condition statement | Geometry or material will be used for a functional decision |
| Functional engineering prototype | Controlled CAD/drawing, process route, CMM of critical features, selected material evidence, post-process records | Fatigue, pressure, internal features, safety function, or production transfer |
| Production-intent component | Approved route, lot/build traceability, defined sampling, CMM/CT/NDT as risk requires, coupon plan, deviations and release records | Process, supplier, machine, parameter, feedstock, geometry, or post-process change |
| Safety-, mission-, or regulatory-critical hardware | Program-specific qualification and certification plan under the responsible authority | Any change outside the approved configuration or substantiated equivalence boundary |

NASA-STD-6030 is an example of the last category. The active [NASA standard](https://standards.nasa.gov/standard/nasa/nasa-std-6030) covers AM design, fabrication, and testing for NASA spaceflight hardware. It is a NASA program framework, not a generic certificate for commercial titanium AM parts and not evidence that a supplier is approved for NASA work.

## RFQ Checklist for Comparable Inspection Quotes

Send suppliers the same controlled package and request assumptions separately:

- Part number, revision, STEP or native CAD, 2D drawing, quantity, lot definition, and delivery state.
- Governing material and process specifications with revision or contract date.
- Responsible engineering and acceptance authority.
- Service loads, temperature, environment, fatigue, pressure, cleanliness, and regulatory context.
- Critical and non-critical zones, datums, machining stock, sealing faces, threads, channels, and inaccessible surfaces.
- Process route: feedstock condition, machine/process control, thermal treatment, HIP, support removal, machining, finishing, and cleaning.
- Each required test, method, location, coverage, sampling, uncertainty or detectability, and acceptance criterion.
- Timing of CT or NDT relative to HIP and machining.
- Coupon type, orientation, location, condition, frequency, test method, and failed-coupon disposition.
- Required COA, COC, build record, powder or feedstock traceability, post-processing certificates, inspection data, images, raw files, and deviation log.
- Retention period, report format, serialization, and configuration/change-control expectations.
- Supplier exceptions, proposed alternatives, and items requiring customer engineering approval.

Do not ask every supplier to invent a different acceptance plan inside a price quote. Define the release decision first, then compare method, coverage, lead time, and cost. The [titanium AM RFQ and procurement guide](/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/) provides a broader package for normalizing supplier responses.

## Failure Modes to Catch Before Purchase Order

- **A standard is cited without a revision or scope.** The parties can be working to different requirements.
- **Defect classification is mistaken for acceptance.** ISO/ASTM 52948 names imperfections but does not set pass/fail limits.
- **CT is ordered without detectability.** A scan exists, but the risk-relevant indication may not be resolvable.
- **Inspection state is ambiguous.** Pre-HIP, post-HIP, as-built, machined, and finished results answer different questions.
- **A coupon is not representative.** Orientation, location, surface, thermal condition, or sampling differs from the qualified basis.
- **Datums cannot be reproduced.** CMM results vary because functional references were never created or controlled.
- **Traceability stops at the powder certificate.** The delivered part cannot be connected to build, thermal, machining, inspection, and deviation records.
- **Monitoring is treated as release evidence without validation.** A large data file exists, but no correlation or disposition rule has been approved.

## Source and Scope Boundary

This guide uses primary source descriptions from [ISO/ASTM 52948:2026](https://www.iso.org/standard/84919.html), [ASTM F3704/F3704M-24](https://store.astm.org/f3704_f3704m-24.html), the [NIST AM Part Qualification project](https://www.nist.gov/programs-projects/additive-manufacturing-part-qualification), and [NASA-STD-6030](https://standards.nasa.gov/standard/nasa/nasa-std-6030).

Those sources establish terminology, scope, measurement challenges, NDT practice, and examples of qualification governance. They do not establish that a specific titanium part, supplier, machine, parameter set, inspection technique, or regulatory pathway is acceptable. Final qualification and release remain the responsibility of the customer’s cognizant engineering, quality, and regulatory authorities.
