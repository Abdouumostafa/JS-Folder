"use strict";

// get all neccessary elements
let againBtn = document.querySelector(".again");
let numBox = document.querySelector(".number");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score2 = 20;
score.textContent = score2;

let highscore2 = 0;

let guessInput;

checkBtn.addEventListener("click", function () {
  guessInput = Number(document.querySelector(".guess").value);
  if (!guessInput) {
    message.textContent = "No Number ⛔";
  } else if (guessInput === randomNum) {
    message.textContent = "Correct Number 🎉";
    numBox.textContent = randomNum;
    document.querySelector("body").style.backgroundColor = "green";
    numBox.style.width = "30rem";
    if (score2 > highscore2) {
      highscore2 = score2;
      highscore.textContent = highscore2;
    }
  } else if (guessInput !== randomNum) {
    if (score2 > 1) {
      message.textContent =
        guessInput > randomNum ? "too higher 📈 " : "too lower 📈";
      score2--;
      score.textContent = score2;
    } else {
      message.textContent = "You lost the game!!😐";
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  numBox.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  score2 = 20;
  score.textContent = score2;
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
