"use strict";
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
}

