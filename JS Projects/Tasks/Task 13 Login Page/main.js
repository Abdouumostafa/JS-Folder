const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const completeData1 = document.querySelector(".complete1");
const completeData2 = document.querySelector(".complete2");
const completeData3 = document.querySelector(".complete3");
const notCompletedData1 = document.querySelector(".notCompleted1");
const notCompletedData2 = document.querySelector(".notCompleted2");
const notCompletedData3 = document.querySelector(".notCompleted3");
const warningMessage1 = document.querySelector(".warning1");
const warningMessage2 = document.querySelector(".warning2");
const warningMessage3 = document.querySelector(".warning3");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
  //Username Validation
  if (usernameInput.value !== "") {
    completeData1.classList.remove("hidden");
    notCompletedData1.classList.add("hidden");
    usernameInput.style.borderColor = "green";
    warningMessage1.classList.add("hidden");
  } else {
    notCompletedData1.classList.remove("hidden");
    completeData1.classList.add("hidden");
    usernameInput.style.borderColor = "red";
    warningMessage1.classList.remove("hidden");
  }

  //Email Validation
  if (
    emailInput.value !== "" &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".")
  ) {
    completeData2.classList.remove("hidden");
    notCompletedData2.classList.add("hidden");
    emailInput.style.borderColor = "green";
    warningMessage2.classList.add("hidden");
  } else {
    notCompletedData2.classList.remove("hidden");
    completeData2.classList.add("hidden");
    emailInput.style.borderColor = "red";
    warningMessage2.classList.remove("hidden");
  }

  //Password Validation
  if (passwordInput.value !== "") {
    completeData3.classList.remove("hidden");
    notCompletedData3.classList.add("hidden");
    passwordInput.style.borderColor = "green";
    warningMessage3.classList.add("hidden");
  } else {
    notCompletedData3.classList.remove("hidden");
    completeData3.classList.add("hidden");
    passwordInput.style.borderColor = "red";
    warningMessage3.classList.remove("hidden");
  }
});
