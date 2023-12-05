function generateCard() {
  let symbols = ["♥", "♦", "♣", "♠"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let symbol = symbols[Math.floor(Math.random() * symbols.length)];
  let number = values[Math.floor(Math.random() * values.length)];

  let top = document.querySelector(".symbol-top");
  let bottom = document.querySelector(".symbol-bottom");
  let mid = document.querySelector(".number");
  let button = document.querySelector(".btn");

  top.innerHTML = symbol;
  bottom.innerHTML = symbol;
  mid.innerHTML = number;
  button.innerHTML = symbol + " " + "New card";

  if (symbol === "♥" || symbol === "♦") {
    top.classList.add("red-symbol");
    bottom.classList.add("red-symbol");
    button.classList.add("red-symbol");
    mid.classList.add("red-symbol");
  } else {
    top.classList.remove("red-symbol");
    bottom.classList.remove("red-symbol");
    button.classList.remove("red-symbol");
    mid.classList.remove("red-symbol");
  }
}

let newCard = document.querySelector(".btn");

newCard.addEventListener("click", generateCard);

let countdown;
let timerDisplay = document.querySelector("#timer");

function startTimer() {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + 10 * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      generateCard();
      startTimer();
      return;
    }

    timerDisplay.textContent = `Time left: ${secondsLeft}`;
  }, 1000);
}

let cardWidthInput = document.querySelector("#card-width");
let cardHeightInput = document.querySelector("#card-height");

cardWidthInput.addEventListener("input", resizeCard);
cardHeightInput.addEventListener("input", resizeCard);

function resizeCard() {
  let card = document.querySelector(".pokerCard");
  let cardWidth = cardWidthInput.value;
  let cardHeight = cardHeightInput.value;

  card.style.width = cardWidth + "px";
  card.style.height = cardHeight + "px";
}

window.onload = function () {
  generateCard();
  startTimer();
};
