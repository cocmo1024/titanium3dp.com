---
title: 'Titanium AM Process Selection: LPBF vs EBM vs DED'
publishDate: 2026-05-07
updateDate: 2026-07-19
excerpt: 'Choose LPBF, EBM, powder DED, or wire DED for titanium parts by geometry, scale, machining route, inspection burden, supplier evidence, and delivered-part economics.'
category: 'Case Studies'
tags: ['process-selection', 'lpbf', 'ebm', 'ded', 'dfam', 'rfq', 'post-processing']
author: 'TITANIUM 3DP Engineering'
image: ~/assets/images/titanium/titanium-hero.webp
metadata:
  title: 'Titanium AM Process Selection: LPBF vs EBM vs DED'
  description: 'Compare titanium LPBF, EBM, powder DED, and wire DED by geometry, scale, machining, post-processing, inspection, standards, and RFQ evidence.'
  canonical: https://titanium3dp.com/posts/titanium-am-process-selection-lpbf-ebm-ded/
---

LPBF, EBM, and directed energy deposition are not three interchangeable ways to make the same titanium part. They create different design envelopes, thermal histories, surface conditions, machining requirements, inspection problems, and supply-chain risks. The correct route is the one that produces an accepted delivered component—not the one with the most attractive print-rate claim.

A buyer should specify function, geometry, delivered condition, evidence, quantity, and commercial constraints before locking a process. A capable supplier can then recommend a route or explain why additive manufacturing is the wrong answer.

## Quick Answer

- Start with **laser powder bed fusion (PBF-LB, commonly called LPBF)** for compact or medium-size parts that depend on fine geometric control, complex external form, lattices, integrated channels, or close packing of multiple parts on a build plate.
- Review **electron beam powder bed fusion (PBF-EB, commonly called EBM)** when the available material and supplier route, elevated-temperature powder bed, geometry, surface expectations, and qualification history fit the project.
- Review **powder-fed DED** for repair, local feature addition, cladding, large near-net deposits, or hybrid build-and-machine routes where deposited stock will be finished.
- Review **wire DED** for large near-net blanks or structural deposits where deposition scale, material utilization, and subsequent machining matter more than fine as-built detail.
- Choose CNC, forging, casting, fabrication, or a hybrid route when the part is simple, all-over tolerance-driven, high volume without an AM geometry advantage, or too difficult to clean and inspect. Use the [when-not-to-use-AM screen](/posts/when-not-to-use-titanium-additive-manufacturing/) before forcing an additive quote.

These are screening positions, not machine limits. The usable window depends on equipment, energy source, feedstock, alloy, parameter set, orientation, feature geometry, thermal management, post-processing, inspection, and supplier qualification.

## Process Comparison for Procurement

| Decision variable | LPBF / PBF-LB | EBM / PBF-EB | Powder-fed DED | Wire DED |
| --- | --- | --- | --- | --- |
| Primary geometry value | Fine detail, lattices, internal channels, compact integration | Powder-bed geometry with process-specific thermal and surface behavior | Local addition, repair, cladding, larger near-net deposits | Large near-net blanks and structural deposits |
| Feedstock and energy | Metal powder, laser | Metal powder, electron beam | Powder delivered into laser or other energy source | Wire with arc, plasma, laser, or electron-beam variants |
| As-built expectation | Supports and rough surfaces still require planning | Process-specific surface and feature limits require planning | Deposit is commonly a machining precursor | Near-net blank normally requires machining |
| Main geometric risk | Supports, trapped powder, thin-to-thick transitions, distortion | Powder removal, surface, feature scale, supplier-specific design rules | Heat input, dilution or interface, access, stock, distortion | Heat input, bead strategy, stock, distortion, large-scale path control |
| Strong inspection questions | CT access, CMM datums, surface state, coupons, density | Similar evidence chain with EBM-specific process basis | Deposit integrity, interface, NDT, stock and final geometry | NDT coverage, deposit integrity, stock, machining and final release |
| Best RFQ artifact | Finished CAD plus drawing and critical-zone map | Same, with early confirmation of supplier route | Deposited/preform geometry plus final machined definition | Near-net blank definition plus final machined definition |
| Weak fit | Very large simple stock, inaccessible trapped-powder geometry | Requirements that conflict with available EBM route or finish | Fine lattices, tiny channels, close as-built tolerance | Fine features or minimal-machining expectations |

Do not score this table by counting green cells. First identify which function creates business value. A topology-optimized bracket, a corrosion-resistant manifold, a repair deposit, and a seven-metre structural blank are different sourcing problems even if all contain titanium.

## Start With the Delivered Part

Process selection should answer six questions:

1. **What geometry must AM enable?** Examples include internal flow, load-path optimization, part consolidation, inaccessible machining features, repair, or a large near-net shape.
2. **What remains after printing?** Define supports, stress relief, HIP if required, wire cutting, rough machining, finish machining, surface treatment, cleaning, and inspection.
3. **Which surfaces are functional?** Mark datums, sealing faces, bearing fits, threads, ports, fatigue-sensitive regions, and no-touch surfaces.
4. **What must be detected or measured?** Match CMM, CT, NDT, coupons, surface measurements, leak tests, or other evidence to acceptance criteria.
5. **What is the production model?** Prototype, bridge quantity, repeat lot, serial production, repair, and second-source approval create different qualification burdens.
6. **Which change invalidates the basis?** Machine, parameter, feedstock, supplier, thermal route, orientation, geometry, or inspection changes may require review or requalification.

If the team cannot answer these questions, selecting a process by brochure dimensions or deposition rate is premature.

## LPBF: Choose Detail With a Controlled Process Chain

LPBF is often the first titanium AM route reviewed for brackets, housings, manifolds, lattice regions, compact thermal or flow structures, and medical-adjacent components. Its advantage is not an automatic tolerance or surface guarantee. Its advantage is the ability to distribute material and internal function in ways that conventional tools may not reach.

LPBF becomes a strong candidate when:

- The part earns value from geometric complexity, integration, or build consolidation.
- Critical surfaces can avoid supports or receive machining stock.
- Internal powder has a verified exit and cleaning route.
- The build orientation can balance support, distortion, surface, fatigue, and inspection.
- The supplier has a controlled material and parameter route for the required delivered state.
- Post-processing and evidence are included in the quoted scope.

The most expensive LPBF mistakes happen before the build: sealed cavities, unsupported internal transitions, machining without datum access, thin walls attached to heat-heavy masses, and surfaces that cannot be finished or inspected. [Titanium DfAM rules for LPBF and EBM](/posts/titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls/) should be applied before design freeze, not after the first rejected quote.

[ISO/ASTM 52911-1:2019](https://www.iso.org/standard/72951.html) provides design recommendations for laser-based powder bed fusion of metals and was confirmed in 2026. It is a useful design reference, but it does not qualify a supplier, establish universal feature limits, or replace the drawing and process-specific capability review.

## EBM: Confirm the Available Route Before Designing Around It

EBM is also a powder bed fusion process, but its energy source, vacuum environment, elevated-temperature powder bed, support behavior, surface condition, and supplier ecosystem differ from LPBF. It can be relevant when the part geometry, section behavior, material route, and qualification history match an available EBM process.

Review EBM when:

- The required alloy and machine envelope are actually available from a suitable supplier.
- The geometry tolerates the route’s process-specific feature and surface profile.
- Powder removal and any sintered powder-management implications are addressed.
- Machining and finishing can reach functional surfaces.
- The customer accepts the proposed material/process basis and evidence package.

Do not select EBM because “hotter” sounds more robust or because a generic comparison suggests fewer supports. Ask the supplier for its controlled design rules, material condition, post-processing chain, representative evidence, inspection constraints, and exceptions. A process name cannot substitute for those facts.

## DED Is a Family, Not One Machine Category

“DED” alone is insufficient RFQ language. The deposit can use powder or wire feedstock and different energy sources; the resulting feature scale, deposition rate, thermal behavior, atmosphere, interfaces, and qualification path can differ substantially.

Powder-fed DED is often reviewed for repair, feature addition, cladding, graded deposition, or near-net stock. Wire DED is often reviewed when deposition scale and feedstock efficiency matter and the blank will be machined. Both require a design for the deposited state and a separate definition of the finished state.

Ask for:

- Feedstock form, alloy specification, lot controls, and contamination controls.
- Energy source, shielding or environmental controls, and controlled parameter basis.
- Substrate or preform material, preparation, interface, and dilution requirements where applicable.
- Deposit path, build strategy, interpass or thermal controls, stock allowances, and expected distortion.
- Stress relief or other thermal processing and the sequence before machining.
- NDT and destructive evidence for deposit, interface, and final part.
- Machining datums, setup access, final drawing, and disposition of excess stock.

Repair adds another authority boundary. The original equipment manufacturer, design authority, or customer must approve the repair zone, removal limits, build-up definition, acceptance method, and configuration record. A technically feasible deposit is not automatically an approved repair.

## The 2026 Large Wire-DED Signal

Airbus reported in January 2026 that titanium wire DED was moving into large structural aircraft manufacturing. Its [official w-DED account](https://www.airbus.com/en/newsroom/stories/2026-01-how-airbus-is-pioneering-aircraft-manufacturing-with-titanium-3d-printing) describes a multi-axis robotic process using titanium wire and a focused energy source to create a near-net blank that is then machined. Airbus says its route can address parts up to seven metres long and reports serial integration of large w-DED parts in the A350 cargo-door-surround area. The stated route included a qualified supplier, ultrasonic inspection, machining, and installation in Airbus factories.

This is a meaningful industrial signal: wire DED can move beyond laboratory demonstrations when the design authority, supplier qualification, NDT, machining, and production system are aligned. It is **not** evidence that every wire-DED supplier can reproduce Airbus dimensions, deposition rates, cost, lead time, or approval. It is also not a capability statement for TITANIUM 3DP or any unnamed supplier.

For aerospace wire-and-arc DED, [ISO/ASTM 52943-2:2024](https://www.iso.org/standard/75761.html) specifies process-characteristic and performance requirements and states that it is used with engineering documents when required by the engineering authority. Its scope is wire feedstock with arc processes in aerospace. It should not be cited as if it covered every laser, plasma, or electron-beam DED route or automatically approved a delivered part.

## Process Choice Changes the Inspection Plan

The same drawing can create different evidence burdens by route.

- **LPBF internal channels:** CT detectability, powder removal, cleaning, and leak or flow acceptance may dominate.
- **EBM structural geometry:** surface state, machining access, process-specific material evidence, and dimensional release may dominate.
- **DED near-net blank:** deposit integrity, interface where relevant, heat-affected regions, stock distribution, distortion, and final machined geometry may dominate.
- **Repair:** baseline condition, removal map, interface, local properties, NDT access, and post-repair configuration control may dominate.

Use the [titanium AM qualification and inspection guide](/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons/) to translate these risks into method, coverage, detectability, sampling, and acceptance criteria.

## Compare Delivered-Part Economics

Print time or deposition rate is only one cost term. Compare the accepted delivered route:

| Cost driver | Buyer question |
| --- | --- |
| Data and engineering | Who owns build preparation, DfAM changes, simulations, and customer approvals? |
| Feedstock and deposition | What material, build time, utilization, monitoring, and lot controls are included? |
| Supports or near-net stock | What must be removed, recycled, wire-cut, or machined? |
| Thermal processing | Which stress relief, anneal, or HIP state is quoted and certified? |
| Machining and finishing | Which surfaces, datums, setups, access limits, and final conditions are included? |
| Inspection and documentation | Which CMM, CT, NDT, coupons, reports, traceability, and retention requirements are included? |
| Qualification and change control | What non-recurring work and requalification exposure exists? |
| Yield and schedule risk | Which operations can cause rejection or long-loop rework? |

A faster deposition process can lose the commercial decision if it adds excessive machining, inspection, requalification, or yield risk. The [titanium AM cost-driver guide](/posts/titanium-3d-printing-cost-drivers-rfq-price-reduction/) explains how to compare the whole route rather than a price-per-gram claim.

## RFQ Package for a Process-Agnostic Review

Provide every supplier with the same baseline:

- STEP or native CAD plus a controlled 2D drawing.
- Part function, service loads, temperature, pressure, corrosion, fatigue, cleanliness, and life expectations.
- Material family, governing specification and revision, or permission to propose an alternative.
- Finished-part geometry and, for DED, the acceptable near-net or repair definition.
- Quantity, lot size, prototype/production intent, delivery target, and repeat forecast.
- Critical datums, sealing faces, threads, bores, internal paths, no-touch surfaces, and inspection zones.
- Required and negotiable post-processing, machining, finish, and cleaning.
- Acceptance methods, coverage, sampling, detectability or uncertainty, documents, and retention.
- Existing process preference and the business reason behind it.
- A request for route, assumptions, exclusions, design changes, non-recurring cost, unit cost, lead-time breakdown, and change-control boundary.

Useful RFQ wording is:

> Review the attached titanium component for LPBF, EBM, powder or wire DED, hybrid manufacture, or a conventional alternative. State the proposed feedstock and process route, deposited and finished states, supports or machining stock, thermal processing, inspection plan, evidence package, design changes, exclusions, and qualification assumptions. Do not substitute the process or material without identifying the technical and commercial effect.

Pair this process screen with the [titanium material-selection guide](/posts/titanium-am-material-selection-ti6al4v-eli-cp-titanium/) and the [procurement-ready RFQ checklist](/rfq/).

## Failure Modes and Exit Conditions

- **The process is selected before the value mechanism.** Exit AM review if no geometry, integration, repair, schedule, or material-utilization benefit survives comparison with conventional routes.
- **DED is quoted without feedstock and energy source.** Stop comparison until the supplier defines the actual process family.
- **Only final CAD is supplied for DED.** Require the near-net, substrate, repair, stock, and machining boundary.
- **Powder-bed geometry traps material.** Redesign or select another route if cleaning and inspection cannot be demonstrated.
- **Functional surfaces are left as-built by assumption.** Add machining/finishing access or change the acceptance requirement.
- **A headline machine envelope becomes a design limit.** Obtain supplier-specific usable envelope, orientation, thermal, and handling constraints.
- **An industry example is treated as supplier qualification.** Airbus evidence supports the industrial direction of w-DED, not the capability of an unrelated source.
- **Inspection cannot address the failure mode.** Change geometry, process, acceptance basis, or route before purchase order.

## Source and Scope Boundary

This guide uses public primary sources from [ISO/ASTM 52911-1:2019](https://www.iso.org/standard/72951.html), [ISO/ASTM 52943-2:2024](https://www.iso.org/standard/75761.html), and [Airbus’s January 2026 w-DED report](https://www.airbus.com/en/newsroom/stories/2026-01-how-airbus-is-pioneering-aircraft-manufacturing-with-titanium-3d-printing).

They support process definitions, design or aerospace process scope, and a specific Airbus industrial example. They do not establish universal titanium AM limits, economics, material properties, supplier availability, certification, or TITANIUM 3DP production capability. Those variables must be confirmed against the actual part, specification, equipment, supplier, and acceptance authority.
