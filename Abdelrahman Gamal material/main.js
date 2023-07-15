// // alert("Hello JS Trip");
"use strict";
var FirstNumber= 7;
console.log( FirstNumber );

var FirstName= "Abdelrahman";
console.log( FirstName);

console.log (typeof(FirstName));
console.log (typeof(FirstNumber));

let newDiv=document.getElementById("hello");
newDiv.innerText= 22/11;

let secNumber= 10;
console.log(secNumber);
secNumber= 20;
console.log(secNumber);

let myNumber= 10;
console.log(myNumber);
myNumber ++ ;
console.log(myNumber);
myNumber --;
console.log(myNumber);
myNumber+= 5;
console.log(myNumber);
myNumber -= 10;
console.log(myNumber);
myNumber *= 2;
console.log(myNumber);

let myDiv=document.getElementById("hello");
myDiv.innerText= myNumber;

if(myDiv.innerText !=10){
    console.log("Failed");
}
else{
    console.log("Passed");
}

/*if(myDiv.innerText== 10){
    alert("Welcome");
}*/



function calculateDegree(){

    let txtDegree= document.getElementById("txtDegree");
    let degreeResult= document.getElementById("degResult");
    if(txtDegree.value <50 && txtDegree.value >=0){
        console.log("Failed");
        degreeResult.innerText= "Failed";
    } 
    else if(txtDegree.value>= 50 && txtDegree.value< 65){
        console.log("Passed");
        degreeResult.innerText= "Passed";
    }
    else if(txtDegree.value>= 65 && txtDegree.value< 80){
        console.log("Good");
        degreeResult.innerText= "Good";
    }
    else if(txtDegree.value>= 80 && txtDegree.value<90){
        console.log("Very Good");
        degreeResult.innerText= "Very Good";
    }
    else if(txtDegree.value >=90 && txtDegree.value <=100){
        console.log("Exellent");
        degreeResult.innerText= "Exellent";
    }

    
    else if(txtDegree.value >100 || txtDegree.value< 0){
        console.log("Please!! Enter Valid Value")
        degreeResult.innerText= "Please!! Enter Valid Value";
    }
}

// Adding Two Numbers
/*
function calculationAdding()
{
    let numberOne=document.getElementById("firstNumber");
    let numberTwo=document.getElementById("secondNumber");
    let theResult=document.getElementById("theResult");
    // Don't forget ( .value )
    theResult.innerText= parseInt( numberOne.value ) + parseInt( numberTwo.value);
}
*/
// Simple Calculator
function calculationAdding(operator)
{
    let numberOne=document.getElementById("firstNumber");
    let numberTwo=document.getElementById("secondNumber");
    let theResult=document.getElementById("theResult");
    // Don't forget ( .value )
    switch (operator)
    {
    case '+':
    theResult.innerText= parseInt( numberOne.value ) + parseInt( numberTwo.value);
    break;
    case '-':
        theResult.innerText= parseInt( numberOne.value ) - parseInt( numberTwo.value);
        break;
    case '/':
        theResult.innerText= parseInt( numberOne.value ) / parseInt( numberTwo.value);
        break;
    case '*':
        theResult.innerText= parseInt( numberOne.value ) * parseInt( numberTwo.value);
        break;
}
}
// And search about other math objects such as: Math.round(numberOne, 3) ROUNDED TO CLOSEST 3 NUMBERS

let name = "Abdelrahman";
let age = 21;

console.log(`My name is ${name} and my age is ${age}.`);

console.log( +'4' + +'4');

// Loops

for(let i=0; i <= 10; i++){
    console.log(i);
}

// LESSON 14 practice
function calculation(){
    let zak=document.getElementById('zakah');
    let final=document.getElementById('final');
    final.innerText= parseInt( zak.value ) * 0.025;
}

let nameTwo = 'Abdo ';
console.log(nameTwo.repeat(3)); //To repeat the string 
console.log(nameTwo.length);
console.log(nameTwo[0]);
console.log(nameTwo.charAt(1));

console.log(Number.isInteger('4'));

console.log(Math.abs(-10));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.round(3.4));
console.log(Math.ceil(7.7));
console.log(Math.floor(10.99));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.min(-1,-2,-3,-4,-5,-6,0,5));

let N = 100;
console.log(typeof N);
console.log(typeof String(N));
console.log(typeof N.toString());

let MyName ='Abdelrahman Mostafa Ahmed';
console.log(MyName[7]);
console.log(MyName.lastIndexOf('f'));
console.log(MyName.slice(1,4,9));
console.log(MyName.includes('f'));

let array= [1,2,3,[4,5,6,[7,8,9]]];
console.log(array[3][3][1]);
array[3][3][0] ='Abdo';
console.log(array);

let ar1 = ['Ahmed', 'Ali', 'Mohammed'];
let ar2 = ['Zizo', 'Yousef', 'Seif'];
console.log(ar1.concat(ar2 , 'Extra').join(' '));

/*let emailask = prompt('Enter Yot Email');
let Email = 'Abdo@gmail.com'; 
console.log(emailask == Email);*/

/* let role = prompt('What is your role?');
if (role == 'Admin'){
    document.write('Update ', 'Create ', 'Delete');
}
else if (role == 'Moderator'){
    document.write('Update ', 'Create');
}
else{
    document.write('Hello User');
} */

/* let age1 = prompt('What is your age?');
age1 >= 18?
document.write('Hello User')
:document.write('No you are very young..!');
*/

/*let role2 = prompt('What is your role?')
switch(role2){
    case 'Admin' : 
    document.write('Update ', 'Create ', 'Delete');
    break;
    case 'Moderator' :
    document.write('Update ', 'Create');
    break
    default :
    document.write('Hello User');
}*/

for(let i = 5 ; i >=0 ; i -=1 ) 
{
    console.log(i);
}

let names6 = ['Ahmed' , 'Abdelrahman' , 'Ezz' , 'Mazen' , 'Ali'];

for(let i = names6.length-1; i >=0  ; i--){
    console.log(names6[i]);
}

let cars =['BMW' , 'Mercedes' , 'Honda'];
let models=[2020, 2021, 2022];
let colors=['Blcak', 'White', 'Blue'];

for(let i =0 ; i< cars.length ; i++){
    console.log(`Car: ${cars[i]}`);
    for(let j =0 ; j < models.length; j++){
        console.log(`Models: ${models[j]}`);
    }
    for(let c = 0; c < colors.length; c++){
        console.log(`Colors: ${colors[c]}`);
    }
    console.log('_________________________')
}

let users= ['Ali' ,1, 'Mohammed' ,2, 'Abdo' ,3, 'Kareem' ,4, 'Ahmed' ,5, 'Ezz'];

for(let u=0; u < users.length ; u++){
    if(typeof users[u]!= 'string'){
        continue;
    }
    console.log(users[u]);
}

let t = 0;
while(t < 3){
    console.log(' Hello Friends');
    t++
}

function hello (namee){
    console.log('Hello World '+ namee);
}

hello('Abdelrahman');
hello('Ali');
hello('Ezz');

function calcAge(age){
    let result = age * 365 ;
    console.log(result);
}
calcAge(21);
calcAge(23);

function pro(cost, taxes, ads){
    let product = cost + taxes;
    let reesult = product + ads;
    console.log(reesult);
}

pro(200, 6, 20);
pro(300, 9, 30);
pro(400, 12, 40);


function pro(cost, taxes, ads){
    let product = cost + taxes;
    let result = product + ads;
    return result;
}
let p = pro(200, 6, 20);
console.log(p * 0.5);

function days(ages){
    let result= ages * 365;
    return result;
}
let day = days(21);

function calcByHours (ages1){
    let result1 = ages1 * 24 ;
    return result1;
}

let hour = calcByHours (day);
console.log(hour);


function hello(){
    return 1;
}
hello();
console.log(hello());

function hell(name = 'Please enter your name'){
    console.log(`Hello ${name}`);
}
hell();

function cal(...numberss){
    let res= 0 ;
    for (let n=0 ; n < numberss.length; n++){
        res += numberss[n];
    }
    console.log(res);
}
cal(1,2,3,5);

let car = {
    //Write property = variables like the above & we don't write variables
    title: 'BMW' , 
    Price: `${500} K`,
    color: 'Blue',
    model: '2023',

    hello:function(){
        return hello;
    }
};

console.log(car); 
console.log(car.title); //And this if you want to get just one property

let data= {
    username: 'Abdelrahman Mostafa',
    email: 'Abdooooooooo@gmail.com',
    age: 21 ,
    skills: ['HTML' , 'CSS' , 'JS' , 'BOOTSTRAB'],
    active: false,
    phone: {
        first: '01010101011001',
        second: '930834954340',
    },
    address: {
        Egypt: 'Cairo',
        USA: 'California',
    },
    isActive:function(){
        if(data.active === true){
            return 'Hello user';
        }
        else{
            return 'Sorry you are not active';
        }
    },
}
console.log(data.address.USA);
//or
console.log(data['address']['Egypt']);
console.log(data.isActive());
//or
console.log(data['isActive']());

let use = {};
use.namo ='Ahmed';
console.log(use.namo);

let user1 = new Object({
    namey: 'ABZO',
});
console.log(user1.namey);

let lesson = {
    fan: 'Abdelrahman',
    getFan:function(){
        return this.fan; //= lesson.fan
    }
}
console.log(lesson.getFan());

let us1= {
    name7: 'Abdelrahman',

    getname:function(){
        return `Hello ${us1.name7}`;
    }
}
let us2 = Object.create(us1);
us2.name7 = 'Ali'; 
us2.age = 21; 
console.log(us2.getname());

let a1 ={
    num1: 1
}

let a2 ={
    num2: 2
}

let a3 ={
    num3: 3
}

let a4= Object.assign(a1 , a2 , a3 , {num4: 4} /* to add an object */); // to merge objects
console.log(a4);

//Practicing lesson 54

let namesCard = ['Ahmed' , 'Mohammed' , 'Abdelrahman' , 'Ali'];
let agesCard = ['18 years old' , '30 years' , '21 years old' , '22 years old'];

//the container
let containerCard= document.createElement('div');
document.body.appendChild(containerCard);
containerCard.style.textAlign= 'center';
containerCard.style.display= 'flex';
containerCard.style.justifyContent= 'center';

function elementCard(namesCard , agesCard){
    //elements
    let card = document.createElement('div');
    let theName = document.createElement('h2');
    let theAge = document.createElement('p');
    let img = document.createElement('img');

    //content
    containerCard.appendChild(card);
    let headCard = document.createTextNode(namesCard);
    let ageCard= document.createTextNode(agesCard);
    img.src = 'images/avatar-06.png';
    theName.appendChild(headCard);
    theAge.appendChild(ageCard);

    //adding elements
    card.appendChild(theName);
    card.appendChild(theAge);
    card.appendChild(img);

    //card
    card.style.width = '200px';
    card.style.backgroundColor= '#444';
    card.style.padding= '10px';
    card.style.color= '#fff';
    card.style.margin= '3px';
    card.style.borderRadius= '6px';
    
    img.style.width = '100%';
}

for(let e=0 ; e < 4 ; e++ ){
    elementCard(namesCard[e], agesCard[e]);
}

//Practicing Lesson 57
let pound = document.getElementById('pound');
let dollar = document.getElementById('dollar');

dollar.onkeyup = function(){
    pound.value = dollar.value * 29.89;
}

pound.onkeyup = function(){
    dollar.value = pound.value / 29.89;
}

let after = document.getElementById('after');
let before = document.getElementById('before');
let inside = document.getElementById('inside');
let content1 = document.getElementById('content1');
let containerr = document.getElementById('container1');

containerr.style.height = '50px';
containerr.style.backgroundColor = '#ffa';

after.onclick = function(){
    containerr.after(content1);
}

before.onclick = function(){
    containerr.before(content1);
}

inside.onclick = function(){
    containerr.append(content1);
}

//scroll
let theScroll = document.getElementById('btn1');

window.onscroll = function(){
    if(scrollY >= 400){
        theScroll.style.display = 'block';
    }
    else{
        theScroll.style.display = 'none'
    }
}
window.onclick = function(){
    scroll({
        top: 0 ,
        behavior: 'smooth'
    })
}

console.log(window.screen.height);
console.log(window.screen.width);
console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);
console.log(window.screen.orientation.type);

setTimeout(function(){
    console.log('hello');
},3000);

let i = 0 ;
let time1 = setInterval(function(){
    console.log(i++);
    if(i == 4){
        clearInterval(time1); 
    }
},1000);

//IMPORTANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
let txt= document.getElementById('txt');
//And this to save what you write in the page
if(localStorage.length /* because i don't know how many items will be entered*/ > 0){
    txt.value = localStorage.getItem('saving');
}

txt.onkeyup = function(){
    localStorage.setItem('saving' , txt.value);
} //this is saved inside the data 


