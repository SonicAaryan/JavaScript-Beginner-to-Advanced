/* Write a program to swap two variables without using a temporary variable
Input: a=5,  b=10
Output: b=5,  a=10
*/
const PROMPT = require('prompt-sync')()
let value1 = parseInt(PROMPT("Enter the Value to Swap :"));
let value2 = parseInt(PROMPT("Enter Another Value to Swap :"));
console.log("Initial Value are value1 = " + value1 + " and value2 = " + value2);
value1 = value1 + value2;
value2 = value1 - value2;
value1 = value1 - value2;
console.log(`After Swapping Value of value1 = ${value1} and value2 = ${value2}`);
// ` ` These Are BACKTICK ,we can write ${} to take Variable in print statement
