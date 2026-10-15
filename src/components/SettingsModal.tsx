import React from 'react';
import { GameMode, Difficulty, TranslationContent } from '../types';
import { X, Volume2, VolumeX, Mic, MicOff, Smartphone, Eye, Sliders, Zap } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameMode: GameMode;
  onChangeGameMode: (mode: GameMode) => void;
  difficulty: Difficulty;
  onChangeDifficulty: (diff: Difficulty) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
  vibrationEnabled: boolean;
  onToggleVibration: () => void;
  colorBlindMode: boolean;
  onToggleColorBlind: () => void;
  t: TranslationContent;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  gameMode,
  onChangeGameMode,
  difficulty,
  onChangeDifficulty,
  soundEnabled,
  onToggleSound,
  voiceEnabled,
  onToggleVoice,
  vibrationEnabled,
  onToggleVibration,
  colorBlindMode,
  onToggleColorBlind,
  t,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold">{t.settings}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Close Settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Game Modes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {t.gameMode}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(['classic', 'speed', 'reverse', 'blind', 'hex6'] as GameMode[]).map((mode) => {
                const isSelected = gameMode === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => onChangeGameMode(mode)}
                    className={`p-3 text-left rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-950/50 border-cyan-500 text-cyan-200 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                        : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold">{t.modes[mode]}</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-1">
                      {t.modes[`${mode}Desc` as keyof typeof t.modes]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{t.difficulty}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => {
                const isSelected = difficulty === diff;
                return (
                  <button
                    key={diff}
                    onClick={() => onChangeDifficulty(diff)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500/40'
                        : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {t.difficulties[diff]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            {/* Sound Effects */}
            <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                {soundEnabled ? <Volume2 className="w-5 h-5 text-cyan-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
                <span className="text-sm font-semibold text-slate-200">{t.soundEffects}</span>
              </div>
              <button
                onClick={onToggleSound}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  soundEnabled ? 'bg-cyan-500 justify-end' : 'bg-slate-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* Voice Encouragement */}
            <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                {voiceEnabled ? <Mic className="w-5 h-5 text-emerald-400" /> : <MicOff className="w-5 h-5 text-slate-500" />}
                <span className="text-sm font-semibold text-slate-200">{t.voiceEncouragement}</span>
              </div>
              <button
                onClick={onToggleVoice}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  voiceEnabled ? 'bg-emerald-500 justify-end' : 'bg-slate-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* Vibration */}
            <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Smartphone className={`w-5 h-5 ${vibrationEnabled ? 'text-purple-400' : 'text-slate-500'}`} />
                <span className="text-sm font-semibold text-slate-200">{t.vibration}</span>
              </div>
              <button
                onClick={onToggleVibration}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  vibrationEnabled ? 'bg-purple-500 justify-end' : 'bg-slate-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* Color blind mode */}
            <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Eye className={`w-5 h-5 ${colorBlindMode ? 'text-amber-400' : 'text-slate-500'}`} />
                <span className="text-sm font-semibold text-slate-200">{t.colorBlindMode}</span>
              </div>
              <button
                onClick={onToggleColorBlind}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  colorBlindMode ? 'bg-amber-500 justify-end' : 'bg-slate-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
