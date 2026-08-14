let step = 0;

function openCard() {
  document.querySelector('.card-front').classList.add('hidden');
  document.getElementById('content').classList.remove('hidden');
}

function checkColor(color) {
  const order = ['saffron', 'white', 'green'];
  if (color === order[step]) {
    step++;
    if (step === 3) {
      document.querySelector('.game-box').classList.add('hidden');
      document.getElementById('finalMessage').classList.remove('hidden');
      
      // Tricolor Confetti Blast
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9933', '#FFFFFF', '#138808']
      });
    }
  } else {
    alert("Ops! Order maathi click pannitinga, Saffron -> White -> Green sequence try pannunga! 😊");
    step = 0;
  }
}
