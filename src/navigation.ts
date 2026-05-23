import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const rfqEmailHref = 'mailto:info@szcomo.com';
const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Materials',
      href: getPermalink('/materials'),
    },
    {
      text: 'Engineering',
      href: getPermalink('/#engineering-guide'),
    },
    {
      text: 'Applications',
      href: getPermalink('/applications'),
    },
  ],
  actions: [{ text: 'Email RFQ', href: rfqEmailHref, title: 'Email info@szcomo.com' }],
};

export const footerData = {
  links: [
    {
      title: 'Start',
      links: [
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Applications', href: getPermalink('/applications') },
        { text: 'RFQ inputs', href: getPermalink('/rfq') },
        { text: 'Case studies', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Engineering notes',
      links: [
        {
          text: 'Material selection',
          href: getPermalink('/posts/titanium-am-material-selection-ti6al4v-eli-cp-titanium'),
        },
        {
          text: 'DfAM rules',
          href: getPermalink('/posts/titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls'),
        },
        {
          text: 'Cost drivers',
          href: getPermalink('/posts/titanium-3d-printing-cost-drivers-rfq-price-reduction'),
        },
        {
          text: 'Tolerance planning',
          href: getPermalink('/posts/titanium-3d-printing-tolerances-datum-planning-cmm'),
        },
        {
          text: 'Qualification evidence',
          href: getPermalink('/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons'),
        },
        {
          text: 'Fatigue design',
          href: getPermalink('/posts/titanium-3d-printing-fatigue-design-surface-finish-hip'),
        },
        {
          text: 'RFQ and procurement',
          href: getPermalink('/posts/titanium-am-rfq-procurement-cost-traceability-deliverables'),
        },
        {
          text: 'Aerospace supply chain',
          href: getPermalink('/posts/titanium-3d-printing-aerospace-defense-supply-chain-resilience'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
    {
      title: 'Related sites',
      links: [
        { text: 'Como Precision', href: 'https://szcomo.com/' },
        { text: 'Copper 3D Printing', href: 'https://copper3dp.com/' },
        { text: 'Precision Ceramics', href: 'https://ceramiccnc.com/' },
        { text: 'Metal Powders', href: 'https://metal3dpowder.com/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: rfqEmailHref },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    (c) ${currentYear} TITANIUM 3DP - Suzhou Como Precision Materials Co., Ltd. - All rights reserved.
  `,
};
