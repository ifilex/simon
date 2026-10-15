import React, { useState } from 'react';
import { TranslationContent } from '../types';
import { Brain, Zap, Target, Sparkles, Lightbulb, Activity, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface MemoryBenefitsProps {
  t: TranslationContent;
}

export const MemoryBenefits: React.FC<MemoryBenefitsProps> = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const icons = [Target, Zap, ShieldCheck, Activity];

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-400">
            <Brain className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>{t.memoryInfoTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.memoryInfoSubtitle}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700/80 text-cyan-300 border border-slate-700/80 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer self-start sm:self-auto"
        >
          <span>{isExpanded ? 'Ver menos' : 'Saber más sobre tu cerebro'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Overview section always visible */}
      <div className="mt-5 text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
        <span className="font-semibold text-cyan-400">{t.whatIsWorkingMemory}: </span>
        {t.whatIsWorkingMemoryDesc}
      </div>

      {/* Expanded scientific details */}
      {isExpanded && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.benefitsTitle}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.benefits.map((item, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/60 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-800/30 rounded-2xl">
            <h3 className="text-sm font-bold text-cyan-300 mb-1.5 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>{t.neuroplasticityTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.neuroplasticityDesc}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>{t.tipsTitle}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              {t.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
