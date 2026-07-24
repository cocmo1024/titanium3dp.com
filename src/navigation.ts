import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const rfqEmailHref = 'mailto:info@szcomo.com';
const rfqHref = getPermalink('/rfq/#rfq-form');
const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Applications',
      href: getPermalink('/applications'),
    },
    {
      text: 'Capabilities',
      links: [
        { text: 'Manufacturing scope', href: getPermalink('/capabilities') },
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Knowledge center', href: getPermalink('/knowledge') },
        { text: 'RFQ requirements', href: getPermalink('/rfq') },
      ],
    },
    {
      text: 'Engineering Guides',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Submit RFQ', href: rfqHref, title: 'Submit a secure titanium AM RFQ' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Manufacturing scope', href: getPermalink('/capabilities') },
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Applications', href: getPermalink('/applications') },
        { text: 'Submit RFQ', href: rfqHref },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Knowledge',
      links: [
        { text: 'Knowledge center', href: getPermalink('/knowledge') },
        { text: 'Engineering guides', href: getBlogPermalink() },
        {
          text: 'Standards map',
          href: getPermalink('/posts/titanium-am-standards-specifications-f2924-f3001-52948'),
        },
        {
          text: 'DfAM rules',
          href: getPermalink('/posts/titanium-dfam-rules-lpbf-ebm-supports-overhangs-thin-walls'),
        },
        {
          text: 'Qualification evidence',
          href: getPermalink('/posts/titanium-am-qualification-inspection-ct-cmm-tensile-coupons'),
        },
      ],
    },
    {
      title: 'Materials',
      links: [
        {
          text: 'TC4 / Ti-6Al-4V Grade 5',
          href: getPermalink('/materials/tc4-ti6al4v-grade-5'),
        },
        {
          text: 'Ti-6Al-4V ELI Grade 23',
          href: getPermalink('/materials/ti6al4v-eli-grade-23-astm-f3001'),
        },
        {
          text: 'Grade 2 / TA2 / CP titanium',
          href: getPermalink('/materials/grade-2-cp-titanium-ta2-3d-printing'),
        },
        {
          text: 'Material selection guide',
          href: getPermalink('/posts/titanium-am-material-selection-ti6al4v-eli-cp-titanium'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Editorial policy', href: getPermalink('/editorial-policy') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Como Precision', href: 'https://szcomo.com/' },
        { text: 'Copper 3D Printing', href: 'https://copper3dp.com/' },
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
