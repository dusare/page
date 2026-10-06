import { useEffect, useRef, useState } from 'react';
import { Check, Globe2 } from 'lucide-react';
import { LANGS, useI18n } from '../i18n';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, t, setLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="rb-icon-button inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-2 text-sm font-medium text-slate-200 hover:text-white"
        aria-label={t.language.label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe2 className="h-4 w-4" />
        {lang.toUpperCase()}
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute right-0 z-50 mt-2 min-w-40 rounded-md border border-white/10 bg-[#03040a]/95 p-1 shadow-2xl backdrop-blur-xl"
        >
          {LANGS.map((code) => {
            const isActive = code === lang;

            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  lang={code}
                  onClick={() => {
                    setLang(code);
                    setIsOpen(false);
                  }}
                  className={`rb-nav-link flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{t.language.names[code]}</span>
                  {isActive ? <Check className="h-4 w-4 text-cyan-300" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
