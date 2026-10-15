import React from 'react';
import { GameStats, TranslationContent } from '../types';
import { Trophy, Flame, Zap, Award, RotateCcw, Activity } from 'lucide-react';

interface StatsPanelProps {
  stats: GameStats;
  t: TranslationContent;
  onResetStats: () => void;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats, t, onResetStats }) => {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-100">{t.highScore} & {t.memoryScore}</h2>
        </div>

        <button
          onClick={onResetStats}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700/80 text-slate-400 hover:text-slate-200 border border-slate-700/60 rounded-xl text-xs font-medium transition-colors cursor-pointer"
          title={t.resetStats}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.resetStats}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* High Score */}
        <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t.highScore}</span>
          </div>
          <div className="text-2xl font-black text-slate-100 tracking-tight">
            {stats.highScore}
          </div>
        </div>

        {/* Best Streak */}
        <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>{t.bestStreak}</span>
          </div>
          <div className="text-2xl font-black text-slate-100 tracking-tight">
            {stats.bestStreak}
          </div>
        </div>

        {/* Memory Agility Score */}
        <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>{t.memoryScore}</span>
          </div>
          <div className="text-2xl font-black text-slate-100 tracking-tight">
            {stats.memoryAgilityScore} <span className="text-xs text-slate-500 font-normal">pts</span>
          </div>
        </div>

        {/* Reaction Time */}
        <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.reactionTime}</span>
          </div>
          <div className="text-2xl font-black text-slate-100 tracking-tight">
            {stats.averageReactionMs > 0 ? `${stats.averageReactionMs}` : '---'}
            <span className="text-xs text-slate-500 font-normal"> ms</span>
          </div>
        </div>
      </div>

      <div className="mt-3.5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-purple-400" />
          <span>{t.totalGamesPlayed}: <strong className="text-slate-200">{stats.totalGames}</strong></span>
        </span>
        <span>{t.streak}: <strong className="text-orange-400">{stats.currentStreak}</strong> 🔥</span>
      </div>
    </div>
  );
};
