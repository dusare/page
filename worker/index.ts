interface Env {
  ASSETS: Fetcher;
}

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de'] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

const COUNTRY_LANG: Record<string, Lang> = {
  US: 'en', GB: 'en', IE: 'en', CA: 'en', AU: 'en', NZ: 'en', IN: 'en', ZA: 'en',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', MA: 'fr', TN: 'fr',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
};

// Crawlers must always get the language that matches the URL, never a guess from headers.
const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|quora|whatsapp|telegram|preview|gptbot|chatgpt|oai-searchbot|claude|anthropic|perplexity|cohere|bytespider|google-extended|ccbot|meta-externalagent|applebot|duckassist|mistral/i;

function isLang(value: string | undefined): value is Lang {
  return !!value && (SUPPORTED_LANGS as readonly string[]).includes(value);
}

function langFromPath(pathname: string): Lang | undefined {
  const segment = pathname.split('/')[1];
  return isLang(segment) ? segment : undefined;
}

function pickLang(request: Request): Lang {
  const cookieLang = request.headers.get('Cookie')?.match(/(?:^|;\s*)lang=([a-z]{2})/)?.[1];
  if (isLang(cookieLang)) return cookieLang;

  const acceptLanguage = request.headers.get('Accept-Language') ?? '';
  const preferred = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { code: tag.slice(0, 2).toLowerCase(), q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((entry) => entry.code && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { code } of preferred) {
    if (isLang(code)) return code;
  }

  const country = (request as Request & { cf?: { country?: string } }).cf?.country ?? '';
  return COUNTRY_LANG[country] ?? 'es';
}

export default {
  async fetch(request, env): Promise<Response> {
    const assetResponse = await env.ASSETS.fetch(request);
    const response = new Response(assetResponse.body, assetResponse);

    if (!response.headers.get('Content-Type')?.includes('text/html')) {
      return response;
    }

    const url = new URL(request.url);
    const pathLang = langFromPath(url.pathname);
    const isBot = BOT_PATTERN.test(request.headers.get('User-Agent') ?? '');

    if (pathLang || isBot) {
      return response;
    }

    // Visitors on the Spanish root may be switched client-side to their preferred language.
    const lang = pickLang(request);
    response.headers.append('Vary', 'Accept-Language, Cookie');

    return new HTMLRewriter()
      .on('head', {
        element(element) {
          element.prepend(`<script>window.__LANG__=${JSON.stringify(lang)}</script>`, { html: true });
        },
      })
      .transform(response);
  },
} satisfies ExportedHandler<Env>;
