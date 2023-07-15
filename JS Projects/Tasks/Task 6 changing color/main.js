const rgbColorBtn = document.querySelector(".rgbColorBtn");
const rgbColorBox = document.querySelector(".rgbColorBox");
const randomColorBtn = document.querySelector(".randomColorBtn");
const randomColorBox = document.querySelector(".randomColorBox");

const colors = ["red", "green", "blue"];
let colorIndex = 0;

rgbColorBtn.addEventListener("click", () => {
  rgbColorBox.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if (colorIndex === 3) {
    colorIndex = 0;
  }
});

// 0 1 2 3 4 5 6 7 8 9 A B C D E F

randomColorBtn.addEventListener("click", () => {
  randomColorBox.style.backgroundColor = `#${Math.random()
    .toString(16)
    .slice(2, 8)}`;
});
