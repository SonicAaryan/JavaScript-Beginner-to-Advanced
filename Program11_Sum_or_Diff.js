const PROMPT = require('prompt-sync')()
let num1 = parseInt(PROMPT("Enter 1st Value :"));
let num2 = parseInt(PROMPT("Enter 2nd Value :"));
if (num1 == 15 || num2 == 15 || num1 + num2 == 15 || num1 - num2 == 15) {
    console.log(true);
} else {
    console.log(false);
}