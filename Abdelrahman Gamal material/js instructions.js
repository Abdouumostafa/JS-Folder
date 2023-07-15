// Ali Shaheen Course

// Altert
alert("Hello To JS Course");

// Number Data Type
var FirstNumber= 3;

// String Data Type
var name= "Abdelrahman";

// Boolean Data Type
var IsRunning= true;

// Not Known = it exist by defult
var NewData= undefined;

// It Is Empty
var NullValue= null;

// Using Variables
var FirstNumber= 3;
var SecondNumber= 6;
console.log(SecondNumber / FirstNumber);

// Tell you the type of the datatype
console.log(typeof(""));

// Best variable
let name="Abdo";

// To get element by Id
let element=document.getElementById("hello");
// To write in HTML page
element.innerText=SecondNumber / FirstNumber;

// To convert the string to number
element .innerText=parseInt();

// To change the value of number
let MyNumber= 5;
console.log (myNumber);
MyNumber= 10;
console.log (myNumber);

// To add and substract number
let myNumber=5;
console.log (myNumber);
myNumber ++;
console.log (myNumber);
myNumber --;
console.log (myNumber);

// To Add 3
myNumber+=3;
console.log (myNumber);

// To Multiply
myNumber*=3;
console.log (myNumber);

// To change the value of the element of html by js
let myDiv=document.getElementById("hello");
myDiv.innerText= myNumber;

// If rule
// To assign value and change value
if(myDiv.innerText= 50){
    alert("Value Is Not True");
}


// To ask and will not change the value
if(myDiv.innerText== 50){
    alert("Value Is Not True");
}

// If Not Equal...
if(myDiv.innerText!= 50){
    console.log("Passed");
}

else if(myDiv.innerText!= 80){
    console.log("Passed");
}

else
{
    console.log("Failed");
}

// For Example .. Exam
if(myDiv.innerText >= 50){
    console.log("Passed");
}

else
{
    console.log("Failed");
}

// the two conditions must be achieved
if(myDiv.innerText >= 50 && myDiv.innerText < 75){
    console.log("Passed");
}

else
{
    console.log("Failed");
}

// Only one at least to be achieved
if(myDiv.innerText >= 50 || myDiv.innerText < 75){
    console.log("Passed");
}

else
{
    console.log("Failed");
}

// Look at picture that i took in my phone

// To make an event after clicking in the button

/* First make input with:
1- Value= the name you like
2- onclick= theNameYouLike()
3- type button
*/
function theNameYouLike()
{
    let myDiv=document.getElementById("the name you like");

    if(myDiv.innerText >= 50 && myDiv.innerText < 75){
        console.log("Passed");
    }
    
    else
    {
        console.log("Failed");
    }
    
    // Only one at least to be achieved
    if(myDiv.innerText >= 50 || myDiv.innerText < 75){
        console.log("Passed");
    }
    
    else
    {
        console.log("Failed");
    }
    
}
// Watch Day 2 lesson 3 (7:00 till the end) IMPORTANTTT!!

// To make spaces between the letters in the word while writing
// FOR EXAMPLE:
let name = "Abdelrahman";
let age = 21;

console.log(`My name is ${name} and my age is ${age}.`);

// To calculate numbers in string 
console.log( +'4' + +'4');

// Abdelrahman Gamal LESSON 11
// You can transfer string into numbers 
console.log( +'7');
console.log( Number('7') );
// But take care if you write a name such as Abdo it will give u NaN so we can use another way
console.log(parseInt('4 Abdo'));
// But have disaadvatage that if you weite the text before number = NaN and also not support float
console.log(parseFloat('5.5'));

// LESSON 12
console.log(Number.MAX_VALUE); //show you the biggest number that JS treat with, but it is not safe number
console.log(Number.MAX_SAFE_INTEGER); //show you biggest safe number
console.log(Number.MIN_SAFE_INTEGER); //show you smallest safe number
console.log(Number.isSafeInteger(48039439023)); //to check if the number is safe or not if yes = True if no = False
console.log(Number.isInteger('4')); //to check if this is number = True or not a number = False and will use more
console.log(Number.isNaN(6)); //not a number = true a number = false


// LESSON 13
Math.PI
Math.E
/*Imortant ,, methods */
console.log(Math.abs(-3)); //To convert negative numbers into positive
console.log(Math.sqrt(25)); // الجذر التربيعي للرقم
console.log(Math.pow(2,3)); //= console.log(2**3); //يعني 2 اس 3  
console.log(Math.round(10.8)); // تقربلك الرقم العشري لأقرب رقم سواء لاعلى او لاقل
console.log(Math.ceil(10.1)); // بتقربلك الرقم العشري لاقرب رقم بس لاعلى بس
console.log(Math.floor(10.9)); // بتقربلك الرقم العشري لاقرب رقم بس لاقل بس
console.log(Math.min(1,2,3,4,5,6,7,8,9)); // بيطلعلك اقل رقم مكتوب لو كتبت كذا رقم
console.log(Math.max(1,2,3,4,5,6,7,8.9)); //بيطلعلك اكبر رقم مكتوب لو كتبت كذا رقم

//LESSON 15
// Convert numbers into string
let x= 100;
console.log(typeof x);
console.log(typeof String(x));
console.log(typeof x.toString()); // OR console.log(typeof (100).toString()); OR console.log(typeof 100..toString());

//LESSON 16
let nameTwo = 'Abdo ';
console.log(nameTwo.repeat(3)); //To repeat the string 
console.log(nameTwo.length); // بتقولك عدد حروف الكلمة بس خلي بالك ان لو عملت مسافة بتتحسب حرف و بتتعد
// لو عايز تحدد حرف واحد من الحروف المكتوبة و تكتب الحرف ده بس
console.log(nameTwo[0]);
console.log(nameTwo.charAt(1)); // و ديه طريقة تانية
// لكن التانية مش هتطلعلك حاجة خالص  Undefined الفرق بينهم ان اول واحدة لو كتبت رقم حرف مش موجود زي مثلا 10 هيطلعلك نتيجة 
console.log(nameTwo.indexOf('o')); // بيعمل سيرش على الحرف و يقولك الحرف ده موجود رقم كام ولو كتبت حرف مش موجود هتطلعلك سالب 1
console.log(nameTwo.indexOf('d' , 2)); // هنا بقوله يبدأ بحث من اول الحرف التاني
// و ممكن ابحث عن كلمة عادي اني اكتب بس الكلمة
console.log(nameTwo.lastIndexOf('o')); // بتعمل البحث بس من اليمين للشمال مش العكس
console.log(nameTwo.slice(1)); // بيحذف الحروف اللي بحددها
console.log(nameTwo.slice(0,3)); // بيحذف الحروف اللي بين الرقمين
console.log(nameTwo.split(' ')); //و بيقطع الحروف اللي بتحطها جواه Array كدة بيحطها جوا   
console.log(nameTwo.split(' ',2)); // هنا بقوله يقطعلي مرتين بس
console.log(nameTwo.split('')); // كدة هيقطع كل حرف لوحده

// LESSON 17 imp
console.log(nameTwo.substring()); // شوف الفيديو
console.log(nameTwo.substr());

//LESSON 18
console.log(nameTwo.includes('b')); // هنا لو لقيت الحرف هتقولك ترو ولو لا هتقولك فولس
console.log(nameTwo.startsWith('a')); // و هنا اقوله الحرف اللي الجملة بتبدأ بيها ولو اه يبقا ترو ولو لا يبقا فولس
console.log(nameTwo.endsWith('o')); // هنا بشوف هل الجملة بتنتهي بالحرف ده و هتديني ترو و فولس برضو

//LESSON 19

// ARRAY
let names= ['Ahmed', 'Ali', 'Mazen', 'Mohammed'];
console.log(names); 
console.log(names[4]); // بدل م اطبع كل الاسماء كدة ممكن احدد الاسم بالرقم و اكتبه
console.log(names.length); // تطلعلي عدد الاسماء

// ممكن ادخل فيها سترينج و ارقام و اي حاجة
//Nested Array
let objects= [1,2,3,[4,5,6]];
console.log(objects[3]); // هيطبعلي الاراي اللي جوا كلها
console.log(objects[3][0]); // يجيبلي رقم 4 اللي جواها

let objects2= [1,2,3,[4,5,6, [7, 8, 9]]];
console.log(objects2[3][3]); //هيطبعلي هنا الاراي التالتة اللي جوا 
console.log(objects2[3][3][1]); //بختار رقم 8

// ممكن هنا نغير قيمة الاراي عادي
let names2= ['Ahmed', 'Ali', 'Mazen', 'Mohammed'];
names2[1] = 'Ezz';
console.log(names2);

//LESSON 20
let names3= ['Ahmed', 'Ali', 'Mazen', 'Mohammed'];
names3.push('Abdelrahman', 'Abdo'); //To add an element at the end of array
names3.unshift('Mahmoud', 'Waleed'); //To add an element at the beginning of the array
names3.shift(); //To remove elements form the beginning of the array but it save it inside AND TO MAKE SURE let's try console.log(names3.shift());
names3.pop(); // To remove elements form the end of the array
console.log(names3);

//LESSON 21 
let names4= ['Ahmed', 'Ali', 'Mazen', 'Mohammed'];
names4.splice(0,1); //to delete first element and the second number is the number of elements i want to remove
names4.splice(0,1, 'Gamal', 'Fathy'); //to delete the element and add another instead
names4.slice(0,2); //to delete the elements but not affect the array but you can see it BY TRYING console.log(names4.slice(0,2));
console.log(names4);

//LESSON 22
let names5= ['Ahmed', 'Ali', 'Mazen', 'Mohammed'];
console.log(names5.indexOf('Mazen')); //is to search about the element and give you its position number and if not found it will give you -1
console.log(names5.indexOf('Ali',3)); // to start searching from element 3
console.log(names5.lastIndexOf('Ali' , 2)); // to start searching from the second element from the end of array and the first element from the end is -1
console.log(names5.includes('Tamer', 1)); // searching about the element and if it's exsiting = true, if not = false

//LESSON 23
let arr= ['HTML', 'CSS', 'JAVASCRIBT'];
console.log(arr.reverse()); //to reverse the elements of the array
console.log(arr.sort()); //to sort it with alphabetical order

//LESSON 24
let ar1 = ['Ahmed', 'Ali', 'Mohammed'];
let ar2 = ['Zizo', 'Yousef', 'Seif'];
//ar1 += ar2; //To merge between two arrays but this way will make string instead of array
console.log(ar1.concat(ar2 , 'Extra'));

console.log(ar1.join(' ')); //To make it appear to the user as a string not array
// Learn 2D Array pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!! 

//LESSON 25 VERY IMPORTANT LESSON
let u = 5;
let z = 8;
console.log(u == z); // To compare and ask ... Is they are equal ? True Or False
// An example to see if the email that you enter is exsit in the database or not
let emailask = prompt('Enter Yot Email');
let Email = 'Abdo@gmail.com'; 
console.log(emailask == Email);

//To convert any string or anything the user enter to uppercase or lowercase 
let test = 'Ahmed';
console.log(test.toUpperCase());
console.log(test.toLocaleLowerCase());
//To delete any space the user enter to avoid any falt result from start or end
console.log(test.trim());

//LESSON 26
console.log(5 == '5'); // it compare between values only 
console.log(5 === '5'); // it compare between values and also datatypes
console.log(4 > 3); //to ask if this number larger than the other
console.log(4 <= 4); //to ask if this number is larger or equal the other one
console.log(4 != 4); //to ask if they are not equal or not
let product = 'TV';
let price = 10000;
let size = 50;
console.log(price < 15000 && size == 30); // two conditions to be achieved
console.log(price < 15000 || size == 30); // one of each conditions to be achieved

//LESSON 27
let num = 10;
let num2 = 15;
if (num > num2){
    console.log('Congratolations!!');
}

let role = prompt('What is your role?');
if (role = 'Admin'){
    document.write('Update', 'Create', 'Delete');
}
else if (role = 'Moderator'){
    document.write('Update', 'Create');
}
else{
    document.write('Hello User');
}

//LESSON 28
//It is an example to understand if condition with university grades

//LESSON 29
//It's a new method to write if conditions 
age = prompt('What is your age?')
age >= 18?
document.write('Hello User') //Don't write ; till you finish your conditions
:document.write('No you are very young..!'); // = else

//LESSON 30
// Same of if condition uses
let role2 = prompt('What is your role?')
switch(role){
    case 'Admin' : 
    document.write('Update', 'Create', 'Delete');
    break;
    case 'Moderator' :
    document.write('Update', 'Create');
    break
    default :
    document.write('Hello User');
}

/* The difference between if and switch that if is more flexible than switch
for example: switch can't use > < as if it use only == by default*/

//LESSON 31
for(let i = 0 ; i <=10 ; i +=1 ) //Start From 1 , end to 10 , the steps
{
    console.log('Hello World');
}

for(let i = 10 ; i >=0 ; i -=1 ) //Start From 10 , end to 0 , the steps
{
    console.log('Hello World');
}

//LESSON 32
let names6 = ['Ahmed' , 'Abdelrahman' , 'Ezz' , 'Mazen' , 'Ali'];

for(i = 0; i<=3 ; i++){ //and if i don't know the number of array write i < names6.length
    console.log(names6);
}

//To reverse loop
for(i = names6.length-1 /*because first element is undefined*/; i >=0  ; i--){
    console.log(names6[i]);
}

//LESSON 33
//Nested loop
let cars =['BMW' , 'Mercedes' , 'Honda'];
let models=[2020, 2021, 2022];

for(i =0 ; i< cars.length ; i++){
    console.log(`Car: ${cars[i]}`);
    for(let j =0 ; j < models.length; j++){
        console.log(`Models: ${models[j]}`);
    }
}

//LESSON 34
let users= ['Ali' ,1, 'Mohammed' ,2, 'Abdo' ,3, 'Kareem' ,4, 'Ahmed' ,5, 'Ezz'];

for(let u=0; u < users.length ; u++){
    if(typeof users[u] == 'number'){ //To skip numbers from loop (And string if you like and select any element/s you like)
        continue;
    }
    /* if (typeof users[u] != 'ali'){ = To exclude all elements except ali
        continue;
    } */

    /* if (typeof users[u] == 'abdo'){ = to make a loop but last name will be mohammed and if you want last name to be abdo, move the console above if
        break;
    }*/
    console.log(users[u]);
}

//LESSON 35
//While loop
let t = 0;
while(t < 3){ //if this condition didn't achieved it won't make any loop, to try, write true or false
    document.write('<h1> Hello Friends </h1>')
    t++;
}
do{
    document.write('<h1> Hello Friends </h1>');
    t++;
}  while(t < 3); // if this condition didn't achieved it will make at least one loop, to try, write true or false

//LESSON 36
//THE FUNCTION IS TO REUSE THE CODE AGAIN WHEN THE USER ENTER ANY NEW DATA
function hello (namee /*Parameter*/ ){
    console.log('Hello World '+ namee);
}

hello('Abdelrahman' /*Argument*/); //to play the function
hello('Ali');
hello('Ezz');

//To calculate the age of user
function calcAge(age){
    let result = age * 365 ;
    console.log(result);
}
calcAge(21);
calcAge(32);

//to calculate the product price
function pro(cost, taxes, ads){
    let product = cost + taxes;
    let reesult = product + ads;
    console.log(reesult);
}

pro(200, 6, 20);
pro(300, 9, 30);
pro(400, 12, 40);

//LESSON 37
function pro(cost, taxes, ads){
    let product = cost + taxes;
    let result = product + ads;
    return result; //to enter the code into other function
}
let p = pro(200, 6, 20); //call the return and make for it a variable
console.log(p * 0.5);
pro(300, 9, 30);
pro(400, 12, 40);

//to calculate the age by hours
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

//LESSON 38
//This what you write
console.log('Hello World');
var o = 20;
console.log('Hello World');
//And by hoisting JS is reading it by this way
var o;
console.log('Hello World');
o = 20;
console.log('Hello World');
//But let doesn't make hoisting

//For example if you declare var after printing = Undefined , if you did the same with let = Error

// You can wite function with two ways :
//Funtion declaration
function hello(){
    return 1;
}
hello();
console.log(hello());
//Function expression and it doesn't make hoisting
let hello = function(){
    return 1; 
}
hello();
console.log(hello());

//LESSON 39 

//Explaining global and local

// If , Loop , While , Do while their variable (Var) = globar variable

//To make a funtion that call itself:
(function (){
    console.log('Hello World');
})(); // to order to play the function
// and this function is to make your code to be local not global to avoid overreading other codes

// if you write this code:
console.log(   x()  );

function x(){
    function y(){return 1;}
    return y();
    function y(){return 0;}
}
//JS will read it in this way:
function x(){
    function y(){return 1;}
    function y(){return 0;}
    return y();
}
console.log(   x()  );
//So the result will be 0

//LESSON 40
// if the user didn't enter any value in the function = undefined
function hello(name = 'Please enter your name'){ //this string what will appear to the user or write ' '
    console.log(`Hello ${name}`);
}
hello();

// if you don't know the numbers of arguments that the user enter you can write this code:
function cal(...numberss){
    let res= 0 ;
    for (let n=0 ; n < numberss.length; n++){
        res += numberss[n];
    }
    console.log(res);
}
cal(3,4,5);

//LESSON 41
//Arrow Function
let c = () => 1;
console.log(c());
//and
let c = (no) => no* 2;
console.log(c(5));
//=
let c = function(){
    return 1;
}
console.log(c());

//LESSON 42
//Object to contain some elements 
let title = 'BMW';
let Price = '500K';
let color = 'Blue';
let model = '2023';

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

//LESSON 43
//Nested Object
let data= {
    username: 'Abdelrahman Mostafa',
    email: 'Abdooooooooo@gmail.com',
    age: 21 ,
    skills: ['HTML' , 'CSS' , 'JS' , 'BOOTSTRAB'],
    active: true,
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
console.log(data);

//LESSON 44
//to add an element but outside the object 
let use = {};
use.namo ='Ahmed';
console.log(use);

//To make object in different method
let user1 = new String();
console.log(user1);

//LESSON 45 IMPORTAAAAAAAAANT
//this = refare to the object
// if you write this in the absolute it means or = window but under use strict = undefined
let lesson = {
    fan: 'Abdelrahman',
    getFan:function(){
        return this.fan; //= lesson.fan
    }
}
console.log(lesson.getFan());

//to use strict mode and make js not to correct your fault you can write this and make you write 
"use strict";

//LESSON 46
let us1= {
    name7: 'Abdelrahman',

    getname:function(){
        return `Hello ${this.name7}`; //= we used (this) to avoid any errors and it refere to previous object
    }
}

let us2 = Object.create(us1 , {agee:{value:20}} /* to add property but not best practice*/ ); //= to copy an old object and paste in new one
us2.age = 21; // = to add an property

console.log(us2.getname);

//LESSON 47
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

//LEESSON 48
// to get elements by its id and note that id is for one element only
document.getElementById('write id');
let id = document.getElementById('write id');

//to get elements by class an note that class can be for more than one element
let newa = document.getElementsByClassName('Class')[0]; //= [0] is to control the element and make anything i like and to close the array

//to reach to the elements by its tag
let head = document.getElementsByTagName('h1')[0]; //= [0] is to control the element and make anything i like and to close the array

// to reach to tag element or class or id but select just one element
let head1 = document.querySelector(/*'#id' or '.class' or 'h1' */); //But this is selecting first element only  

// to reach to tag element or class or id and select any element i like 
let head2 = document.querySelectorAll(/*'#id' or '.class' or 'h1' */)[0]; // to select first element 

//to reach to body
let body = document.body;

//to reach to title
let title1 = document.title

//to reach to all images
let images = document.images[0]; //= to reach to first image only
//and you can change the image by src
images.src= '';

// to reach to all links
let links = document.links [0];
//change the link by href
links.href = '';

//to reach all forms
let form = document.forms [0];

//LESSON 49
//to know if the element has attribute or no
console.log(images.hasAttributes()); // will give you true or false

//to know if the element has a certian attribute or no
console.log(images.hasAttribute('alt')); // will give you true or false if alt is exist

// to show you all attributes in the element or any attribute you want such as [0][1] 
console.log(images.attributes);

//to change the attribute
images.setAttribute('alt' /*basic*/ , 'abdo' /*new*/);

//to remove an element
images.removeAttribute('alt');

//LESSON 50
// to show all code of the element
let container = document.getElementById('container');
console.log(container.outerHTML);

//to change the element all whatever outside or inside the element
console.log(container.outerHTML = '<p> Hello World</p>');

//to show the text inside the element
console.log(container.innerHTML);

//to change inside the element only
console.log(container.innerHTML= '<p> Hello World</p>');

//to write in the element 
container.innerText = 'Welcome to our page';
container.textContent=  ' Welcome to our page';

//LESSON 51
//to reach to the other element before the basic element
let element = document.getElementById('element');
console.log(element.previousElementSibling);

//to reach to the other element after the basic element
let element = document.getElementById('element');
console.log(element.nextElementSibling);

//to write inside the element
element.nextElementSibling.innerHTML= '';
element.nextElementSibling.remove();

//to reach to anything before or after the element whatever what it is
console.log(element.nextSibling);
console.log(element.previousSibling);

//to reach to the parent element
console.log(element.parentElement);

//LESSON 52
//to style through JS
container.style.backgroundColor = '#444';
container.style.color= '#fff';

//Another method
container.style.setProperty('color' , 'red' , 'important');

//to remove the property
container.style.removeProperty('color');

// to write css but in CSS style but it disapear the previous effects that are made by JS 
container.style.cssText= 'color: red'
//or
container.style.cssText= `
background: #444;
color: #fff;
`
//LESSON 53
//you can build HTML page by this way
document.body.innerHTML = `<h1> Hello World </h1>`;

//this is better mwthod to build HTML file
// 1- Serring up the elements 
let container= document.createElement('div');
let head3 = document.createElement('h1');
let img = document.createElement('img');

//Add the content
let content = document.createTextNode('Hello World');
head3.appendChild(content);
img.src = 'write the source of the image';

// adding the element to the place you want
container.appendChild(head3);
container.appendChild(img);

//Adding all elements to body
document.body.appendChild(container);

//LESSON 54
/* PRACTICING CARDS*/

//LESSON 55
//Events
//write onclick inside the element in HTML page and invoke the function() you wrote in JS file

//or you can do this by JS only = but it's not good because it runs always the last line code and one event only
let btn = document.getElementById('btn');
btn.onclick = function(){
    console.log('Excellent');
}

//ro this method = it's better because it can make everything you like and more than one event
btn.addEventListener('click' , function(){
    console.log('clicked');
});

//LESSON 56
//Some events to use#

/*
Mouse Events:

onmouseover = عندما يأتي مؤشر الماوس فوق العنصر
onmouseout = عندما يغادر مؤشر الماوس العنثر
onmousedown = عند الضغط على زر الفأرة فوق العنصر
onmouseup = عندما يتم تحرير زر الماوس فوق العنصر
onmousemove = عندما يتحرك الماوس
onmouseenter = hover

Keyboard Events:

onkeyup = عندما يقوم المستخدم بتحرير المفتاح
onkeydown = عندما يضغط المستخدم على المفتاح

Form Events:

onfocus = عندما يركز المستخدم على عنصر
onsubmit = formعندما يرسل المستخدم ال 
onblur = formعندما يكون التركيز بعيدًا عن عنصر ال 
onchange = formعندما يقوم المستخدم بتعديل أو تغيير قيمة عنصر ال 

Window/Document Events:

onload = عندما ينتهي المتصفح من تحميل الصفحة
onunload = عندما يغادر الزائر صفحة الويب الحالية ، يقوم المتصفح بإلغاء تحميلها
onresize = عندما يقوم الزائر بتغيير حجم نافذة المتصفح
*/

//LESSON 57
//Practice

//LESSON 58
element.after(content); // to move the content to be after the element 
element.before(content); //to move the content to be before the element
element.append(content); //to move the content to be inside the element

//LESSON 59
//to add class to the elements
//For example if you click in this button the class will be added to the element and this is already is styled in CSS in certian styles so if you click it will appear
let hello = document.getElementById('hello');

hello1.onclick = function(){
    hello1.classList.add('name');
}

// if you clicked right side it will remove class from the element
hello1.oncontextmenu = function(){
    hello1.classList.remove('name');
}

//And you can add (first click) and remove (second click) the class to and from the element by one step
hello1.onclick = function(){
    hello1.classList.toggle('name');
}

//LESSON 60
//Making Navbar
//Watch it an its code

//LESSON 61
//to make focus automatically
let txt = document.getElementById('txt');

window.onload = function(){
    txt.focus();
}

//LESSON 62
//Practice Gallery

//LESSON 63
//Browser Object Model
//window = the browser
//document = html page

//LESSON 64
//to scroll
window.scroll({
    left: 200,
    top: 200
});

//or do it in one step
window.scroll(200 /*X*/ ,200 /*Y*/);

//Other method
window.scrollTo(200,200);

//To add space in the scroll
window.scrollBy(200,200);

//Other Scrolls and they are determininig the position of scroll
window.scrollX();
window.scrollY();
//PRACTICE THIS LESSON

//LESSON 65
//to know the width and height of the device that uses the website to make cetain sttings to them
//the width and height of your device
console.log(window.screen.height);
console.log(window.screen.width);

//the available width and height to use
console.log(window.screen.availHeight);
console.log(window.screen.availWidth);

//to know the color and pixel depth
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);

//to know the display of the device (width or height)
console.log(window.screen.orientation.type);

//LESSON 66
//https/http == protocol
//www.google.com == host name
///abdelrahman_mostafa/ == path name
//https:/www.google.com/abdelrahman_mostafa/ == href

//to get the link of the page
console.log(window.location.href);

//to get protocol
console.log(window.location.protocol);

//to get host name
console.log(window.location.hostname /* or host*/ );

//reload object
location.reload();

//assign and replace
location.assign('enter the link'); //to enter the link but with saving the data that was in previous page
location.replace('enter the link'); //to enter the link but remove the data that was in the previuos page

//LESSON 67
// you can run or repeat the code after the time you set
setTimeout(function(){
    console.log('hello');
},3000); //to start the function after 3 seconds 

//to stop the loading and it will not appear 
let time = setTimeout(function(){
    console.log('hello');
},3000);

clearTimeout(time);

//to repeat the function after certain time
let i =0;
let time1 = setInterval(function(){
    console.log(i++);
    if(i == 4){
        clearInterval(time1); //to stop the interval when it reach to number 4
    }
},1000); //it will print hello after one second till infinate

clearInterval(time1); //to stop the loading and it will not start 

//LESSON 68 LISTEN IT AGAINNNNNNNNNNNN
//TO ADD ITEMS = if you add data and made reload or got out the data will be saved
localStorage.setItem('name' , 'abdelrahman');
//or
localStorage.name('Abdelrahman');
console.log(localStorage.setItem('name')); //= its value will be abdelrahman
//or 
console.log(localStorage.name); // will give you the same result

//If your data is not string tou should write it in this form
localStorage.setItem('age' , JSON.stringify(25));
console.log(typeof JSON.parse(localStorage.setItem('age'))); // to make sure

// to get the localstorage by its position
console.log(localStorage.key(0,1)); //it will get first 2 elements in the localstorage in the page you write

//To remove data from certain element
localStorage.removeItem('user');

//to remove all data
localStorage.clear();

// sessionStorage has all settings that localStorage has but it will remove any data you enter after closing but after restart woon't do that
//Practice with small project IMPORTANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT = line 525

// UDEMY COURSE
/* 
search about console.clear();
*/ 
//Practice Lesson 60 & 62