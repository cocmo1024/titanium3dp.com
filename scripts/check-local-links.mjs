import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const siteOrigin = 'https://titanium3dp.com';

if (!fs.existsSync(root)) {
  throw new Error('Missing dist output. Run npm run build before npm run check:links.');
}

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });

const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
const broken = [];
let checked = 0;
let checkedFragments = 0;
const fragmentCache = new Map();

const routeFromFile = (file) => {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404/';
  return `/${relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')}`;
};

const resolveToFile = (pathname) => {
  let clean;
  try {
    clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  } catch {
    return null;
  }

  if (!clean) {
    const homepage = path.join(root, 'index.html');
    return fs.existsSync(homepage) ? homepage : null;
  }
  if (clean.replace(/\/+$/, '') === '404') {
    const notFound = path.join(root, '404.html');
    return fs.existsSync(notFound) ? notFound : null;
  }

  const direct = path.join(root, clean);
  if (path.extname(clean)) return fs.existsSync(direct) ? direct : null;

  const indexFile = path.join(direct, 'index.html');
  if (fs.existsSync(indexFile)) return indexFile;

  const htmlFile = `${direct}.html`;
  return fs.existsSync(htmlFile) ? htmlFile : null;
};

const hasFragment = (file, hash) => {
  if (!file.endsWith('.html')) return true;

  let ids = fragmentCache.get(file);
  if (!ids) {
    const html = fs.readFileSync(file, 'utf8');
    ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
    fragmentCache.set(file, ids);
  }

  let fragment;
  try {
    fragment = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return false;
  }

  return !fragment || ids.has(fragment);
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/g)].map((match) => match[1]);
  const sourceUrl = `${siteOrigin}${routeFromFile(file)}`;

  for (const href of hrefs) {
    let url;
    try {
      url = new URL(href, sourceUrl);
    } catch {
      broken.push({ source: path.relative(root, file).replaceAll('\\', '/'), href, reason: 'invalid URL' });
      continue;
    }

    if (url.origin !== siteOrigin || !['http:', 'https:'].includes(url.protocol)) continue;
    checked += 1;

    const targetFile = resolveToFile(url.pathname);
    if (!targetFile) {
      broken.push({ source: path.relative(root, file).replaceAll('\\', '/'), href, reason: 'missing target' });
      continue;
    }

    if (url.hash) {
      checkedFragments += 1;
      if (!hasFragment(targetFile, url.hash)) {
        broken.push({ source: path.relative(root, file).replaceAll('\\', '/'), href, reason: 'missing fragment' });
      }
    }
  }
}

console.log(
  JSON.stringify({ htmlFiles: htmlFiles.length, checkedInternalLinks: checked, checkedFragments, broken }, null, 2)
);

if (broken.length > 0) process.exitCode = 1;
