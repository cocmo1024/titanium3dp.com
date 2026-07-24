---
title: 'Titanium AM Standards Map: F2924, F3001, ISO/ASTM 52948 and the Purchase Order'
publishDate: 2026-07-24
updateDate: 2026-07-24
excerpt: 'A procurement map for selecting titanium AM material, process, design, qualification, NDT, data, and application standards without mistaking a cited document for finished-part approval.'
category: 'Engineering Guides'
tags: ['standards', 'specification', 'qualification', 'F2924', 'F3001', 'ISO/ASTM 52948', 'NDT', 'RFQ']
author: 'TITANIUM 3DP Engineering'
metadata:
  title: 'Titanium AM Standards Map: F2924, F3001 & 52948'
  description: 'Map titanium AM standards to material, PBF process, design, machine qualification, NDT, data, aviation or medical scope, and a controlled purchase order.'
  canonical: https://titanium3dp.com/posts/titanium-am-standards-specifications-f2924-f3001-52948/
---

A titanium additive manufacturing purchase order can cite ten standards and still fail to define an acceptable part. The problem is not a shortage of documents. It is that material specifications, process controls, design guidance, machine qualification, defect vocabulary, NDT practice, data registration, and application approval answer different questions.

The useful buyer task is to build a **standards stack** around the delivered part:

1. Identify the alloy and product condition.
2. Define the AM process and controlled production route.
3. Classify the consequence of failure and application-specific authority.
4. Translate failure modes into design, inspection, test, and traceability requirements.
5. Put project-specific acceptance values, revisions, responsibilities, and deliverables in the drawing, specification, and purchase order.

This guide maps the major documents used in titanium powder bed fusion as of July 2026. It is a scope map, not a substitute for licensed standards, contract review, regulatory advice, or a customer qualification plan.

## Quick Answer

Use [ASTM F2924-14(2021)](https://store.astm.org/standards/f2924) as a material-and-component specification path for additively manufactured Ti-6Al-4V, and [ASTM F3001-14(2021)](https://store.astm.org/standards/f3001) for Ti-6Al-4V ELI. Both cover full-melt powder bed fusion routes such as laser and electron beam and are intended for purchasers and producers defining component requirements.

Neither document alone defines:

- the part-specific load case or consequence of failure;
- the approved machine, parameter set, supplier, or change-control boundary;
- every datum, tolerance, surface, internal feature, or cleaning requirement;
- the NDT technique and demonstrated detectability for the actual geometry;
- regulatory or design-authority approval;
- the complete record package needed to release the delivered part.

Build the remaining stack from the actual project. ISO/ASTM 52904 and 52920 address production control and site-level quality. ISO/ASTM 52911-1 addresses PBF-LB/M design. ISO/ASTM 52927 and 52909 support test agreements and orientation-aware properties. ISO/ASTM 52948 classifies PBF imperfections but does not set acceptance criteria. ASTM F3704/F3704M provides a PBF-LB NDT practice whose implementation still requires a part-specific technique and engineering approval.

## Standards Map by Decision

| Decision | Useful document | What it can organize | What still belongs in the project specification |
| --- | --- | --- | --- |
| Ti-6Al-4V material route | ASTM F2924-14(2021) | Feedstock, classes, chemistry, microstructure, mechanical properties, processing and component requirements | Exact class, revision, supplementary requirements, delivered state, sampling, critical zones, and acceptance authority |
| Ti-6Al-4V ELI route | ASTM F3001-14(2021) | ELI material classification, ordering, feedstock, processing, chemistry, thermal/HIP, inspection and quality requirements | Device or program requirements, tighter chemistry, validated route, cleaning, packaging, surface and part-level evidence |
| Critical PBF production control | ISO/ASTM 52904:2024 | Operation and production control for laser- and electron-beam PBF used in critical applications | Approved process definition, essential variables, sampling, deviations, equivalence and customer approval |
| AM production-site quality | ISO/ASTM 52920:2023 | Quality-relevant processes, characteristics, activities and production-site controls | Industry QMS, supplier approval, part qualification, contract-specific records and acceptance |
| PBF-LB machine IQ/OQ/PQ | ISO/ASTM TS 52930:2021 | Installation, operational and performance qualification topics directly related to equipment | Feedstock qualification, post-processing beyond depowdering, part-specific process validation and release |
| Metal PBF design | ISO/ASTM 52911-1:2019 | Process characteristics and detailed PBF-LB/M design recommendations | Supplier-specific limits, orientation, supports, margins, surface state, machining and validated design values |
| Test and supply agreement | ISO/ASTM 52927:2024 | Quality characteristics, specimen building, test procedures and agreement content | Required values, locations, frequency, uncertainty, failed-test disposition and acceptance authority |
| Property orientation | ISO/ASTM 52909:2024 | Reporting orientation and location dependence for metal AM specimens and parts | Project allowables, representativeness, geometry effects, surface state and production sampling |
| Imperfection vocabulary | ISO/ASTM 52948:2026 | Classification, likely causes and illustrations for PBF-LB and PBF-EB imperfections | Size or severity limits, critical zones, detectability, acceptance and disposition |
| PBF-LB NDT | ASTM F3704/F3704M-24 | Inspection levels, methods and acceptance-practice framework for laser PBF parts | Individual-part technique, Level 3 approval, cognizant engineering concurrence and validated capability |
| Monitoring and quality data | ISO/ASTM 52953:2025 | Minimum registration requirements for PBF-LB monitoring and quality-control data | Sensor calibration, data cleansing, anomaly thresholds, correlation, retention and release logic |
| Aviation consequence class | ASTM F3572-22 | Common part classification based on consequence of failure | Applicable regulation, means of compliance, certification plan and design-authority approval |

The table is intentionally not a universal checklist. A non-functional prototype may need only a controlled material identity, delivered-condition statement, and key dimensional checks. A flight, implant, pressure, fatigue, or mission component may need a much larger and program-owned qualification chain.

## Material Specifications: F2924 and F3001

### ASTM F2924 for Ti-6Al-4V

[ASTM F2924](https://store.astm.org/standards/f2924) covers additively manufactured Ti-6Al-4V components made by full-melt powder bed fusion, including laser and electron-beam routes. ASTM describes its purpose as a basis for purchasers and producers to define requirements and minimum acceptance needs. The scope also recognizes that components are often post-processed by machining, grinding, EDM, polishing, or other methods to achieve critical dimensions and finish.

That wording matters. “F2924 material” does not mean that an as-built surface, inaccessible channel, tight bore, sealing face, fatigue-critical notch, or dimensional stack automatically meets the drawing. The RFQ still needs to define the class and supplementary requirements, final heat-treatment or HIP state, machining stock, protected surfaces, inspection state, and release records.

TC4, Ti-6Al-4V, Grade 5, and Ti64 are often used as commercial shorthand for related alloy intent. They are not sufficient purchase-order language by themselves. Normalize the requested designation to the governing specification and chemistry before comparing suppliers. The [TC4 and Grade 5 material path](/materials/tc4-ti6al4v-grade-5/) explains this naming boundary.

### ASTM F3001 for Ti-6Al-4V ELI

[ASTM F3001](https://store.astm.org/standards/f3001) establishes requirements for additively manufactured Ti-6Al-4V ELI components made by full-melt powder bed fusion. Its published scope includes ordering information, manufacturing plan, feedstock, process, chemistry, microstructure, mechanical properties, thermal processing, HIP, dimensions, inspection, certification, marking, packaging, and quality-program requirements.

ELI does not make a component “medical certified.” The standard establishes a material/component specification route. A medical device still has design-control, process-validation, cleaning, biological, packaging, testing, regulatory, and release obligations determined by the device and jurisdiction. The FDA’s [Technical Considerations for Additive Manufactured Medical Devices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices) supplements device-specific requirements and applicable recognized standards; it does not turn a material certificate into device clearance.

Use the [Grade 23 ELI / ASTM F3001 route](/materials/ti6al4v-eli-grade-23-astm-f3001/) to separate material selection from device approval.

### Commercially pure titanium

Grade 1, Grade 2, TA1, TA2, TA2G, and “CP titanium” need the same discipline. The exact designation, chemistry, product form, AM route, process qualification, and delivered state must be agreed. Do not assume that a wrought-material designation automatically supplies a qualified AM process or finished-part property basis.

For corrosion- or ductility-driven projects, use the [Grade 2 / TA2 / CP titanium feasibility path](/materials/grade-2-cp-titanium-ta2-3d-printing/) and request the supplier’s actual specification route rather than forcing an unsupported equivalence.

## Process and Production Qualification Are Separate Layers

[ISO/ASTM 52904:2024](https://www.iso.org/standard/82919.html) addresses the operation and production control of metal powder bed fusion machines and processes used for critical applications. Its scope covers laser- and electron-beam PBF for production parts and mechanical test specimens. The 2019 first edition was withdrawn when the 2024 second edition was published; a contract should therefore name the intended revision rather than rely on an obsolete citation.

[ISO/ASTM 52920:2023](https://www.iso.org/standard/76911.html) is broader at the production-site level. It defines quality-relevant activities and factors along the AM process and explicitly positions itself as additional to quality management systems such as ISO 9001, EN 9100, ISO 13485, and others.

These documents solve different problems:

- a quality-management certificate shows that a management system exists within a stated scope;
- a production-site AM standard organizes AM-specific process controls;
- a machine qualification shows defined equipment performance;
- a material/process qualification establishes a controlled production basis;
- part conformance shows that the delivered item meets its drawing and acceptance plan;
- certification or regulatory approval belongs to the responsible program and authority.

Do not collapse those layers into the claim “the supplier is certified for titanium 3D printing.”

### PBF-LB and PBF-EB machine qualification

[ISO/ASTM TS 52930:2021](https://www.iso.org/standard/79527.html) addresses installation qualification, operational qualification, and performance qualification for PBF-LB equipment. ISO states that it covers issues directly related to the equipment and does not cover feedstock qualification or post-processing beyond powder removal.

The electron-beam counterpart, ISO/ASTM TS 52949:2025, follows the same need for a process-specific equipment qualification route. A machine-qualification record does not release a complex titanium part. It supports one layer of the evidence chain.

As of July 24, 2026, ISO lists the second edition of [ISO/ASTM 52941](https://www.iso.org/standard/86784.html), the aerospace PBF-LB machine performance and reliability standard, as **under publication**. The 2020 edition remains the published predecessor until the new edition is formally issued and contract adoption is decided. A purchase order should name the exact revision or contract date instead of saying “latest edition” and leaving the requirement movable.

## Design Standards Do Not Supply Supplier Limits

[ISO/ASTM 52910:2018](https://www.iso.org/standard/67289.html) gives general requirements, guidelines, and recommendations for AM product design. ISO explicitly notes that it does not provide process-specific or material-specific data.

[ISO/ASTM 52911-1:2019](https://www.iso.org/standard/72951.html) adds detailed design recommendations for laser-based powder bed fusion of metals. It is a better process-family reference, but it still does not prove a universal minimum wall, unsupported angle, hole diameter, dimensional tolerance, channel-cleaning limit, or surface finish for every titanium system and supplier.

The project still needs supplier- and route-specific confirmation of:

- build orientation and critical load direction;
- support placement and protected surfaces;
- thin walls, gaps, holes, channels, lattices, and powder exits;
- recoater or layer-interaction risk;
- stress relief, support removal, and distortion control;
- machining datums, stock, access, and inspection sequence;
- as-built, down-facing, support-contact, internal, machined, and finished surface states.

Use the [titanium DfAM rules](/posts/titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls/) as an RFQ screening tool, then request the supplier’s controlled limits and proposed route for the actual geometry.

## Testing, Coupons, and Orientation

[ISO/ASTM 52927:2024](https://www.iso.org/standard/81802.html) identifies quality characteristics for AM feedstock and parts, corresponding test procedures, specimen-building procedures, and recommended content for test and supply agreements.

[ISO/ASTM 52909:2024](https://www.iso.org/standard/87956.html) addresses orientation and location dependence when reporting mechanical properties of metal AM specimens and specimens removed from parts.

Together, these documents reinforce a procurement rule: a coupon result is meaningful only when its representativeness is defined. The purchase order should state:

- coupon type, geometry, orientation, and build location;
- whether it is built attached, adjacent, or separately;
- parameter set, feedstock lot, build, thermal/HIP state, and surface state;
- machining and specimen-preparation method;
- test method, laboratory requirement, sampling, and reporting;
- which decision the coupon supports;
- failed-coupon disposition and its effect on the associated parts.

A passing vertical tensile coupon does not automatically qualify a fatigue-critical, as-built, down-facing internal feature. The [qualification and inspection guide](/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/) builds the evidence chain from the failure mode backward.

## The 2026 Imperfection Standard: Classification Is Not Acceptance

[ISO/ASTM 52948:2026](https://www.iso.org/standard/84919.html) is a new long-term reference point for metal PBF. It classifies imperfections that can be generated by PBF-LB and PBF-EB, indicates probable causes, and includes illustrations.

Its official scope also states what it does **not** include: acceptance criteria and dimensional descriptions or scales for imperfections.

Therefore, “inspect to ISO/ASTM 52948” is not a complete requirement. The engineering authority still needs to define:

- relevant imperfection classes and critical zones;
- allowable size, population, spacing, orientation, or other disposition logic;
- inspection method and demonstrated detection capability;
- surface, internal, pre-HIP, post-HIP, machined, or delivered inspection state;
- accept, reject, rework, additional-test, and engineering-review rules.

The standard improves vocabulary. It does not decide whether a titanium part is safe or fit for service.

## NDT and the HIP Blind Spot

[ASTM F3704/F3704M-24](https://store.astm.org/f3704_f3704m-24.html) provides inspection levels, methods, and acceptance-practice requirements for parts made by laser-based powder bed fusion. ASTM’s scope makes three important boundaries clear:

1. flaw detection depends on flaw characteristics and orientation relative to the NDT method;
2. implementation requires an individual-part NDT technique, cognizant engineering concurrence, and applicable NDT Level 3 approval;
3. HIP can partially or completely close defects, so post-HIP NDT may not detect a collapsed indication.

That third point is easy to miss in a quotation. If the failure logic cares about defects before HIP, post-HIP CT alone may not answer the question. The qualification plan may need process evidence, pre-HIP inspection, destructive correlation, or another approved method.

Specify the region of interest, required detectability, reference or validation basis, analysis rules, raw-data retention, report content, and inspection timing. Do not buy “CT included” as though the scan itself defines acceptance.

## Monitoring Data Is Not Automatic Release Evidence

[ISO/ASTM 52953:2025](https://www.iso.org/standard/84117.html) defines minimum requirements for registering process-monitoring and quality-control data for metallic PBF-LB, including data from sensors and NDT systems such as XCT, thermal sensors, cameras, and CMM.

ISO also excludes data cleansing, sensor calibration, and image processing from the document’s scope. That means a compliant data structure does not prove:

- that the sensor was calibrated for the decision;
- that an anomaly threshold is valid;
- that monitoring correlates with a harmful defect or mechanical result;
- that false positives and false negatives are controlled;
- that the data is sufficient to release the part.

For a monitored build, define data ownership, format, synchronization, storage, access, retention, anomaly review, model or algorithm version, threshold approval, and change control. The [in-situ monitoring guide](/posts/titanium-am-in-situ-monitoring-melt-pool-data-qualification/) separates data collection from qualification evidence.

## Application Standards Set Risk Context, Not Supplier Approval

### Aviation

[ASTM F3572-22](https://store.astm.org/f3572-22.html) provides a common way to classify AM aviation parts by consequence of failure. ASTM says the metric can support engineering, procurement, NDI, testing, qualification, or certification processes. Its scope also states that users should not assume regulatory endorsement or treat it as a replacement for applicable regulations and policies.

Use the classification to scale rigor. Do not present it as a means of compliance by itself. The responsible design and certification organizations still own the certification plan, approved data, supplier and process qualification, configuration control, and continued-production requirements.

### Medical devices

The FDA’s final [AM medical-device guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices) outlines design, manufacturing, testing, and characterization considerations for devices with an AM component or step. The required submission and evidence still depend on device classification and applicable regulations.

The FDA database currently lists [ASTM F3001-14 under recognition number 8-439](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfStandards/results.cfm?ascapilotyn=off&category=&effectivedatefrom=&effectivedateto=&organization=&pagenum=5&productcode=&recognitionnumber=&referencenumber=&regulationnumber=&sortcolumn=st&start_search=1356&supportingdocsyn=off&title=) with **partial**, not complete, recognition. That status does not automatically extend to every provision of ASTM F3001-14(2021), and it does not replace device-specific regulatory requirements. Keep material conformance, process validation, device testing, cleaning, labeling, packaging, and regulatory approval as separate controlled layers.

## Build the Purchase Order from the Failure Modes

A useful RFQ or purchase order can use this sequence:

### 1. Configuration

- part number, revision, CAD, 2D drawing, quantity, lot definition, and delivery state;
- governing customer, material, process, and application specifications with exact revisions;
- critical characteristics, zones, interfaces, datums, and acceptance authority.

### 2. Material and feedstock

- Ti-6Al-4V, Ti-6Al-4V ELI, CP titanium, or other named grade and chemistry;
- feedstock specification, lot identity, reuse or blending rules, sampling, storage, and contamination controls;
- required COA, test results, and genealogy.

### 3. Controlled manufacturing route

- PBF-LB, PBF-EB, or other route;
- approved machine, software, parameter, build-file, and essential-variable boundaries;
- orientation, supports, witness specimens, monitoring, and build records;
- stress relief, anneal, HIP, support removal, machining, finishing, cleaning, and handling sequence;
- subcontracted operations and change-notification rules.

### 4. Part-level acceptance

- dimensional plan, datum reference frame, measurement state, uncertainty, and report format;
- surface zones, parameter, cutoff or method, direction, and delivered finish;
- CT or other NDT technique, coverage, detectability, validation, timing, and disposition;
- leak, pressure, flow, fatigue, mechanical, cleanliness, or functional tests where required;
- coupon type, orientation, condition, frequency, and failed-result logic.

### 5. Records and release

- serialization and traceability from feedstock through build and post-processing;
- inspection data, images, raw files, certificates, deviations, concessions, and signatures;
- record format, retention, transfer, and customer access;
- the person or organization authorized to accept, reject, or approve a deviation.

Then ask every supplier to quote the same baseline, identify exceptions, and price alternatives separately. The [titanium AM RFQ and procurement guide](/posts/titanium-am-rfq-procurement-cost-traceability-deliverables/) provides the commercial comparison structure.

## Failure Modes This Standards Map Is Designed to Prevent

- **A material specification is treated as complete part certification.**
- **A supplier cites a quality certificate without proving the AM process or part route.**
- **“Latest revision” moves the contract after pricing or qualification.**
- **A design guideline is mistaken for a supplier-specific manufacturing limit.**
- **A coupon has no defined relationship to the delivered part.**
- **Imperfection classification is mistaken for a pass/fail rule.**
- **CT is requested without coverage or detectability.**
- **Post-HIP inspection is assumed to reveal every pre-HIP defect.**
- **Monitoring data is stored but has no approved correlation or release rule.**
- **An aviation or medical standard is presented as regulatory approval.**
- **The purchase order omits the record package and change-control boundary.**

## Source and Scope Boundary

This guide uses official scope descriptions from ASTM, ISO, and FDA pages linked above. Those pages identify what the cited documents cover and, in several cases, explicitly identify what they exclude.

They do not prove that a specific titanium supplier, machine, parameter set, coupon population, NDT technique, medical device, aviation part, or finished component is qualified. Obtain the licensed standards, confirm current status and contract revision, and have the responsible engineering, quality, regulatory, and purchasing authorities approve the project-specific stack.

For a quote, send the standards you already control together with CAD, drawings, quantity, delivery state, critical characteristics, inspection scope, and required records through the [secure titanium AM RFQ](/rfq/#rfq-form).
