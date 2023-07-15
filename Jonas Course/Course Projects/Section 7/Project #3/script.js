"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");
let currentNumber = 0;
let activePlayer = 0;

function swicthPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentNumber = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //toggle = if it's there it will be removed and vice versa
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

rollBtn.addEventListener("click", function () {
  // 1- get random number
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  // 2- get image based on random number and remove hidden class
  dice.classList.remove("hidden");
  dice.src = `dice-${randomNumber}.png`;
  // 3- but the value of the number in the current input + the old & last value
  if (randomNumber !== 1) {
    currentNumber += randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentNumber;
  } else {
    swicthPlayer();
  }
});
// we will save the total score in this array
const scores = [0, 0];

holdBtn.addEventListener("click", function () {
  scores[activePlayer] += currentNumber;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  swicthPlayer();
});

newBtn.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentNumber = 0;
  activePlayer = 0;
});
// console.log(scores[activePlayer]);
