import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Language,
  GameMode,
  Difficulty,
  DeviceInfo,
  GameStats,
} from './types';
import { TRANSLATIONS } from './i18n/translations';
import { detectDevice, triggerHaptic } from './utils/device';
import { playPadSound, playMistakeSound, playVictoryJingle, speakText } from './utils/audio';

import { Header } from './components/Header';
import { SimonBoard, PADS_4_COLOR, PADS_6_COLOR } from './components/SimonBoard';
import { EncouragementBanner } from './components/EncouragementBanner';
import { StatsPanel } from './components/StatsPanel';
import { MemoryBenefits } from './components/MemoryBenefits';
import { SettingsModal } from './components/SettingsModal';

const STATS_STORAGE_KEY = 'simon_neurofit_stats_v1';
const LANG_STORAGE_KEY = 'simon_neurofit_lang_v1';

export default function App() {
  // Device Detection State
  const [device, setDevice] = useState<DeviceInfo>(detectDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Language & Settings State
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    return (saved as Language) || 'es';
  });

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;

  // Game Settings
  const [gameMode, setGameMode] = useState<GameMode>('classic');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Stats State
  const [stats, setStats] = useState<GameStats>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore JSON parse error
    }
    return {
      highScore: 0,
      currentScore: 0,
      level: 1,
      totalGames: 0,
      bestStreak: 0,
      currentStreak: 0,
      averageReactionMs: 0,
      memoryAgilityScore: 0,
      lastPlayed: new Date().toISOString(),
    };
  });

  useEffect(() => {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  // Game Play Logic State
  const [sequence, setSequence] = useState<number[]>([]);
  const [userStep, setUserStep] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'idle' | 'watching' | 'your_turn' | 'success' | 'mistake' | 'paused'>('idle');
  const [activePad, setActivePad] = useState<number | null>(null);
  const [level, setLevel] = useState<number>(1);

  // Encouragement & Speech
  const [encouragementPhrase, setEncouragementPhrase] = useState<string>('');
  const [isMilestone, setIsMilestone] = useState<boolean>(false);
  const [milestoneType, setMilestoneType] = useState<'level' | 'highscore' | 'streak'>('level');

  // Reaction Time tracking refs
  const turnStartTimeRef = useRef<number>(0);
  const totalReactionMsRef = useRef<number>(0);
  const totalStepsMeasuredRef = useRef<number>(0);

  // Timeout Refs for sequence playback
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  // Get active pad pool (4 or 6)
  const activePads = gameMode === 'hex6' ? PADS_6_COLOR : PADS_4_COLOR;

  // Speak phrase function
  const triggerSpeech = useCallback(
    (text: string) => {
      if (voiceEnabled) {
        speakText(text, lang);
      }
    },
    [voiceEnabled, lang]
  );

  // Get playback speeds based on difficulty & mode
  const getSpeedMs = (currentLevel: number) => {
    let toneMs = 500;
    let gapMs = 200;

    if (difficulty === 'easy') {
      toneMs = 650;
      gapMs = 250;
    } else if (difficulty === 'hard') {
      toneMs = 350;
      gapMs = 150;
    }

    if (gameMode === 'speed') {
      const acceleration = Math.min(currentLevel * 30, 250);
      toneMs = Math.max(180, toneMs - acceleration);
      gapMs = Math.max(90, gapMs - acceleration / 2);
    }

    return { toneMs, gapMs };
  };

  // Play a pad tone
  const illuminatePad = useCallback(
    (padId: number, durationMs: number) => {
      setActivePad(padId);
      if (soundEnabled) {
        const padConfig = activePads.find((p) => p.id === padId);
        if (padConfig) {
          playPadSound(padConfig.frequency, durationMs);
        }
      }
      const timer = setTimeout(() => {
        setActivePad(null);
      }, durationMs);
      timeoutsRef.current.push(timer);
    },
    [soundEnabled, activePads]
  );

  // Play Sequence
  const playSequence = useCallback(
    (seq: number[], currentLevel: number) => {
      clearAllTimeouts();
      setGameStatus('watching');
      setUserStep(0);

      const { toneMs, gapMs } = getSpeedMs(currentLevel);
      let cumulativeDelay = 300;

      seq.forEach((padId, idx) => {
        const t1 = setTimeout(() => {
          illuminatePad(padId, toneMs);
        }, cumulativeDelay);
        timeoutsRef.current.push(t1);

        cumulativeDelay += toneMs + gapMs;

        // Sequence finished -> User's turn
        if (idx === seq.length - 1) {
          const t2 = setTimeout(() => {
            setGameStatus('your_turn');
            turnStartTimeRef.current = performance.now();
          }, cumulativeDelay);
          timeoutsRef.current.push(t2);
        }
      });
    },
    [illuminatePad, difficulty, gameMode]
  );

  // Start new game or level up
  const handleStartGame = () => {
    clearAllTimeouts();
    const padCount = gameMode === 'hex6' ? 6 : 4;
    const firstPad = Math.floor(Math.random() * padCount);
    const newSeq = [firstPad];

    setSequence(newSeq);
    setLevel(1);
    setGameStatus('watching');
    setEncouragementPhrase(t.statusWatching);
    setIsMilestone(false);

    playSequence(newSeq, 1);
  };

  // User presses a pad
  const handlePadPress = (padId: number) => {
    if (gameStatus !== 'your_turn') return;

    // Measure reaction time
    const reactionMs = performance.now() - turnStartTimeRef.current;
    totalReactionMsRef.current += reactionMs;
    totalStepsMeasuredRef.current += 1;
    turnStartTimeRef.current = performance.now();

    const { toneMs } = getSpeedMs(level);
    illuminatePad(padId, toneMs);

    // Determine expected pad
    // Reverse mode checks backwards!
    const expectedStep = gameMode === 'reverse' ? sequence.length - 1 - userStep : userStep;
    const expectedPad = sequence[expectedStep];

    if (padId === expectedPad) {
      // Correct pad!
      const nextStep = userStep + 1;

      if (nextStep === sequence.length) {
        // Round Completed!
        setGameStatus('success');

        // Pick encouraging phrase
        const randomEncouragement =
          t.encouragements[Math.floor(Math.random() * t.encouragements.length)];
        setEncouragementPhrase(randomEncouragement);

        const nextLevel = level + 1;
        const newScore = nextLevel - 1;

        // Check Milestone / High Score
        let newHighScore = stats.highScore;
        let milestoneHappened = false;
        let mType: 'level' | 'highscore' | 'streak' = 'level';

        if (newScore > stats.highScore) {
          newHighScore = newScore;
          milestoneHappened = true;
          mType = 'highscore';
          if (soundEnabled) playVictoryJingle();
        } else if (nextLevel % 3 === 0) {
          milestoneHappened = true;
          mType = 'level';
          if (soundEnabled) playVictoryJingle();
        }

        setIsMilestone(milestoneHappened);
        setMilestoneType(mType);

        // Update stats
        const newStreak = stats.currentStreak + 1;
        const bestStreak = Math.max(stats.bestStreak, newStreak);
        const avgReaction = Math.round(totalReactionMsRef.current / totalStepsMeasuredRef.current);
        const agilityScore = Math.round(newHighScore * 100 + bestStreak * 50);

        setStats((prev) => ({
          ...prev,
          highScore: newHighScore,
          currentScore: newScore,
          currentStreak: newStreak,
          bestStreak,
          averageReactionMs: avgReaction,
          memoryAgilityScore: agilityScore,
        }));

        triggerSpeech(randomEncouragement);

        // Advance to next level after delay
        const timer = setTimeout(() => {
          setLevel(nextLevel);
          const padCount = gameMode === 'hex6' ? 6 : 4;
          const nextPad = Math.floor(Math.random() * padCount);
          const updatedSeq = [...sequence, nextPad];
          setSequence(updatedSeq);
          playSequence(updatedSeq, nextLevel);
        }, 1200);
        timeoutsRef.current.push(timer);
      } else {
        setUserStep(nextStep);
      }
    } else {
      // Mistake made!
      setGameStatus('mistake');
      if (soundEnabled) {
        playMistakeSound();
      }
      if (vibrationEnabled) {
        triggerHaptic(120);
      }

      setEncouragementPhrase(t.statusMistake);
      setIsMilestone(false);

      setStats((prev) => ({
        ...prev,
        currentStreak: 0,
        totalGames: prev.totalGames + 1,
      }));

      triggerSpeech(t.statusMistake);
    }
  };

  // Pause Game
  const handlePauseGame = () => {
    clearAllTimeouts();
    setGameStatus('paused');
    setActivePad(null);
  };

  // Reset Stats
  const handleResetStats = () => {
    const resetValues: GameStats = {
      highScore: 0,
      currentScore: 0,
      level: 1,
      totalGames: 0,
      bestStreak: 0,
      currentStreak: 0,
      averageReactionMs: 0,
      memoryAgilityScore: 0,
      lastPlayed: new Date().toISOString(),
    };
    setStats(resetValues);
    localStorage.removeItem(STATS_STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header Bar */}
      <Header
        device={device}
        currentLang={lang}
        onSelectLang={handleSelectLang}
        t={t}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenMemoryInfo={() => {
          const el = document.getElementById('memory-benefits-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Game Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center justify-start gap-6">
        {/* Encouragement Speech Banner */}
        <EncouragementBanner
          phrase={encouragementPhrase}
          isMilestone={isMilestone}
          milestoneType={milestoneType}
          t={t}
          onSpeak={() => speakText(encouragementPhrase, lang)}
          voiceEnabled={voiceEnabled}
        />

        {/* Simon Interactive Game Board */}
        <SimonBoard
          activePad={activePad}
          isPlayingSequence={gameStatus === 'watching'}
          isUserTurn={gameStatus === 'your_turn'}
          gameStatus={gameStatus}
          level={level}
          gameMode={gameMode}
          colorBlindMode={colorBlindMode}
          vibrationEnabled={vibrationEnabled}
          onPadPress={handlePadPress}
          onStartGame={handleStartGame}
          onPauseGame={handlePauseGame}
          t={t}
        />

        {/* Stats Panel */}
        <StatsPanel stats={stats} t={t} onResetStats={handleResetStats} />

        {/* Working Memory Scientific Explanation */}
        <div id="memory-benefits-section" className="w-full">
          <MemoryBenefits t={t} />
        </div>
      </main>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        gameMode={gameMode}
        onChangeGameMode={setGameMode}
        difficulty={difficulty}
        onChangeDifficulty={setDifficulty}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        voiceEnabled={voiceEnabled}
        onToggleVoice={() => setVoiceEnabled(!voiceEnabled)}
        vibrationEnabled={vibrationEnabled}
        onToggleVibration={() => setVibrationEnabled(!vibrationEnabled)}
        colorBlindMode={colorBlindMode}
        onToggleColorBlind={() => setColorBlindMode(!colorBlindMode)}
        t={t}
      />

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/80 py-4 px-4 text-center text-xs text-slate-500">
        <p>Simon Memory NeuroFit • {t.subtitle}</p>
      </footer>
    </div>
  );
}
