/* 
Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15
e.g.
1. Input - 25, 15
Output - true
2. Input - 7, 8
Output - true
3. Input - 25, 5
Output - false
*/
const PROMPT = require('prompt-sync')()
let input1 = parseInt(PROMPT("Enter 1st Value :"));
let input2 = parseInt(PROMPT("Enter 2nd Value :"));
if (input1 == 15 || input2 == 15 || input1 + input2 == 15 || input1 - input2 == 15) {
    console.log(true);
} else {
    console.log(false);
}