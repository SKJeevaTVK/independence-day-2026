/* =========================================
   INDEPENDENCE DAY 2026
   Interactive Website
   Created by Jeeva 🇮🇳
========================================= */


/* =========================================
   GLOBAL ELEMENTS
========================================= */

const pages = document.querySelectorAll(".page");

const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

const indianFlag = document.getElementById("indianFlag");
const raiseBtn = document.getElementById("raiseBtn");

const flagMessage = document.getElementById("flagMessage");
const flagNextBtn = document.getElementById("flagNextBtn");

const petalsContainer = document.getElementById("petals");


/* =========================================
   QUIZ ELEMENTS
========================================= */

const questionNumber =
    document.getElementById("questionNumber");

const progressFill =
    document.getElementById("progressFill");

const difficulty =
    document.getElementById("difficulty");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("options");

const quizNextBtn =
    document.getElementById("quizNextBtn");

const quizResult =
    document.getElementById("quizResult");

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;


/*
   BEGIN button click
   Music starts here because browsers
   usually block automatic audio.
*/

function startExperience() {

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.textContent = "🔊";

        })
        .catch(() => {

            musicPlaying = false;

        });


    goToPage(2);
}


/* =========================================
   MUTE / UNMUTE
========================================= */

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.textContent = "🔊";

            })
            .catch(() => {});

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.textContent = "🔇";
    }
}


/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage(pageNumber) {

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById("page" + pageNumber);


    if (targetPage) {

        targetPage.classList.add("active");

    }


    /*
       Start quiz when Page 4 opens
    */

    if (pageNumber === 4) {

        startQuiz();

    }

}


/* =========================================
   FLAG RAISING
========================================= */

let flagRaised = false;


function raiseFlag() {

    if (flagRaised) {
        return;
    }


    flagRaised = true;


    /*
       Disable button
    */

    raiseBtn.disabled = true;

    raiseBtn.style.opacity = "0.5";

    raiseBtn.style.cursor = "default";


    /*
       Raise the flag
    */

    indianFlag.classList.add("raised");


    /*
       Wait until flag reaches top
    */

    setTimeout(function() {


        /*
           Start waving
        */

        indianFlag.classList.add("flying");


        /*
           Show Jai Hind
        */

        flagMessage.classList.add("show");


        /*
           Flower / petal animation
        */

        createPetals();


    }, 3000);


    /*
       Show NEXT after another 3 seconds
    */

    setTimeout(function() {

        flagNextBtn.classList.remove("hidden");

    }, 6000);

}


/* =========================================
   CREATE FLOWER PETALS
========================================= */

function createPetals() {

    /*
       Create around 35 petals
    */

    for (let i = 0; i < 35; i++) {

        const petal =
            document.createElement("div");


        petal.classList.add("petal");


        /*
           Random horizontal position
        */

        petal.style.left =
            Math.random() * 100 + "%";


        /*
           Random falling speed
        */

        const duration =
            3 + Math.random() * 4;

        petal.style.animationDuration =
            duration + "s";


        /*
           Random delay
        */

        petal.style.animationDelay =
            Math.random() * 2 + "s";


        /*
           Indian flower-like colours
        */

        const colors = [
            "#ff9933",
            "#ffffff",
            "#138808",
            "#ffd166"
        ];

        petal.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        /*
           Random size
        */

        const size =
            7 + Math.random() * 7;

        petal.style.width =
            size + "px";

        petal.style.height =
            size * 1.5 + "px";


        petalsContainer.appendChild(petal);


        /*
           Remove after animation
        */

        setTimeout(function() {

            petal.remove();

        }, 8000);

    }

}


/* =========================================
   QUIZ QUESTIONS
========================================= */


/*
   10 BASIC
*/

const basicQuestions = [

    {
        question:
            "India celebrates Independence Day on which date?",

        options: [
            "January 26",
            "August 15",
            "October 2",
            "November 14"
        ],

        answer: 1
    },


    {
        question:
            "How many main colours are there in the Indian National Flag?",

        options: [
            "2",
            "3",
            "4",
            "5"
        ],

        answer: 1
    },


    {
        question:
            "What is present at the centre of the Indian National Flag?",

        options: [
            "Lotus",
            "Star",
            "Ashoka Chakra",
            "Lion"
        ],

        answer: 2
    },


    {
        question:
            "How many spokes does the Ashoka Chakra have?",

        options: [
            "18",
            "20",
            "24",
            "32"
        ],

        answer: 2
    },


    {
        question:
            "What is India's National Anthem?",

        options: [
            "Vande Mataram",
            "Jana Gana Mana",
            "Sare Jahan Se Achha",
            "Ae Mere Watan"
        ],

        answer: 1
    },


    {
        question:
            "Who was the first Prime Minister of independent India?",

        options: [
            "Sardar Patel",
            "Dr. Rajendra Prasad",
            "Jawaharlal Nehru",
            "Mahatma Gandhi"
        ],

        answer: 2
    },


    {
        question:
            "What is the National Animal of India?",

        options: [
            "Lion",
            "Tiger",
            "Elephant",
            "Peacock"
        ],

        answer: 1
    },


    {
        question:
            "What is the National Bird of India?",

        options: [
            "Peacock",
            "Eagle",
            "Parrot",
            "Swan"
        ],

        answer: 0
    },


    {
        question:
            "When is Republic Day celebrated in India?",

        options: [
            "August 15",
            "January 26",
            "October 2",
            "November 14"
        ],

        answer: 1
    },


    {
        question:
            "When is Mahatma Gandhi's birthday celebrated?",

        options: [
            "August 15",
            "January 26",
            "October 2",
            "November 14"
        ],

        answer: 2
    }

];


/*
   10 INTERMEDIATE
*/

const intermediateQuestions = [

    {
        question:
            "Who designed the Indian National Flag?",

        options: [
            "Pingali Venkayya",
            "Rabindranath Tagore",
            "Sardar Patel",
            "Bankim Chandra Chattopadhyay"
        ],

        answer: 0
    },


    {
        question:
            "On which date was the Indian National Flag officially adopted by the Constituent Assembly?",

        options: [
            "August 15, 1947",
            "July 22, 1947",
            "January 26, 1950",
            "August 9, 1942"
        ],

        answer: 1
    },


    {
        question:
            "In which year did the Quit India Movement begin?",

        options: [
            "1930",
            "1935",
            "1942",
            "1947"
        ],

        answer: 2
    },


    {
        question:
            "The slogan 'Do or Die' is associated with which movement?",

        options: [
            "Non-Cooperation Movement",
            "Civil Disobedience Movement",
            "Quit India Movement",
            "Swadeshi Movement"
        ],

        answer: 2
    },


    {
        question:
            "The Dandi March was associated with which movement?",

        options: [
            "Quit India Movement",
            "Salt Satyagraha",
            "Non-Cooperation Movement",
            "Home Rule Movement"
        ],

        answer: 1
    },


    {
        question:
            "When was the Constitution of India adopted?",

        options: [
            "August 15, 1947",
            "November 26, 1949",
            "January 26, 1950",
            "July 22, 1947"
        ],

        answer: 1
    },


    {
        question:
            "When did the Constitution of India come into force?",

        options: [
            "November 26, 1949",
            "August 15, 1947",
            "January 26, 1950",
            "January 30, 1948"
        ],

        answer: 2
    },


    {
        question:
            "Who wrote 'Vande Mataram'?",

        options: [
            "Rabindranath Tagore",
            "Bankim Chandra Chattopadhyay",
            "Sarojini Naidu",
            "Subramania Bharati"
        ],

        answer: 1
    },


    {
        question:
            "The Jallianwala Bagh massacre took place in which year?",

        options: [
            "1915",
            "1919",
            "1922",
            "1930"
        ],

        answer: 1
    },


    {
        question:
            "In which year did the Non-Cooperation Movement begin?",

        options: [
            "1919",
            "1920",
            "1927",
            "1930"
        ],

        answer: 1
    }

];


/*
   10 HARD
*/

const hardQuestions = [

    {
        question:
            "Where was the first session of the Indian National Congress held?",

        options: [
            "Calcutta",
            "Madras",
            "Bombay",
            "Delhi"
        ],

        answer: 2
    },


    {
        question:
            "Who was the first president of the Indian National Congress?",

        options: [
            "Dadabhai Naoroji",
            "W.C. Bonnerjee",
            "Gopal Krishna Gokhale",
            "Surendranath Banerjee"
        ],

        answer: 1
    },


    {
        question:
            "The 'Purna Swaraj' resolution was adopted at which Congress session?",

        options: [
            "Surat, 1907",
            "Lucknow, 1916",
            "Lahore, 1929",
            "Karachi, 1931"
        ],

        answer: 2
    },


    {
        question:
            "Who presided over the Lahore Congress Session of 1929?",

        options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel",
            "Subhas Chandra Bose"
        ],

        answer: 1
    },


    {
        question:
            "In which year did the Simon Commission arrive in India?",

        options: [
            "1925",
            "1927",
            "1928",
            "1930"
        ],

        answer: 2
    },


    {
        question:
            "The Gandhi-Irwin Pact was signed in which year?",

        options: [
            "1929",
            "1930",
            "1931",
            "1932"
        ],

        answer: 2
    },


    {
        question:
            "Who is associated with the quote 'Give me blood, and I will give you freedom'?",

        options: [
            "Bhagat Singh",
            "Subhas Chandra Bose",
            "Jawaharlal Nehru",
            "Sardar Patel"
        ],

        answer: 1
    },


    {
        question:
            "Who led the Indian National Army during the later phase of India's freedom struggle?",

        options: [
            "Sardar Patel",
            "Subhas Chandra Bose",
            "Rajendra Prasad",
            "C. Rajagopalachari"
        ],

        answer: 1
    },


    {
        question:
            "In which year did the Cabinet Mission come to India?",

        options: [
            "1942",
            "1945",
            "1946",
            "1947"
        ],

        answer: 2
    },


    {
        question:
            "The Indian Independence Act, 1947 was passed by which Parliament?",

        options: [
            "Indian Parliament",
            "British Parliament",
            "United Nations",
            "Constituent Assembly"
        ],

        answer: 1
    }

];


/* =========================================
   RANDOM QUESTION FUNCTION
========================================= */

function getRandomQuestion(array) {

    const randomIndex =
        Math.floor(
            Math.random() * array.length
        );

    return array[randomIndex];
}


/* =========================================
   SELECT 3 FROM EACH CATEGORY
========================================= */

function getThreeRandom(array) {

    /*
       Copy array so original questions
       are never changed.
    */

    const copy = [...array];


    /*
       Fisher-Yates shuffle
    */

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }


    return copy.slice(0, 3);
}


/* =========================================
   QUIZ VARIABLES
========================================= */

let quizQuestions = [];

let currentQuestion = 0;

let correctAnswers = 0;

let selectedAnswer = false;


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    /*
       Reset everything
    */

    currentQuestion = 0;

    correctAnswers = 0;

    selectedAnswer = false;


    /*
       Pick 3 Basic
    */

    const basic =
        getThreeRandom(
            basicQuestions
        );


    /*
       Pick 3 Intermediate
    */

    const intermediate =
        getThreeRandom(
            intermediateQuestions
        );


    /*
       Pick 3 Hard
    */

    const hard =
        getThreeRandom(
            hardQuestions
        );


    /*
       Final 9 questions
       Difficulty order preserved
    */

    quizQuestions = [
        ...basic,
        ...intermediate,
        ...hard
    ];


    /*
       Reset result
    */

    quizResult.classList.add("hidden");

    document
        .querySelector(".question-box")
        .classList.remove("hidden");

    quizNextBtn.classList.add("hidden");


    /*
       Show first question
    */

    showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const current =
        quizQuestions[currentQuestion];


    selectedAnswer = false;


    /*
       Question number
    */

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " / 9";


    /*
       Progress
    */

    const progress =
        ((currentQuestion + 1) / 9) * 100;

    progressFill.style.width =
        progress + "%";


    /*
       Difficulty
    */

    if (currentQuestion < 3) {

        difficulty.textContent =
            "BASIC";

        difficulty.className =
            "difficulty basic";

    }

    else if (currentQuestion < 6) {

        difficulty.textContent =
            "INTERMEDIATE";

        difficulty.className =
            "difficulty intermediate";

    }

    else {

        difficulty.textContent =
            "HARD";

        difficulty.className =
            "difficulty hard";

    }


    /*
       Question text
    */

    questionText.textContent =
        current.question;


    /*
       Clear old options
    */

    optionsContainer.innerHTML = "";


    /*
       Create options
    */

    current.options.forEach(
        function(option, index) {

            const button =
                document.createElement("button");


            button.classList.add("option");


            button.textContent =
                option;


            button.onclick =
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                };


            optionsContainer.appendChild(
                button
            );

        }
    );


    /*
       Hide next button
    */

    quizNextBtn.classList.add("hidden");

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    /*
       Prevent multiple answers
    */

    if (selectedAnswer) {
        return;
    }


    selectedAnswer = true;


    const current =
        quizQuestions[currentQuestion];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    /*
       Disable all options
    */

    allOptions.forEach(
        function(button) {

            button.classList.add(
                "disabled"
            );

        }
    );


    /*
       Correct answer
    */

    if (
        selectedIndex ===
        current.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );

        correctAnswers++;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );

    }


    /*
       Show correct answer
    */

    allOptions[
        current.answer
    ].classList.add(
        "correct"
    );


    /*
       Show next button
    */

    quizNextBtn.classList.remove(
        "hidden"
    );

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (!selectedAnswer) {
        return;
    }


    currentQuestion++;


    /*
       More questions
    */

    if (
        currentQuestion <
        quizQuestions.length
    ) {

        showQuestion();

    }

    else {

        showQuizResult();

    }

}


/* =========================================
   QUIZ RESULT
========================================= */

function showQuizResult() {

    /*
       Hide question area
    */

    document
        .querySelector(".question-box")
        .classList.add("hidden");


    quizNextBtn.classList.add(
        "hidden"
    );


    /*
       Show result
    */

    quizResult.classList.remove(
        "hidden"
    );


    /*
       Perfect score
    */

    if (correctAnswers === 9) {

        resultIcon.textContent =
            "🏆";

        resultTitle.textContent =
            "PERFECT!";

        resultMessage.textContent =
            "9/9 — You nailed it! 🇮🇳 " +
            "A proud Indian spirit!";

    }

    /*
       Mistakes
    */

    else {

        resultIcon.textContent =
            "🇮🇳";

        resultTitle.textCont
