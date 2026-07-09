import { SITE } from 'astrowind:config';
import type { ImageMetadata } from 'astro';
import type { JsonLdNode, Post } from '~/types';

const siteUrl = String(SITE.site).replace(/\/$/, '');
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const toAbsoluteUrl = (url: string | URL | undefined): string | undefined => {
  if (!url) return undefined;

  const value = String(url);
  const absoluteUrl =
    value.startsWith('http://') || value.startsWith('https://')
      ? new URL(value)
      : new URL(value.startsWith('/') ? value : `/${value}`, `${siteUrl}/`);

  const isInternalUrl = absoluteUrl.origin === siteUrl;
  const isCleanPath =
    absoluteUrl.pathname !== '/' && !absoluteUrl.pathname.endsWith('/') && !/\.[^/]+$/.test(absoluteUrl.pathname);

  if (isInternalUrl && isCleanPath) {
    absoluteUrl.pathname = `${absoluteUrl.pathname}/`;
  }

  return String(absoluteUrl);
};

export const createBreadcrumbSchema = (items: Array<{ name: string; item?: string | URL }>): JsonLdNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, item }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    ...(item ? { item: toAbsoluteUrl(item) } : {}),
  })),
});

export const createTitaniumServiceSchema = (): JsonLdNode => ({
  '@type': 'Service',
  '@id': `${siteUrl}/#titanium-additive-manufacturing-service`,
  name: 'TC4 Titanium 3D Printing Services',
  serviceType:
    'TC4 titanium 3D printing, Ti-6Al-4V additive manufacturing, LPBF titanium parts, EBM titanium parts, and RFQ review',
  provider: { '@id': organizationId },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Engineering, purchasing, aerospace, medical device, motorsport, energy, and industrial teams',
  },
  description:
    'Industrial titanium additive manufacturing support for TC4, Ti-6Al-4V, Grade 5, Ti64, Ti-6Al-4V ELI, TA1, TA2, and CP Ti parts, including DfAM review, machining, inspection planning, and traceability documentation.',
  url: toAbsoluteUrl('/'),
});

export const createTitaniumApplicationServiceSchema = ({
  id,
  name,
  serviceType,
  description,
  url,
  audienceType,
}: {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  url: string | URL;
  audienceType: string;
}): JsonLdNode => ({
  '@type': 'Service',
  '@id': `${toAbsoluteUrl(id)}#service`,
  name,
  serviceType,
  provider: { '@id': organizationId },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  audience: {
    '@type': 'Audience',
    audienceType,
  },
  description,
  url: toAbsoluteUrl(url),
});

export const createFAQSchema = (items: Array<{ title: string; description: string }>): JsonLdNode => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.description,
    },
  })),
});

export const createItemListSchema = (
  name: string,
  items: Array<{ name: string; description?: string; url: string | URL }>
): JsonLdNode => ({
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: toAbsoluteUrl(item.url),
    item: {
      '@type': 'Thing',
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      url: toAbsoluteUrl(item.url),
    },
  })),
});

export const createArticleSchema = ({
  post,
  url,
  image,
}: {
  post: Post;
  url: string | URL;
  image?: ImageMetadata | string;
}): JsonLdNode => {
  const imageUrl = typeof image === 'string' ? toAbsoluteUrl(image) : toAbsoluteUrl(image?.src);

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: {
      '@id': `${url}#webpage`,
    },
    headline: post.title,
    ...(post.excerpt ? { description: post.excerpt } : {}),
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished: post.publishDate.toISOString(),
    dateModified: (post.updateDate || post.publishDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author || SITE.name,
      url: siteUrl,
    },
    publisher: { '@id': organizationId },
    ...(post.category?.title ? { articleSection: post.category.title } : {}),
    ...(post.tags?.length ? { keywords: post.tags.map((tag) => tag.title).join(', ') } : {}),
  };
};

export const structuredDataIds = {
  organization: organizationId,
  website: websiteId,
};
