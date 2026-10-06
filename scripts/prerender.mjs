import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_URL = 'https://dusare.com.ar';
const CONTACT_EMAIL = 'aduarte@dusare.com.ar';
const PHONE = '+5491137696056';
const LOGO_URL = `${SITE_URL}/dusare-logo.png`;
const SAME_AS = [
  'https://github.com/dusare',
  'https://www.instagram.com/dusare_ia/',
  'https://www.facebook.com/share/17vjMMv57u/',
  'https://x.com/Dusare_ia',
  'https://t.me/dusare_ia',
  'https://cal.com/dusare/calendar',
];
const OG_LOCALE = { es: 'es_AR', en: 'en_US', fr: 'fr_FR', de: 'de_DE' };

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(root, 'dist');
const serverDir = resolve(root, 'dist-server');

const { render, dictionaries, langPath, LANGS } = await import(
  pathToFileURL(resolve(serverDir, 'entry-server.js')).href
);

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const absolute = (lang) => `${SITE_URL}${langPath(lang)}`;

function structuredData(lang) {
  const t = dictionaries[lang];
  const services = Object.values(t.services.items);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#organization`,
        name: 'Dusare',
        legalName: 'Dusare Consult',
        url: absolute(lang),
        logo: LOGO_URL,
        image: LOGO_URL,
        description: t.meta.description,
        slogan: t.footer.tagline,
        email: CONTACT_EMAIL,
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hurlingham',
          addressRegion: 'Buenos Aires',
          addressCountry: 'AR',
        },
        areaServed: ['AR', 'Latin America', 'US', 'CA', 'EU'],
        knowsLanguage: LANGS,
        founder: {
          '@type': 'Person',
          name: 'Ariel Sebastián Duarte',
          jobTitle: t.founder.role,
          email: CONTACT_EMAIL,
        },
        sameAs: SAME_AS,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: CONTACT_EMAIL,
          telephone: PHONE,
          availableLanguage: LANGS,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.title,
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.summary,
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Dusare',
        inLanguage: lang,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

function seoHead(lang) {
  const t = dictionaries[lang];
  const url = absolute(lang);
  const title = escapeHtml(t.meta.title);
  const description = escapeHtml(t.meta.description);
  const alternates = LANGS.map(
    (code) => `<link rel="alternate" hreflang="${code}" href="${absolute(code)}" />`
  );
  const ogAlternates = LANGS.filter((code) => code !== lang).map(
    (code) => `<meta property="og:locale:alternate" content="${OG_LOCALE[code]}" />`
  );
  const jsonLd = JSON.stringify(structuredData(lang)).replace(/</g, '\\u003c');

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    ...alternates,
    `<link rel="alternate" hreflang="x-default" href="${absolute('es')}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Dusare" />`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
    ...ogAlternates,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${LOGO_URL}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@Dusare_ia" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${LOGO_URL}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}

function sitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const links = LANGS.map(
    (code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${absolute(code)}" />`
  )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute('es')}" />`)
    .join('\n');
  const urls = LANGS.map(
    (lang) => `  <url>
    <loc>${absolute(lang)}</loc>
    <lastmod>${lastmod}</lastmod>
${links}
  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

function llmsTxt() {
  const sections = ['es', 'en'].map((lang) => {
    const t = dictionaries[lang];
    const services = Object.values(t.services.items)
      .map((service) => `- **${service.title}**: ${service.summary} (${service.time})`)
      .join('\n');
    const steps = t.method.steps.map((step) => `- **${step.title}**: ${step.description}`).join('\n');
    const industries = Object.values(t.industries.items)
      .map((item) => `- **${item.title}**: ${item.description}`)
      .join('\n');

    return `## ${t.services.title} (${lang})

${t.hero.lead}

${services}

## ${t.method.title}

${steps}

## ${t.industries.title}

${industries}`;
  });

  const es = dictionaries.es;

  return `# Dusare

> ${es.meta.description}

${es.founder.body}

- Sitio: ${SITE_URL}/ (es), ${absolute('en')} (en), ${absolute('fr')} (fr), ${absolute('de')} (de)
- Contacto: ${CONTACT_EMAIL}
- WhatsApp: ${PHONE}
- Agenda: https://cal.com/dusare/calendar
- Ubicación: Hurlingham, Buenos Aires, Argentina

${sections.join('\n\n')}
`;
}

const template = await readFile(resolve(distDir, 'index.html'), 'utf8');

for (const lang of LANGS) {
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, seoHead(lang))
    .replace('<!--app-->', render(lang));
  const target = lang === 'es' ? resolve(distDir, 'index.html') : resolve(distDir, lang, 'index.html');

  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

await writeFile(resolve(distDir, 'sitemap.xml'), sitemap());
await writeFile(resolve(distDir, 'llms.txt'), llmsTxt());
await rm(serverDir, { recursive: true, force: true });

console.log(`Prerendered ${LANGS.length} languages, sitemap.xml and llms.txt`);
