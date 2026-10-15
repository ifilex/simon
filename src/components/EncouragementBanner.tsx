import React from 'react';
import { TranslationContent } from '../types';
import { Sparkles, Trophy, HeartHandshake, Volume2, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EncouragementBannerProps {
  phrase: string;
  isMilestone: boolean;
  milestoneType?: 'level' | 'highscore' | 'streak';
  t: TranslationContent;
  onSpeak?: () => void;
  voiceEnabled?: boolean;
}

export const EncouragementBanner: React.FC<EncouragementBannerProps> = ({
  phrase,
  isMilestone,
  milestoneType,
  t,
  onSpeak,
  voiceEnabled,
}) => {
  if (!phrase) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={phrase}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-xl mx-auto rounded-2xl p-4 shadow-lg border backdrop-blur-md transition-all ${
          isMilestone
            ? 'bg-gradient-to-r from-amber-950/80 via-yellow-900/60 to-amber-950/80 border-amber-500/50 text-amber-100 shadow-amber-500/10'
            : 'bg-gradient-to-r from-slate-900/90 via-cyan-950/60 to-slate-900/90 border-cyan-500/30 text-slate-100 shadow-cyan-500/10'
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`p-2.5 rounded-xl flex-shrink-0 ${
              isMilestone
                ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/40'
                : 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-400/40'
            }`}
          >
            {milestoneType === 'highscore' ? (
              <Trophy className="w-6 h-6 animate-bounce" />
            ) : milestoneType === 'streak' ? (
              <Flame className="w-6 h-6 text-orange-400 animate-pulse" />
            ) : isMilestone ? (
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '4s' }} />
            ) : (
              <HeartHandshake className="w-6 h-6" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            {isMilestone && (
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5 flex items-center gap-1.5">
                <span>
                  {milestoneType === 'highscore'
                    ? t.newHighScoreMessage
                    : t.levelUpMessage}
                </span>
              </div>
            )}
            <p className="text-sm sm:text-base font-semibold leading-snug tracking-tight">
              "{phrase}"
            </p>
          </div>

          {voiceEnabled && onSpeak && (
            <button
              onClick={onSpeak}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 transition-colors flex-shrink-0 cursor-pointer"
              title="Speak phrase"
              aria-label="Speak encouraging phrase"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
