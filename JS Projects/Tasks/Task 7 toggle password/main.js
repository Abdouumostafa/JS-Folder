const passwordBtn = document.getElementById("btn");
const passwordInput = document.getElementById("theInput");

passwordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordBtn.innerHTML = "hide";
  } else {
    passwordInput.type = "password";
    passwordBtn.innerHTML = "show";
  }
});
