function setProgress(percent) {
  document.getElementById('progress').style.width = percent + '%';
}

function wrongAnswer() {
  const errorMsg = document.getElementById('error-msg');
  errorMsg.innerText = "Adada! History Class-la Kavanippala Pola? Try Again! 😜";
}

function correctStage1() {
  document.getElementById('stage1').classList.remove('active');
  document.getElementById('stage2').classList.add('active');
  setProgress(50);
}

function goToStage3() {
  document.getElementById('stage2').classList.remove('active');
  document.getElementById('stage3').classList.add('active');
  setProgress(75);
}

function hoistFlag() {
  const flag = document.getElementById('flag');
  flag.style.bottom = '90px'; // Flag Up Animation

  setTimeout(() => {
    document.getElementById('stage3').classList.remove('active');
    document.getElementById('stage4').classList.add('active');
    setProgress(100);

    // Confetti Blast Effect
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF9933', '#FFFFFF', '#138808']
    });
  }, 2200);
}
