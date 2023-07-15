"use strict";
// Get Variables
const mainInput = document.getElementById("mainInput");
const submitBtn = document.getElementById("submitBtn");
const warnMessage = document.querySelector(".warn");
const outputs = document.querySelector(".outputs");
const clearAllBtn = document.querySelector(".clearAll");

let arr;
if (localStorage.storage != null) {
  arr = JSON.parse(localStorage.storage);
} else {
  arr = [];
}

// Loop through the array and create messages for each item
for (let i = 0; i < arr.length; i++) {
  const dataArr = arr[i];
  const message = `
    <p> ${dataArr.mainInput} </p>
  `;
  outputs.innerHTML += message;
}

// Create Message After Clicking The Button
submitBtn.addEventListener("click", () => {
  if (mainInput.value != "") {
    let message;
    message = `
  <p> ${mainInput.value} </p>
  `;
    const dataObj = {
      mainInput: mainInput.value,
    };
    arr.push(dataObj);
    localStorage.setItem("storage", JSON.stringify(arr));
    outputs.innerHTML += message;
    mainInput.value = "";
    warnMessage.style.display = "none";
  } else {
    warnMessage.style.display = "block";
  }
});

clearAllBtn.addEventListener("click", () => {
  localStorage.clear();
});
