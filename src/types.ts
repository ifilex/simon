export type Language = 'es' | 'en' | 'fr' | 'de' | 'pt' | 'it' | 'ru' | 'zh' | 'ja';

export type GameMode = 'classic' | 'speed' | 'reverse' | 'blind' | 'hex6';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export interface DeviceInfo {
  type: DeviceType;
  isTouch: boolean;
  os: string;
  screenSize: string;
}

export interface ColorPadConfig {
  id: number;
  color: string;
  nameKey: string;
  baseClass: string;
  activeClass: string;
  glowColor: string;
  frequency: number;
  symbol: string; // Colorblind shape identifier
  shapeName: string;
}

export interface GameStats {
  highScore: number;
  currentScore: number;
  level: number;
  totalGames: number;
  bestStreak: number;
  currentStreak: number;
  averageReactionMs: number;
  memoryAgilityScore: number;
  lastPlayed: string;
}

export interface TranslationContent {
  title: string;
  subtitle: string;
  tagline: string;

  // Device detection
  deviceDetected: string;
  deviceTypes: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  touchSupported: string;
  noTouchSupported: string;

  // Game statuses
  statusReady: string;
  statusWatching: string;
  statusYourTurn: string;
  statusSuccess: string;
  statusMistake: string;
  statusPaused: string;

  // Actions & Buttons
  startGame: string;
  restartGame: string;
  pauseGame: string;
  resumeGame: string;
  nextLevel: string;

  // Modes & Settings
  gameMode: string;
  modes: {
    classic: string;
    classicDesc: string;
    speed: string;
    speedDesc: string;
    reverse: string;
    reverseDesc: string;
    blind: string;
    blindDesc: string;
    hex6: string;
    hex6Desc: string;
  };

  difficulty: string;
  difficulties: {
    easy: string;
    medium: string;
    hard: string;
  };

  settings: string;
  soundEffects: string;
  voiceEncouragement: string;
  vibration: string;
  colorBlindMode: string;

  // Stats
  score: string;
  highScore: string;
  level: string;
  streak: string;
  bestStreak: string;
  reactionTime: string;
  memoryScore: string;
  totalGamesPlayed: string;
  resetStats: string;

  // Encouraging phrases (array of quotes)
  encouragements: string[];

  // Milestone congratulations
  levelUpMessage: string;
  newHighScoreMessage: string;
  keepGoingMessage: string;

  // Scientific info on Working Memory
  memoryInfoTitle: string;
  memoryInfoSubtitle: string;
  whatIsWorkingMemory: string;
  whatIsWorkingMemoryDesc: string;
  benefitsTitle: string;
  benefits: {
    title: string;
    desc: string;
  }[];
  neuroplasticityTitle: string;
  neuroplasticityDesc: string;
  tipsTitle: string;
  tips: string[];

  // Footer / Instructions
  instructionsTitle: string;
  instructionsSteps: string[];
}
