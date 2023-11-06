// Write a program to swap two variables without using a temporary variable.
const PROMPT = require('prompt-sync')()
let a = parseInt(PROMPT("Enter the Value to Swap :"));
let b = parseInt(PROMPT("Enter Another Value to Swap :"));
console.log("Initial Value are a = " + a + " and b = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log(`After Swapping Value of a = ${a} and b = ${b}`);
// ` ` These Are BACKTICK ,we can write ${} to take Variable in print statement
