const billValue = document.getElementById("billValue");
const percentBox = document.querySelectorAll(".box");
const percentValue = document.querySelectorAll(".percentValue");
const numOfPeople = document.getElementById("numOfPeople");
let customValue = document.querySelector(".specialBox");
const tipResult = document.querySelector(".tipResult");
const totalResult = document.querySelector(".totalResult");
const resetButton = document.querySelector(".resetButton");

percentValue.forEach((percent) => {
  percent.addEventListener("click", () => {
    percentBox.forEach((selectedBox) => {
      selectedBox.addEventListener("click", () => {
        if (billValue.value === "") {
          tipResult.innerHTML = "$0.00";
          totalResult.innerHTML = "$0.00";
          resetButton.classList.add("notActive");
        }
        selectedBox.classList.add("selected");
      });
      resetButton.addEventListener("click", () => {
        billValue.value = "";
        numOfPeople.value = "";
        tipResult.innerHTML = "$0.00";
        totalResult.innerHTML = "$0.00";
        resetButton.classList.add("notActive");
        selectedBox.classList.remove("selected");
      });
      selectedBox.classList.remove("selected");
    });
    let percentBill = Number(percent.innerHTML / 100);
    const tipAmountResult =
      (billValue.value * percentBill) / +numOfPeople.value;

    tipResult.innerHTML = `$${tipAmountResult.toFixed(2)}`;

    const totalAmountResult =
      tipAmountResult + billValue.value / +numOfPeople.value;

    totalResult.innerHTML = `$${totalAmountResult.toFixed(2)}`;
    resetButton.classList.remove("notActive");
  });
});

customValue.addEventListener("click", () => {
  customValue.style.fontSize = "14px";
  customValue.innerHTML = "No Tips Added";
  const tipAmountResult = billValue.value / +numOfPeople.value;
  tipResult.innerHTML = "$0.00";
  totalResult.innerHTML = tipAmountResult;
});
