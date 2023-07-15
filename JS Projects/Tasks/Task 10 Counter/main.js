const counterNumber = document.querySelector(".counterNumber");
const increaseBtn = document.querySelector(".increaseBtn");
const resetBtn = document.querySelector(".resetBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");

let currentNumber = 0;

increaseBtn.addEventListener("click", () => {
  currentNumber++;
  counterNumber.innerHTML = currentNumber;
  if (currentNumber > 0) {
    counterNumber.style.color = "green";
  }
});

decreaseBtn.addEventListener("click", () => {
  currentNumber--;
  counterNumber.innerHTML = currentNumber;
  if (currentNumber < 0) {
    counterNumber.style.color = "red";
  }
});

resetBtn.addEventListener("click", () => {
  currentNumber = 0;
  counterNumber.innerHTML = currentNumber;
  if (currentNumber === 0) {
    counterNumber.style.color = "black";
  }
});
