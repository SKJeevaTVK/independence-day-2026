/* =========================================
   INDEPENDENCE DAY 2026 - JAVASCRIPT
   Created by Jeeva 🇮🇳
========================================= */

const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");
const indianFlag = document.getElementById("indianFlag");
const raiseBtn = document.getElementById("raiseBtn");
const flagMessage = document.getElementById("flagMessage");
const flagNextBtn = document.getElementById("flagNextBtn");
const petalsContainer = document.getElementById("petals");

/* QUIZ ELEMENTS */
const questionNumber = document.getElementById("questionNumber");
const progressFill = document.getElementById("progressFill");
const difficulty = document.getElementById("difficulty");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizResult = document.getElementById("quizResult");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");

let musicPlaying = false;

/* =========================================
   START EXPERIENCE (FIXED AUDIO PROMISE)
========================================= */
function startExperience() {
    if (music) {
        music.volume = 0.35;
        let playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    musicPlaying = true;
                    if (musicBtn) musicBtn.textContent = "🔊";
                })
                .catch((error) => {
                    console.log("Audio play blocked or file missing:", error);
                    musicPlaying = false;
                });
        }
    }

    // Force Page Navigation
    goToPage(2);
}

/* =========================================
   TOGGLE MUSIC
========================================= */
function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        music.play()
            .then(() => {
                musicPlaying = true;
                if (musicBtn) musicBtn.textContent = "🔊";
            })
            .catch(() => {});
    } else {
        music.pause();
        musicPlaying = false;
        if (musicBtn) musicBtn.textContent = "🔇";
    }
}

/* =========================================
   PAGE NAVIGATION
========================================= */
function goToPage(pageNumber) {
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById("page" + pageNumber);
    if (targetPage) {
        targetPage.classList.add("active");
    }

    if (pageNumber === 4) {
        startQuiz();
    }
}

/* =========================================
   FLAG RAISING
========================================= */
let flagRaised = false;

function raiseFlag() {
    if (flagRaised) return;
    flagRaised = true;

    if (raiseBtn) {
        raiseBtn.disabled = true;
        raiseBtn.style.opacity = "0.5";
        raiseBtn.style.cursor = "default";
    }

    if (indianFlag) {
        indianFlag.classList.add("raised");
    }

    setTimeout(function() {
        if (indianFlag) indianFlag.classList.add("flying");
        if (flagMessage) flagMessage.classList.add("show");
        createPetals();
    }, 3000);

    setTimeout(function() {
        if (flagNextBtn) flagNextBtn.classList.remove("hidden");
    }, 6000);
}

/* =========================================
   FLOWER PETALS
========================================= */
function createPetals() {
    if (!petalsContainer) return;

    for (let i = 0; i < 35; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "%";

        const duration = 3 + Math.random() * 4;
        petal.style.animationDuration = duration + "s";
        petal.style.animationDelay = Math.random() * 2 + "s";

        const colors = ["#ff9933", "#ffffff", "#138808", "#ffd166"];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];

        const size = 7 + Math.random() * 7;
        petal.style.width = size + "px";
        petal.style.height = size * 1.5 + "px";

        petalsContainer.appendChild(petal);

        setTimeout(function() {
            petal.remove();
        }, 8000);
    }
}

/* =========================================
   QUIZ DATA & LOGIC
========================================= */
const basicQuestions = [
    { question: "India celebrates Independence Day on which date?", options: ["January 26", "August 15", "October 2", "November 14"], answer: 1 },
    { question: "How many main colours are there in the Indian National Flag?", options: ["2", "3", "4", "5"], answer: 1 },
    { question: "What is present at the centre of the Indian National Flag?", options: ["Lotus", "Star", "Ashoka Chakra", "Lion"], answer: 2 },
    { question: "How many spokes does the Ashoka Chakra have?", options: ["18", "20", "24", "32"], answer: 2 },
    { question: "What is India's National Anthem?", options: ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Ae Mere Watan"], answer: 1 },
    { question: "Who was the first Prime Minister of independent India?", options: ["Sardar Patel", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi"], answer: 2 },
    { question: "What is the National Animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: 1 },
    { question: "What is the National Bird of India?", options: ["Peacock", "Eagle", "Parrot", "Swan"], answer: 0 },
    { question: "When is Republic Day celebrated in India?", options: ["August 15", "January 26", "October 2", "November 14"], answer: 1 },
    { question: "When is Mahatma Gandhi's birthday celebrated?", options: ["August 15", "January 26", "October 2", "November 14"], answer: 2 }
];

const intermediateQuestions = [
    { question: "Who designed the Indian National Flag?", options: ["Pingali Venkayya", "Rabindranath Tagore", "Sardar Patel", "Bankim Chandra Chattopadhyay"], answer: 0 },
    { question: "On which date was the Indian National Flag officially adopted by the Constituent Assembly?", options: ["August 15, 1947", "July 22, 1947", "January 26, 1950", "August 9, 1942"], answer: 1 },
    { question: "In which year did the Quit India Movement begin?", options: ["1930", "1935", "1942", "1947"], answer: 2 },
    { question: "The slogan 'Do or Die' is associated with which movement?", options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"], answer: 2 },
    { question: "The Dandi March was associated with which movement?", options: ["Quit India Movement", "Salt Satyagraha", "Non-Cooperation Movement", "Home Rule Movement"], answer: 1 },
    { question: "When was the Constitution of India adopted?", options: ["August 15, 1947", "November 26, 1949", "January 26, 1950", "July 22, 1947"], answer: 1 },
    { question: "When did the Constitution of India come into force?", options: ["November 26, 1949", "August 15, 1947", "January 26, 1950", "January 30, 1948"], answer: 2 },
    { question: "Who wrote 'Vande Mataram'?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Subramania Bharati"], answer: 1 },
    { question: "The Jallianwala Bagh massacre took place in which year?", options: ["1915", "1919", "1922", "1930"], answer: 1 },
    { question: "In which year did the Non-Cooperation Movement begin?", options: ["1919", "1920", "1927", "1930"], answer: 1 }
];

const hardQuestions = [
    { question: "Where was the first session of the Indian National Congress held?", options: ["Calcutta", "Madras", "Bombay", "Delhi"], answer: 2 },
    { question: "Who was the first president of the Indian National Congress?", options: ["Dadabhai Naoroji", "W.C. Bonnerjee", "Gopal Krishna Gokhale", "Surendranath Banerjee"], answer: 1 },
    { question: "The 'Purna Swaraj' resolution was adopted at which Congress session?", options: ["Surat, 1907", "Lucknow, 1916", "Lahore, 1929", "Karachi, 1931"], answer: 2 },
    { question: "Who presided over the Lahore Congress Session of 1929?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], answer: 1 },
    { question: "In which year did the Simon Commission arrive in India?", options: ["1925", "1927", "1928", "1930"], answer: 2 },
    { question: "The Gandhi-Irwin Pact was signed in which year?", options: ["1929", "1930", "1931", "1932"], answer: 2 },
    { question: "Who is associated with the quote 'Give me blood, and I will give you freedom'?", options: ["Bhagat Singh", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"], answer: 1 },
    { question: "Who led the Indian National Army during the later phase of India's freedom struggle?", options: ["Sardar Patel", "Subhas Chandra Bose", "Rajendra Prasad", "C. Rajagopalachari"], answer: 1 },
    { question: "In which year did the Cabinet Mission come to India?", options: ["1942", "1945", "1946", "1947"], answer: 2 },
    { question: "The Indian Independence Act, 1947 was passed by which Parliament?", options: ["Indian Parliament", "British Parliament", "United Nations", "Constituent Assembly"], answer: 1 }
];

function getThreeRandom(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, 3);
}

let quizQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
let selectedAnswer = false;

function startQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    selectedAnswer = false;

    quizQuestions = [
        ...getThreeRandom(basicQuestions),
        ...getThreeRandom(intermediateQuestions),
        ...getThreeRandom(hardQuestions)
    ];

    if (quizResult) quizResult.classList.add("hidden");
    const qBox = document.querySelector(".question-box");
    if (qBox) qBox.classList.remove("hidden");
    if (quizNextBtn) quizNextBtn.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    const current = quizQuestions[currentQuestion];
    selectedAnswer = false;

    if (questionNumber) questionNumber.textContent = "Question " + (currentQuestion + 1) + " / 9";
    if (progressFill) progressFill.style.width = ((currentQuestion + 1) / 9) * 100 + "%";

    if (difficulty) {
        if (currentQuestion < 3) {
            difficulty.textContent = "BASIC";
            difficulty.className = "difficulty basic";
        } else if (currentQuestion < 6) {
            difficulty.textContent = "INTERMEDIATE";
            difficulty.className = "difficulty intermediate";
        } else {
            difficulty.textContent = "HARD";
            difficulty.className = "difficulty hard";
        }
    }

    if (questionText) questionText.textContent = current.question;
    if (optionsContainer) {
        optionsContainer.innerHTML = "";

        current.options.forEach(function(option, index) {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = option;
            button.onclick = function() {
                selectAnswer(index, button);
            };
            optionsContainer.appendChild(button);
        });
    }

    if (quizNextBtn) quizNextBtn.classList.add("hidden");
}

function selectAnswer(selectedIndex, selectedButton) {
    if (selectedAnswer) return;
    selectedAnswer = true;

    const current = quizQuestions[currentQuestion];
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(button => button.classList.add("disabled"));

    if (selectedIndex === current.answer) {
        selectedButton.classList.add("correct");
        correctAnswers++;
    } else {
        selectedButton.classList.add("wrong");
    }

    allOptions[current.answer].classList.add("correct");
    if (quizNextBtn) quizNextBtn.classList.remove("hidden");
}

function nextQuestion() {
    if (!selectedAnswer) return;
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const qBox = document.querySelector(".question-box");
    if (qBox) qBox.classList.add("hidden");
    if (quizNextBtn) quizNextBtn.classList.add("hidden");
    if (quizResult) quizResult.classList.remove("hidden");

    if (correctAnswers === 9) {
        if (resultIcon) resultIcon.textContent = "🏆";
        if (resultTitle) resultTitle.textContent = "PERFECT!";
        if (resultMessage) resultMessage.textContent = "9/9 — You nailed it! 🇮🇳 A proud Indian spirit!";
    } else if (correctAnswers >= 5) {
        if (resultIcon) resultIcon.textContent = "🇮🇳";
        if (resultTitle) resultTitle.textContent = "GREAT JOB!";
        if (resultMessage) resultMessage.textContent = correctAnswers + "/9 — Excellent score! Happy Independence Day!";
    } else {
        if (resultIcon) resultIcon.textContent = "✨";
        if (resultTitle) resultTitle.textContent = "GOOD TRY!";
        if (resultMessage) resultMessage.textContent = correctAnswers + "/9 — Keep learning more about our great nation!";
    }
                                                                    }
   
