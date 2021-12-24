// console.log('hello');

// // alert('yoo');

// // var b = "darius";
// // console.log(b);

// // var someNumber = 55;
// // console.log(someNumber);

// // var age = prompt('What is your age?');

// // realAge = someNumber * age;

// // document.getElementById('example').innerHTML = realAge;

// // Numbers in Javascript

// var num1 = 5;

// // Increment num1 by 1
// num1++;
// console.log(num1 + 10);

// // Decrement num1 by 1

// num1--;
// console.log(num1 + 10);

// // Divide, multiply *, remainder %

// console.log(num1 % 2);

// // Increment/decrement by 10
// num1 += 10;
// console.log(num1);

// // Defining Functions

// function fun() {
//     console.log('this is a function');
// }
// // Calling Functions
// fun();

// Function that takes in a name and returns hello followed by the name

// function nameCall(Name) {
    
//     var newMessage = 'Hello' + " " + Name; 
//     console.log(newMessage);
// }
// var userName = prompt('What is your name?');
// nameCall(userName);

// nameCall();

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

// function sumNumbers(a, b) {
//     var result = a + b;
//     console.log(result);
// }

// sumNumbers('Hello', 10);

// While loops

// var num = 0;

// while (num < 100) {

//     num += 1;
//     console.log(num);

// }

// For loops

// for (let num = 0; num <= 100; num++) {
//     console.log(num*-1);
// }

// datatypes
/*
let yourAge = 18; // number
let yourName ='Paul' // string
let name = {first: 'Mike', last: 'Park'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null 
*/

//strings in javascript (common methods)

// let fruit = 'bananaaapple,kiwi,watermelon,peach,mango';
// let moreFruit = 'banana\napple' // \n starts a new line
// console.log(moreFruit);
// console.log(fruit.length); // count number of characters
// console.log(fruit.indexOf('')); // searches for the position of defined value
// console.log(fruit.slice(2, 6)); // slicing
// console.log(fruit.replace('ban', '123')); // find and replace
// console.log(fruit.toUpperCase()); // All Uppercase
// console.log(fruit.toLowerCase()); // All Lowercase
// console.log(fruit.charAt(0)); // catenate position value
// console.log(fruit.split(',')); // splitting by comma
// console.log(fruit.split('a')); // split by character

// // Array

// let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// fruits = new Array('pear', 'apple', 'banana', 'pineapples');

// console.log(fruits[0]); // access value at index 0

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// //array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join('-'));
// console.log(fruits.join('*'));
// console.log(fruits.pop(), fruits); // removes last item of array
// console.log(fruits.push('strawberry'), fruits); // appends item to array
// console.log(fruits[4]);
// fruits[fruits.length] = 'new fruit'; // same thing as push
// console.log(fruits);

// fruits.shift(); // removes first item of array
// console.log(fruits);
// fruits.unshift('watermelon');
// console.log(fruits); // adds first item to the array

// let vegetables = ['lettuce', 'broccoli', 'scallion', 'chives'];
// console.log(fruits.concat(vegetables)); // appends vegetables array to fruits array

// console.log(fruits.concat(vegetables).slice(1, 8));
// console.log(fruits.concat(vegetables).reverse()); // reverses array

// let nums = [5, 2, 3213, 23, 10, 8, 1, 65, 56, 100, 4394]; // alphabetical sort
// console.log(nums.sort()); // sort by alphabetical order

// console.log(nums.sort(function(a, b) {return a-b})); // sort by ascending order
// console.log(nums.sort(function(a, b) {return b-a})); // sort by decending order

// let emptyArray = new Array();
// for (let num = 0; num <= 10; num++) {
//     emptyArray.push(num);
// }

// console.log(emptyArray);

// Objects in Javascript
// Dictionaries in Python

// let student = {
//     first: 'Paul', 
//     last: 'Oh', 
//     age:33, 
//     height:175,
//     studentInfo: function (){
//         return this.first + '\n' + this.last;
//     }
// };
// console.log(student.first);
// console.log(student.last);
// student.first = 'notPaul'; // changing value of objects
// console.log(student.first);
// student.age++; // increment object
// console.log(student.age);
// console.log(student.studentInfo());

// Conditionals, Control flows (if else)

// var age = 25;
// && AND
// || OR

// if ( (age >= 18) && (age <= 35) ) {
//     statusAlert = 'target demo';
//     console.log(statusAlert);
// } 

// else {
//     statusAlert = 'not my audience';
//     console.log(statusAlert);
// }

// Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday
// day 6 --> Saturday
// day 4 --> Thursday --> Weekday

function whatDay() { 
    
    // var day = prompt('What day is it today?');
    var num1 = parseInt(day);

switch (num1) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
}

console.log(text);

}

whatDay();

