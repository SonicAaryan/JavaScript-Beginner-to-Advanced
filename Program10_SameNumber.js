/* 
Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
e.g.
1. Input - 8, 8, 8
Output - 30
2. Input - 8, 8, 18
Output - 40
3. Input - 8, 7, 18
Output - 20
*/
const PROMPT = require('prompt-sync')()
let value1 = +PROMPT("Enter 1st Value :");
let value2 = +PROMPT("Enter 2nd Value :");
let value3 = +PROMPT("Enter 3rd Value :");
if (value1 == value2 && value2 == value3) { // Here String is Comparing to String
    console.log("Three Value are same :", 30);
} else if (value1 == value2 || value2 == value3) {
    console.log("Any Two Value is same :", 40);
} else {
    console.log("Non-off the Value is Same", 20);
}
console.log(typeof value1);