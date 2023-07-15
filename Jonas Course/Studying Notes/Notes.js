// Course Notes

// You can open the console by clicking Ctrl + Shift + J

// Values of variables can be: 1- Object OR 2- Premitive (Everything Else)

// Look at data types picture in phone

/*

Let:
1- we can declear it in a line and assign its value in another line
2- we can reassign the value of its variable and change it in another line

Const:
1- we can't declear it in a line and assign its value in another line (you should assign its value in the same line)
2- we can't reassign its value and change it in another value

*/

// This website is important for operators in JS >>> mdn operator precedence mdn web docs (Table)

/*
(Section 2) Challenge #1:
const markMass1 = 78;
const johnMass1 = 92;
const markHeight1 = 1.69;
const johnHeight1 = 1.95;

const markBMI = markMass1 / markHeight1 ** 2;
const johnBMI = johnMass1 / johnHeight1 ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
console.log(markBMI, johnBMI);

const markMass2 = 95;
const johnMass2 = 85;
const markHeight2 = 1.88;
const johnHeight2 = 1.76;

const markBMI = markMass2 / markHeight2 ** 2;
const johnBMI = johnMass2 / johnHeight2 ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
console.log(markBMI, johnBMI);
*/
// To write multible lines in console:
//console.log("Abdelrahman \n Mostafa \n Ahmed");
//OR
/*console.log(`Line 1
Line 2
Line 3 ✌`); //To make emoji = Windows + .
*/
//(Section 2) Challenge #2:
/*if (markBMI > johnBMI) {
  console.log(`Mark's
  BMI ${markBMI} is higher than John's ${johnBMI} !`);
} else {
  console.log(`Mark's BMI ${markBMI} is lower than John's ${johnBMI} !`);
}

console.log(Number(22), String(22));
*/
// Type Coerction = JS automatically conver numbers to strings such as the next example:

/*console.log("I am " + 21 + " years old");

// Automatically convert strings to numbers
console.log("30" - "7");
console.log("2" * "11");
console.log("24" / "2");
*/
// But take care that: ( + ) make a concatenate with strings

// 6 Falsy values: 0, '', undefined, null, NaN, false (For Example:)
/*
console.log(Boolean("Abdo"));
console.log(Boolean(undefined));
let money = 0;
if (money) {
  console.log("Nice, Don't waste it all");
} else {
  console.log("You should get a job!");
}
*/
/*

Equality operators:
1 = >>> To assign a value
2 == >>> To compare between two values if they are equal or not whatever there is a string in a side and number in another side 
3 === >>> To compare between two values and also the data types of them not only the values

FOR EXAMPLE:

*/
/*
const age = "18";

if (age === 18) console.log("Success #1");
if (age == 18) console.log("Success #2");
*/
// Very good example for bolean logic = picture in phone
/*
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("You can already drive as you like!");
} else {
  console.log("Sorry, But someone else should drive...");
}
*/

// (Section 2) Challenge #3:
/*
const averageDolphins = (96 + 88 + 180) / 3;
const averageKoalas = (88 + 96 + 180) / 3;

console.log(averageDolphins, averageKoalas);

if (averageKoalas > averageDolphins) {
  console.log("Koalas team won 🏆");
} else if (averageKoalas < averageDolphins) {
  console.log("Dolphins team won 🏆");
} else {
  console.log("Both Dolphons and Koalas team are draw");
}

// Bonus #1
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Congratolations for Bonus #1 Dolphins");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Congratolations for Bonus #1 Koalas");
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log("Both win the trophy!!");
} else {
  console.log("No one won Bonus Bonus #1");
}
*/

// The switch Statement
/* 
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

// Another condition and this method can write in the console inside ${...}

/*
let age = 21;

age >= 18 ? console.log('I like to drive a car') : console.log('I do not like to drive a car');

const driving = age >= 18 ? "Allowed ✔" : "Not Allowed ❌";
console.log(driving);

let driving2;
if (age >= 18) {
  driving2 = "Allowed ✔";
} else {
  driving2 = "Not Allowed ❌";
}
console.log(driving2);
*/

"use strict";

// Functions
/*
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(10, 0));
console.log(fruitProcessor(8, 4));

console.log(describeCountry("Finald", 6, "Helsinki"));

///////////////////////////////////////
// Function Declarations vs. Expressions

//////// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

//////// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//////// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));



function percentageWorld1(country, population, percentage) {
  return `${country} has ${population} million people, So it's about ${Math.round(
    percentage
  )}% of the world population.`;
}
const county1 = percentageWorld1("Egypt", 100, (100 / 7900) * 100);
const county2 = percentageWorld1("USA", 330, (330 / 7900) * 100);
const county3 = percentageWorld1("China", 1441, (1441 / 7900) * 100);
console.log(`
${county1}
${county2}
${county3}
`);

ORRRRR
const percentageWorld2 = (country, population, percentage) => {
  return `${country} has ${population} million people, So it's about ${Math.round(
    (percentage / 7900) * 100
  )}% of the world population.`;
};
console.log(percentageWorld2("China", 1441, 1441));
///////////////////////Very Good Example :
function calcYear(birthYear) {
  return 2023 - birthYear;
}

function calcRetirement(year) {
  const age = calcYear(year); // = your age 
  const retirement = 60 - age; // = the period till you get retired
  if (retirement > 0) {
    return retirement;
  } else {
    return "Already Retired";
  }
}
console.log(calcRetirement(2002));

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(
      `Dolphins team is winner 🏆(${avgDolphins} vs. ${avgKoalas})`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    return console.log(
      `Koalas team is winner 🏆(${avgKoalas} vs. ${avgDolphins})`
    );
  } else {
    return console.log("No one won...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
///////////

>>> New method to create array
const arr = new Array(... , ... , ...);

>>> It will give the last value of the array
console.log(friends[friends.length - 1]);

/////////////////////////

>>> Add elements
arr.push() = to last
arr.unshift() = to first
>>> Remove elements
arr.pop(); // Last
arr.shift(); // First
console.log(friends);

////////////////////////////GOOD EXAMPLE:
const tip = (bill) => (50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

const newObj = {
  myName: "Abdelrahman",
  myAge: 21,
  myCareer: "Programmer",
  myHobbies: ["Coding", "Reading", "Travilling"],
};
// >>>>>>>> We can define the object element by this way

// #1 Bracket Notation

console.log(newObj["myName"]);

// #2

const namee = "Name";
console.log(newObj["my" + namee]);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  // Challenge
  // jonas is a 46 yaers old teacher, and has a/no drivers license

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSmmary: function () {
    return `${
      this.firstName
    } is a ${this.calcAge()} years old teacher, and has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};
console.log(jonas.getSmmary());

// Challenge #3
const mark = {
  markName: "Mark",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  johnName: "John",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

john.calcBMI();
mark.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.markName}'s BMI (${Math.floor(mark.BMI)}) is higher than ${
      john.johnName
    }'s BMI (${Math.floor(john.BMI)})!`
  );
} else if (mark.BMI < john.BMI) {
  console.log(
    `${john.johnName}'s BMI (${Math.floor(john.BMI)}) is higher than ${
      mark.markName
    }'s BMI (${Math.floor(mark.BMI)})!`
  );
}

// Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}



// Challenge #4
const calcTip = (bill) =>
  50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  //OR const tip = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

////////////////////////////////////////////
////Object.assign(... , ...) === is to merge   between two elements ////////
///////////////////////////////////////////

/////////////// START DATA STRUCTURE /////////////// 

// We can make this redestructuring when you call data from API's

const arr = [1, 2, 3];
// console.log(arr);
// Destructuring
let [x, y, z] = arr;
// console.log(x, y, z);
const [a, , c] = arr;
// console.log(a, c);
// reassign by destructuring & no need to write let or const
[z, x, y] = [x, y, z];
// console.log(x, y, z);

let newObj = {
  firstName: "Abdelrahman",
  lastName: "Mostafa",
  age: 21,
  friends: ["Amira", "Amira1", "Amira!"],
};

const { firstName, lastName, friends } = newObj;

console.log(firstName, lastName, friends);

const {
  firstName: myName,
  lastName: fatherName,
  friends: myBestFriend,
} = newObj;

console.log(myName, fatherName, myBestFriend);

const nestedObj = {
  object: {
    job1: "front-end",
    job2: "back-end",
  },
};

const {
  object: { job1, job2 },
} = nestedObj;
console.log(job1, job2);


// To add an elements to the array ((...arr) = The spread operator) and it takes the elements of the array in shape of individuals not as an array
const newArr = [3, 4, 5];
const newGoodArr = [1, 2, ...newArr];
// console.log(newGoodArr);
// console.log(...newGoodArr, ...newArr);
const str = "Abdelrahman";
const letters = [...str];
console.log(letters);
console.log(str);
console.log(...str);

const foodOrder = (ord1, ord2, ord3) => {
  console.log(
    `Hello, You requseted three food oredrs which they are: ${ord1}, ${ord2} and ${ord3}`
  );
};

const theOrder = [prompt("Order 1"), prompt("Order 2"), prompt("Order 3")];
foodOrder(...theOrder);
// (ORRR) foodOrder(prompt("Order 1"), prompt("Order 2"), prompt("Order 3"));


// to select two elements and convert it into a normal strings & the rest of the array will be in an array
const [first, second, ...others] = ["Abdelrahman", "Amira", "Mostafa", "Fathy"];
console.log(first, second, others);

// and you can put a certain parameter to make it the main and write a spread operator to make it optional
const newFunc = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
newFunc(2, 3, 5);
newFunc(8, 8, 4);
const x = [10, 12, 8];
newFunc(...x);

// it will get the first truthy value and skip falsy value
console.log(0 || undefined || "Abdo");

// it will stop at falsy value and return it but if all are truthy value it will return the last element
console.log(33 && "Abdo" && undefined && "jonas");
console.log(0 && "Amira" && null);
console.log("Abdo" && "Amira");

const rest1 = {
  name: "Abdo",
  wife: "Amira",
  age: 21,
};

const rest2 = {
  name: "Amira",
  hasbund: "Abdo",
};

//// >>>>> assignment operator
// rest1.age = rest1.age || 21;
// rest2.age = rest2.age || 22;
// Exactly the same but in another and better way
rest1.age ||= 21;
rest2.age ||= 22;
console.log(rest1, rest2);

let frontEnd = ["HTML", "CSS", "Bootstrab5", "JS", "React js"];
let backEnd = ["HTML", "PHP", "Node.js"];

const fullStack = [...frontEnd, ...backEnd];

for (const element of fullStack) console.log(element);

for (const element of fullStack.entries()) console.log(element);

// to make two variables for the index number and the element
for (const [i, element] of fullStack.entries()) console.log(i + 1, element);

const frontEnd = {
  lang1: "HTML",
  lang2: "CSS",
  framework1: "Bootstrab5",
  lang3: "JS",
  framework2: "React js",
};

// to call up the object from outside
const myPortfolio = {
  frontEnd,
};
console.log(myPortfolio);

// optional chaining = to make sure if the element is exist or no without making error and when we get informations from the API
console.log(frontEnd?.lang4);

// to get the name of the inner object elements
for (const languages of Object.keys(frontEnd)) console.log(languages);
const elements = Object.keys(frontEnd);
console.log(elements);

const values = Object.values(frontEnd);
console.log(values);

const resturant = {
  aLL: {
    opening: {
      sun: 8,
      mon: 8,
      tue: 8,
      wed: 8,
      thu: 8,
    },

    closing: {
      fri: "closed",
      sat: "closed",
    },
  },
};

const enteries = Object.entries(resturant);
console.log(enteries);
for (const [one, { opening, closing }] of enteries) {
  console.log(opening, closing);
}


// to prevent any repetition and i will not take it in consider
const newFamily = new Set(["Abdo", "Abdo", "Amira", "Amira"]);
console.log(newFamily);
console.log(newFamily.size);


// to make an object and select the key and its value
const rest = new Map();
rest.set("firstName", "Abdo");
rest.set("lastName", "Mostafa");
rest.set("age", 21);

console.log(rest);
console.log(rest.get("age"));


// Challenge #3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = new Set(gameEvents.values());
console.log(events);

const time = [...gameEvents.keys()];
console.log(time);

const myName = "abdELrahman";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName[0].toUpperCase() + myName.toLowerCase().slice(1));

// to replace an element with another
const priceGB = "288,97£";
const priceUS = priceGB.replaceAll("£", "$").replace(",", ".");
console.log(priceGB);
console.log(priceUS);
// to replace all certain elements with another
const nums = "222244456722457";
console.log(nums.replaceAll("2", "7"));

const test = "Abdo2379";
// to check if the string has a certain element
console.log(test.includes("Abdo"));
// to check if the string starts with a certain element 
console.log(test.startsWith("A"));
// to check if the string ends with a certain element
console.log(test.endsWith("9"));

///////>>>>> Search about split and join

// to repeat the element
console.log("Abdo ".repeat(4));

/////////////// END DATA STRUCTURE /////////////// 
//////////////////////////////////////////////////////////
//////////// Start  Closer Look At Functions //////////// 

>>>(128)
// to set a default value for parameter if it's haven't a value
const newFunc = function (flightNum, numPassengers = 1, price = 10) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 10;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

newFunc("LH123", 23, 100);
newFunc("LH123", 23);
newFunc("LH123");

(129)


// we can change the value of the global object through parameters in the function

const flight = "LH234";
const Abdo = {
  myName: "Abdelrahman",
  passport: 123456789,
};

const chechking = function (flightNum, passenger) {
  console.log(flightNum);
  passenger.myName = "Mr. " + passenger.myName;
  console.log(passenger);
};

chechking(flight, Abdo);
console.log(Abdo.myName);

(131)

// to convert the string into an array
const myName = "abdo";
const [first, ...other] = myName;

// to add something between indexs in the array
console.log([first.toUpperCase(), ...other].join(""));

// split('') = to count according to alphabets ,      split(' ') = to count according to words

const upperFirstWord = function (str) {
  const [firstWord, ...other] = str.split(" ");

  return [firstWord.toUpperCase(), ...other].join(" ");
};

const transform = function (str, fun) {
  console.log(`transform this: ${fun(str)}`);
};
transform("Abdelrahman is a Front-End Developer", upperFirstWord);

(132)

// functions returning functions
const greet = (greeting) => (name) => {
  console.log(`${greeting}, ${name}`);
};

(133)

const Cairo = {
  airline: "Cairo",
  iataCode: "LH",
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
  },
};
// Cairo.book(123, "Abdelrahman Mostafa");

// to call a function in a new way by switching the second object with the first one >>> Call Method
const Paris = {
  airline: "Paris",
  iataCode: "FR",
  booking: [],
};

const theBooking = Cairo.book;
theBooking.call(Paris, 579, "Mohammed Ahmed");

greet("Hello")("Abdo");

(134)
const Cairo = {
  airline: "Cairo",
  iataCode: "LH",
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
  },
};
// Cairo.book(123, "Abdelrahman Mostafa");

// to call a function in a new way by switching the second object with the first one >>> Call Method
const Paris = {
  airline: "Paris",
  iataCode: "FR",
  booking: [],
};

const theBooking = Cairo.book;
// theBooking.call(Paris, 579, "Mohammed Ahmed");

// greet("Hello")("Abdo");

// Bined Method = borrow a method from another object
// after define cairo.book = ...
const newMethod = theBooking.bind(Paris);
// newMethod(32, "Amr Mohammed");

// Another Example
Cairo.planes = 300;
Cairo.carFunc = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector("#test")
  .addEventListener("click", Cairo.carFunc.bind(Cairo));

const calcTax = (rate, value) => value + value * rate;
const theTax = calcTax.bind(null, 0.23);
console.log(theTax(100));
console.log(theTax(200));
console.log(theTax(400));

// the same function but in another method
const taxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const total = taxRate(0.23);
console.log(total(100));
console.log(total(200));
console.log(total(400));

(137)

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();

(138)

let a;
const b = function () {
  const c = 11;
  a = function () {
    console.log(c * 2);
  };
};
// reach global function firstly
b();
// get a child function secondly
a();

///////////// End Closer Look At Functions ///////////// 
///////////////////////////////////////////////////////

/////////////// Start Working With Arrays /////////////// 
(142)

let arr = ["a", "b", "c", "d", "e"];

// Slice Method
// it's not affect on the original array
console.log(arr.slice(2));
console.log(arr);

console.log(arr.slice(2, 4));
console.log(arr.slice(-1));

// Splice Method
// it affect the original array
let arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.splice(2));
console.log(arr2);

// Reverse Method
let arr3 = ["a", "b", "c", "d", "e"];
let arr33 = ["j", "i", "h", "g", "f"];
console.log([arr3, arr33.reverse()]);

// Concat Method
let arr4 = ["a", "b", "c", "d", "e"];
let arr44 = ["f", "g", "h", "i", "j"];

const concatenate = arr4.concat(arr44);
console.log(concatenate);

// Join Method
let arr5 = ["a", "b", "c", "d", "e"];
console.log(arr5.join(" - "));

(143)

const newArr = [11, 22, 33, 44, 55];

// to get the last element
console.log(newArr[newArr.length - 1]);
console.log(newArr.slice(-1)[0]);

// At Method
console.log(newArr.at(0));
console.log(newArr.at(-1));

(144)

const movements = [122, -334, 167, -21, 754, -123, 490, -14];
// first method
for (let i = 0; i < movements.length; i++) {
  if (movements[i] > 0) {
    console.log(`You deposited ${movements[i]}`);
  } else {
    console.log(`You withdrawed ${Math.abs(movements[i])}`);
  }
}

// second method
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrawed ${Math.abs(movement)}`);
  }
}

// third method = forEach method
// this is a fuction that call itself automatically
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i}: You withdrawed ${Math.abs(movement)}`);
  }
});

(148)
// Challenge #1

const checkDogs = (dogsJulia, dogesKate) => {
  dogsJulia.splice(0, 1);
  dogsJulia.splice(-2);

  const dogs = dogsJulia.concat(dogesKate);
  // console.log(dogs);

  dogs.forEach(function (value, i) {
    value >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${value} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

(149)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// map = forEach loop
const usToEu = 1.1;
const converted = movements.map((mov) => usToEu * mov);
console.log(movements, converted);

// (152)
const deposites = movements.filter(function (mv) {
  return mv > 0;
});
console.log(movements);
console.log(deposites);

// to get positives
const deposites = movements.filter((mv) => mv > 0);
// to get negatives
const withdrawals = movements.filter((mv) => mv < 0);
console.log(movements);
console.log(deposites);
console.log(withdrawals);

(153)

//acc = initial value that will be accumulated to next values
// acc (0) + cur (200) =200(acc) + 450(cur) =650(acc)....
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 10);
console.log(balance);

(155)

const usToEu = 1.1;
// if you see a wrong result you can check the array from map(value, i, arr)
const totalDeposites = movements
  .filter((mv) => mv > 0)
  .map((mv) => mv * usToEu)
  .reduce((acc, mv) => acc + mv, 0);
console.log(Math.round(totalDeposites));

(157)

// this is to get first element that apply the request only
const firstNegative = movements.find((mov) => mov < 0);
console.log(firstNegative);

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

const accounts = [account1, account2];
// to get the array that contains this owner
const getJessica = accounts.find((own) => own.owner === "Jessica Davis");
console.log(getJessica);

(160)
Search about:
findIndex()

(164)

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
// to fill the array from index 0 to index 3 with a constant value
arr.fill(22, 0, 3);
console.log(arr);

// to craete an array its length = 5 and their value are 7
const x = Array.from({ length: 5 }, () => 7);
console.log(x);

// to create an array with length = 10 and variable values
const y = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(y);


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

const accounts = [account1, account2];

//to get each array
const getArrays = accounts.map((acc) => acc.movements);
console.log(getArrays);

//to make just one array containing all arrays
const mergeArray = accounts.map((acc) => acc.movements).flat();
console.log(mergeArray);

// to make the same method but in simple way
const moreSimpleArray = accounts.flatMap((acc) => acc.movements);
console.log(moreSimpleArray);

(172)
// The reminder operator
console.log(10 % 4);
console.log(10 / 4); //10 = 2 * 4 + 2

(175)

// create the date
const theDate = new Date();
console.log(theDate);
console.log(theDate.getFullYear());
console.log(theDate.getMonth() + 1);
console.log(theDate.getDate());
console.log(theDate.getHours());
console.log(theDate.getMinutes());
console.log(theDate.getSeconds());

// so
console.log(
  `${theDate.getDate()}/${
    theDate.getMonth() + 1
  } at ${theDate.getHours()}:${theDate.getMinutes()}`
);

(180)

// to call th function after 3 seconds
setTimeout(() => console.log("Here's your pizza!!"), 3000);
console.log("Waiting...");

setTimeout(
  (ho1, hop2) => console.log(`My hoppies are ${ho1} and ${hop2}`),
  3000,
  "programming",
  "reading books"
);
console.log("Waiting...");

(186)

// to get all buttons of the page
document.getElementsByTagName('button')

// to get all classes 
document.getElementsByClassName('btn')

// to create elements
let message = document.createElement("div");
message.classList.add("btn");
message.textContent = "Welcome, Abdelrahman...!!";
// to put it in the body = put it in the first
body.prepend(message);
// to put it in the last
body.append(message);
// to set before or after the element
body.after(message);
body.before(message);
// to remove the element
message.remove();
message.parentElement.removeChild(message)

(187)

const message = document.createElement("div");
// to get the styles details
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

// to change the element in the root = changing all colors of the page which take this color
document.documentElement.style.setProperty("--color-primary", "orangered");

(188)

// to get the width and height of the viewport
console.log(
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
);

(189)

// Types Of Events
>>>>>>>>> Prefare to search about them all in MDN 

// to make this function just once
const link = document.querySelector('a')
link.removeEventListener('The name of event', the name of the function)

(191)

button.addEventListener('click', function(e){
  console.log(e.target.style.color...) = it means that when you click on button, change its color (THE CHILD)
  
  console.log(e.currentTarget.style.color...) = it means that you click in button the container all will be changed and it = this keyword (THE PARENT)

  (193)

  // to get a certain child in the parent
  const h1 = document.querySelectorAll('h1')
h1.querySelectorAll('.child')
OR
h1.childNodes
h1.children

// first child
h1.firstElementChild
h1.lastElementChild

// parent
h1.parentNode
h1.parentElement

h1.closest('.header')

h1.previousElementSibling;
h1.nextElementSibling;
h1.previousSibling
h1.nextSibling

(197)
// to get the value of any element in the page
const elementHeight = element.getBoundingClientRect().height;

/////////////////////// Start OOP ///////////////////////

(208)

// we can make just one finction (Parent) and copy it for more than one element (child)
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const abdo = new Person("Abdelrahman", 2002);
const jack = new Person("Jack", 1990);
const mira = new Person("Amira", 2001);
console.log(abdo, jack, mira);

(211)

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const abdo = new Person("Abdelrahman", 2002);
const mira = new Person("Amira", 2001);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

abdo.calcAge();
mira.calcAge();

console.log(abdo.__proto__);
console.log(abdo.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(abdo));
console.log(Person.prototype.isPrototypeOf(mira));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(abdo.species, mira.species);

console.log(abdo.hasOwnProperty("firstName"));
console.log(abdo.hasOwnProperty("species"));

(212)
//Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw, mercedes);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}Km/h`);
};

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

(213)

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
const boda = new PersonCl("Abdelrahman", 2002);
console.log(boda);

(214)

const account = {
  owner: "Abdelrahman",
  movements: [100, 200, 300, 400, 500],

  get result() {
    return this.movements.pop();
  },
};
console.log(account.result);

(216)

const ageCalc = {
  calcAge() {
    console.log(2023 - this.birthyear);
  },
};

const abdo = Object.create(ageCalc);
console.log(abdo);
abdo.name = "Abdelrahman";
abdo.birthyear = 2002;
// to turn on the function
abdo.calcAge();

//// el zero oop course
.....
const data = {
  name: "Abdelrahman",
  age: 21,

  // methods
  calcAge() {
    return console.log(this.age * 365);
  },
};
data.calcAge();
.....
//We can reach to a method that starts with a number with bracket notation not with dot notation
const myObj = {
  1: "One",
  2: "Two",
};
console.log(myObj[1]);

const nameVariable = "name";
const newObj = {
  name: "Abdelrahman",
};
console.log(newObj[nameVariable]);
.......
const user = new Object();
user.firstName = "Abdelrahman";
user.lastName = "Mostafa";
user.age = 21;
console.log(
  `${user.firstName} ${user.lastName} is a programmer his age is ${user.age}`
);
.........
const createObj = {
  hasDiscount: true,
  showMessage() {
    return `You${this.hasDiscount ? "" : " Don't"} have discount`;
  },
};
console.log(createObj.hasDiscount);
console.log(createObj.showMessage());

const otherObj = Object.create(createObj);
otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMessage());
.............
const src1 = {
  prob1: "Value 1",
  prob2: "Value 2",
};
const src2 = {
  prob3: "Value 3",
  prob4: "Value 4",
};

const target = {
  prob5: "Value 5",
};

const final = Object.assign(src1, src2, target);
console.log(final);
.................
const user = {
  name: "Abdelrahman",
  country: "Egypt",
  birthYear: 2002,

  age() {
    return 2023 - this.birthYear;
  },
};
const user1 = [6, 9, 4, 5];
// for array
for (let item of user1) {
  console.log(item);
}

// for object
for (let item in user) {
  console.log(`The ${item} is => ${user[item]}`);
}
...........
// Constructor Function
function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price;
}

const phone1 = new Phone(123, "Gold", `${500} $`);
const phone2 = new Phone(345, "Black", `${500} $`);
console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);
console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);
...............................
class User {
  constructor(name) {
    this.name = name;
    this.welcome = function () {
      return `Welcome ${this.name}`;
    };
  }
}

===
function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

console.log(User.prototype);

const user1 = new User("Abdelrahman");
const user2 = new User("Mohammed");
console.log(user1);
// To Add a function in constructor
User.prototype.addTitle = function () {
  return `Mr. ${this.name} `;
};
console.log(user1.addTitle());
// To set a global object that make any object in the page can access to it
Object.prototype.abdo = "Abdelrahman Mostafa Ahmed";
const myObject = { a: 1, b: 2 };
console.log(myObject);
console.log(myObject.abdo);
// Another Example
String.prototype.zFill = function (width) {
  let theResult = this; // = the string which you will write
  // while loop is better in this condition
  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }
  return theResult.toString();
};

console.log("12".zFill(6));
...............
console.log(user1);
console.log(user1.__proto__);
console.log(user1.__proto__ === User.prototype);
console.log(User === User.prototype.constructor);
..........................

class User {
  // This is to make this function or property is for constructor only
  static counter = 0;

  constructor(name) {
    this.name = name;
    User.counter++;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }

  static countObjects = function () {
    return `${this.counter} objects created!!`;
  };
}

const user1 = new User("Abdelrahman");
const user2 = new User("Ahmed");
const user3 = new User("Amr");
console.log(User.countObjects());
.........................................
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  showEmail() {
    return `Your Email Is ${this.email}`;
  }

  writeMessage() {
    return "Parent Class";
  }
}

// inheritance the data from parent class
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMessage() {
    return "You Are Admin";
  }

  writeMessage() {
    return "Child Class";
  }
}
const admin1 = new Admin("Abdelrahman", "abdo@yahoo.com");
console.log(admin1);
..................................
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true, // to be writable and can be changed
  enumerable: true, // when you loop in myObject = the value = 3 will not be included
  configurable: true, // if it's false you will not can to delete anything
  value: 3,
});

Object.defineProperty(myObject, "d", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 4,
});

// make more than on property
Object.defineProperties(myObject, {
  e: { writable: false, enumerable: false, configurable: false, value: 5 },
  f: { writable: false, enumerable: false, configurable: false, value: 6 },
  g: { writable: true, enumerable: true, configurable: true, value: 7 },
});
console.log(myObject);
console.log("_".repeat(50));
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
// to show you which values you can loop for:
console.log(Object.keys(myObject));
/////////////////////// End OOP ///////////////////////

(259)

const promise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("Win");
  } else {
    reject("lose");
  }
});
promise.then((res) => console.log(res)).catch((err) => console.error(err));
*/

/*
to remove any dublicate
const arr = [3, 4, 3, 6];
console.log(...new Set(arr));
/////////////////////
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connected");
  } else rejectFunction("Disconnected");
}).then(
  (resolveValue) => console.log(resolveValue),
  (rejectValue) => console.log(rejectValue)
);
console.log(myPromise);
/////////////////////
function getData() {
  let users = [];
  if (users.length > 0) {
    return Promise.resolve("Users found");
  } else {
    return Promise.reject("Users not found");
  }
}
getData().then(
  (resValue) => console.log(resValue),
  (rejValue) => console.log(rejValue)
);
/////////////////////
async function getData() {
  let users = [1];
  if (users.length > 0) {
    return "Users found";
  } else {
    throw new Error("Users not found");
  }
}
console.log(getData());
////////////////////////
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("right");
  }, 3000);
});

async function readData() {
  console.log("Before Data");
  console.log(await myPromise);
  console.log("After Data");
}
readData();

///////////////////////////////////////////////
// Synchronous
console.log('Abdelrahman');
console.log('Mostafa');
console.log('Ahmed');

// Asynchronous 
>>> First Callback hell
setTimeout(() => {
  console.log("Abdelrahman");
  setTimeout(() => {
    console.log("Mostafa");
    setTimeout(() => {
      console.log("Ahmed");
    }, 2000);
  }, 3000);
}, 4000);

>>> Second Promise

*/
