// quiz.js

// --- 1. DOM Element References ---
const loadingOverlay = document.getElementById('loading-overlay');
const quizApp = document.getElementById('quiz-app');
const favicon = document.getElementById('favicon');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const quizMainTitle = document.getElementById('quiz-main-title');
const currentModeDisplay = document.getElementById('current-mode-display');
const settingsBtn = document.getElementById('settings-btn'); // New: Settings button

// Screens
const modeSelectionScreen = document.getElementById('mode-selection-screen');
const quizPlayScreen = document.getElementById('quiz-play-screen');
const quizResultScreen = document.getElementById('quiz-result-screen');
const answerReviewScreen = document.getElementById('answer-review-screen');

// Mode Selection Elements
const modeCardsContainer = document.querySelector('.mode-cards-container');

// Quiz Play Elements
const questionCounter = document.getElementById('question-counter');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const timerDisplay = document.getElementById('timer-display');
const questionText = document.getElementById('question-text');
const answerOptionsDiv = document.getElementById('answer-options');
const quizFeedbackDiv = document.getElementById('quiz-feedback');
const nextQuestionBtn = document.getElementById('next-question-btn');
const submitAnswerBtn = document.getElementById('submit-answer-btn');

// Lifeline Buttons
const hintBtn = document.getElementById('hint-btn');
const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
const skipBtn = document.getElementById('skip-btn');
const askAiBtn = document.getElementById('ask-ai-btn');
const hintCountSpan = document.getElementById('hint-count');
const fiftyFiftyCountSpan = document.getElementById('fifty-fifty-count');
const skipCountSpan = document.getElementById('skip-count');
const askAiCooldownSpan = document.getElementById('ask-ai-cooldown');

// Result Screen Elements
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const totalQuestionsResult = document.getElementById('total-questions-result');
const correctAnswersResult = document.getElementById('correct-answers-result');
const incorrectAnswersResult = document.getElementById('incorrect-answers-result');
const finalScoreResult = document.getElementById('final-score-result');
const totalTimeResult = document.getElementById('total-time-result');
const correctStreakResult = document.getElementById('correct-streak-result');
const reviewAnswersBtn = document.getElementById('review-answers-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const backToModesBtn = document.getElementById('back-to-modes-btn');

// Gamification Elements
const currentXpSpan = document.getElementById('current-xp');
const nextLevelXpSpan = document.getElementById('next-level-xp');
const xpBarFill = document.getElementById('xp-bar-fill');
const currentLevelSpan = document.getElementById('current-level');
const achievementBadgesContainer = document.getElementById('achievement-badges');
const globalStreakSpan = document.getElementById('global-streak');
const leaderboardList = document.getElementById('leaderboard-list');
const myLeaderboardScoreSpan = document.getElementById('my-leaderboard-score');

// Answer Review Screen Elements
const reviewQuestionsContainer = document.getElementById('review-questions-container');
const backFromReviewBtn = document.getElementById('back-from-review-btn');

// Modals
const hintModal = document.getElementById('hint-modal');
const hintText = document.getElementById('hint-text');
const closeHintModalBtn = document.getElementById('close-hint-modal-btn');
const askAiModal = document.getElementById('ask-ai-modal');
const aiResponseText = document.getElementById('ai-response-text');
const aiLoadingSpinner = document.querySelector('#ask-ai-modal .ai-loading-spinner');
const closeAskAiModalBtn = document.getElementById('close-ask-ai-modal-btn');
const customAlertModal = document.getElementById('custom-alert-modal');
const customAlertTitle = document.getElementById('custom-alert-title');
const customAlertMessage = document.getElementById('custom-alert-message');
const customAlertOkBtn = document.getElementById('custom-alert-ok-btn');
const customAlertCancelBtn = document.getElementById('custom-alert-cancel-btn');

// New: Settings Modal Elements
const settingsModal = document.getElementById('settings-modal');
const closeSettingsModalBtn = settingsModal.querySelector('.modal-close-btn'); // Get close button within settings modal
const fontSizeSelect = document.getElementById('font-size-select');
const themeSelect = document.getElementById('theme-select');
const soundEffectsToggle = document.getElementById('sound-effects-toggle');
const resetProgressBtn = document.getElementById('reset-progress-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');

// --- 2. Global State Variables ---
let quizQuestions = []; // All questions from all difficulties - will be populated from quizQuestionsData
let currentQuizQuestions = []; // Questions for the current quiz session
let currentQuestionIndex = 0;
let score = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let selectedMode = '';
let selectedAnswerIndex = null;
let quizHistory = []; // Stores { question, userAnswer, correctAnswer, isCorrect, explanation }
let timerInterval;
let timeLeft;
let totalQuizTime = 0; // For Speedrun mode
let quizStartTime; // For Speedrun mode

// Gamification State (persisted in Local Storage)
let userStats = {
    xp: 0,
    level: 1,
    globalStreak: 0,
    badges: [], // Array of badge IDs unlocked
    leaderboard: [] // { name: 'Player', score: 0 }
};

// New: User Settings State (persisted in Local Storage)
let userSettings = {
    fontSize: 'medium', // 'small', 'medium', 'large'
    theme: 'dark', // 'dark', 'light' (light theme not implemented yet)
    soundEffects: true // true/false
};

// Lifeline State (reset per quiz)
let lifelines = {
    hint: 3,
    fiftyFifty: 1,
    skip: 1,
    askAiCooldown: 0 // Cooldown in seconds
};

const XP_PER_QUESTION = 10;
const XP_PER_CORRECT_ANSWER = 20;
const XP_PER_STREAK_BONUS = 5; // Bonus XP per streak
const XP_TO_NEXT_LEVEL_BASE = 100; // Base XP for level 2
const XP_LEVEL_MULTIPLIER = 1.5; // Multiplier for subsequent levels

const AI_COOLDOWN_SECONDS = 30; // Cooldown for Ask AI lifeline

// --- 3. Utility Functions ---

/**
 * Checks if localStorage is available.
 * @returns {boolean} True if localStorage is available, false otherwise.
 */
function hasLocalStorage() {
    try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        console.warn("Penyimpanan lokal tidak tersedia atau penuh. Fitur persistensi data mungkin tidak berfungsi.");
        return false;
    }
}

/**
 * Retrieves an item from localStorage.
 * @param {string} key The key of the item to retrieve.
 * @returns {string|null} The item's value or null if not found/error.
 */
function getLocalStorageItem(key) {
    if (!hasLocalStorage()) return null;
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error(`Error getting item '${key}' from localStorage:`, e);
        return null;
    }
}

/**
 * Stores an item in localStorage.
 * @param {string} key The key of the item to store.
 * @param {string} value The value to store.
 */
function setLocalStorageItem(key, value) {
    if (!hasLocalStorage()) return;
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(`Error setting item '${key}' to localStorage:`, e);
        showCustomAlert('Gagal menyimpan data. Penyimpanan lokal mungkin penuh.', 'Peringatan');
    }
}

/**
 * Shows a specific quiz screen and hides others.
 * @param {HTMLElement} screenToShow The screen element to display.
 */
function showScreen(screenToShow) {
    const allScreens = [modeSelectionScreen, quizPlayScreen, quizResultScreen, answerReviewScreen];
    allScreens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.add('active');
            // Scroll to top of the screen when active
            screen.scrollTop = 0;
        } else {
            screen.classList.remove('active');
        }
    });
    // Scroll window to top to ensure clean transition
    window.scrollTo(0, 0);
}

/**
 * Displays a custom alert modal.
 * @param {string} message The message to display.
 * @param {string} title The title of the alert.
 * @param {boolean} isConfirm If true, shows a cancel button and returns a Promise.
 * @returns {Promise<boolean>|void} Resolves true for OK, false for Cancel if isConfirm is true.
 */
function showCustomAlert(message, title = 'Notifikasi', isConfirm = false) {
    customAlertTitle.textContent = title;
    customAlertMessage.textContent = message;
    customAlertCancelBtn.style.display = isConfirm ? 'inline-block' : 'none';

    customAlertModal.classList.add('show');
    document.body.classList.add('modal-open'); // Prevent body scroll

    if (isConfirm) {
        return new Promise((resolve) => {
            const okHandler = () => {
                customAlertModal.classList.remove('show');
                document.body.classList.remove('modal-open');
                customAlertOkBtn.removeEventListener('click', okHandler);
                customAlertCancelBtn.removeEventListener('click', cancelHandler);
                resolve(true);
            };
            const cancelHandler = () => {
                customAlertModal.classList.remove('show');
                document.body.classList.remove('modal-open');
                customAlertOkBtn.removeEventListener('click', okHandler);
                customAlertCancelBtn.removeEventListener('click', cancelHandler);
                resolve(false);
            };
            customAlertOkBtn.addEventListener('click', okHandler);
            customAlertCancelBtn.addEventListener('click', cancelHandler);
        });
    } else {
        const okHandler = () => {
            customAlertModal.classList.remove('show');
            document.body.classList.remove('modal-open');
            customAlertOkBtn.removeEventListener('click', okHandler);
        };
        customAlertOkBtn.addEventListener('click', okHandler);
    }
}

/**
 * Shuffles an array in place (Fisher-Yates algorithm).
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Updates the quiz progress bar.
 */
function updateProgressBar() {
    const progress = (currentQuestionIndex / currentQuizQuestions.length) * 100;
    quizProgressBar.style.width = `${progress}%`;
}

/**
 * Updates the display and enabled/disabled state of lifeline buttons.
 */
function updateLifelineButtons() {
    hintBtn.disabled = lifelines.hint <= 0 || selectedMode === 'expert'; // Expert mode doesn't allow hints
    fiftyFiftyBtn.disabled = lifelines.fiftyFifty <= 0;
    skipBtn.disabled = lifelines.skip <= 0;
    askAiBtn.disabled = lifelines.askAiCooldown > 0;

    hintCountSpan.textContent = lifelines.hint;
    fiftyFiftyCountSpan.textContent = lifelines.fiftyFifty;
    skipCountSpan.textContent = lifelines.skip;

    if (lifelines.askAiCooldown > 0) {
        askAiCooldownSpan.textContent = `${lifelines.askAiCooldown}s`;
        askAiBtn.classList.add('cooldown');
    } else {
        askAiCooldownSpan.textContent = 'Siap';
        askAiBtn.classList.remove('cooldown');
    }
}

/**
 * Calculates XP needed for the next level.
 * @param {number} level The current level.
 * @returns {number} XP required for the next level.
 */
function getXpForNextLevel(level) {
    return Math.round(XP_TO_NEXT_LEVEL_BASE * Math.pow(XP_LEVEL_MULTIPLIER, level - 1));
}

/**
 * Updates the XP bar and level display.
 */
function renderXpBar() {
    const xpNeededForNextLevel = getXpForNextLevel(userStats.level);
    currentXpSpan.textContent = userStats.xp;
    nextLevelXpSpan.textContent = xpNeededForNextLevel;

    const progressPercentage = (userStats.xp / xpNeededForNextLevel) * 100;
    xpBarFill.style.width = `${Math.min(100, progressPercentage)}%`;

    currentLevelSpan.textContent = userStats.level;
}

/**
 * Updates the leaderboard display.
 */
function renderLeaderboard() {
    // Sort leaderboard by score descending
    userStats.leaderboard.sort((a, b) => b.score - a.score);

    leaderboardList.innerHTML = '';
    // Add player's own score first if it exists
    const myScoreEntry = userStats.leaderboard.find(entry => entry.name === 'Anda');
    if (myScoreEntry) {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-medal gold"></i> Anda: <span>${myScoreEntry.score}</span>`;
        leaderboardList.appendChild(li);
    }

    // Add top N other players (excluding 'Anda' if already added)
    let count = 0;
    userStats.leaderboard.forEach(entry => {
        if (entry.name !== 'Anda' && count < 3) { // Show top 3 other players
            const li = document.createElement('li');
            let iconClass = '';
            if (count === 0) iconClass = 'silver'; // 2nd place overall
            else if (count === 1) iconClass = 'bronze'; // 3rd place overall
            else iconClass = 'fas fa-medal'; // Generic medal for others
            li.innerHTML = `<i class="fas fa-medal ${iconClass}"></i> ${entry.name}: <span>${entry.score}</span>`;
            leaderboardList.appendChild(li);
            count++;
        }
    });

    if (userStats.leaderboard.length === 0) {
        leaderboardList.innerHTML = '<li>Belum ada skor di leaderboard.</li>';
    }
}


/**
 * Saves user stats to local storage.
 */
function saveUserStats() {
    setLocalStorageItem('quizUserStats', JSON.stringify(userStats));
}

/**
 * Loads user stats from local storage.
 */
function loadUserStats() {
    const savedStats = getLocalStorageItem('quizUserStats');
    if (savedStats) {
        userStats = JSON.parse(savedStats);
        // Ensure default values if new properties are added later
        userStats.xp = userStats.xp || 0;
        userStats.level = userStats.level || 1;
        userStats.globalStreak = userStats.globalStreak || 0;
        userStats.badges = userStats.badges || [];
        userStats.leaderboard = userStats.leaderboard || [];

        // Ensure 'Anda' player exists in leaderboard
        if (!userStats.leaderboard.some(entry => entry.name === 'Anda')) {
            userStats.leaderboard.push({ name: 'Anda', score: 0 });
        }
    } else {
        // Initialize 'Anda' player if no stats exist
        userStats.leaderboard.push({ name: 'Anda', score: 0 });
    }
}

/**
 * Updates the user's XP and handles level progression.
 * @param {number} points The amount of XP to add.
 */
function updateXP(points) {
    userStats.xp += points;
    let xpNeeded = getXpForNextLevel(userStats.level);
    while (userStats.xp >= xpNeeded) {
        userStats.xp -= xpNeeded;
        userStats.level++;
        showCustomAlert(`Selamat! Anda naik ke Level ${userStats.level}!`, 'Level Up!');
        unlockBadge(`level-${userStats.level}`); // Unlock level-up badge
        xpNeeded = getXpForNextLevel(userStats.level); // Recalculate for next level
    }
    saveUserStats();
    renderXpBar();
}

/**
 * Updates the correct answer streak.
 * @param {boolean} isCorrect True if the answer was correct, false otherwise.
 */
function updateStreak(isCorrect) {
    if (isCorrect) {
        userStats.globalStreak++;
        updateXP(XP_PER_STREAK_BONUS); // Bonus XP for streak
        if (userStats.globalStreak === 5) unlockBadge('streak-5');
        if (userStats.globalStreak === 10) unlockBadge('streak-10');
        if (userStats.globalStreak === 20) unlockBadge('streak-20');
    } else {
        userStats.globalStreak = 0;
    }
    globalStreakSpan.textContent = userStats.globalStreak;
    saveUserStats();
}

const allBadges = [
    { id: 'first-quiz', name: 'Kuis Pertama', icon: 'fas fa-award', description: 'Selesaikan kuis pertama Anda.' },
    { id: 'beginner-master', name: 'Master Pemula', icon: 'fas fa-graduation-cap', description: 'Selesaikan Beginner Mode dengan 100% benar.' },
    { id: 'intermediate-pro', name: 'Pro Menengah', icon: 'fas fa-medal', description: 'Selesaikan Intermediate Mode dengan 100% benar.' },
    { id: 'expert-legend', name: 'Legenda Ahli', icon: 'fas fa-crown', description: 'Selesaikan Expert Mode.' },
    { id: 'speed-demon', name: 'Setan Kecepatan', icon: 'fas fa-tachometer-alt', description: 'Selesaikan Speedrun Mode dengan skor tinggi.' },
    { id: 'streak-5', name: 'Streak 5', icon: 'fas fa-fire', description: 'Capai 5 jawaban benar berturut-turut.' },
    { id: 'streak-10', name: 'Streak 10', icon: 'fas fa-bolt', description: 'Capai 10 jawaban benar berturut-turut.' },
    { id: 'streak-20', name: 'Streak 20', icon: 'fas fa-rocket', description: 'Capai 20 jawaban benar berturut-turut.' },
    { id: 'lifeline-saver', name: 'Penyelamat', icon: 'fas fa-heart', description: 'Gunakan semua lifeline dalam satu kuis.' },
    { id: 'no-lifeline', name: 'Tanpa Bantuan', icon: 'fas fa-fist-raised', description: 'Selesaikan kuis tanpa menggunakan lifeline.' },
    // Level-up badges (will be unlocked dynamically)
    { id: 'level-2', name: 'Level 2', icon: 'fas fa-star-half-alt', description: 'Capai Level 2.' },
    { id: 'level-3', name: 'Level 3', icon: 'fas fa-star', description: 'Capai Level 3.' },
    { id: 'level-5', name: 'Level 5', icon: 'fas fa-star-of-life', description: 'Capai Level 5.' },
    { id: 'level-10', name: 'Level 10', icon: 'fas fa-galaxy', description: 'Capai Level 10.' },
];

/**
 * Unlocks a badge and updates the UI.
 * @param {string} badgeId The ID of the badge to unlock.
 */
function unlockBadge(badgeId) {
    if (!userStats.badges.includes(badgeId)) {
        userStats.badges.push(badgeId);
        showCustomAlert(`Achievement Terbuka: ${allBadges.find(b => b.id === badgeId)?.name || badgeId}!`, 'Achievement!');
        saveUserStats();
        renderAchievementBadges();
    }
}

/**
 * Renders the achievement badges.
 */
function renderAchievementBadges() {
    achievementBadgesContainer.innerHTML = '';
    allBadges.forEach(badge => {
        const badgeItem = document.createElement('div');
        badgeItem.classList.add('badge-item');
        if (userStats.badges.includes(badge.id)) {
            badgeItem.classList.add('unlocked');
            badgeItem.innerHTML = `<i class="${badge.icon}"></i><span class="badge-name">${badge.name}</span>`;
            badgeItem.title = badge.description; // Tooltip for unlocked badges
        } else {
            badgeItem.innerHTML = `<i class="${badge.icon}"></i><span class="badge-name">Terkunci</span>`;
            badgeItem.title = 'Terkunci: ' + badge.description; // Tooltip for locked badges
            badgeItem.style.opacity = 0.5; // Make locked badges appear faded
        }
        achievementBadgesContainer.appendChild(badgeItem);
    });
}

/**
 * Updates the player's score on the leaderboard.
 * @param {number} finalScore The score to add/update.
 */
function updateLeaderboard(finalScore) {
    let playerEntry = userStats.leaderboard.find(entry => entry.name === 'Anda');
    if (playerEntry) {
        // For simplicity, we'll just update if the new score is higher
        if (finalScore > playerEntry.score) {
            playerEntry.score = finalScore;
            showCustomAlert(`Skor tertinggi baru Anda: ${finalScore}!`, 'Skor Baru!');
        }
    } else {
        // Should not happen if init correctly, but as fallback
        userStats.leaderboard.push({ name: 'Anda', score: finalScore });
    }
    // Add some dummy leaderboard entries for visual effect if not enough
    if (userStats.leaderboard.length < 4) {
        const dummyNames = ['Pemain 1', 'Pemain 2', 'Pemain 3', 'Pemain 4', 'Pemain 5'];
        dummyNames.forEach(name => {
            if (!userStats.leaderboard.some(entry => entry.name === name)) {
                userStats.leaderboard.push({ name: name, score: Math.floor(Math.random() * 1000) + 500 });
            }
        });
    }
    saveUserStats();
    renderLeaderboard();
}

// --- New: Settings Functions ---

/**
 * Saves user settings to local storage.
 */
function saveUserSettings() {
    setLocalStorageItem('quizUserSettings', JSON.stringify(userSettings));
    showCustomAlert('Pengaturan telah disimpan!', 'Berhasil');
}

/**
 * Loads user settings from local storage.
 */
function loadUserSettings() {
    const savedSettings = getLocalStorageItem('quizUserSettings');
    if (savedSettings) {
        userSettings = { ...userSettings, ...JSON.parse(savedSettings) }; // Merge saved settings
    }
    applySettings(); // Apply loaded settings
}

/**
 * Applies the current user settings to the UI.
 */
function applySettings() {
    // Apply Font Size
    document.body.style.fontSize = getFontSizeValue(userSettings.fontSize);
    fontSizeSelect.value = userSettings.fontSize;

    // Apply Theme (currently only dark, light is placeholder)
    // For now, we only have a dark theme, so this is mostly for future expansion.
    // If a 'light' theme CSS was available, we would toggle a class on <body> here.
    themeSelect.value = userSettings.theme;

    // Apply Sound Effects (placeholder for actual sound logic)
    soundEffectsToggle.checked = userSettings.soundEffects;
    // In a real app, you'd enable/disable a global sound manager here.
    if (userSettings.soundEffects) {
        console.log('Efek suara diaktifkan.');
    } else {
        console.log('Efek suara dinonaktifkan.');
    }
}

/**
 * Gets the CSS font size value based on the setting.
 * @param {string} size 'small', 'medium', or 'large'.
 * @returns {string} CSS font size value.
 */
function getFontSizeValue(size) {
    switch (size) {
        case 'small':
            return '0.85em';
        case 'medium':
            return '1em';
        case 'large':
            return '1.15em';
        default:
            return '1em';
    }
}

/**
 * Resets all quiz progress (XP, level, badges, leaderboard).
 */
async function resetQuizProgress() {
    const confirmReset = await showCustomAlert(
        'Apakah Anda yakin ingin mereset semua progres kuis Anda? Ini tidak dapat dibatalkan!',
        'Konfirmasi Reset',
        true
    );

    if (confirmReset) {
        userStats = {
            xp: 0,
            level: 1,
            globalStreak: 0,
            badges: [],
            leaderboard: [{ name: 'Anda', score: 0 }] // Reset 'Anda' score
        };
        saveUserStats();
        renderXpBar();
        renderAchievementBadges();
        renderLeaderboard();
        unlockBadge('first-quiz'); // Re-unlock first quiz badge
        showCustomAlert('Progres kuis Anda telah direset!', 'Berhasil Direset');
        closeModal(settingsModal); // Close settings modal after reset
    }
}

// --- 4. Question Bank Definition ---
// Menggunakan data dari chaptersData yang diunggah, ditambah soal-soal baru.
// chaptersData diasumsikan sudah dimuat dari script.js atau tersedia secara global.

const quizQuestionsData = [
    // Bab 1: Memahami Investasi
    {
        id: 'q1-1',
        question: 'Apa perbedaan utama antara menabung dan investasi?',
        options: [
            'Menabung bertujuan untuk pertumbuhan uang, investasi untuk keamanan.',
            'Menabung menyimpan uang, investasi membuat uang "bekerja".',
            'Menabung berisiko tinggi, investasi berisiko rendah.',
            'Tidak ada perbedaan signifikan, keduanya sama.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Menabung adalah menyimpan uang di tempat aman, sedangkan investasi bertujuan untuk mengembangkan nilai uang Anda melebihi inflasi dengan membuat uang Anda "bekerja".',
        hint: 'Pikirkan tentang tujuan jangka panjang uang Anda.'
    },
    {
        id: 'q1-2',
        question: 'Mengapa inflasi disebut musuh terbesar uang Anda?',
        options: [
            'Membuat uang Anda tumbuh lebih cepat.',
            'Mengurangi daya beli uang Anda seiring waktu.',
            'Meningkatkan nilai investasi Anda secara otomatis.',
            'Tidak ada hubungannya dengan daya beli uang.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Inflasi secara konstan mengurangi daya beli uang Anda, artinya uang yang sama akan membeli lebih sedikit barang dan jasa di masa depan.',
        hint: 'Apa yang terjadi pada harga barang seiring waktu?'
    },
    {
        id: 'q1-3',
        question: 'Konsep "Compound Interest" (Bunga Berbunga) dalam investasi berarti...',
        options: [
            'Bunga yang Anda peroleh juga mulai menghasilkan bunga.',
            'Hanya bunga yang dihitung dari modal awal.',
            'Investasi yang hanya berlaku untuk jangka pendek.',
            'Risiko investasi yang semakin tinggi.'
        ],
        correctAnswerIndex: 0,
        difficulty: 'intermediate',
        explanation: 'Bunga berbunga adalah proses di mana bunga yang Anda peroleh dari investasi juga mulai menghasilkan bunga, menciptakan efek bola salju pada pertumbuhan kekayaan Anda.',
        hint: 'Pikirkan tentang "bunga atas bunga".'
    },
    {
        id: 'q1-4',
        question: 'Manakah dari berikut ini yang merupakan contoh dari "judi" dalam konteks keuangan?',
        options: [
            'Membeli saham perusahaan yang solid setelah analisis mendalam.',
            'Trading saham harian berdasarkan rumor pasar.',
            'Membeli lotere dengan harapan keberuntungan murni.',
            'Membeli obligasi pemerintah untuk pendapatan tetap.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'expert',
        explanation: 'Judi didasarkan pada keberuntungan murni tanpa analisis rasional atau ekspektasi pengembalian positif jangka panjang, seperti membeli lotere.',
        hint: 'Mana yang paling tidak melibatkan analisis atau strategi?'
    },
    {
        id: 'q1-5',
        question: 'Diversifikasi adalah strategi untuk...',
        options: [
            'Meningkatkan risiko investasi secara keseluruhan.',
            'Mengurangi risiko dengan menyebarkan investasi.',
            'Memastikan keuntungan yang cepat dan tinggi.',
            'Fokus pada satu jenis aset saja.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Diversifikasi adalah strategi untuk mengurangi risiko dengan menyebarkan investasi Anda ke berbagai jenis aset, sektor, atau wilayah geografis.',
        hint: 'Jangan menaruh semua telur dalam satu keranjang.'
    },

    // Bab 2: Mindset dan Persiapan Mental Investor
    {
        id: 'q2-1',
        question: 'Dua emosi terbesar yang sering menghancurkan investor adalah...',
        options: [
            'Kebahagiaan dan kesedihan.',
            'Rasa ingin tahu dan kejutan.',
            'Ketakutan dan keserakahan.',
            'Keberanian dan keraguan.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Ketakutan (Fear) dan Keserakahan (Greed) adalah dua emosi dominan yang mendorong keputusan irasional dalam investasi.',
        hint: 'Pikirkan tentang emosi ekstrem saat pasar bergejolak.'
    },
    {
        id: 'q2-2',
        question: 'Apa itu "Dollar Cost Averaging" (DCA)?',
        options: [
            'Membeli aset hanya ketika harganya sangat rendah.',
            'Menjual aset ketika harganya mencapai puncak.',
            'Menginvestasikan jumlah tetap secara rutin tanpa memperhatikan harga.',
            'Menggunakan utang untuk membeli aset dalam jumlah besar.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'DCA adalah strategi menginvestasikan jumlah uang tetap secara rutin, yang mengurangi risiko timing pasar dan membangun kebiasaan investasi yang sehat.',
        hint: 'Pikirkan tentang investasi yang konsisten dari waktu ke waktu.'
    },
    {
        id: 'q2-3',
        question: 'Kecenderungan untuk hanya mencari informasi yang mendukung keyakinan awal Anda disebut...',
        options: [
            'Loss Aversion.',
            'Anchoring Bias.',
            'Confirmation Bias.',
            'Herd Mentality.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'expert',
        explanation: 'Confirmation Bias adalah kecenderungan untuk mencari, menafsirkan, dan mengingat informasi yang mendukung keyakinan awal kita sendiri, mengabaikan yang bertentangan.',
        hint: 'Ini tentang memvalidasi apa yang sudah Anda yakini.'
    },
    {
        id: 'q2-4',
        question: 'Mengapa investor sukses memiliki pola pikir jangka panjang?',
        options: [
            'Karena mereka ingin cepat kaya.',
            'Untuk menghindari fluktuasi pasar jangka pendek dan fokus pada pertumbuhan konsisten.',
            'Agar bisa sering melakukan trading.',
            'Karena mereka tidak punya pilihan lain.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Investor sukses fokus pada pertumbuhan konsisten jangka panjang dan tidak terpengaruh oleh fluktuasi pasar jangka pendek.',
        hint: 'Warren Buffett adalah contohnya.'
    },

    // Bab 3: Profil Risiko dan Tujuan Investasi
    {
        id: 'q3-1',
        question: 'Investor dengan profil risiko "Konservatif" cenderung memprioritaskan...',
        options: [
            'Potensi keuntungan maksimal.',
            'Keamanan modal dan return stabil meski kecil.',
            'Investasi pada aset berisiko tinggi.',
            'Fluktuasi nilai yang besar.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Investor konservatif sangat tidak suka risiko dan lebih memilih keamanan modal serta return yang stabil, meskipun kecil.',
        hint: 'Mereka sangat berhati-hati.'
    },
    {
        id: 'q3-2',
        question: 'Tujuan investasi yang baik harus "SMART". Apa kepanjangan dari "T" dalam SMART?',
        options: [
            'Target-oriented (Berorientasi Target).',
            'Timely (Tepat Waktu).',
            'Time-bound (Terikat Waktu).',
            'Transparent (Transparan).'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'SMART adalah Specific, Measurable, Achievable, Relevant, dan Time-bound (Terikat Waktu), yang berarti memiliki batas waktu yang jelas.',
        hint: 'Kapan Anda ingin mencapai tujuan itu?'
    },
    {
        id: 'q3-3',
        question: 'Menurut "Rule of 100", jika Anda berusia 30 tahun, berapa persentase alokasi saham yang disarankan?',
        options: [
            '30%',
            '70%',
            '50%',
            '100%'
        ],
        correctAnswerIndex: 1,
        difficulty: 'expert',
        explanation: 'Rule of 100: Persentase alokasi saham = 100 - usia Anda. Jadi, 100 - 30 = 70%.',
        hint: '100 dikurangi usia Anda.'
    },

    // Bab 4: Jenis-Jenis Investasi
    {
        id: 'q4-1',
        question: 'Instrumen investasi yang merupakan bukti kepemilikan sebagian kecil dari suatu perusahaan adalah...',
        options: [
            'Deposito.',
            'Obligasi.',
            'Saham.',
            'Reksa Dana Pasar Uang.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Saham adalah bukti kepemilikan sebagian kecil dari suatu perusahaan, memberikan hak atas dividen dan potensi capital gain.',
        hint: 'Anda menjadi pemilik sebagian.'
    },
    {
        id: 'q4-2',
        question: 'Wadah yang menghimpun dana dari banyak investor dan dikelola oleh Manajer Investasi profesional disebut...',
        options: [
            'Deposito.',
            'Obligasi.',
            'Saham.',
            'Reksa Dana.'
        ],
        correctAnswerIndex: 3,
        difficulty: 'beginner',
        explanation: 'Reksa Dana adalah wadah investasi kolektif yang dikelola oleh Manajer Investasi, cocok untuk pemula dan diversifikasi instan.',
        hint: 'Ada manajer yang mengelolanya untuk Anda.'
    },
    {
        id: 'q4-3',
        question: 'Aset digital yang menggunakan kriptografi dan beroperasi di jaringan terdesentralisasi adalah...',
        options: [
            'Properti.',
            'Emas.',
            'Cryptocurrency.',
            'Obligasi Korporasi.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Cryptocurrency adalah aset digital yang sangat volatil dan menggunakan teknologi blockchain, cocok untuk investor yang sangat agresif.',
        hint: 'Bitcoin adalah salah satu contohnya.'
    },
    {
        id: 'q4-4',
        question: 'Investasi yang memiliki likuiditas sangat rendah dan membutuhkan modal sangat besar adalah...',
        options: [
            'Deposito.',
            'Saham.',
            'Properti.',
            'Reksa Dana Pasar Uang.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Properti membutuhkan modal besar dan sulit dicairkan dengan cepat tanpa memengaruhi harganya secara signifikan, sehingga likuiditasnya rendah.',
        hint: 'Butuh waktu lama untuk menjualnya.'
    },

    // Bab 5: Analisis Fundamental vs Teknikal
    {
        id: 'q5-1',
        question: 'Analisis yang mempelajari kondisi keuangan, manajemen, dan prospek bisnis perusahaan untuk menentukan nilai intrinsik saham disebut...',
        options: [
            'Analisis Teknikal.',
            'Analisis Fundamental.',
            'Analisis Sentimen.',
            'Analisis Makroekonomi.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Analisis Fundamental fokus pada nilai intrinsik perusahaan melalui laporan keuangan dan prospek bisnis.',
        hint: 'Melihat "dasar" bisnisnya.'
    },
    {
        id: 'q5-2',
        question: 'Rasio PER (Price Earning Ratio) digunakan dalam analisis fundamental untuk...',
        options: [
            'Mengukur utang perusahaan.',
            'Menunjukkan berapa kali investor bersedia membayar untuk setiap rupiah laba.',
            'Memprediksi pergerakan harga saham jangka pendek.',
            'Mengukur likuiditas perusahaan.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'PER adalah rasio valuasi yang membandingkan harga saham dengan laba per saham, menunjukkan seberapa mahal saham tersebut relatif terhadap pendapatannya.',
        hint: 'Hubungan antara harga dan keuntungan.'
    },
    {
        id: 'q5-3',
        question: 'Indikator Moving Average (MA) dan RSI (Relative Strength Index) paling sering digunakan dalam...',
        options: [
            'Analisis Fundamental.',
            'Analisis Makroekonomi.',
            'Analisis Top-Down.',
            'Analisis Teknikal.'
        ],
        correctAnswerIndex: 3,
        difficulty: 'intermediate',
        explanation: 'Moving Average dan RSI adalah indikator teknikal yang digunakan untuk menganalisis pergerakan harga historis dan memprediksi arah harga di masa depan.',
        hint: 'Ini tentang grafik dan pola harga.'
    },

    // Bab 6: Strategi Portofolio Berdasarkan Usia
    {
        id: 'q6-1',
        question: 'Bagi investor yang berusia 55+ tahun (pensiun), prioritas utama dalam alokasi aset adalah...',
        options: [
            'Pertumbuhan modal maksimal.',
            'Keamanan modal dan penghasilan tetap.',
            'Investasi pada startup berisiko tinggi.',
            'Mengejar saham-saham volatil.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Pada usia pensiun, fokus utama adalah menjaga modal yang telah terkumpul dan mendapatkan penghasilan tetap untuk kebutuhan hidup, sehingga toleransi risiko sangat rendah.',
        hint: 'Mereka sudah tidak punya banyak waktu untuk pulih dari kerugian besar.'
    },

    // Bab 7: Manajemen Risiko dan Diversifikasi
    {
        id: 'q7-1',
        question: 'Prinsip "Jangan menaruh semua telur dalam satu keranjang" merujuk pada konsep...',
        options: [
            'Market Timing.',
            'Leverage.',
            'Diversifikasi.',
            'Spekulasi.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Prinsip ini adalah inti dari diversifikasi, yaitu menyebarkan investasi untuk mengurangi risiko.',
        hint: 'Ini tentang menyebar risiko.'
    },
    {
        id: 'q7-2',
        question: 'Apa fungsi dari "Stop Loss" dalam manajemen risiko investasi?',
        options: [
            'Memastikan keuntungan maksimal.',
            'Membatasi kerugian maksimal pada setiap investasi.',
            'Meningkatkan volatilitas portofolio.',
            'Memprediksi kapan harus membeli aset.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Stop Loss adalah perintah untuk menjual aset secara otomatis jika harganya turun ke level tertentu, mencegah kerugian lebih lanjut.',
        hint: 'Ini adalah batas kerugian.'
    },

    // Bab 8: Timing dan Strategi Entry-Exit
    {
        id: 'q8-1',
        question: 'Strategi investasi di mana Anda menginvestasikan jumlah tetap secara rutin tanpa memperhatikan harga aset disebut...',
        options: [
            'Lump Sum.',
            'Market Timing.',
            'Dollar Cost Averaging (DCA).',
            'Value Averaging.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'DCA mengurangi risiko timing pasar dan membangun kebiasaan investasi yang disiplin.',
        hint: 'Investasi secara berkala.'
    },
    {
        id: 'q8-2',
        question: 'Mengapa "Market Timing" seringkali sulit dan tidak disarankan untuk investor pemula?',
        options: [
            'Karena membutuhkan modal yang sangat besar.',
            'Karena pasar tidak dapat diprediksi secara konsisten.',
            'Karena hanya berlaku untuk pasar obligasi.',
            'Karena selalu menghasilkan keuntungan yang kecil.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Mencoba menebak puncak dan lembah pasar sangat sulit, bahkan bagi para profesional, dan seringkali investor kehilangan potensi keuntungan karena melewatkan hari-hari terbaik pasar.',
        hint: 'Tidak ada yang bisa memprediksi masa depan pasar dengan sempurna.'
    },

    // Bab 9: Evaluasi dan Rebalancing Portofolio
    {
        id: 'q9-1',
        question: 'Proses menyesuaikan alokasi aset dalam portofolio kembali ke target awal secara berkala disebut...',
        options: [
            'Spekulasi.',
            'Arbitrase.',
            'Rebalancing.',
            'Hedging.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Rebalancing adalah strategi manajemen risiko yang disiplin untuk menjaga alokasi aset sesuai dengan profil risiko dan tujuan investasi.',
        hint: 'Mengembalikan keseimbangan.'
    },

    // Bab 10: Kesalahan Umum dan Cara Menghindarinya
    {
        id: 'q10-1',
        question: 'Kesalahan investor yang membeli di puncak karena takut ketinggalan kereta saat pasar sedang euforia disebut...',
        options: [
            'Panic Selling.',
            'FOMO (Fear Of Missing Out).',
            'Overconfidence.',
            'Analysis Paralysis.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'FOMO adalah kecemasan yang mendorong investor untuk membeli aset yang sedang populer karena takut kehilangan potensi keuntungan, seringkali di harga yang terlalu tinggi.',
        hint: 'Takut ketinggalan.'
    },
    {
        id: 'q10-2',
        question: 'Mengapa "Tidak Punya Emergency Fund" adalah kesalahan fatal bagi investor?',
        options: [
            'Karena akan dikenakan pajak yang lebih tinggi.',
            'Karena memaksa investor menjual aset saat pasar turun untuk kebutuhan mendesak.',
            'Karena mengurangi potensi keuntungan investasi.',
            'Karena tidak bisa membeli saham blue-chip.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Tanpa dana darurat, investor mungkin terpaksa menjual investasi mereka di saat yang tidak tepat (misalnya, saat pasar sedang turun) untuk memenuhi kebutuhan mendesak, mengunci kerugian.',
        hint: 'Apa yang terjadi jika ada kebutuhan mendesak dan semua uang Anda terikat di investasi?'
    },

    // Bab 13: Aspek Pajak dalam Investasi
    {
        id: 'q13-1',
        question: 'Keuntungan yang diperoleh dari penjualan aset investasi dengan harga lebih tinggi dari harga pembelian disebut...',
        options: [
            'Dividen.',
            'Bunga.',
            'Capital Gain.',
            'Yield.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Capital gain adalah keuntungan yang didapat dari selisih harga jual dan harga beli aset.',
        hint: 'Keuntungan dari penjualan modal.'
    },

    // Bab 14: Psikologi Pasar dan Behavioral Finance
    {
        id: 'q14-1',
        question: 'Rasa sakit kehilangan uang lebih kuat daripada kesenangan mendapatkan uang dalam jumlah yang sama disebut...',
        options: [
            'Overconfidence Bias.',
            'Recency Bias.',
            'Loss Aversion.',
            'Anchoring Bias.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Loss Aversion adalah bias kognitif di mana individu lebih memilih untuk menghindari kerugian daripada mendapatkan keuntungan yang setara.',
        hint: 'Orang lebih takut rugi daripada senang untung.'
    },

    // Bab 15: Investasi Berkelanjutan (ESG)
    {
        id: 'q15-1',
        question: 'Investasi ESG mempertimbangkan faktor-faktor Lingkungan, Sosial, dan...',
        options: [
            'Geopolitik.',
            'Gaya Hidup.',
            'Glosarium.',
            'Tata Kelola (Governance).'
        ],
        correctAnswerIndex: 3,
        difficulty: 'beginner',
        explanation: 'ESG adalah singkatan dari Environmental, Social, and Governance. Ini adalah pendekatan investasi yang mempertimbangkan dampak perusahaan pada lingkungan, masyarakat, dan tata kelolanya.',
        hint: 'Huruf terakhir dari ESG.'
    },

    // Bab 16: Membangun Kekayaan Jangka Panjang
    {
        id: 'q16-1',
        question: 'Untuk memaksimalkan bunga berbunga, dividen atau keuntungan yang diperoleh sebaiknya...',
        options: [
            'Ditarik dan disimpan di bank.',
            'Digunakan untuk membeli barang konsumtif.',
            'Direinvestasikan kembali.',
            'Diberikan kepada orang lain.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Reinvestasi keuntungan memungkinkan uang Anda terus bekerja dan menghasilkan lebih banyak uang melalui efek bunga berbunga.',
        hint: 'Biarkan uang Anda terus beranak pinak.'
    },

    // Bab 17: Warren Buffett: Filosofi Investasi Nilai
    {
        id: 'q17-1',
        question: 'Warren Buffett dikenal sebagai penganut strategi investasi...',
        options: [
            'Growth Investing.',
            'Momentum Trading.',
            'Value Investing.',
            'Day Trading.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Warren Buffett adalah ikon Value Investing, yaitu membeli saham perusahaan yang diperdagangkan di bawah nilai intrinsiknya.',
        hint: 'Dia mencari "dollar for 50 cents".'
    },
    {
        id: 'q17-2',
        question: 'Konsep "Economic Moat" dalam filosofi Warren Buffett merujuk pada...',
        options: [
            'Parit di sekitar kastil.',
            'Keunggulan kompetitif berkelanjutan yang melindungi perusahaan dari persaingan.',
            'Utang perusahaan yang sangat besar.',
            'Harga saham yang sangat rendah.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'expert',
        explanation: 'Economic Moat adalah keunggulan kompetitif yang kuat dan berkelanjutan yang dimiliki suatu perusahaan, seperti merek yang kuat atau biaya produksi yang rendah, yang melindunginya dari pesaing.',
        hint: 'Pikirkan tentang benteng yang sulit ditembus.'
    },

    // Bab 18: Benjamin Graham: Bapak Investasi Nilai
    {
        id: 'q18-1',
        question: 'Siapa yang memperkenalkan alegori "Mr. Market" untuk menggambarkan volatilitas pasar?',
        options: [
            'Warren Buffett.',
            'Peter Lynch.',
            'Benjamin Graham.',
            'Ray Dalio.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Benjamin Graham memperkenalkan alegori "Mr. Market" untuk menjelaskan bagaimana investor cerdas harus memanfaatkan kegilaan pasar, bukan mengikutinya.',
        hint: 'Mentor dari Warren Buffett.'
    },
    {
        id: 'q18-2',
        question: 'Konsep inti Benjamin Graham yang memberikan "bantalan" terhadap kesalahan penilaian atau peristiwa tak terduga adalah...',
        options: [
            'Diversifikasi Portofolio.',
            'Market Timing.',
            'Margin of Safety.',
            'Analisis Teknikal.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'expert',
        explanation: 'Margin of Safety adalah prinsip inti Graham, yaitu membeli saham dengan diskon signifikan dari nilai intrinsiknya untuk melindungi modal.',
        hint: 'Beli dengan harga yang jauh lebih murah dari nilai sebenarnya.'
    },

    // Bab 19: Peter Lynch: Investasi pada Apa yang Anda Tahu
    {
        id: 'q19-1',
        question: 'Filosofi investasi Peter Lynch yang terkenal adalah...',
        options: [
            'Investasi pada perusahaan teknologi tinggi.',
            'Investasi pada apa yang Anda tahu dan pahami.',
            'Investasi jangka pendek.',
            'Investasi pada perusahaan yang tidak dikenal.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Peter Lynch menekankan pada investasi pada perusahaan yang produk atau layanannya dikenal baik oleh investor, memanfaatkan pengetahuan sebagai konsumen.',
        hint: 'Belilah apa yang Anda gunakan atau kenal.'
    },

    // Bab 20: Ray Dalio: Prinsip Diversifikasi dan All Weather Portfolio
    {
        id: 'q20-1',
        question: '"All Weather Portfolio" yang dirancang oleh Ray Dalio bertujuan untuk...',
        options: [
            'Berkinerja baik hanya di pasar yang sedang naik.',
            'Berkinerja baik di semua kondisi ekonomi.',
            'Fokus pada aset berisiko tinggi.',
            'Mencapai keuntungan cepat dalam jangka pendek.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'All Weather Portfolio dirancang untuk tangguh di berbagai skenario ekonomi dengan menyeimbangkan aset yang berkinerja baik dalam kondisi berbeda.',
        hint: 'Tahan di segala cuaca.'
    },

    // Bab 21: Perencanaan Keuangan Komprehensif
    {
        id: 'q21-1',
        question: 'Mengapa memiliki "Dana Darurat" penting sebelum berinvestasi?',
        options: [
            'Agar bisa membeli saham lebih banyak.',
            'Untuk mencegah Anda terpaksa menjual investasi saat pasar turun untuk kebutuhan mendesak.',
            'Untuk membayar pajak investasi.',
            'Agar bisa sering trading.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Dana darurat bertindak sebagai jaring pengaman finansial, mencegah Anda terpaksa menjual aset investasi di waktu yang tidak tepat.',
        hint: 'Ini adalah jaring pengaman Anda.'
    },

    // Bab 22: Investasi Internasional dan Pasar Global
    {
        id: 'q22-1',
        question: 'Salah satu risiko utama berinvestasi di pasar internasional adalah...',
        options: [
            'Risiko inflasi.',
            'Risiko mata uang (Currency Risk).',
            'Risiko likuiditas yang sangat rendah.',
            'Risiko suku bunga yang stabil.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Fluktuasi nilai tukar mata uang asing dapat mengikis keuntungan investasi internasional Anda atau memperbesar kerugian.',
        hint: 'Nilai tukar bisa berubah.'
    },

    // Bab 23: Membangun Portofolio Pendapatan Pasif
    {
        id: 'q23-1',
        question: 'Instrumen investasi yang secara rutin membayar sebagian keuntungannya kepada pemegang saham dalam bentuk dividen adalah...',
        options: [
            'Obligasi.',
            'Saham Dividen.',
            'Deposito.',
            'Emas.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Saham dividen adalah saham perusahaan yang memiliki rekam jejak pembayaran dividen yang konsisten, cocok untuk portofolio pendapatan pasif.',
        hint: 'Ini adalah bagian dari keuntungan perusahaan yang dibagikan.'
    },

    // Bab 24: Membaca Laporan Keuangan Perusahaan
    {
        id: 'q24-1',
        question: 'Laporan keuangan yang memberikan gambaran posisi keuangan perusahaan pada satu titik waktu tertentu (aset, liabilitas, ekuitas) adalah...',
        options: [
            'Laporan Laba Rugi.',
            'Laporan Arus Kas.',
            'Neraca (Balance Sheet).',
            'Laporan Perubahan Modal.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Neraca adalah "foto" posisi keuangan perusahaan pada tanggal tertentu, menunjukkan apa yang dimiliki, apa yang diutang, dan ekuitas pemilik.',
        hint: 'Ini seperti snapshot keuangan.'
    },
    {
        id: 'q24-2',
        question: 'Bagian dari Laporan Arus Kas yang menunjukkan kas yang dihasilkan dari kegiatan bisnis inti perusahaan adalah...',
        options: [
            'Arus Kas dari Investasi (CFI).',
            'Arus Kas dari Pendanaan (CFF).',
            'Arus Kas dari Operasi (CFO).',
            'Laba Bersih.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'expert',
        explanation: 'Arus Kas dari Operasi (CFO) adalah indikator terpenting kesehatan operasional perusahaan, menunjukkan kemampuan inti bisnis menghasilkan kas.',
        hint: 'Ini adalah kas dari aktivitas bisnis utama.'
    },

    // Bab 25: Etika dan Tanggung Jawab Investor
    {
        id: 'q25-1',
        question: 'Tanda bahaya terbesar dari skema penipuan investasi adalah...',
        options: [
            'Janji keuntungan tinggi tanpa risiko.',
            'Meminta Anda melakukan riset sendiri.',
            'Memiliki izin resmi dari regulator.',
            'Membutuhkan modal awal yang kecil.'
        ],
        correctAnswerIndex: 0,
        difficulty: 'beginner',
        explanation: 'Janji keuntungan tinggi tanpa risiko adalah ciri khas penipuan investasi. Ingat, high return = high risk.',
        hint: 'Jika terlalu bagus untuk menjadi kenyataan...'
    },

    // Soal Tambahan di Luar Materi (Contoh)
    {
        id: 'q-extra-1',
        question: 'Siapa CEO Tesla dan SpaceX?',
        options: [
            'Jeff Bezos',
            'Elon Musk',
            'Bill Gates',
            'Mark Zuckerberg'
        ],
        correctAnswerIndex: 1,
        difficulty: 'beginner',
        explanation: 'Elon Musk adalah CEO Tesla dan SpaceX, dikenal sebagai inovator di bidang teknologi dan otomotif.',
        hint: 'Orang di balik mobil listrik dan roket.'
    },
    {
        id: 'q-extra-2',
        question: 'Apa nama bursa saham utama di Indonesia?',
        options: [
            'NASDAQ',
            'NYSE',
            'Bursa Efek Indonesia (BEI)',
            'Tokyo Stock Exchange'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Bursa Efek Indonesia (BEI) adalah bursa saham utama tempat saham-saham perusahaan Indonesia diperdagangkan.',
        hint: 'Tempat saham Indonesia diperjualbelikan.'
    },
    {
        id: 'q-extra-3',
        question: 'Mata uang kripto terbesar berdasarkan kapitalisasi pasar adalah?',
        options: [
            'Ethereum',
            'Ripple',
            'Bitcoin',
            'Dogecoin'
        ],
        correctAnswerIndex: 2,
        difficulty: 'expert',
        explanation: 'Bitcoin adalah mata uang kripto pertama dan terbesar berdasarkan kapitalisasi pasar, sering dianggap sebagai "emas digital".',
        hint: 'Yang pertama dan paling terkenal.'
    },
    {
        id: 'q-extra-4',
        question: 'Istilah "Blue-chip stocks" mengacu pada saham...',
        options: [
            'Perusahaan baru yang berisiko tinggi.',
            'Perusahaan besar, mapan, dan memiliki reputasi baik.',
            'Perusahaan yang hampir bangkrut.',
            'Perusahaan di industri hiburan.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Saham blue-chip adalah saham perusahaan besar, mapan, dan memiliki reputasi baik dengan rekam jejak kinerja keuangan yang stabil.',
        hint: 'Pikirkan perusahaan raksasa yang sudah teruji.'
    },
    {
        id: 'q-extra-5',
        question: 'Apa yang dimaksud dengan "Bear Market"?',
        options: [
            'Periode di mana harga saham terus meningkat.',
            'Periode di mana harga saham cenderung menurun secara signifikan.',
            'Pasar yang didominasi oleh investor yang optimis.',
            'Pasar di mana investor melakukan banyak pembelian.'
        ],
        correctAnswerIndex: 1,
        difficulty: 'intermediate',
        explanation: 'Bear Market adalah periode di mana harga saham cenderung menurun secara signifikan (biasanya 20% atau lebih dari puncak terakhir), mencerminkan sentimen pesimis investor.',
        hint: 'Berlawanan dengan "Bull Market".'
    },
    {
        id: 'q-extra-6',
        question: 'Apa itu IPO dalam konteks pasar modal?',
        options: [
            'Initial Public Offering (Penawaran Umum Perdana).',
            'Internal Portfolio Optimization.',
            'Investment Performance Overview.',
            'International Private Ownership.'
        ],
        correctAnswerIndex: 0,
        difficulty: 'beginner',
        explanation: 'IPO adalah proses di mana perusahaan swasta pertama kali menawarkan sahamnya kepada publik untuk dijual di bursa saham.',
        hint: 'Ketika sebuah perusahaan "go public".'
    },
    {
        id: 'q-extra-7',
        question: 'Siapa penulis buku "The Intelligent Investor", yang dikenal sebagai "Bapak Investasi Nilai"?',
        options: [
            'Warren Buffett',
            'Peter Lynch',
            'Benjamin Graham',
            'John Bogle'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Benjamin Graham adalah penulis "The Intelligent Investor" dan mentor Warren Buffett, yang meletakkan fondasi investasi nilai.',
        hint: 'Orang yang memperkenalkan konsep Margin of Safety.'
    },
    {
        id: 'q-extra-8',
        question: 'Apa tujuan utama dari reksa dana pasar uang?',
        options: [
            'Mencapai pertumbuhan modal yang agresif.',
            'Memberikan pendapatan tetap yang tinggi.',
            'Menjaga stabilitas modal dan likuiditas tinggi.',
            'Berinvestasi pada saham-saham berisiko tinggi.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Reksa dana pasar uang berinvestasi pada instrumen pasar uang dan obligasi jangka pendek, dengan tujuan utama menjaga stabilitas modal dan likuiditas tinggi, serta risiko yang sangat rendah.',
        hint: 'Paling aman di antara jenis reksa dana.'
    },
    {
        id: 'q-extra-9',
        question: 'Apa itu dividen dalam investasi saham?',
        options: [
            'Keuntungan dari penjualan saham.',
            'Pembayaran bunga dari obligasi.',
            'Pembagian sebagian keuntungan perusahaan kepada pemegang saham.',
            'Biaya transaksi saat membeli saham.'
        ],
        correctAnswerIndex: 2,
        difficulty: 'beginner',
        explanation: 'Dividen adalah bagian dari keuntungan perusahaan yang dibayarkan kepada pemegang saham, bisa dalam bentuk tunai atau saham.',
        hint: 'Ini adalah "hadiah" yang dibagikan perusahaan kepada pemiliknya.'
    },
    {
        id: 'q-extra-10',
        question: 'Yang mana dari berikut ini BUKAN merupakan jenis obligasi?',
        options: [
            'Obligasi Pemerintah',
            'Obligasi Korporasi',
            'Obligasi Reksa Dana',
            'Sukuk'
        ],
        correctAnswerIndex: 2,
        difficulty: 'intermediate',
        explanation: 'Obligasi Reksa Dana bukanlah jenis obligasi, melainkan Reksa Dana yang berinvestasi pada obligasi.',
        hint: 'Salah satunya adalah wadah investasi, bukan instrumen utang langsung.'
    }
];

/**
 * Filters and shuffles questions based on difficulty.
 * @param {string} mode The selected quiz mode ('beginner', 'intermediate', 'expert', 'speedrun').
 * @param {number} count The number of questions to select.
 * @returns {Array} An array of shuffled questions for the quiz.
 */
function prepareQuestions(mode, count) {
    let filteredQuestions = [];

    if (mode === 'beginner') {
        filteredQuestions = quizQuestions.filter(q => q.difficulty === 'beginner');
    } else if (mode === 'intermediate') {
        filteredQuestions = quizQuestions.filter(q => q.difficulty === 'beginner' || q.difficulty === 'intermediate');
    } else if (mode === 'expert') {
        filteredQuestions = quizQuestions.filter(q => q.difficulty === 'intermediate' || q.difficulty === 'expert');
    } else if (mode === 'speedrun') {
        // Speedrun can include a mix of all difficulties for challenge
        filteredQuestions = quizQuestions;
    }

    shuffleArray(filteredQuestions);
    // Ensure we don't repeat questions if there are fewer unique questions than requested count
    return filteredQuestions.slice(0, count);
}

// --- 5. Quiz Initialization & Mode Selection ---

/**
 * Initializes the quiz application.
 */
function initQuiz() {
    // Assign quizQuestionsData to quizQuestions
    quizQuestions = quizQuestionsData;

    loadUserStats(); // Load user stats from local storage
    loadUserSettings(); // New: Load user settings from local storage
    renderXpBar(); // Render XP bar initially
    renderAchievementBadges(); // Render badges initially
    renderLeaderboard(); // Render leaderboard initially

    // Unlock 'first-quiz' badge if not already unlocked
    if (!userStats.badges.includes('first-quiz')) {
        unlockBadge('first-quiz');
    }

    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 500); // Fade out duration

    showScreen(modeSelectionScreen); // Start with mode selection
}

/**
 * Starts a new quiz session based on the selected mode.
 * @param {string} mode The selected quiz mode.
 */
function startQuiz(mode) {
    selectedMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    quizHistory = []; // Reset quiz history for review
    totalQuizTime = 0; // Reset total time for Speedrun
    lifelines = { // Reset lifelines for new quiz
        hint: 3,
        fiftyFifty: 1,
        skip: 1,
        askAiCooldown: 0
    };

    let questionCount = 0;
    switch (mode) {
        case 'beginner':
            questionCount = 10;
            quizMainTitle.textContent = 'Kuis Pemula';
            currentModeDisplay.textContent = 'Mode: PEMULA';
            reviewAnswersBtn.style.display = 'block'; // Show review button for Beginner
            break;
        case 'intermediate':
            questionCount = 12;
            quizMainTitle.textContent = 'Kuis Menengah';
            currentModeDisplay.textContent = 'Mode: MENENGAH';
            reviewAnswersBtn.style.display = 'block'; // Show review button for Intermediate
            break;
        case 'expert':
            questionCount = 15;
            quizMainTitle.textContent = 'Kuis Ahli';
            currentModeDisplay.textContent = 'Mode: AHLI';
            reviewAnswersBtn.style.display = 'none'; // Hide review button for Expert (unless completed without error)
            break;
        case 'speedrun':
            questionCount = 10; // Shorter for speedrun
            quizMainTitle.textContent = 'Kuis Speedrun';
            currentModeDisplay.textContent = 'Mode: SPEEDRUN';
            reviewAnswersBtn.style.display = 'block'; // Show review button for Speedrun
            break;
    }

    currentQuizQuestions = prepareQuestions(mode, questionCount);

    showScreen(quizPlayScreen);
    loadQuestion();
    updateLifelineButtons(); // Update lifeline buttons state
    if (selectedMode === 'speedrun') {
        timerDisplay.style.display = 'block';
        quizStartTime = Date.now(); // Record quiz start time
        startTimer();
    } else {
        timerDisplay.style.display = 'none';
        stopTimer();
    }
}

/**
 * Loads and displays the current question.
 */
function loadQuestion() {
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        endQuiz();
        return;
    }

    const question = currentQuizQuestions[currentQuestionIndex];
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1}/${currentQuizQuestions.length}`;
    updateProgressBar();

    questionText.textContent = question.question;
    answerOptionsDiv.innerHTML = '';
    quizFeedbackDiv.style.display = 'none';
    quizFeedbackDiv.classList.remove('correct', 'incorrect');
    nextQuestionBtn.style.display = 'none';
    submitAnswerBtn.style.display = 'block';
    submitAnswerBtn.disabled = true; // Disable submit until an option is selected
    selectedAnswerIndex = null; // Reset selected answer

    // Create a copy of options to shuffle, maintaining original correct index
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);

    question.options.forEach((option, originalIndex) => {
        const button = document.createElement('button');
        button.classList.add('answer-option-btn');
        button.textContent = option;
        // Store original index to check correctness later
        button.setAttribute('data-original-index', originalIndex);
        button.addEventListener('click', () => selectAnswer(originalIndex, button));
        answerOptionsDiv.appendChild(button);
    });

    // Reset timer for Speedrun mode
    if (selectedMode === 'speedrun') {
        stopTimer();
        timeLeft = 15; // 15 seconds per question
        updateTimerDisplay();
        startTimer();
    }
}

/**
 * Handles user selecting an answer option.
 * @param {number} originalIndex The original index of the selected option (before shuffling).
 * @param {HTMLElement} button The button element that was clicked.
 */
function selectAnswer(originalIndex, button) {
    // Remove 'selected' class from all options
    document.querySelectorAll('.answer-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    selectedAnswerIndex = originalIndex; // Store original index
    submitAnswerBtn.disabled = false; // Enable submit button
}

/**
 * Submits the selected answer and checks for correctness.
 */
function submitAnswer() {
    if (selectedAnswerIndex === null) {
        showCustomAlert('Pilih jawaban terlebih dahulu!', 'Peringatan');
        return;
    }

    stopTimer(); // Stop timer immediately on submission for speedrun

    const question = currentQuizQuestions[currentQuestionIndex];
    // Check if the selected answer's original index matches the correct answer index
    const isCorrect = (selectedAnswerIndex === question.correctAnswerIndex);

    // Record answer in quiz history
    quizHistory.push({
        question: question.question,
        userAnswer: question.options[selectedAnswerIndex], // Use original options array for user answer text
        correctAnswer: question.options[question.correctAnswerIndex],
        isCorrect: isCorrect,
        explanation: question.explanation,
        questionId: question.id // Add question ID for better tracking
    });

    // Disable all answer options
    document.querySelectorAll('.answer-option-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Provide visual feedback
    const selectedButton = document.querySelector(`.answer-option-btn[data-original-index="${selectedAnswerIndex}"]`);
    if (isCorrect) {
        selectedButton.classList.add('correct');
        quizFeedbackDiv.textContent = 'Benar!';
        quizFeedbackDiv.classList.add('correct');
        correctAnswersCount++;
        updateXP(XP_PER_QUESTION + XP_PER_CORRECT_ANSWER); // Base XP + Correct Answer Bonus
        updateStreak(true);
        score += (selectedMode === 'speedrun' ? (timeLeft * 10) : 100); // Score based on time for speedrun
    } else {
        selectedButton.classList.add('incorrect');
        quizFeedbackDiv.textContent = 'Salah!';
        quizFeedbackDiv.classList.add('incorrect');
        incorrectAnswersCount++;
        updateXP(XP_PER_QUESTION); // Still get base XP for trying
        updateStreak(false);

        // Highlight correct answer
        const correctButton = document.querySelector(`.answer-option-btn[data-original-index="${question.correctAnswerIndex}"]`);
        if (correctButton) {
            correctButton.classList.add('correct');
        }
    }
    quizFeedbackDiv.style.display = 'flex';

    // Mode-specific logic after answer
    if (selectedMode === 'expert' && !isCorrect) {
        showCustomAlert('Jawaban salah! Anda harus mengulang dari awal.', 'Expert Mode')
            .then(() => {
                startQuiz('expert'); // Restart Expert Mode
            });
        return; // Stop further processing
    }

    submitAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'block';
}


/**
 * Moves to the next question or ends the quiz.
 */
function goToNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// --- 6. Mode-Specific Logic ---

/**
 * Starts the timer for Speedrun mode.
 */
function startTimer() {
    if (timerInterval) clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitAnswer(); // Auto-submit if time runs out
        }
    }, 1000);
}

/**
 * Stops the timer.
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * Updates the timer display.
 */
function updateTimerDisplay() {
    timerDisplay.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
}

/**
 * Manages the Ask AI lifeline cooldown.
 */
function startAICooldown() {
    lifelines.askAiCooldown = AI_COOLDOWN_SECONDS;
    updateLifelineButtons();
    const cooldownInterval = setInterval(() => {
        lifelines.askAiCooldown--;
        updateLifelineButtons();
        if (lifelines.askAiCooldown <= 0) {
            clearInterval(cooldownInterval);
            lifelines.askAiCooldown = 0; // Ensure it's exactly 0
            updateLifelineButtons();
        }
    }, 1000);
}

// --- 7. Lifeline Functions ---

/**
 * Uses the Hint lifeline.
 */
function useHint() {
    if (lifelines.hint > 0 && selectedMode !== 'expert') { // Expert mode doesn't allow hints
        lifelines.hint--;
        updateLifelineButtons();
        const question = currentQuizQuestions[currentQuestionIndex];
        hintText.textContent = question.hint || 'Maaf, tidak ada petunjuk spesifik untuk soal ini.';
        openModal(hintModal);
        updateXP(-5); // Penalty for using hint
    } else if (selectedMode === 'expert') {
        showCustomAlert('Petunjuk tidak tersedia di Expert Mode.', 'Tidak Tersedia');
    } else {
        showCustomAlert('Anda tidak memiliki petunjuk lagi!', 'Habis');
    }
}

/**
 * Uses the 50:50 lifeline.
 */
function useFiftyFifty() {
    if (lifelines.fiftyFifty > 0) {
        lifelines.fiftyFifty--;
        updateLifelineButtons();
        updateXP(-10); // Penalty for using 50:50

        const question = currentQuizQuestions[currentQuestionIndex];
        const options = Array.from(answerOptionsDiv.children);
        const incorrectOptions = options.filter(btn =>
            parseInt(btn.dataset.originalIndex) !== question.correctAnswerIndex
        );

        shuffleArray(incorrectOptions);
        // Disable two incorrect options
        if (incorrectOptions[0]) incorrectOptions[0].disabled = true;
        if (incorrectOptions[1]) incorrectOptions[1].disabled = true;


        showCustomAlert('Dua jawaban salah telah dihilangkan!', '50:50 Digunakan');
    } else {
        showCustomAlert('Anda tidak memiliki 50:50 lagi!', 'Habis');
    }
}

/**
 * Uses the Skip Question lifeline.
 */
function useSkip() {
    if (lifelines.skip > 0) {
        lifelines.skip--;
        updateLifelineButtons();
        updateXP(-15); // Penalty for skipping

        quizHistory.push({
            question: currentQuizQuestions[currentQuestionIndex].question,
            userAnswer: 'Dilewati',
            correctAnswer: currentQuizQuestions[currentQuestionIndex].options[currentQuizQuestions[currentQuestionIndex].correctAnswerIndex],
            isCorrect: false, // Skipped is considered incorrect for scoring
            explanation: currentQuizQuestions[currentQuestionIndex].explanation,
            questionId: currentQuizQuestions[currentQuestionIndex].id
        });
        incorrectAnswersCount++; // Count as incorrect for overall stats

        showCustomAlert('Pertanyaan dilewati!', 'Dilewati');
        goToNextQuestion();
    } else {
        showCustomAlert('Anda tidak memiliki kesempatan melewati soal lagi!', 'Habis');
    }
}

/**
 * Uses the Ask AI lifeline (simulated with Gemini API structure).
 */
async function useAskAI() {
    if (lifelines.askAiCooldown === 0) {
        lifelines.askAiCooldown = AI_COOLDOWN_SECONDS; // Start cooldown immediately
        updateLifelineButtons(); // Update button state to disabled/cooldown

        openModal(askAiModal);
        aiResponseText.textContent = 'AlgoVest AI sedang berpikir...';
        aiLoadingSpinner.style.display = 'flex';
        updateXP(-20); // Penalty for using AI

        const currentQuestion = currentQuizQuestions[currentQuestionIndex].question;
        const prompt = `Berikan petunjuk singkat (maksimal 2 kalimat) untuk pertanyaan kuis berikut: "${currentQuestion}". Jangan berikan jawabannya secara langsung.`;

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // Leave this as-is. Canvas will provide it at runtime.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json(); // Await the JSON parsing
            
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                aiResponseText.textContent = text;
            } else {
                aiResponseText.textContent = 'Maaf, AlgoVest AI tidak dapat memberikan bantuan saat ini. Respons tidak valid.';
            }
        } catch (error) {
            console.error('Error calling AI:', error);
            aiResponseText.textContent = 'Maaf, AlgoVest AI tidak dapat memberikan bantuan saat ini. Terjadi kesalahan jaringan atau API.';
        } finally {
            aiLoadingSpinner.style.display = 'none';
            startAICooldown(); // Re-start cooldown after response (even if error)
        }
    } else {
        showCustomAlert(`AlgoVest AI sedang dalam cooldown. Coba lagi dalam ${lifelines.askAiCooldown} detik.`, 'Cooldown');
    }
}

// --- 8. Quiz Completion & Results ---

/**
 * Ends the current quiz session and displays results.
 */
function endQuiz() {
    stopTimer(); // Ensure timer is stopped
    if (selectedMode === 'speedrun') {
        totalQuizTime = Math.floor((Date.now() - quizStartTime) / 1000); // Calculate total time in seconds
        finalScoreResult.textContent = score;
        totalTimeResult.textContent = `${totalQuizTime}s`;
        document.querySelectorAll('.speedrun-only').forEach(el => el.style.display = 'block');
    } else {
        document.querySelectorAll('.speedrun-only').forEach(el => el.style.display = 'none');
    }

    if (selectedMode === 'expert') {
        // Only show expert-only stats if the quiz was completed (not restarted due to error)
        if (correctAnswersCount + incorrectAnswersCount === currentQuizQuestions.length) {
            correctStreakResult.textContent = userStats.globalStreak; // Display global streak for expert mode
            document.querySelectorAll('.expert-only').forEach(el => el.style.display = 'block');
            reviewAnswersBtn.style.display = 'block'; // Show review button if Expert mode completed
        } else {
            document.querySelectorAll('.expert-only').forEach(el => el.style.display = 'none');
            reviewAnswersBtn.style.display = 'none'; // Hide if Expert mode was restarted
        }
    } else {
        document.querySelectorAll('.expert-only').forEach(el => el.style.display = 'none');
        reviewAnswersBtn.style.display = 'block'; // Always show review for Beginner, Intermediate, Speedrun
    }

    totalQuestionsResult.textContent = currentQuizQuestions.length;
    correctAnswersResult.textContent = correctAnswersCount;
    incorrectAnswersResult.textContent = incorrectAnswersCount;

    // Update leaderboard with final score for Speedrun
    if (selectedMode === 'speedrun') {
        updateLeaderboard(score);
    }

    // Unlock mode-specific badges
    if (correctAnswersCount === currentQuizQuestions.length) {
        if (selectedMode === 'beginner') unlockBadge('beginner-master');
        if (selectedMode === 'intermediate') unlockBadge('intermediate-pro');
    }
    // Expert mode completion badge only if all questions answered correctly
    if (selectedMode === 'expert' && correctAnswersCount === currentQuizQuestions.length) {
        unlockBadge('expert-legend');
    }
    if (selectedMode === 'speedrun' && score > 0) { // Simple condition for speedrun badge
        unlockBadge('speed-demon');
    }

    // Check for no-lifeline badge
    if (lifelines.hint === 3 && lifelines.fiftyFifty === 1 && lifelines.skip === 1 && lifelines.askAiCooldown === 0) {
        unlockBadge('no-lifeline');
    }
    // Check for lifeline-saver badge (simple: used at least one of each type)
    if (lifelines.hint < 3 || lifelines.fiftyFifty < 1 || lifelines.skip < 1) { // If ANY lifeline was used
        unlockBadge('lifeline-saver');
    }


    showScreen(quizResultScreen);
}

/**
 * Renders the answer review screen.
 */
function renderReviewScreen() {
    reviewQuestionsContainer.innerHTML = '';
    quizHistory.forEach((item, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        reviewCard.innerHTML = `
            <h4>Soal ${index + 1}: ${item.question}</h4>
            <div class="review-answer ${item.isCorrect ? 'correct' : 'incorrect'}">
                <i class="fas ${item.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                Jawaban Anda: ${item.userAnswer}
            </div>
            <div class="review-answer correct">
                <i class="fas fa-check-circle"></i>
                Jawaban Benar: ${item.correctAnswer}
            </div>
            <div class="explanation">
                <strong>Penjelasan:</strong> ${item.explanation}
            </div>
        `;
        reviewQuestionsContainer.appendChild(reviewCard);
    });
    showScreen(answerReviewScreen);
}

/**
 * Opens a modal.
 * @param {HTMLElement} modalElement The modal element to open.
 */
function openModal(modalElement) {
    // Close any open modals first
    document.querySelectorAll('.modal-overlay.show').forEach(modal => modal.classList.remove('show'));
    modalElement.classList.add('show');
    document.body.classList.add('modal-open'); // Prevent body scroll
}

/**
 * Closes a modal.
 * @param {HTMLElement} modalElement The modal element to close.
 */
function closeModal(modalElement) {
    modalElement.classList.remove('show');
    document.body.classList.remove('modal-open'); // Allow body scroll
}

// --- 9. Event Listeners ---

window.addEventListener('load', initQuiz);

// Mode selection buttons
modeCardsContainer.addEventListener('click', (e) => {
    const startBtn = e.target.closest('.start-mode-btn');
    if (startBtn) {
        const mode = startBtn.closest('.mode-card').dataset.mode;
        startQuiz(mode);
    }
});

// Quiz Play Screen Buttons
submitAnswerBtn.addEventListener('click', submitAnswer);
nextQuestionBtn.addEventListener('click', goToNextQuestion);

// Lifeline Buttons
hintBtn.addEventListener('click', useHint);
fiftyFiftyBtn.addEventListener('click', useFiftyFifty);
skipBtn.addEventListener('click', useSkip);
askAiBtn.addEventListener('click', useAskAI);

// Result Screen Buttons
reviewAnswersBtn.addEventListener('click', renderReviewScreen);
playAgainBtn.addEventListener('click', () => startQuiz(selectedMode));
backToModesBtn.addEventListener('click', () => showScreen(modeSelectionScreen));

// Answer Review Screen Button
backFromReviewBtn.addEventListener('click', () => showScreen(quizResultScreen));

// Modal close buttons
closeHintModalBtn.addEventListener('click', () => closeModal(hintModal));
closeAskAiModalBtn.addEventListener('click', () => closeModal(askAiModal));

// New: Settings Button & Modal Event Listeners
settingsBtn.addEventListener('click', () => {
    // Populate settings form with current values before opening
    fontSizeSelect.value = userSettings.fontSize;
    themeSelect.value = userSettings.theme;
    soundEffectsToggle.checked = userSettings.soundEffects;
    openModal(settingsModal);
});
closeSettingsModalBtn.addEventListener('click', () => closeModal(settingsModal));

// Save Settings button
saveSettingsBtn.addEventListener('click', () => {
    userSettings.fontSize = fontSizeSelect.value;
    userSettings.theme = themeSelect.value;
    userSettings.soundEffects = soundEffectsToggle.checked;
    saveUserSettings();
    applySettings(); // Apply settings immediately after saving
    closeModal(settingsModal);
});

// Reset Progress button
resetProgressBtn.addEventListener('click', resetQuizProgress);


// Close modals when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });
});

// Back to Home button in header
backToHomeBtn.addEventListener('click', () => {
    // Redirect to book.htm (main page)
    window.location.href = 'book.htm';
});

// Keyboard navigation for answer options
document.addEventListener('keydown', (e) => {
    // Only allow keyboard navigation if quiz play screen is active and submit button is enabled
    if (quizPlayScreen.classList.contains('active') && !submitAnswerBtn.disabled) {
        const options = Array.from(answerOptionsDiv.children);
        if (options.length === 0) return;

        let currentActiveButton = document.querySelector('.answer-option-btn.selected');
        let currentActiveIndex = currentActiveButton ? parseInt(currentActiveButton.dataset.originalIndex) : -1;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            let nextIndex = currentActiveIndex;
            do {
                nextIndex = (nextIndex + 1) % options.length;
                // Find the button corresponding to nextIndex based on its data-original-index
                currentActiveButton = options.find(btn => parseInt(btn.dataset.originalIndex) === nextIndex);
            } while (currentActiveButton && currentActiveButton.disabled && nextIndex !== currentActiveIndex); // Prevent infinite loop if all are disabled

            if (currentActiveButton && !currentActiveButton.disabled) {
                currentActiveButton.click();
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            let prevIndex = currentActiveIndex;
            do {
                prevIndex = (prevIndex - 1 + options.length) % options.length;
                // Find the button corresponding to prevIndex based on its data-original-index
                currentActiveButton = options.find(btn => parseInt(btn.dataset.originalIndex) === prevIndex);
            } while (currentActiveButton && currentActiveButton.disabled && prevIndex !== currentActiveIndex); // Prevent infinite loop if all are disabled

            if (currentActiveButton && !currentActiveButton.disabled) {
                currentActiveButton.click();
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedAnswerIndex !== null && !submitAnswerBtn.disabled) {
                submitAnswerBtn.click();
            }
        }
    }
});

// Ensure favicon is set for quiz page
favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>';
