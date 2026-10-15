import React from 'react';
import { DeviceInfo, Language, TranslationContent } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { DeviceBadge } from './DeviceBadge';
import { Brain, Sliders, Sparkles } from 'lucide-react';

interface HeaderProps {
  device: DeviceInfo;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: TranslationContent;
  onOpenSettings: () => void;
  onOpenMemoryInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  device,
  currentLang,
  onSelectLang,
  t,
  onOpenSettings,
  onOpenMemoryInfo,
}) => {
  return (
    <header className="w-full bg-slate-900/80 border-b border-slate-800 backdrop-blur-xl sticky top-0 z-40 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand Title */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-2xl text-white shadow-lg shadow-cyan-500/20">
            <Brain className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight flex items-center gap-2">
              <span>{t.title}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                NeuroFit
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Device Badge & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <DeviceBadge device={device} t={t} />

          <LanguageSelector currentLang={currentLang} onSelectLang={onSelectLang} />

          <button
            onClick={onOpenMemoryInfo}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
            title={t.memoryInfoTitle}
            aria-label="Working Memory Info"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenSettings}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
            title={t.settings}
            aria-label="Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
