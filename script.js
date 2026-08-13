const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");
let userName = "";

/* Audio Control */
function startExperience() {
    if (music) {
        music.volume = 0.5;
        music.play().catch(err => console.log("Audio play blocked by browser policy"));
    }
    goToPage(2);
}

function toggleMusic() {
    if (!music) return;
    if (music.paused) {
        music.play();
        if (musicBtn) musicBtn.textContent = "🔊";
    } else {
        music.pause();
        if (musicBtn) musicBtn.textContent = "🔇";
    }
}

/* Page Navigation */
function goToPage(pageNumber) {
    pages.forEach(p => p.classList.remove("active"));
    const targetPage = document.getElementById("page" + pageNumber);
    if (targetPage) targetPage.classList.add("active");

    /* Auto-move Page 2 to Page 3 after 3 seconds */
    if (pageNumber === 2) {
        createPetals();
        setTimeout(function() {
            goToPage(3);
        }, 3000); // 3 seconds
    }
}

/* User Quiz Details Handling */
function submitNameAndStart() {
    const input = document.getElementById("userName");
    if (!input.value.trim()) {
        alert("Please enter your name!");
        return;
    }
    userName = input.value.trim();
    document.getElementById("userInfoBox").classList.add("hidden");
    document.getElementById("quizContainer").classList.remove("hidden");
    startQuiz();
}

/* Petals Creation */
function createPetals() {
    const petalsContainer = document.getElementById("petals");
    if (!petalsContainer) return;
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.style.left = Math.random() * 100 + "%";
        petal.style.animationDuration = (3 + Math.random() * 3) + "s";
        petalsContainer.appendChild(petal);
    }
}

/* Basic Quiz Functions */
function startQuiz() {
    // Add Quiz Initialization here...
}
