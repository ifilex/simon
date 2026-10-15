import React from 'react';
import { ColorPadConfig, GameMode, TranslationContent } from '../types';
import { Play, Pause, RotateCcw, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { triggerHaptic } from '../utils/device';

export const PADS_4_COLOR: ColorPadConfig[] = [
  {
    id: 0,
    color: 'emerald',
    nameKey: 'Verde',
    baseClass: 'bg-emerald-600 hover:bg-emerald-500 border-emerald-400/50 text-emerald-100',
    activeClass: 'bg-emerald-300 shadow-[0_0_50px_rgba(52,211,153,0.9)] scale-[0.98] ring-4 ring-emerald-200',
    glowColor: 'rgba(52, 211, 153, 0.8)',
    frequency: 329.63, // E4
    symbol: '▲',
    shapeName: 'Triangle',
  },
  {
    id: 1,
    color: 'rose',
    nameKey: 'Rojo',
    baseClass: 'bg-rose-600 hover:bg-rose-500 border-rose-400/50 text-rose-100',
    activeClass: 'bg-rose-300 shadow-[0_0_50px_rgba(251,113,133,0.9)] scale-[0.98] ring-4 ring-rose-200',
    glowColor: 'rgba(251, 113, 133, 0.8)',
    frequency: 261.63, // C4
    symbol: '■',
    shapeName: 'Square',
  },
  {
    id: 2,
    color: 'amber',
    nameKey: 'Amarillo',
    baseClass: 'bg-amber-500 hover:bg-amber-400 border-amber-300/50 text-amber-100',
    activeClass: 'bg-amber-200 shadow-[0_0_50px_rgba(251,191,36,0.9)] scale-[0.98] ring-4 ring-amber-100',
    glowColor: 'rgba(251, 191, 36, 0.8)',
    frequency: 440.0, // A4
    symbol: '●',
    shapeName: 'Circle',
  },
  {
    id: 3,
    color: 'sky',
    nameKey: 'Azul',
    baseClass: 'bg-sky-600 hover:bg-sky-500 border-sky-400/50 text-sky-100',
    activeClass: 'bg-sky-300 shadow-[0_0_50px_rgba(56,189,248,0.9)] scale-[0.98] ring-4 ring-sky-200',
    glowColor: 'rgba(56, 189, 248, 0.8)',
    frequency: 196.0, // G3
    symbol: '★',
    shapeName: 'Star',
  },
];

export const PADS_6_COLOR: ColorPadConfig[] = [
  ...PADS_4_COLOR,
  {
    id: 4,
    color: 'orange',
    nameKey: 'Naranja',
    baseClass: 'bg-orange-600 hover:bg-orange-500 border-orange-400/50 text-orange-100',
    activeClass: 'bg-orange-300 shadow-[0_0_50px_rgba(251,146,60,0.9)] scale-[0.98] ring-4 ring-orange-200',
    glowColor: 'rgba(251, 146, 60, 0.8)',
    frequency: 392.0, // G4
    symbol: '◆',
    shapeName: 'Diamond',
  },
  {
    id: 5,
    color: 'purple',
    nameKey: 'Violeta',
    baseClass: 'bg-purple-600 hover:bg-purple-500 border-purple-400/50 text-purple-100',
    activeClass: 'bg-purple-300 shadow-[0_0_50px_rgba(192,132,252,0.9)] scale-[0.98] ring-4 ring-purple-200',
    glowColor: 'rgba(192, 132, 252, 0.8)',
    frequency: 493.88, // B4
    symbol: '⬢',
    shapeName: 'Hexagon',
  },
];

interface SimonBoardProps {
  activePad: number | null;
  isPlayingSequence: boolean;
  isUserTurn: boolean;
  gameStatus: 'idle' | 'watching' | 'your_turn' | 'success' | 'mistake' | 'paused';
  level: number;
  gameMode: GameMode;
  colorBlindMode: boolean;
  vibrationEnabled: boolean;
  onPadPress: (padId: number) => void;
  onStartGame: () => void;
  onPauseGame: () => void;
  t: TranslationContent;
}

export const SimonBoard: React.FC<SimonBoardProps> = ({
  activePad,
  isPlayingSequence,
  isUserTurn,
  gameStatus,
  level,
  gameMode,
  colorBlindMode,
  vibrationEnabled,
  onPadPress,
  onStartGame,
  onPauseGame,
  t,
}) => {
  const pads = gameMode === 'hex6' ? PADS_6_COLOR : PADS_4_COLOR;

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>, padId: number) => {
    e.preventDefault();
    if (!isUserTurn || gameStatus !== 'your_turn') return;
    if (vibrationEnabled) {
      triggerHaptic(30);
    }
    onPadPress(padId);
  };

  const getStatusText = () => {
    switch (gameStatus) {
      case 'idle':
        return t.statusReady;
      case 'watching':
        return t.statusWatching;
      case 'your_turn':
        return t.statusYourTurn;
      case 'success':
        return t.statusSuccess;
      case 'mistake':
        return t.statusMistake;
      case 'paused':
        return t.statusPaused;
      default:
        return t.statusReady;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      {/* Status Header Badge */}
      <div
        className={`mb-6 px-5 py-2.5 rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-300 flex items-center gap-2.5 text-xs sm:text-sm font-bold ${
          gameStatus === 'your_turn'
            ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 ring-2 ring-emerald-500/30 animate-pulse'
            : gameStatus === 'watching'
            ? 'bg-sky-950/80 border-sky-500/50 text-sky-300 ring-2 ring-sky-500/30'
            : gameStatus === 'mistake'
            ? 'bg-rose-950/80 border-rose-500/50 text-rose-300 ring-2 ring-rose-500/30'
            : gameStatus === 'success'
            ? 'bg-amber-950/80 border-amber-500/50 text-amber-300 ring-2 ring-amber-500/30'
            : 'bg-slate-900/80 border-slate-700/80 text-slate-300'
        }`}
      >
        {gameStatus === 'your_turn' ? (
          <Sparkles className="w-4 h-4 text-emerald-400" />
        ) : gameStatus === 'watching' ? (
          <Volume2 className="w-4 h-4 text-sky-400 animate-bounce" />
        ) : gameStatus === 'mistake' ? (
          <AlertCircle className="w-4 h-4 text-rose-400" />
        ) : (
          <Sparkles className="w-4 h-4 text-slate-400" />
        )}
        <span>{getStatusText()}</span>
      </div>

      {/* Main Simon Console Board */}
      <div className="relative flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 border-4 border-slate-800 rounded-full shadow-[0_0_80px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
        {/* Color Pads Container */}
        <div
          className={`grid gap-3 sm:gap-4 p-2 transition-all duration-300 ${
            gameMode === 'hex6'
              ? 'grid-cols-3 max-w-[340px] sm:max-w-[420px]'
              : 'grid-cols-2 max-w-[300px] sm:max-w-[380px]'
          }`}
        >
          {pads.map((pad) => {
            const isActive = activePad === pad.id;
            const isBlindMode = gameMode === 'blind' && gameStatus === 'watching';

            return (
              <button
                key={pad.id}
                onPointerDown={(e) => handlePointerDown(e, pad.id)}
                disabled={!isUserTurn || gameStatus !== 'your_turn'}
                className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl border-2 transition-all duration-150 flex flex-col items-center justify-center select-none cursor-pointer touch-none ${
                  isBlindMode
                    ? isActive
                      ? 'bg-slate-300 border-white text-slate-950 shadow-white shadow-xl scale-[0.98]'
                      : 'bg-slate-800/80 border-slate-700 text-slate-500'
                    : isActive
                    ? pad.activeClass
                    : `${pad.baseClass} opacity-85 hover:opacity-100 hover:scale-[1.02] active:scale-[0.97]`
                } ${!isUserTurn || gameStatus !== 'your_turn' ? 'cursor-not-allowed' : ''}`}
                aria-label={`Pad ${pad.id + 1} ${pad.shapeName}`}
              >
                {/* Color blind shape symbol */}
                {colorBlindMode && (
                  <span className="text-2xl sm:text-3xl font-black opacity-90 drop-shadow">
                    {pad.symbol}
                  </span>
                )}

                {/* Blind Mode Sound Wave icon hint */}
                {gameMode === 'blind' && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    Tone {pad.id + 1}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Center Control Console Disk */}
        <div className="absolute inset-auto w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-900 border-4 border-slate-800 shadow-2xl flex flex-col items-center justify-center p-2 z-10 text-slate-100 text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
            {t.level}
          </div>
          <div className="text-2xl sm:text-3xl font-black text-cyan-400 leading-none mb-2">
            {level}
          </div>

          {/* Start / Pause Controls */}
          {gameStatus === 'idle' || gameStatus === 'mistake' ? (
            <button
              onClick={onStartGame}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{gameStatus === 'mistake' ? t.restartGame : t.startGame}</span>
            </button>
          ) : gameStatus === 'paused' ? (
            <button
              onClick={onStartGame}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl text-xs transition-all cursor-pointer shadow-md active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{t.resumeGame}</span>
            </button>
          ) : (
            <button
              onClick={onPauseGame}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs transition-all cursor-pointer active:scale-95"
            >
              <Pause className="w-3.5 h-3.5" />
              <span>{t.pauseGame}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
