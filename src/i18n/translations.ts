import { Language, TranslationContent } from '../types';

export const LANGUAGE_NAMES: Record<Language, { name: string; nativeName: string; flag: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  en: { name: 'English', nativeName: 'English', flag: '🇬🇧' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  zh: { name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
};

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  es: {
    title: 'Simon Memoria NeuroFit',
    subtitle: 'Gimnasio Cognitivo para tu Memoria de Trabajo',
    tagline: 'Estimula tu cerebro con colores, tonos armónicos y desafíos secuenciales.',

    deviceDetected: 'Dispositivo Detectado',
    deviceTypes: {
      desktop: 'PC / Ordenador',
      tablet: 'Tablet',
      mobile: 'Móvil / Celular',
    },
    touchSupported: 'Control Táctil Activo',
    noTouchSupported: 'Teclado / Ratón Activo',

    statusReady: '¡Listo para entrenar! Pulsa Iniciar.',
    statusWatching: '👀 Observa y escucha con atención la secuencia...',
    statusYourTurn: '🎮 ¡Tu turno! Repite la secuencia exacta.',
    statusSuccess: '🌟 ¡Excelente! Secuencia completada.',
    statusMistake: '💡 ¡Buen intento! La práctica refuerza tu memoria.',
    statusPaused: '⏸️ Juego pausado.',

    startGame: 'Iniciar Juego',
    restartGame: 'Volver a Intentar',
    pauseGame: 'Pausar',
    resumeGame: 'Continuar',
    nextLevel: 'Siguiente Nivel',

    gameMode: 'Modo de Juego',
    modes: {
      classic: 'Clásico',
      classicDesc: 'La secuencia tradicional de 4 colores y sonidos.',
      speed: 'Rápido',
      speedDesc: 'La velocidad aumenta con cada nivel para poner a prueba tus reflejos.',
      reverse: 'Inverso',
      reverseDesc: '¡Reto Máximo! Repite la secuencia en orden inverso.',
      blind: 'Auditivo / Ciego',
      blindDesc: 'Solo tonos de sonido. Entrena tu memoria auditiva pura.',
      hex6: 'Hexagonal (6 Colores)',
      hex6Desc: 'Nivel avanzado con 6 colores y notas musicales.',
    },

    difficulty: 'Dificultad',
    difficulties: {
      easy: 'Relajada',
      medium: 'Normal',
      hard: 'Desafío',
    },

    settings: 'Configuración',
    soundEffects: 'Efectos de Sonido',
    voiceEncouragement: 'Voz de Aliento',
    vibration: 'Vibración Táctil',
    colorBlindMode: 'Modo Accesible (Símbolos)',

    score: 'Puntuación',
    highScore: 'Récord Personal',
    level: 'Nivel',
    streak: 'Racha Actual',
    bestStreak: 'Mejor Racha',
    reactionTime: 'Velocidad Media',
    memoryScore: 'Agilidad Cerebral',
    totalGamesPlayed: 'Partidas Jugadas',
    resetStats: 'Reiniciar Estadísticas',

    encouragements: [
      '¡Vas excelente! Tu concentración está aumentando.',
      '¡Gran trabajo! Cada repetición crea nuevas conexiones neuronales.',
      '¡Tu memoria de trabajo está más ágil que nunca!',
      '¡Fantástica precisión! Mantén la calma y enfócate.',
      '¡Tu cerebro se fortalece con cada ronda!',
      '¡Magnífico! Tu enfoque mental se nota en cada movimiento.',
      '¡Sigue así! Estás entrenando tu atención ejecutiva.',
      '¡Impresionante memoria! ¡Sigue superando tus límites!',
    ],

    levelUpMessage: '🎉 ¡Nivel Alcanzado! Tu cerebro se está adaptando.',
    newHighScoreMessage: '🏆 ¡Nuevo Récord Personal! ¡Felicitaciones por tu agilidad mental!',
    keepGoingMessage: '💪 La perseverancia es la clave de la neuroplasticidad.',

    memoryInfoTitle: '🧠 ¿Por qué es tan importante la Memoria de Trabajo?',
    memoryInfoSubtitle: 'Ciencia detrás del entrenamiento de memoria con Simon',
    whatIsWorkingMemory: '¿Qué es la Memoria de Trabajo?',
    whatIsWorkingMemoryDesc: 'La memoria de trabajo (o memoria operativa) es el sistema cognitivo que retiene y manipula temporalmente la información necesaria para realizar tareas complejas como razonar, calcular, tomar decisiones y comprender el lenguaje.',
    benefitsTitle: 'Beneficios Científicos de este Juego',
    benefits: [
      {
        title: 'Mayor Capacidad de Enfoque',
        desc: 'Ayuda a filtrar distracciones y mantener la atención sostenida en la tarea presente.',
      },
      {
        title: 'Estimula la Neuroplasticidad',
        desc: 'Fortalece la velocidad de procesamiento neurológico y las redes del lóbulo frontal.',
      },
      {
        title: 'Mejora en la Vida Cotidiana',
        desc: 'Facilita recordar listas, instrucciones complejas, nombres y números en el día a día.',
      },
      {
        title: 'Agilidad Auditiva y Visual',
        desc: 'Combina la corteza visual y auditiva para un procesamiento multisensorial integral.',
      },
    ],
    neuroplasticityTitle: 'Neuroplasticidad en Acción',
    neuroplasticityDesc: 'Al igual que ejercitar un músculo en el gimnasio, jugar 5-10 minutos diarios estimula la creación de nuevas sinapsis en la corteza prefrontal, retrasando el deterioro cognitivo y mejorando el rendimiento ejecutivo.',
    tipsTitle: 'Consejos para Máximo Rendimiento',
    tips: [
      'Respira profundo y mantén una postura relajada.',
      'Agrupa la secuencia en patrones o bloques rítmicos.',
      'Combina el color con el tono del sonido para fijarlo en tu memoria.',
      'Juega 10 minutos al día para ver mejoras reales en tu concentración.',
    ],

    instructionsTitle: '¿Cómo jugar?',
    instructionsSteps: [
      'Observa y escucha la secuencia de colores que la app iluminará.',
      'Cuando aparezca "¡Tu turno!", repite la misma secuencia tocando los botones.',
      'Con cada nivel completado, la secuencia sumará un elemento más.',
      'Usa las opciones de voz y vibración para una experiencia envolvente en cualquier dispositivo.',
    ],
  },

  en: {
    title: 'Simon Memory NeuroFit',
    subtitle: 'Cognitive Gym for Your Working Memory',
    tagline: 'Stimulate your brain with colors, harmonic tones, and sequential challenges.',

    deviceDetected: 'Device Detected',
    deviceTypes: {
      desktop: 'PC / Desktop',
      tablet: 'Tablet',
      mobile: 'Mobile / Phone',
    },
    touchSupported: 'Touch Input Active',
    noTouchSupported: 'Keyboard / Mouse Active',

    statusReady: 'Ready to train! Tap Start.',
    statusWatching: '👀 Watch and listen carefully to the sequence...',
    statusYourTurn: '🎮 Your turn! Repeat the exact sequence.',
    statusSuccess: '🌟 Excellent! Sequence completed.',
    statusMistake: '💡 Great attempt! Practice strengthens your memory.',
    statusPaused: '⏸️ Game paused.',

    startGame: 'Start Game',
    restartGame: 'Try Again',
    pauseGame: 'Pause',
    resumeGame: 'Resume',
    nextLevel: 'Next Level',

    gameMode: 'Game Mode',
    modes: {
      classic: 'Classic',
      classicDesc: 'The traditional sequence of 4 colors and sounds.',
      speed: 'Speed Blitz',
      speedDesc: 'Speed increases with every level to test your fast reflexes.',
      reverse: 'Reverse',
      reverseDesc: 'Ultimate Challenge! Repeat the sequence in backwards order.',
      blind: 'Auditory / Blind',
      blindDesc: 'Audio tones only. Train your pure auditory memory.',
      hex6: 'Hexagon (6 Colors)',
      hex6Desc: 'Advanced mode with 6 colors and musical notes.',
    },

    difficulty: 'Difficulty',
    difficulties: {
      easy: 'Relaxed',
      medium: 'Normal',
      hard: 'Challenge',
    },

    settings: 'Settings',
    soundEffects: 'Sound Effects',
    voiceEncouragement: 'Voice Encouragement',
    vibration: 'Haptic Feedback',
    colorBlindMode: 'Accessible Mode (Symbols)',

    score: 'Score',
    highScore: 'Personal Best',
    level: 'Level',
    streak: 'Current Streak',
    bestStreak: 'Best Streak',
    reactionTime: 'Avg Speed',
    memoryScore: 'Brain Agility',
    totalGamesPlayed: 'Games Played',
    resetStats: 'Reset Statistics',

    encouragements: [
      'You are doing awesome! Your focus is growing.',
      'Great work! Each repetition creates new neural pathways.',
      'Your working memory is sharper than ever!',
      'Fantastic accuracy! Stay calm and focused.',
      'Your brain grows stronger with every round!',
      'Magnificent! Your mental clarity shows in every tap.',
      'Keep going! You are training your executive function.',
      'Impressive memory! Keep pushing your boundaries!',
    ],

    levelUpMessage: '🎉 Level Reached! Your brain is adapting.',
    newHighScoreMessage: '🏆 New Personal Record! Congratulations on your mental agility!',
    keepGoingMessage: '💪 Persistence is the key to neuroplasticity.',

    memoryInfoTitle: '🧠 Why is Working Memory So Important?',
    memoryInfoSubtitle: 'The science behind Simon memory training',
    whatIsWorkingMemory: 'What is Working Memory?',
    whatIsWorkingMemoryDesc: 'Working memory is the cognitive system responsible for temporarily holding and manipulating information needed for complex tasks like reasoning, calculating, decision making, and language comprehension.',
    benefitsTitle: 'Scientific Benefits of this Game',
    benefits: [
      {
        title: 'Enhanced Focus Capacity',
        desc: 'Helps filter out distractions and maintain sustained attention on tasks.',
      },
      {
        title: 'Stimulates Neuroplasticity',
        desc: 'Strengthens neural processing speed and frontal lobe networks.',
      },
      {
        title: 'Real-Life Improvements',
        desc: 'Makes it easier to remember lists, complex instructions, names, and numbers.',
      },
      {
        title: 'Auditory & Visual Agility',
        desc: 'Engages both visual and auditory cortices for integrated cognitive processing.',
      },
    ],
    neuroplasticityTitle: 'Neuroplasticity in Action',
    neuroplasticityDesc: 'Just like training a muscle at the gym, playing 5-10 minutes daily stimulates new synaptic connections in the prefrontal cortex, slowing cognitive decline and boosting executive performance.',
    tipsTitle: 'Tips for Peak Performance',
    tips: [
      'Take deep breaths and keep a relaxed posture.',
      'Chunk the sequence into rhythmic blocks or patterns.',
      'Associate the color with the musical pitch to lock it in memory.',
      'Play 10 minutes a day to see real improvements in concentration.',
    ],

    instructionsTitle: 'How to Play?',
    instructionsSteps: [
      'Watch and listen carefully to the color sequence displayed by the app.',
      'When "Your Turn!" appears, repeat the exact sequence by tapping the pads.',
      'With each completed level, the sequence grows by one item.',
      'Enable voice and vibration for an immersive experience on any device.',
    ],
  },

  fr: {
    title: 'Simon Mémoire NeuroFit',
    subtitle: 'Gymnastique Cognitive pour la Mémoire de Travail',
    tagline: 'Stimulez votre cerveau avec des couleurs, des sons harmonieux et des défis séquentiels.',

    deviceDetected: 'Appareil Détecté',
    deviceTypes: {
      desktop: 'PC / Ordinateur',
      tablet: 'Tablette',
      mobile: 'Mobile / Smartphone',
    },
    touchSupported: 'Contrôle Tactile Actif',
    noTouchSupported: 'Clavier / Souris Actif',

    statusReady: 'Prêt à vous entraîner ! Appuyez sur Commencer.',
    statusWatching: '👀 Observez et écoutez attentivement la séquence...',
    statusYourTurn: '🎮 À vous ! Répétez la séquence exacte.',
    statusSuccess: '🌟 Excellent ! Séquence réussie.',
    statusMistake: '💡 Bel essai ! La pratique renforce la mémoire.',
    statusPaused: '⏸️ Jeu en pause.',

    startGame: 'Commencer le Jeu',
    restartGame: 'Réessayer',
    pauseGame: 'Pause',
    resumeGame: 'Reprendre',
    nextLevel: 'Niveau Suivant',

    gameMode: 'Mode de Jeu',
    modes: {
      classic: 'Classique',
      classicDesc: 'La séquence traditionnelle de 4 couleurs et sons.',
      speed: 'Rapidité Blitz',
      speedDesc: 'La vitesse augmente à chaque niveau pour tester vos réflexes.',
      reverse: 'Inversé',
      reverseDesc: 'Défi Ultime ! Répétez la séquence dans l’ordre inverse.',
      blind: 'Auditif / Aveugle',
      blindDesc: 'Sons uniquement. Entraînez votre mémoire auditive pure.',
      hex6: 'Hexagonal (6 Couleurs)',
      hex6Desc: 'Mode avancé avec 6 couleurs et notes musicales.',
    },

    difficulty: 'Difficulté',
    difficulties: {
      easy: 'Détendu',
      medium: 'Normal',
      hard: 'Défi',
    },

    settings: 'Paramètres',
    soundEffects: 'Effets Sonores',
    voiceEncouragement: 'Encouragement Vocal',
    vibration: 'Vibration Tactile',
    colorBlindMode: 'Mode Accessible (Symboles)',

    score: 'Score',
    highScore: 'Meilleur Score',
    level: 'Niveau',
    streak: 'Série Actuelle',
    bestStreak: 'Meilleure Série',
    reactionTime: 'Vitesse Moyenne',
    memoryScore: 'Agilité Cérébrale',
    totalGamesPlayed: 'Parties Jouées',
    resetStats: 'Réinitialiser les Stats',

    encouragements: [
      'Très bien joué ! Votre concentration augmente.',
      'Beau travail ! Chaque répétition crée de nouvelles connexions neuronales.',
      'Votre mémoire de travail est plus affûtée que jamais !',
      'Précision fantastique ! Restez calme et concentré.',
      'Votre cerveau se renforce à chaque tour !',
      'Magnifique ! Votre clarté mentale se voit à chaque appui.',
      'Continuez ainsi ! Vous entraînez votre fonction exécutive.',
      'Mémoire impressionnante ! Repoussez vos limites !',
    ],

    levelUpMessage: '🎉 Niveau Atteint ! Votre cerveau s’adapte.',
    newHighScoreMessage: '🏆 Nouveau Record Personnel ! Félicitations pour votre agilité !',
    keepGoingMessage: '💪 La persévérance est la clé de la neuroplasticité.',

    memoryInfoTitle: '🧠 Pourquoi la Mémoire de Travail est-elle essentielle ?',
    memoryInfoSubtitle: 'La science derrière l’entraînement Simon',
    whatIsWorkingMemory: 'Qu’est-ce que la Mémoire de Travail ?',
    whatIsWorkingMemoryDesc: 'La mémoire de travail est le système cognitif responsable du maintien et de la manipulation temporaire des informations nécessaires aux tâches complexes comme le raisonnement et la prise de décision.',
    benefitsTitle: 'Bénéfices Scientifiques',
    benefits: [
      {
        title: 'Meilleure Capacité de Focus',
        desc: 'Aide à filtrer les distractions et à maintenir une attention soutenue.',
      },
      {
        title: 'Stimule la Neuroplasticité',
        desc: 'Renforce la vitesse de traitement neuronal et les réseaux du lobe frontal.',
      },
      {
        title: 'Améliorations au Quotidien',
        desc: 'Facilite la mémorisation des listes, instructions, noms et numéros.',
      },
      {
        title: 'Agilité Auditive et Visuelle',
        desc: 'Sollicite à la fois les cortex visuel et auditif pour un traitement complet.',
      },
    ],
    neuroplasticityTitle: 'La Neuroplasticité en Action',
    neuroplasticityDesc: 'Comme l’entraînement musculaire, jouer 5 à 10 minutes par jour stimule les synapses du cortex préfrontal et ralentit le déclin cognitif.',
    tipsTitle: 'Conseils pour une Performance Optimale',
    tips: [
      'Respirez profondément et gardez une posture détendue.',
      'Regroupez la séquence en rythmes ou en motifs.',
      'Associez la couleur au ton sonore pour bien l’ancrer.',
      'Jouez 10 minutes par jour pour constater de vrais progrès.',
    ],

    instructionsTitle: 'Comment jouer ?',
    instructionsSteps: [
      'Observez et écoutez la séquence de couleurs diffusée par l’application.',
      'Lorsque "À vous !" apparaît, répétez la séquence exacte en touchant les zones.',
      'À chaque niveau franchi, la séquence s’allonge d’un élément.',
      'Activez la voix et les vibrations pour une immersion totale sur mobile ou PC.',
    ],
  },

  de: {
    title: 'Simon Gedächtnis NeuroFit',
    subtitle: 'Kognitives Training für Ihr Arbeitsgedächtnis',
    tagline: 'Stimulieren Sie Ihr Gehirn mit Farben, Tönen und Sequenz-Herausforderungen.',

    deviceDetected: 'Erkanntes Gerät',
    deviceTypes: {
      desktop: 'PC / Desktop',
      tablet: 'Tablet',
      mobile: 'Smartphone / Mobil',
    },
    touchSupported: 'Touch-Steuerung Aktiv',
    noTouchSupported: 'Tastatur / Maus Aktiv',

    statusReady: 'Bereit fürs Training! Drücke Start.',
    statusWatching: '👀 Beobachte und höre die Sequenz genau...',
    statusYourTurn: '🎮 Du bist dran! Wiederhole die genaue Sequenz.',
    statusSuccess: '🌟 Großartig! Sequenz abgeschlossen.',
    statusMistake: '💡 Guter Versuch! Übung stärkt das Gedächtnis.',
    statusPaused: '⏸️ Spiel pausiert.',

    startGame: 'Spiel Starten',
    restartGame: 'Erneut Versuchen',
    pauseGame: 'Pause',
    resumeGame: 'Fortsetzen',
    nextLevel: 'Nächstes Level',

    gameMode: 'Spielmodus',
    modes: {
      classic: 'Klassisch',
      classicDesc: 'Die traditionelle Sequenz aus 4 Farben und Tönen.',
      speed: 'Geschwindigkeit Blitz',
      speedDesc: 'Das Tempo steigt mit jedem Level für schnelle Reflexe.',
      reverse: 'Rückwärts',
      reverseDesc: 'Extreme Challenge! Wiederhole die Sequenz in umgekehrter Reihenfolge.',
      blind: 'Auditiv / Blind',
      blindDesc: 'Nur Töne. Trainiere dein reines auditives Gedächtnis.',
      hex6: 'Hexagonal (6 Farben)',
      hex6Desc: 'Erweiterter Modus mit 6 Farben und Musiknoten.',
    },

    difficulty: 'Schwierigkeit',
    difficulties: {
      easy: 'Entspannt',
      medium: 'Normal',
      hard: 'Herausforderung',
    },

    settings: 'Einstellungen',
    soundEffects: 'Soundeffekte',
    voiceEncouragement: 'Sprach-Aufmunterung',
    vibration: 'Vibrations-Feedback',
    colorBlindMode: 'Barrierefreier Modus (Symbole)',

    score: 'Punkte',
    highScore: 'Persönlicher Rekord',
    level: 'Level',
    streak: 'Aktuelle Serie',
    bestStreak: 'Beste Serie',
    reactionTime: 'Durchschn. Tempo',
    memoryScore: 'Gehirn-Agilität',
    totalGamesPlayed: 'Gespielte Spiele',
    resetStats: 'Statistiken Zurücksetzen',

    encouragements: [
      'Ausgezeichnet! Deine Konzentration steigt.',
      'Tolle Arbeit! Jede Wiederholung schafft neue neuronale Verbindungen.',
      'Dein Arbeitsgedächtnis ist schärfer denn je!',
      'Fantastische Präzision! Bleib ruhig und fokussiert.',
      'Dein Gehirn wird mit jeder Runde stรักษา stärker!',
      'Wunderbar! Deine geistige Klarheit zeigt sich bei jedem Klick.',
      'Weiter so! Du trainierst deine exekutiven Funktionen.',
      'Beeindruckendes Gedächtnis! Erweitere deine Grenzen!',
    ],

    levelUpMessage: '🎉 Level Erreicht! Dein Gehirn passt sich an.',
    newHighScoreMessage: '🏆 Neuer Rekord! Herzlichen Glückwunsch zu deiner geistigen Fitness!',
    keepGoingMessage: '💪 Ausdauer ist der Schlüssel zur Neuroplastizität.',

    memoryInfoTitle: '🧠 Warum ist das Arbeitsgedächtnis so wichtig?',
    memoryInfoSubtitle: 'Die Wissenschaft hinter dem Simon-Gedächtnistraining',
    whatIsWorkingMemory: 'Was ist das Arbeitsgedächtnis?',
    whatIsWorkingMemoryDesc: 'Das Arbeitsgedächtnis ist das kognitive System, das Informationen vorübergehend speichert und verarbeitet, die für komplexe Aufgaben wie Denken, Entscheiden und Sprachverständnis benötigt werden.',
    benefitsTitle: 'Wissenschaftliche Vorteile',
    benefits: [
      {
        title: 'Bessere Fokus-Kapazität',
        desc: 'Hilft dabei, Ablenkungen auszublenden und die Aufmerksamkeit aufrechterhalten.',
      },
      {
        title: 'Stimuliert Neuroplastizität',
        desc: 'Stärkt die neuronale Verarbeitungsgeschwindigkeit und den Frontallappen.',
      },
      {
        title: 'Vorteile im Alltag',
        desc: 'Erleichtert das Merken von Listen, Anweisungen, Namen und Zahlen.',
      },
      {
        title: 'Visuelle und Auditive Agilität',
        desc: 'Beansprucht sowohl den Seh- als auch den Hörkortex für ganzheitliches Training.',
      },
    ],
    neuroplasticityTitle: 'Neuroplastizität in Aktion',
    neuroplasticityDesc: 'Wie ein Muskel im Fitnessstudio regt tägliches Training von 5-10 Minuten neue Synapsen im präfrontalen Kortex an.',
    tipsTitle: 'Tipps für Spitzenleistungen',
    tips: [
      'Atme tief durch und halte eine entspannte Haltung.',
      'Gliedere die Sequenz in rhythmische Muster oder Blöcke.',
      'Verknüpfe die Farbe mit der Tonhöhe für maximale Erinnerung.',
      'Spiele 10 Minuten täglich für spürbare Konzentrationssteigerung.',
    ],

    instructionsTitle: 'Wie wird gespielt?',
    instructionsSteps: [
      'Beobachte und höre die Farbsequenz, die die App anzeigt.',
      'Wenn "Du bist dran!" erscheint, wiederhole die Sequenz durch Tippen.',
      'Mit jedem erreichten Level wird die Sequenz um ein Element länger.',
      'Aktiviere Sprache und Vibration für ein optimales Erlebnis auf jedem Gerät.',
    ],
  },

  pt: {
    title: 'Simon Memória NeuroFit',
    subtitle: 'Ginásio Cognitivo para a sua Memória de Trabalho',
    tagline: 'Estimule o seu cérebro com cores, sons harmónicos e desafios sequenciais.',

    deviceDetected: 'Dispositivo Detetado',
    deviceTypes: {
      desktop: 'PC / Computador',
      tablet: 'Tablet',
      mobile: 'Telemóvel / Celular',
    },
    touchSupported: 'Controlo Tátil Ativo',
    noTouchSupported: 'Teclado / Rato Ativo',

    statusReady: 'Pronto para treinar! Toque em Iniciar.',
    statusWatching: '👀 Observe e ouça a sequência com atenção...',
    statusYourTurn: '🎮 A sua vez! Repita a sequência exata.',
    statusSuccess: '🌟 Excelente! Sequência concluída.',
    statusMistake: '💡 Boa tentativa! A prática reforça a memória.',
    statusPaused: '⏸️ Jogo em pausa.',

    startGame: 'Iniciar Jogo',
    restartGame: 'Tentar Novamente',
    pauseGame: 'Pausar',
    resumeGame: 'Continuar',
    nextLevel: 'Próximo Nível',

    gameMode: 'Modo de Jogo',
    modes: {
      classic: 'Clássico',
      classicDesc: 'A sequência tradicional de 4 cores e sons.',
      speed: 'Rápido Blitz',
      speedDesc: 'A velocidade aumenta a cada nível para testar os seus reflexos.',
      reverse: 'Inverso',
      reverseDesc: 'Desafio Máximo! Repita a sequência na ordem inversa.',
      blind: 'Auditivo / Cego',
      blindDesc: 'Apenas sons. Treine a sua memória auditiva pura.',
      hex6: 'Hexagonal (6 Cores)',
      hex6Desc: 'Modo avançado com 6 cores e notas musicais.',
    },

    difficulty: 'Dificuldade',
    difficulties: {
      easy: 'Relaxado',
      medium: 'Normal',
      hard: 'Desafio',
    },

    settings: 'Configurações',
    soundEffects: 'Efeitos Sonoros',
    voiceEncouragement: 'Voz de Incentivo',
    vibration: 'Vibração Tátil',
    colorBlindMode: 'Modo Acessível (Símbolos)',

    score: 'Pontuação',
    highScore: 'Recorde Pessoal',
    level: 'Nível',
    streak: 'Sequência Atual',
    bestStreak: 'Melhor Sequência',
    reactionTime: 'Velocidade Média',
    memoryScore: 'Agilidade Cerebral',
    totalGamesPlayed: 'Partidas Jogadas',
    resetStats: 'Reiniciar Estatísticas',

    encouragements: [
      'Está a ir excelente! A sua concentração está a aumentar.',
      'Ótimo trabalho! Cada repetição cria novas conexões neuronais.',
      'A sua memória de trabalho está mais ágil do que nunca!',
      'Precisão fantástica! Mantenha a calma e o foco.',
      'O seu cérebro fortalece-se a cada rodada!',
      'Magnífico! O seu foco mental é visível em cada toque.',
      'Continue assim! Está a treinar as suas funções executivas.',
      'Memória impressionante! Supere os seus limites!',
    ],

    levelUpMessage: '🎉 Nível Alcançado! O seu cérebro está a adaptar-se.',
    newHighScoreMessage: '🏆 Novo Recorde Pessoal! Parabéns pela sua agilidade mental!',
    keepGoingMessage: '💪 A perseverança é a chave da neuroplasticidade.',

    memoryInfoTitle: '🧠 Por que a Memória de Trabalho é Tão Importante?',
    memoryInfoSubtitle: 'A ciência por trás do treino de memória Simon',
    whatIsWorkingMemory: 'O que é a Memória de Trabalho?',
    whatIsWorkingMemoryDesc: 'A memória de trabalho é o sistema cognitivo responsável por reter e manipular temporariamente informações necessárias para tarefas complexas como raciocínio, cálculo e tomada de decisões.',
    benefitsTitle: 'Benefícios Científicos',
    benefits: [
      {
        title: 'Maior Capacidade de Foco',
        desc: 'Ajudar a filtrar distrações e manter a atenção sustentada.',
      },
      {
        title: 'Estimula a Neuroplasticidade',
        desc: 'Fortalece a velocidade de processamento neuronal e as redes cerebrais.',
      },
      {
        title: 'Melhorias no Dia a Dia',
        desc: 'Facilita lembrar listas, instruções complexas, nomes e números.',
      },
      {
        title: 'Agilidade Auditiva e Visual',
        desc: 'Combina os córtex visual e auditivo para um processamento integrado.',
      },
    ],
    neuroplasticityTitle: 'Neuroplasticidade em Ação',
    neuroplasticityDesc: 'Assim como exercitar um músculo, jogar 5 a 10 minutos diários estimula novas sinapses no córtex pré-frontal.',
    tipsTitle: 'Dicas para Desempenho Máximo',
    tips: [
      'Respire fundo e mantenha uma postura relaxada.',
      'Agrupe a sequência em padrões rítmicos.',
      'Associe a cor ao tom de som para fixar na memória.',
      'Jogue 10 minutos por dia para notar melhorias reais de concentração.',
    ],

    instructionsTitle: 'Como Jogar?',
    instructionsSteps: [
      'Observe e ouça a sequência de cores apresentada pela aplicação.',
      'Quando surgir "A sua vez!", repita a mesma sequência tocando nos botões.',
      'A cada nível concluído, a sequência aumenta um elemento.',
      'Ative a voz e a vibração para uma experiência envolvente no seu dispositivo.',
    ],
  },

  it: {
    title: 'Simon Memoria NeuroFit',
    subtitle: 'Palestra Cognitiva per la Memoria di Lavoro',
    tagline: 'Stimola il tuo cervello con colori, toni armonici e sfide sequenziali.',

    deviceDetected: 'Dispositivo Rilevato',
    deviceTypes: {
      desktop: 'PC / Computer',
      tablet: 'Tablet',
      mobile: 'Smartphone / Mobile',
    },
    touchSupported: 'Controllo Touch Attivo',
    noTouchSupported: 'Tastiera / Mouse Attivo',

    statusReady: 'Pronto per l’allenamento! Premi Inizia.',
    statusWatching: '👀 Osserva e ascolta con attenzione la sequenza...',
    statusYourTurn: '🎮 Il tuo turno! Ripeti la sequenza esatta.',
    statusSuccess: '🌟 Eccellente! Sequenza completata.',
    statusMistake: '💡 Ottimo tentativo! La pratica rafforza la memoria.',
    statusPaused: '⏸️ Gioco in pausa.',

    startGame: 'Inizia Gioco',
    restartGame: 'Riprova',
    pauseGame: 'Pausa',
    resumeGame: 'Riprendi',
    nextLevel: 'Prossimo Livello',

    gameMode: 'Modalità di Gioco',
    modes: {
      classic: 'Classico',
      classicDesc: 'La sequenza tradizionale a 4 colori e suoni.',
      speed: 'Velocità Blitz',
      speedDesc: 'La velocità aumenta a ogni livello per testare i tuoi riflessi.',
      reverse: 'Inverso',
      reverseDesc: 'Sfida Estrema! Ripeti la sequenza in ordine inverso.',
      blind: 'Uditivo / Cieco',
      blindDesc: 'Solo toni audio. Allena la tua memoria uditiva pura.',
      hex6: 'Esagonale (6 Colori)',
      hex6Desc: 'Modalità avanzata con 6 colori e note musicali.',
    },

    difficulty: 'Difficoltà',
    difficulties: {
      easy: 'Rilassata',
      medium: 'Normale',
      hard: 'Sfida',
    },

    settings: 'Impostazioni',
    soundEffects: 'Effetti Sonori',
    voiceEncouragement: 'Voz di Incoraggiamento',
    vibration: 'Vibrazione Tattile',
    colorBlindMode: 'Modalità Accessibile (Simboli)',

    score: 'Punteggio',
    highScore: 'Record Personale',
    level: 'Livello',
    streak: 'Serie Attuale',
    bestStreak: 'Miglior Serie',
    reactionTime: 'Velocità Media',
    memoryScore: 'Agilità Cerebrale',
    totalGamesPlayed: 'Partite Giocate',
    resetStats: 'Azzera Statistiche',

    encouragements: [
      'Stai andando alla grande! La tua concentrazione sta aumentando.',
      'Ottimo lavoro! Ogni ripetizione crea nuove connessioni neuronali.',
      'La tua memoria di lavoro è più reattiva che mai!',
      'Precisione fantastica! Mantieni la calma e il focus.',
      'Il tuo cervello si rafforza a ogni turno!',
      'Magnifico! La tua chiarezza mentale si nota a ogni tocco.',
      'Continua così! Stai allenando le tue funzioni esecutive.',
      'Memoria impressionante! Supera i tuoi limiti!',
    ],

    levelUpMessage: '🎉 Livello Raggiunto! Il tuo cervello si sta adattando.',
    newHighScoreMessage: '🏆 Nuovo Record Personale! Complimenti per la tua agilità!',
    keepGoingMessage: '💪 La perseveranza è la chiave della neuroplasticità.',

    memoryInfoTitle: '🧠 Perché la Memoria di Lavoro è Così Importante?',
    memoryInfoSubtitle: 'La scienza dietro l’allenamento di memoria Simon',
    whatIsWorkingMemory: 'Cos’è la Memoria di Lavoro?',
    whatIsWorkingMemoryDesc: 'La memoria di lavoro è il sistema cognitivo responsabile del mantenimento e della manipolazione temporanea delle informazioni necessarie per compiti complessi come il ragionamento e le decisioni.',
    benefitsTitle: 'Benefici Scientifici',
    benefits: [
      {
        title: 'Maggiore Capacità di Focus',
        desc: 'Aiuta a filtrare le distrazioni e a mantenere l’attenzione sostenuta.',
      },
      {
        title: 'Stimola la Neuroplasticità',
        desc: 'Rafforza la velocità di elaborazione neuronale e le reti cerebrali.',
      },
      {
        title: 'Miglioramenti nella Vita Quotidiana',
        desc: 'Rende più facile ricordare liste, istruzioni complesse, nomi e numeri.',
      },
      {
        title: 'Agilità Visiva e Uditiva',
        desc: 'Coinvolge sia la corteccia visiva che uditiva per un allenamento completo.',
      },
    ],
    neuroplasticityTitle: 'Neuroplasticità in Azione',
    neuroplasticityDesc: 'Proprio come l’allenamento in palestra, giocare 5-10 minuti al giorno stimola nuove sinapsi nella corteccia prefrontale.',
    tipsTitle: 'Consigli per il Massimo Rendimento',
    tips: [
      'Fai un bel respiro e mantieni una postura rilassata.',
      'Raggruppa la sequenza in schemi o blocchi ritmici.',
      'Associa il colore alla nota musicale per fissarla in memoria.',
      'Gioca 10 minuti al giorno per notare reali progressi di concentrazione.',
    ],

    instructionsTitle: 'Come si gioca?',
    instructionsSteps: [
      'Osserva e ascolta la sequenza di colori mostrata dall’app.',
      'Quando appare "Il tuo turno!", ripeti la sequenza toccando i pulsanti.',
      'A ogni livello superato, la sequenza si allunga di un elemento.',
      'Attiva la voce e la vibrazione per un’esperienza coinvolgente su qualsiasi dispositivo.',
    ],
  },

  ru: {
    title: 'Саймон Память NeuroFit',
    subtitle: 'Когнитивный Тренажер Рабочей Памяти',
    tagline: 'Развивайте мозг с помощью цветов, гармоничных звуков и последовательных задач.',

    deviceDetected: 'Устройство Определено',
    deviceTypes: {
      desktop: 'ПК / Компьютер',
      tablet: 'Планшет',
      mobile: 'Мобильный / Телефон',
    },
    touchSupported: 'Сенсорное Управление Активно',
    noTouchSupported: 'Клавиатура / Мышь Активна',

    statusReady: 'Готовы к тренировке! Нажмите Старт.',
    statusWatching: '👀 Внимательно смотрите и слушайте последовательность...',
    statusYourTurn: '🎮 Ваш черед! Повторите точную последовательность.',
    statusSuccess: '🌟 Отлично! Последовательность завершена.',
    statusMistake: '💡 Хорошая попытка! Практика укрепляет память.',
    statusPaused: '⏸️ Игра на паузе.',

    startGame: 'Начать Игру',
    restartGame: 'Попробовать Снова',
    pauseGame: 'Пауза',
    resumeGame: 'Продолжить',
    nextLevel: 'Следующий Уровень',

    gameMode: 'Режим Игры',
    modes: {
      classic: 'Классика',
      classicDesc: 'Традиционная последовательность из 4 цветов и звуков.',
      speed: 'Скоростной Блиц',
      speedDesc: 'Скорость растет с каждым уровнем для проверки вашей реакции.',
      reverse: 'Обратный Порядок',
      reverseDesc: 'Экстремальный Вызов! Повторите последовательность в обратном порядке.',
      blind: 'Слуховой / Вслепую',
      blindDesc: 'Только звуки. Тренировка чистой слуховой памяти.',
      hex6: 'Шестиугольник (6 Цветов)',
      hex6Desc: 'Продвинутый режим с 6 цветами и музыкальными нотами.',
    },

    difficulty: 'Сложность',
    difficulties: {
      easy: 'Легкая',
      medium: 'Обычная',
      hard: 'Вызов',
    },

    settings: 'Настройки',
    soundEffects: 'Звуковые Эффекты',
    voiceEncouragement: 'Голосовая Поддержка',
    vibration: 'Тактильная Вибрация',
    colorBlindMode: 'Режим Доступности (Символы)',

    score: 'Счет',
    highScore: 'Личный Рекорд',
    level: 'Уровень',
    streak: 'Текущая Серия',
    bestStreak: 'Лучшая Серия',
    reactionTime: 'Ср. Скорость',
    memoryScore: 'Гибкость Мозга',
    totalGamesPlayed: 'Сыграно Игр',
    resetStats: 'Сбросить Статистику',

    encouragements: [
      'Превосходно! Ваша концентрация растет.',
      'Отличная работа! Каждое повторение создает новые нейронные связи.',
      'Ваша рабочая память стала точнее, чем когда-либо!',
      'Фантастическая точность! Сохраняйте спокойствие и фокус.',
      'Ваш мозг становится сильнее с каждым раундом!',
      'Великолепно! Ваша ясность ума видна в каждом нажатии.',
      'Так держать! Вы тренируете свои исполнительные функции.',
      'Впечатляющая память! Раздвигайте свои границы!',
    ],

    levelUpMessage: '🎉 Уровень Достигнут! Ваш мозг адаптируется.',
    newHighScoreMessage: '🏆 Новый Личный Рекорд! Поздравляем с умственной гибкостью!',
    keepGoingMessage: '💪 Настойчивость — ключ к нейропластичности.',

    memoryInfoTitle: '🧠 Почему так важна Рабочая Память?',
    memoryInfoSubtitle: 'Наука за тренировкой памяти Саймона',
    whatIsWorkingMemory: 'Что такое Рабочая Память?',
    whatIsWorkingMemoryDesc: 'Рабочая память — это когнитивная система, ответственная за временное удержание и обработку информации, необходимой для решения сложных задач, рассуждений и принятия решений.',
    benefitsTitle: 'Научные Преимущества',
    benefits: [
      {
        title: 'Усиление Концентрации',
        desc: 'Помогает отсеивать отвлекающие факторы и удерживать внимание.',
      },
      {
        title: 'Стимуляция Нейропластичности',
        desc: 'Укрепляет скорость нейронной обработки и лобные доли мозга.',
      },
      {
        title: 'Улучшения в Повседневной Жизни',
        desc: 'Облегчает запоминание списков, инструкций, имен и номеров.',
      },
      {
        title: 'Зрительная и Слуховая Гибкость',
        desc: 'Задействует зрительную и слуховую кору для комплексного развития.',
      },
    ],
    neuroplasticityTitle: 'Нейропластичность в Действии',
    neuroplasticityDesc: 'Как тренировка мышц в спортзале, 5–10 минут ежедневной игры стимулируют новые синапсы в префронтальной коре.',
    tipsTitle: 'Советы для Максимального Результата',
    tips: [
      'Сделайте глубокий вдох и расслабьтесь.',
      'Разбивайте последовательность на ритмические блоки.',
      'Связывайте цвет с высотой тона для крепкого запоминания.',
      'Играйте по 10 минут в день для реального роста концентрации.',
    ],

    instructionsTitle: 'Как играть?',
    instructionsSteps: [
      'Внимательно смотрите и слушайте последовательность цветов.',
      'Когда появится «Ваш черед!», повторите последовательность нажатиями.',
      'С каждым проиденным уровнем последовательность удлиняется.',
      'Включите голос и вибрацию для погружения на любом устройстве.',
    ],
  },

  zh: {
    title: 'Simon 脑力记忆训练',
    subtitle: '工作记忆的大脑健身房',
    tagline: '通过色彩、调和音符与序列挑战全面激活大脑活力。',

    deviceDetected: '已识别设备',
    deviceTypes: {
      desktop: 'PC / 电脑',
      tablet: '平板电脑',
      mobile: '手机 / 移动端',
    },
    touchSupported: '触控交互已激活',
    noTouchSupported: '键盘/鼠标模式已激活',

    statusReady: '准备就绪！点击开始训练。',
    statusWatching: '👀 仔细观察并倾听序列顺序...',
    statusYourTurn: '🎮 轮到你了！重复完全相同的序列。',
    statusSuccess: '🌟 太棒了！完美完成该序列。',
    statusMistake: '💡 很好的尝试！持续练习能重塑记忆。',
    statusPaused: '⏸️ 游戏已暂停。',

    startGame: '开始游戏',
    restartGame: '再次尝试',
    pauseGame: '暂停',
    resumeGame: '继续游戏',
    nextLevel: '下一关卡',

    gameMode: '游戏模式',
    modes: {
      classic: '经典模式',
      classicDesc: '标准的 4 色彩与音效序列。',
      speed: '急速闪电',
      speedDesc: '节奏随关卡加快，考验你的极限反应。',
      reverse: '逆序挑战',
      reverseDesc: '终极大脑挑战！按完全相反的顺序倒序重复。',
      blind: '纯音盲盒',
      blindDesc: '仅听声音音高，训练纯粹的听觉工作记忆。',
      hex6: '六边形 (6色模式)',
      hex6Desc: '高级进阶模式，包含 6 种色彩与音符。',
    },

    difficulty: '难度选择',
    difficulties: {
      easy: '轻松',
      medium: '标准',
      hard: '挑战',
    },

    settings: '偏好设置',
    soundEffects: '声音音效',
    voiceEncouragement: '语音鼓励陪伴',
    vibration: '触觉震动反馈',
    colorBlindMode: '无障碍模式 (图案标识)',

    score: '当前得分',
    highScore: '最高纪录',
    level: '关卡',
    streak: '连胜纪录',
    bestStreak: '最佳连胜',
    reactionTime: '平均反应速度',
    memoryScore: '大脑敏捷度得分',
    totalGamesPlayed: '已玩局数',
    resetStats: '重置统计数据',

    encouragements: [
      '太棒了！你的注意力正在快速集中！',
      '干得漂亮！每一次重复都在建立全新的神经元连接。',
      '你的工作记忆比以往任何时候都更加敏锐！',
      '出色的准确度！保持冷静，全神贯注。',
      '你的大脑在每一轮挑战中都变得更加强大！',
      '太神奇了！每一次点击都展现出清晰的思维。',
      '继续保持！你正在锻炼高级执行控制功能。',
      '令人惊叹的记忆力！不断突破你的认知极限！',
    ],

    levelUpMessage: '🎉 关卡突破！你的大脑正在快速适应进化。',
    newHighScoreMessage: '🏆 创下新纪录！祝贺你的敏捷脑力！',
    keepGoingMessage: '💪 坚持是神经可塑性的核心钥匙。',

    memoryInfoTitle: '🧠 为什么工作记忆 (Working Memory) 如此重要？',
    memoryInfoSubtitle: 'Simon 记忆训练背后的认知神经科学原理',
    whatIsWorkingMemory: '什么是工作记忆？',
    whatIsWorkingMemoryDesc: '工作记忆是大脑中用于临时储存和加工信息的认知系统，它是逻辑推理、问题解决、语言理解和日常决策的基础核心。',
    benefitsTitle: '科学训练的四大益处',
    benefits: [
      {
        title: '提升专注控制力',
        desc: '帮助过滤日常杂念与干扰，长久保持深度专注。',
      },
      {
        title: '激活大脑神经可塑性',
        desc: '增强前额叶皮层的信息处理速度与神经突触连接。',
      },
      {
        title: '优化日常生活表现',
        desc: '更容易记住任务清单、复杂指令、人名与数字。',
      },
      {
        title: '视听双重联动',
        desc: '同时刺激视觉皮层与听觉皮层，实现全脑综合协同。',
      },
    ],
    neuroplasticityTitle: '神经可塑性在行动',
    neuroplasticityDesc: '就像在健身房锻炼肌肉一样，每天训练 5-10 分钟能够刺激前额叶皮层产生新突触，有效延缓认知衰退。',
    tipsTitle: '获得最佳成绩的认知技巧',
    tips: [
      '保持深呼吸与轻松坐姿。',
      '将序列拆解为有节奏的小组块 (Chunking)。',
      '将色彩与特定的音高相绑定，建立多模态记忆。',
      '每天练习 10 分钟，持之以恒见证专注力飞跃。',
    ],

    instructionsTitle: '游戏玩法指南',
    instructionsSteps: [
      '仔细观察并聆听应用演示的色彩音效序列。',
      '当显示“轮到你了！”时，通过点击按键重复完全相同的序列。',
      '每通过一关，序列将增加一个新元素。',
      '开启语音鼓励与震动，在手机或电脑上获得沉浸体验。',
    ],
  },

  ja: {
    title: 'サイモン ワーキングメモリ NeuroFit',
    subtitle: 'ワーキングメモリを高める脳トレ・ジム',
    tagline: '色彩、調和する音階、シーケンス挑戦で脳を活性化させましょう。',

    deviceDetected: '検出されたデバイス',
    deviceTypes: {
      desktop: 'PC / デスクトップ',
      tablet: 'タブレット',
      mobile: 'スマートフォン',
    },
    touchSupported: 'タッチ操作アクティブ',
    noTouchSupported: 'キーボード / マウスアクティブ',

    statusReady: 'トレーニング準備完了！スタートを押してください。',
    statusWatching: '👀 シーケンスをよく見て、聴いてください...',
    statusYourTurn: '🎮 あなたの番です！正確に再現してください。',
    statusSuccess: '🌟 素晴らしい！シーケンス完了。',
    statusMistake: '💡 惜しい！練習が記憶を強くします。',
    statusPaused: '⏸️ 一時停止中。',

    startGame: 'ゲームスタート',
    restartGame: 'もう一度挑戦',
    pauseGame: '一時停止',
    resumeGame: '再開',
    nextLevel: '次のレベル',

    gameMode: 'ゲームモード',
    modes: {
      classic: 'クラシック',
      classicDesc: '伝統的な4色とサウンドのシーケンス。',
      speed: 'スピード・ブリッツ',
      speedDesc: 'レベルごとにテンポが上がり、反射神経をテストします。',
      reverse: 'リバース（逆順）',
      reverseDesc: '究極の挑戦！順番を逆から再現します。',
      blind: '聴覚のみ（ブラインド）',
      blindDesc: ' sound Only. 音の高さだけで記憶力を鍛えます。',
      hex6: 'ヘキサゴン（6色）',
      hex6Desc: '6つの色と音符による上級者モード。',
    },

    difficulty: '難易度',
    difficulties: {
      easy: 'リラックス',
      medium: '標準',
      hard: 'チャレンジ',
    },

    settings: '設定',
    soundEffects: '効果音',
    voiceEncouragement: '音声励まし',
    vibration: 'バイブレーション',
    colorBlindMode: 'アクセシブルモード（記号表示）',

    score: 'スコア',
    highScore: 'ハイスコア',
    level: 'レベル',
    streak: '現在の連続成功',
    bestStreak: '最高連続成功',
    reactionTime: '平均反応速度',
    memoryScore: '脳の敏捷性スコア',
    totalGamesPlayed: 'プレイ回数',
    resetStats: '統計をリセット',

    encouragements: [
      '素晴らしいです！集中力が高まっています。',
      '素晴らしい挑戦！繰り返すことで新しい神経回路が作られます。',
      'あなたのワーキングメモリはこれまで以上に鋭くなっています！',
      '驚異的な正確さです！落ち着いて集中を保ちましょう。',
      'ラウンドごとに脳が鍛えられています！',
      '見事です！明確な思考がタップに表れています。',
      'その調子です！実行機能をしっかりと鍛えています。',
      '素晴らしい記憶力です！限界を超えていきましょう！',
    ],

    levelUpMessage: '🎉 レベル達成！脳が適応して進化しています。',
    newHighScoreMessage: '🏆 新記録達成！素晴らしい頭脳の柔軟性です！',
    keepGoingMessage: '💪 継続は神経可塑性の鍵です。',

    memoryInfoTitle: '🧠 なぜワーキングメモリ（作業記憶）が重要なのか？',
    memoryInfoSubtitle: 'サイモン記憶トレーニングの科学的背景',
    whatIsWorkingMemory: 'ワーキングメモリとは？',
    whatIsWorkingMemoryDesc: 'ワーキングメモリ（作業記憶）とは、会話、計算、推論、意思決定などの複雑なタスクを行う際に、情報を一時的に保持・操作する脳のシステムです。',
    benefitsTitle: '科学的メリット',
    benefits: [
      {
        title: '集中力の向上',
        desc: '気を散らす要因を排除し、目の前の作業への注意を持続させます。',
      },
      {
        title: '神経可塑性の活性化',
        desc: '前頭叶の処理スピードと神経ネットワークのつながりを強化します。',
      },
      {
        title: '日常生活の改善',
        desc: 'リスト、名前、番号、複雑な指示を覚えるのがスムーズになります。',
      },
      {
        title: '視覚と聴覚の統合処理',
        desc: '視覚野と聴覚野の両方を刺激し、全脳的なアプローチを実現します。',
      },
    ],
    neuroplasticityTitle: '神経可塑性の作用',
    neuroplasticityDesc: 'ジムで筋肉を鍛えるように、毎日5〜10分プレイすることで前頭前野に新たなシナプスが形成され、認知機能の低下を防ぎます。',
    tipsTitle: 'パフォーマンスを高めるヒント',
    tips: [
      '深呼吸をしてリラックスした姿勢を保ちましょう。',
      'シーケンスをリズムやグループ（チャンク）に分けましょう。',
      '色と音の高さを結びつけて記憶を強化しましょう。',
      '毎日10分間の練習で、集中力の実感できる向上を得られます。',
    ],

    instructionsTitle: '遊び方ガイド',
    instructionsSteps: [
      'アプリが光らせる色のシーケンスと音をよく見て聴きます。',
      '「あなたの番です！」と表示されたら、同じ順番でパッドをタップします。',
      'レベルをクリアするごとに、シーケンスが1つずつ長くなります。',
      '音声とバイブレーションを有効にして、あらゆる端末で没入体験を楽しみましょう。',
    ],
  },
};
