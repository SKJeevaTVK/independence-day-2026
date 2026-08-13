/* =========================
   PAGE ELEMENTS
========================= */

const openingScreen =
    document.querySelector(".opening-screen");

const mainScreen =
    document.getElementById("mainScreen");

const finalScreen =
    document.getElementById("finalScreen");


/* =========================
   START EXPERIENCE
========================= */

function startExperience() {

    // Hide opening screen
    openingScreen.classList.remove("active");

    // Show main screen
    setTimeout(function () {

        mainScreen.classList.add("active");

    }, 700);

}


/* =========================
   SHOW FINAL SCREEN
========================= */

function showFinal() {

    // Hide main screen
    mainScreen.classList.remove("active");

    // Show final screen
    setTimeout(function () {

        finalScreen.classList.add("active");

    }, 700);

}


/* =========================
   INITIAL SCREEN
========================= */

openingScreen.classList.add("active");
