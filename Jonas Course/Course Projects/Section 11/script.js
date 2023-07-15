"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const display = function (movement) {
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}"> 
        ${i + 1} ${type} </div>
        <div class="movements__value">${mov}</div>
    </div>
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcMovements = function (movements) {
  const totalBalance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${totalBalance}£`;
};

const calcSummarySum = (acc) => {
  const ins = acc.movements
    .filter((mv) => mv > 0)
    .reduce((acc, mv) => acc + mv, 0);

  labelSumIn.textContent = `${ins}£`;

  const outs = acc.movements
    .filter((mv) => mv < 0)
    .reduce((acc, mv) => acc + mv, 0);

  labelSumOut.textContent = `${Math.abs(outs)} £`;

  const ints = acc.movements
    .filter((mv) => mv > 0)
    .map((mv) => (mv * acc.interestRate) / 100)
    .reduce((acc, mv) => acc + mv, 0);

  labelSumInterest.textContent = `${ints}£`;
};

// const mainName = "Abdelrahman Mostafa Ahmed"; //to get first letter of each word
// const username = mainName
//   .toLowerCase()
//   .split(" ") // to divide it into words (array)
//   .map((name) => name[0])
//   .join(""); // make a string without spacing

// console.log(username);

// to get username of owners
const usernames = function (accs) {
  accs.map(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
usernames(accounts);
// console.log(accounts);

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
    // if the usename of the array = value you entered
  );

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100";

    inputLoginUsername.value = inputLoginPin.value = "";

    //Display Movements
    calcMovements(currentAccount.movements);

    //Display Balance
    display(currentAccount.movements);

    // Display Summary
    calcSummarySum(currentAccount);
  }
});
