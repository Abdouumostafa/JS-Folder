"use strict";
// Important Notes

/*
NOTE 1:

>>> ( External Files ) 

It is better to make more than one JS file to ease the code for yourself and your team 

///////////////////////////////////////

NOTE 2:

>>> (Error Handling)

1- Make if condition code to consider if the user entered wrong value

2- You can use throw keyword to catch the error in the console and not make any error in the page such as: Undifined Or NaN 

3- Then using try , catch method to handle the error

4- if the value is true it will implement only try and if it is not true it will implement catch and the finally keyword will be implemented whatever it is true or not

///////////////////////////////////////

NOTE 3:

>>> (API)

API is application programming interface that exsist between client (browser) and server and then server get data from database and build api and send it to the browser and the browser read this api and translate in in HTML file and the front end communicate with back end through api

>>> (JSON)

JSON is javascript object notaion and used in api

NOTE 4:

>>> (New If Condition Structure)

condition ? true : condition ? 'not sure' : false

///////////////////////////////////////

NOTE 5:

>>> (map())

map() method is to loop of every item in the array
! Know join() method !

///////////////////////////////////////

NOTE 6:

>>> (filter , find)

filter() > returns all items that match the condition that i set

find() > returns only first matched item

///////////////////////////////////////

NOTE 7:

>>> (reduce)

reduce('acc', 'curr') very good to use when we sum numbers from arrays

///////////////////////////////////////

NOTE 8: 

>>> (Destructuring arrays & objects)
>>> (Rest Operations)

Rest value should be last one always

///////////////////////////////////////

NOTE 9:

>>> (Spread Operator)

///////////////////////////////////////

NOTE 10:

>>> (Array.from())

///////////////////////////////////////

// NOTE 11:

>>> (Call back function)

///////////////////////////////////////

// NOTE 12:

>>> (Promise)

if resolve = fulfilled
if reject = rejected

///////////////////////////////////////

// NOTE 13:

>>> (async / await) SCREEN SHOT 25/4/2023

* async always returns a promise
* await waits till promise settled

///////////////////////////////////////
*/
const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const result = document.querySelector(".result");
const submitButton = document.querySelector("button");

// NOTE 2
const divideNums = (num1, num2) => {
  if (num2 == 0) {
    throw "You shouldn't enter a zero number!!";
  }
  return num1 / num2;
};

submitButton.addEventListener("click", () => {
  try {
    let finalResult = divideNums(+firstInput.value, +secondInput.value);
    result.innerHTML = finalResult;
  } catch (theError) {
    result.innerHTML = theError;
  } finally {
    // console.log("Done");
  }
});

// NOTE 5:
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.map((num) => console.log(num));
// console.log(arr.join(" "));

// NOTE 6:
const people = [
  { name: "Abdelrahman", age: 21, job: "Jonior Front-End Developer" },
  { name: "Abdelrahman", age: 24, job: "Senior Front-End Developer" },
  { name: "Abdelrahman", age: 25, job: "Senior Front-End Developer At Canada" },
];
// filter()
// console.log(people.filter((person) => person.age < 27));

// find()
// console.log(people.find((person) => person.age < 27));

// Note 7:
// console.log(
//   arr.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0)
// );

// Note 8:
const desArr = ["Abdelrahman", "Mostafa", "Ahmed"];
const desObj = { nickName: "Abdo", age: 21, job: "Front-End Developer" };

const [firstName, ...restArray] = desArr;
const { nickName, ...restObject } = desObj;
const getData = (name, ...progLanguages) => console.log(name, progLanguages);

console.log(firstName, restArray.join(" "));
console.log(nickName, restObject);
getData(firstName, "Html", "Css", "JavaScript");

// Note 9:
console.log([...arr, ...desArr]);

// NOTE 10:
const newArray = "Abdo";
console.log(Array.from(newArray));

// Note 11:
const callBack1 = (value) => value.toUpperCase();
const callBack2 = (name, cb) => console.log(cb(`${name} Mostafa`));
callBack2("Abdelrahman", callBack1);

// Note 12:
const myValue = 3;
const random = Math.floor(Math.random() * 5);

// console.log(random);

const myPromise = new Promise((resolve, reject) => {
  if (myValue === random) {
    resolve("Correct");
  } else {
    // reject("Wrong");
  }
});

// console.log(myPromise);
// myPromise
//   .then((data) => console.log(data))
//   .then(() => console.log("okaaaay"))
//   .catch((err) => console.log(err));

// Note 13:
const some = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello React JS");
  }, 3000);
});

async function resultFunc() {
  console.log("Abdo");
  console.log(await some);
  console.log("mostafa");
}
resultFunc();
// console.log(resultFunc());
