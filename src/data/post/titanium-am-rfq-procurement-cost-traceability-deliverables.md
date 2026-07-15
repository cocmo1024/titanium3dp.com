---
title: 'Titanium 3D Printing RFQ: STEP vs STL, Drawings, and Quote Checklist'
publishDate: 2025-12-31
updateDate: 2026-07-16
excerpt: 'Build a quote-ready titanium AM data package with STEP or native CAD, controlled drawings, material and process requirements, acceptance evidence, quantities, and delivery scope.'
category: 'Case Studies'
tags: ['rfq', 'procurement', 'step-file', 'stl', 'technical-drawing', 'gdandt', 'traceability', 'deliverables']
author: 'TITANIUM 3DP Engineering'
metadata:
  title: 'Titanium 3D Printing RFQ: STEP vs STL Checklist'
  description: 'Titanium 3D printing RFQ guide for STEP vs STL, native CAD, drawings, GD&T, TC4 or Ti-6Al-4V material requirements, inspection, traceability, price, and lead-time inputs.'
  canonical: https://titanium3dp.com/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/
---

A useful titanium 3D printing RFQ does more than attach a model and ask for price. It gives engineering, quality, and procurement enough controlled information to quote the same delivered and accepted part. The minimum package is usually a STEP or native CAD model, a controlled drawing or model-based definition, the exact material requirement, quantity, service conditions, delivered condition, inspection and documentation scope, and required date.

STL can be useful for visualization or an early mesh review, but it should not be the only authority for a production-intent metal part. A mesh does not automatically communicate datums, GD&T, surface finish, thread standards, sealing requirements, material condition, inspection method, revision control, or acceptance evidence.

## Minimum Titanium AM Quote Package

The level of detail should match the decision being made. A budgetary screen can tolerate documented assumptions. A production purchase order cannot.

| Quote stage | Minimum useful inputs | What the quote can support | What it should not be used to approve |
| --- | --- | --- | --- |
| Budgetary feasibility | Representative geometry, approximate envelope, candidate material, quantity range, part function, and target timing | Early AM fit, likely process family, major DfAM issues, and a price range with stated assumptions | Final price, dimensional compliance, material substitution, production route, or delivery commitment |
| Engineering prototype | STEP or native CAD, revision, drawing, material target, quantity, critical interfaces, delivered condition, and test needs | A controlled prototype route with identified exceptions, post-processing, inspection, and schedule | Production equivalence or qualification unless those requirements are included |
| Production-intent RFQ | Controlled product definition, exact material and specification revision, service and risk inputs, process controls, acceptance plan, documentation, lot definition, and delivery terms | Comparable supplier responses for a delivered, inspected, documented component | Application approval outside the stated qualification and release basis |

If the request is only "quote Ti64 from the attached file," each supplier must invent the missing scope. One may price an as-built shape, another a stress-relieved blank, and another a fully machined and inspected part. Those prices are not competing offers for the same deliverable.

## STEP vs STL vs Native CAD vs 3MF or AMF

File formats carry different types of information. The strongest package uses the format that preserves geometry and manufacturing intent without assuming one file can replace every other requirement.

| File or document | Best use in a titanium AM RFQ | Main limitation | Practical control |
| --- | --- | --- | --- |
| Native CAD | Editable design review, feature history, assemblies, and supplier collaboration when software compatibility and data rights allow | Software/version dependence and more sensitive design data | State software and version, revision, units, export authority, and whether supplier edits require approval |
| STEP (.step or .stp) | Neutral solid-model exchange for build review, machining planning, and interoperability between CAD, CAM, CAE, and inspection systems | The export may not include all product and manufacturing information, and recipients can interpret disconnected notes differently | Identify the STEP application protocol if controlled, units, revision, transmittal record, and the governing drawing or MBD dataset |
| STL | Mesh visualization, rough feasibility, or a legacy machine-preparation input | Triangulated surface only; resolution and units can be ambiguous, with no native authority for GD&T, material, surface, or acceptance | Mark it reference-only unless the project explicitly controls tessellation, units, orientation, and authority |
| 3MF | Structured AM exchange with defined units, mesh data, transforms, metadata, and published extensions | Supplier software support and the exact extension set must be confirmed | State the 3MF version, required extensions, units, metadata authority, and fallback files |
| AMF | Standards-based additive manufacturing interchange using an XML schema | Adoption and implementation vary, and the standard does not cover every piece of final-part information | State ISO/ASTM 52915:2020 when required and identify information controlled outside the AMF file |
| Drawing or MBD dataset | Datums, GD&T, dimensions, surface finish, threads, critical characteristics, notes, and acceptance authority | Can conflict with an uncontrolled model or derivative export | Establish order of precedence, revision, design authority, and how model/drawing discrepancies are resolved |

NIST describes STEP under ISO 10303 as a format used to exchange parts, assemblies, and product and manufacturing information between CAD, CAM, CAE, and CMM systems. The [NIST STEP File Analyzer and Viewer](https://www.nist.gov/services-resources/software/step-file-analyzer-and-viewer) can inspect entities, attributes, semantic PMI, validation properties, and basic file errors. A STEP file can therefore carry more than shape, but only when the export and downstream software preserve the intended information.

The [3MF Consortium specification](https://3mf.io/spec/) defines a manufacturing-oriented container with units, geometry, metadata, and extensions. [ISO/ASTM 52915:2020](https://www.iso.org/standard/74640.html) defines AMF as an additive manufacturing interchange format and notes that additional final-part information exists outside its current scope. Neither format eliminates the need to define the contractual product dataset and acceptance plan.

## Why a STEP File Alone Is Not a Purchase Requirement

A solid model answers "what is the nominal shape?" It usually does not answer all of the following:

- Which faces establish the datum reference frame?
- Which holes, threads, sealing faces, bearing seats, and interfaces are machined after printing?
- Which dimensions apply before or after heat treatment, HIP, machining, and finishing?
- Which surfaces may show support contact or witness marks?
- Which internal passages must be free of loose powder, verified by CT, flow tested, or leak tested?
- Which material standard, revision, chemistry, heat-treatment condition, and property basis control acceptance?
- Which characteristics require CMM, gauges, roughness measurement, coupons, tensile tests, chemistry, or certificates?
- Who has authority to approve orientation, support changes, machining-stock changes, or repaired data?

[ASME Y14.47-2023](https://www.asme.org/codes-standards/find-codes-standards/y1447-2019-model-organization-practices) addresses organization practices for model-based product definition. A controlled MBD workflow can make the 3D model the master source, but that is different from attaching an unannotated STEP file and expecting the supplier to infer all product requirements. If the project still uses a drawing as the authority, say so clearly.

For tight interfaces, use the [titanium 3D printing tolerance, datum, and CMM guide](/posts/titanium-3d-printing-tolerances-datum-planning-cmm/) to define machining and inspection from the functional datum structure rather than from the as-built surface.

## Control Part Number, Revision, Units, and Authority

Every transmitted file should map to a part number and revision. A practical transmittal record lists:

- Part number, name, revision, and quantity.
- Native CAD filename and version where supplied.
- Neutral model filename, format, units, and export date.
- Drawing or MBD dataset filename and revision.
- Reference-only files such as STL, screenshots, section views, or marked-up concepts.
- The governing document and order of precedence.
- Approved deviations, open questions, and the person authorized to resolve them.

Do not send a file named "final-v7-new.stl" with a drawing at another revision. Suppliers cannot price revision risk consistently. If the model and drawing differ, stop and resolve the conflict before build preparation. A low price based on the wrong revision is not a commercial saving.

## Define TC4, Ti-6Al-4V, Grade 5, Grade 23, or CP Titanium Correctly

Material shorthand is not a full specification. The RFQ should state:

1. Exact material designation and governing specification or customer document.
2. Required revision and any supplementary requirements.
3. Whether the specification applies to powder, the AM component, a wrought comparison, or the final product.
4. Allowed process route, such as LPBF or EBM, or whether the supplier may recommend one.
5. Required chemistry, thermal condition, HIP decision, mechanical basis, test orientation, and surface state.
6. Whether substitutions or equivalent standards may be proposed and who can approve them.

TC4, Ti-6Al-4V, Grade 5, and Ti64 can refer to the same broad alloy family in sourcing conversations, but they do not automatically define one controlled AM purchase route. Use the [TC4 / Ti-6Al-4V Grade 5 material page](/materials/tc4-ti6al4v-grade-5/) to normalize those names.

For extra-low-interstitial material, the [Ti-6Al-4V ELI Grade 23 / ASTM F3001 guide](/materials/ti6al4v-eli-grade-23-astm-f3001/) explains the difference between a material-component specification and application approval. For corrosion-driven unalloyed titanium candidates, use the [Grade 2 / TA2 commercially pure titanium AM guide](/materials/grade-2-cp-titanium-ta2-3d-printing/).

## Quote the Delivered and Accepted Part

Separate the manufacturing route into explicit line items or a controlled included scope:

| Scope block | Questions the supplier should answer |
| --- | --- |
| Data and engineering | Is DfAM review included? Who repairs files, chooses orientation, adds supports, and approves geometry changes? |
| Build | Which process family, material route, powder-lot controls, parameter controls, and build-lot definition apply? |
| Thermal processing | What stress relief, anneal, HIP, or other thermal route is included, and which records are delivered? |
| Part removal and support removal | How is the part removed from the plate, how are supports accessed, and which witness areas remain? |
| CNC machining | Which datums, setups, bores, threads, interfaces, sealing faces, and machining allowances are included? |
| Surface and cleaning | Which surfaces are finished, what condition is delivered, and how are internal passages cleaned and verified? |
| Inspection and testing | What CMM, CT, density, roughness, chemistry, coupon, leak, pressure, flow, or other evidence is included? |
| Documentation and release | Which COA/COC, build, heat-treatment, inspection, nonconformance, traceability, packing, and shipping records are delivered? |

The [post-processing guide](/posts/titanium-3d-printing-post-processing-hip-machining-surface-finish/) helps identify which route steps belong in the quote. For internal passages, add the [powder-removal, cleaning, and CT decision path](/posts/titanium-3d-printed-internal-channels-powder-removal-ct/) before asking for a fixed price.

## Inspection Requirements Must Be Measurable

"Full inspection" is not a measurable acceptance criterion. Define the characteristic, method, coverage, threshold, report, and release decision. Examples include:

- CMM against identified datums and drawing characteristics.
- CT for specified internal features, with the required detectable feature or defect basis agreed before quote.
- Surface roughness on named, accessible surfaces using an agreed method.
- Leak or pressure testing with media, pressure, hold time, temperature, allowable leakage, and report format.
- Flow testing with defined fluid, temperature, inlet condition, pressure drop, and acceptance range.
- Chemistry and mechanical testing tied to material specification, build lot, specimen orientation, thermal state, surface state, and test standard.
- Powder, build, thermal-processing, machining, inspection, and certificate traceability mapped to delivered serial or lot identity.

CT is not automatically capable of resolving every wall, pore, channel, or defect in every part. CMM cannot verify an inaccessible internal passage. A tensile coupon does not directly prove every local property in the component. The [qualification and inspection evidence guide](/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/) helps align each method with the failure mode it can actually address.

## Normalize Supplier Quotes Before Comparing Price

Create a compliance matrix with one row per requirement and ask each supplier to answer included, conditional, excluded, or not supported. At minimum, compare:

- Material and specification revision.
- Process route and build-lot definition.
- Heat treatment and HIP scope.
- Support removal and plate separation.
- CNC machining and controlled datums.
- Surface finish and cleaning.
- Inspection, testing, and reports.
- Traceability and certificates.
- Nonconformance and change-approval process.
- Quantity, scrap/replacement assumptions, delivery date, packing, logistics, and Incoterms.

Compare total delivered acceptance, not powder cost or machine time. The [titanium 3D printing cost guide](/posts/titanium-3d-printing-cost-drivers-rfq-price-reduction/) explains how build height, supports, post-processing, machining access, inspection, and documentation alter the quote. The [Ti-6Al-4V lead-time guide](/posts/ti6al4v-3d-printing-lead-time-prototype-production/) maps those operations to a realistic schedule and customer hold points.

## Common RFQ Failures That Delay a Quote

1. **STL is treated as the only authority.** The supplier must guess units, critical features, surface requirements, and revision status.
2. **The model and drawing disagree.** Build preparation stops or proceeds against an uncontrolled interpretation.
3. **Material is written as "titanium."** Suppliers quote different alloys, standards, and evidence packages.
4. **The RFQ asks for a finished part but lists no post-processing.** Print-only and delivered-part prices become impossible to compare.
5. **Tight tolerances are applied everywhere.** The quote absorbs unnecessary machining, fixturing, CMM time, and rejection risk.
6. **Internal channels have no powder-removal or cleaning plan.** The geometry may be printable but not deliverable.
7. **Inspection language is vague.** "CT required" or "full inspection" does not define capability, coverage, or acceptance.
8. **Prototype and production intent are mixed.** A one-off feasibility route is priced as if it were repeat production.
9. **The requested date refers to printing, not accepted delivery.** External processing, testing, reports, and approvals are omitted.
10. **Supplier assumptions are not returned in writing.** Procurement approves a price without seeing technical exceptions.

## Copyable Titanium 3D Printing RFQ Checklist

Use this structure in the email body or purchasing package:

- **Part identity:** part number, name, revision, units, and design authority.
- **Files:** native CAD or STEP, controlled drawing or MBD dataset, and reference-only files clearly marked.
- **Function:** application, service environment, loads, temperature, pressure, fluids, fatigue, cleanliness, and consequence of failure.
- **Material:** exact designation, specification revision, chemistry or property basis, allowed AM route, and substitution authority.
- **Quantity:** prototype quantity, production quantity, lot definition, annual demand, and repeat-order assumptions.
- **Delivered condition:** thermal processing, HIP decision, support removal, machining, surface finish, cleaning, and packaging.
- **Critical characteristics:** datums, dimensions, threads, sealing faces, interfaces, internal passages, surface areas, and no-support zones.
- **Acceptance:** CMM, CT, roughness, chemistry, coupons, mechanical tests, density, leak, pressure, flow, cleanliness, and report requirements.
- **Traceability:** powder lot and reuse state where required, build lot, machine/build record, thermal batches, machining, inspection, serial or lot identity, COA, and COC.
- **Commercial:** required delivery date, destination, Incoterms, approval hold points, quotation validity, and requested line-item breakdown.

Send the controlled package through the [TITANIUM 3DP RFQ page](/rfq/). A useful supplier response should identify supported requirements, assumptions, exceptions, proposed DfAM changes, included process steps, acceptance evidence, lead time, and price for the same delivered scope.

## Primary References and Scope

- [ISO 10303-1:2024](https://www.iso.org/standard/83105.html) defines the architecture and principles behind the STEP product-data representation and exchange series.
- The [NIST STEP File Analyzer and Viewer](https://www.nist.gov/services-resources/software/step-file-analyzer-and-viewer) explains STEP use across CAD, CAM, CAE, and CMM and provides tools for checking PMI, validation properties, and file errors.
- NIST's [Data Formats in Additive Manufacturing](https://www.nist.gov/publications/data-formats-additive-manufacturing) compares formats across design, build planning, post-processing, and qualification phases.
- The [3MF specification](https://3mf.io/spec/) documents its manufacturing-oriented container, units, metadata, and extension model.
- [ISO/ASTM 52915:2020](https://www.iso.org/standard/74640.html) specifies AMF version 1.2 and notes information outside its current scope.
- [ASME Y14.47-2023](https://www.asme.org/codes-standards/find-codes-standards/y1447-2019-model-organization-practices) addresses organization practices for model-based product definition data sets.

These references explain data representation and product-definition frameworks. They do not determine the correct titanium alloy, build parameters, tolerances, inspection capability, fatigue life, application approval, price, or lead time for a specific part. Those decisions require the controlled project requirements and supplier evidence described above.
