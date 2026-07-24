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

const routeFromFile = (file) => {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404/';
  return `/${relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')}`;
};

const resolvesToFile = (pathname) => {
  let clean;
  try {
    clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  } catch {
    return false;
  }

  if (!clean) return fs.existsSync(path.join(root, 'index.html'));
  if (clean.replace(/\/+$/, '') === '404') return fs.existsSync(path.join(root, '404.html'));

  const direct = path.join(root, clean);
  if (path.extname(clean)) return fs.existsSync(direct);

  return fs.existsSync(path.join(direct, 'index.html')) || fs.existsSync(`${direct}.html`);
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

    if (!resolvesToFile(url.pathname)) {
      broken.push({ source: path.relative(root, file).replaceAll('\\', '/'), href, reason: 'missing target' });
    }
  }
}

console.log(JSON.stringify({ htmlFiles: htmlFiles.length, checkedInternalLinks: checked, broken }, null, 2));

if (broken.length > 0) process.exitCode = 1;
