import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import { dictionaries, I18nProvider, langPath, LANGS, type Lang } from './i18n';

export { dictionaries, langPath, LANGS };

export function render(lang: Lang): string {
  return renderToString(
    <StrictMode>
      <I18nProvider initialLang={lang}>
        <App />
      </I18nProvider>
    </StrictMode>
  );
}
