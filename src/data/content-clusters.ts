export interface ContentCluster {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  decision: string;
  href: string;
  slugs: string[];
}

export const contentClusters: ContentCluster[] = [
  {
    id: 'engineering-foundations',
    title: 'Materials, process, DfAM, quality, and procurement',
    shortTitle: 'Engineering foundations',
    description:
      'Choose the alloy and AM route, control geometry and post-processing risk, define acceptance evidence, and issue a comparable RFQ.',
    decision: 'Use this path when the main question is how to specify, make, inspect, or purchase a titanium AM part.',
    href: '/knowledge/#engineering-foundations',
    slugs: [
      'titanium-am-standards-specifications-f2924-f3001-52948',
      'titanium-am-material-selection-ti6al4v-eli-cp-titanium',
      'titanium-am-process-selection-lpbf-ebm-ded',
      'titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls',
      'titanium-3d-printing-post-processing-hip-machining-surface-finish',
      'titanium-3d-printing-fatigue-design-surface-finish-hip',
      'titanium-am-powder-reuse-oxygen-control-traceability',
      'titanium-am-in-situ-monitoring-melt-pool-data-qualification',
      'titanium-am-qualification-inspection-ct-cmm-tensile-coupons',
      'titanium-3d-printing-tolerances-datum-planning-cmm',
      'titanium-3d-printed-internal-channels-powder-removal-ct',
      'titanium-3d-printing-cost-drivers-rfq-price-reduction',
      'ti6al4v-3d-printing-lead-time-prototype-production',
      'titanium-am-rfq-procurement-cost-traceability-deliverables',
      'when-not-to-use-titanium-additive-manufacturing',
      'titanium-3d-printing-applications-aerospace-medical-motorsport-energy',
      'titanium-additive-manufacturing-components-2026',
    ],
  },
  {
    id: 'flight-mobility',
    title: 'Aerospace, space, UAV, eVTOL, and motorsport',
    shortTitle: 'Flight and mobility',
    description:
      'Connect mass reduction and consolidated geometry to load paths, fatigue, interfaces, inspection, and design-authority approval.',
    decision:
      'Use this path when every gram has system value but the qualification burden can dominate the business case.',
    href: '/knowledge/#flight-mobility',
    slugs: [
      'titanium-3d-printing-aerospace-defense-supply-chain-resilience',
      'titanium-3d-printing-spacecraft-satellite-components',
      'titanium-3d-printing-evtol-advanced-air-mobility-hardware',
      'titanium-3d-printing-drone-uav-parts',
      'titanium-3d-printing-motorsport-racing-parts',
    ],
  },
  {
    id: 'medical',
    title: 'Medical devices and orthopedic structures',
    shortTitle: 'Medical',
    description:
      'Separate printable patient-specific or porous geometry from material validation, cleaning, regulatory, packaging, and release responsibility.',
    decision:
      'Use this path when Grade 23 ELI, porous structures, patient-specific geometry, or regulated device evidence controls the route.',
    href: '/knowledge/#medical',
    slugs: ['titanium-3d-printing-medical-device-orthopedic-implant-parts'],
  },
  {
    id: 'robotics-high-tech',
    title: 'Robotics, semiconductor, cryogenic, and data-center hardware',
    shortTitle: 'Robotics and high tech',
    description:
      'Translate equipment goals into stiffness, moving mass, thermal duty, cleanliness, vacuum, serviceability, and precision interfaces.',
    decision:
      'Use this path when titanium must improve dynamic response or survive a clean, thermal, vacuum, or precision-equipment environment.',
    href: '/knowledge/#robotics-high-tech',
    slugs: [
      'titanium-3d-printing-robotics-automation-parts',
      'titanium-3d-printing-humanoid-robots-ai-robotics-hardware',
      'titanium-3d-printing-semiconductor-equipment-parts',
      'titanium-3d-printing-quantum-computing-cryogenic-hardware',
      'titanium-3d-printing-ai-data-center-liquid-cooling-hardware',
    ],
  },
  {
    id: 'energy-pressure',
    title: 'Energy, hydrogen, thermal, and pressure hardware',
    shortTitle: 'Energy and pressure',
    description:
      'Define fluid, temperature, pressure, code boundary, leak risk, internal geometry, and inspection ownership before choosing AM.',
    decision:
      'Use this path when the value comes from compact flow or thermal geometry and the finished part must prove pressure or leak integrity.',
    href: '/knowledge/#energy-pressure',
    slugs: [
      'titanium-3d-printing-hydrogen-electrolyzer-fuel-cell-parts',
      'titanium-3d-printing-fusion-nuclear-research-hardware',
      'titanium-3d-printing-geothermal-downhole-energy-parts',
      'titanium-3d-printing-oil-gas-lng-petrochemical-hardware',
      'titanium-3d-printing-carbon-capture-direct-air-capture-hardware',
      'titanium-3d-printing-hydraulic-manifolds-fluid-power-components',
      'titanium-3d-printing-industrial-valves-pump-flow-control-hardware',
      'titanium-3d-printed-heat-exchangers-thermal-management',
    ],
  },
  {
    id: 'corrosion-process',
    title: 'Corrosion, water, marine, and critical-minerals processing',
    shortTitle: 'Corrosion and process',
    description:
      'Specify the actual chemistry, concentration, temperature, erosion, deposits, galvanic interfaces, cleaning, and acceptance test.',
    decision:
      'Use this path when corrosion resistance may justify titanium but the process stream and failure mode must be defined first.',
    href: '/knowledge/#corrosion-process',
    slugs: [
      'titanium-3d-printing-chemical-processing-water-treatment-parts',
      'titanium-3d-printing-seawater-desalination-brine-concentration-hardware',
      'titanium-3d-printing-marine-subsea-offshore-parts',
      'titanium-3d-printing-battery-recycling-critical-minerals-parts',
      'titanium-3d-printing-direct-lithium-extraction-brine-processing-hardware',
      'titanium-3d-printing-mining-mineral-processing-hydrometallurgy-hardware',
    ],
  },
];

const clusterBySlug = new Map(
  contentClusters.flatMap((cluster) => cluster.slugs.map((slug) => [slug, cluster] as const))
);

export const findContentClusterBySlug = (slug: string): ContentCluster | undefined => clusterBySlug.get(slug);
