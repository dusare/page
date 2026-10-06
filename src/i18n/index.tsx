import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import { LANGS, type Lang, type Translation } from './types';

export { LANGS, type Lang, type Translation } from './types';

export const dictionaries: Record<Lang, Translation> = { es, en, fr, de };

const COOKIE_NAME = 'lang';

function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

export function langPath(lang: Lang): string {
  return lang === 'es' ? '/' : `/${lang}/`;
}

function readPathLang(): Lang | undefined {
  const segment = window.location.pathname.split('/')[1];
  return isLang(segment) ? segment : undefined;
}

function readCookieLang(): Lang | undefined {
  const value = document.cookie.match(/(?:^|;\s*)lang=([a-z]{2})/)?.[1];
  return isLang(value) ? value : undefined;
}

function detectInitialLang(): Lang {
  const fromPath = readPathLang();
  if (fromPath) return fromPath;

  const fromCookie = readCookieLang();
  if (fromCookie) return fromCookie;

  // Injected by the Cloudflare worker from Accept-Language / request country.
  const fromWorker = (window as Window & { __LANG__?: unknown }).__LANG__;
  if (isLang(fromWorker)) return fromWorker;

  for (const language of navigator.languages ?? [navigator.language]) {
    const code = language.slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  }

  return 'es';
}

interface I18nValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children, initialLang }: { children: ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(() => initialLang ?? detectInitialLang());
  const t = dictionaries[lang];

  const setLang = useCallback((next: Lang) => {
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    window.history.replaceState(null, '', `${langPath(next)}${window.location.hash}`);
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
}
