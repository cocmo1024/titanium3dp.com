interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const CANONICAL_HOST = 'titanium3dp.com';
const PRODUCTION_HOSTS = new Set([CANONICAL_HOST, `www.${CANONICAL_HOST}`]);
const LEGACY_SITEMAP_PATH = '/sitemap.xml';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let shouldRedirect = false;

    if (PRODUCTION_HOSTS.has(url.hostname) && (url.protocol !== 'https:' || url.hostname !== CANONICAL_HOST)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      shouldRedirect = true;
    }

    if (url.pathname === LEGACY_SITEMAP_PATH) {
      url.pathname = '/sitemap-index.xml';
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
