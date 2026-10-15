import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { LANGUAGE_NAMES } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentInfo = LANGUAGE_NAMES[currentLang];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-medium flex items-center gap-1.5">
          <span>{currentInfo.flag}</span>
          <span className="hidden sm:inline">{currentInfo.nativeName}</span>
          <span className="sm:hidden uppercase">{currentLang}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
            Language / Idioma
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {(Object.keys(LANGUAGE_NAMES) as Language[]).map((langKey) => {
              const info = LANGUAGE_NAMES[langKey];
              const isSelected = langKey === currentLang;
              return (
                <button
                  key={langKey}
                  onClick={() => {
                    onSelectLang(langKey);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left hover:bg-slate-800 transition-colors cursor-pointer ${
                    isSelected ? 'text-cyan-400 bg-cyan-950/30 font-semibold' : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base">{info.flag}</span>
                    <span>{info.nativeName}</span>
                    <span className="text-xs text-slate-500 font-normal">({info.name})</span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
