const generateBtn = document.getElementById("generateBtn");
const result = document.querySelector(".result");
const numOfPasswordLength = document.getElementById("passwordLength");

let passwordData = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "v",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "V",
  "Z",
  "&",
  "$",
  "#",
  "!",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

generateBtn.addEventListener("click", () => {
  let newPassword = "";
  for (let i = 0; i < numOfPasswordLength.value; i++) {
    let random = Math.floor(Math.random() * passwordData.length);
    newPassword += passwordData[random];
  }
  numOfPasswordLength.value = "";
  result.innerHTML = newPassword;
});
