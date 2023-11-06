const PROMPT = require('prompt-sync')()
let num1 = parseInt(PROMPT("Enter the 1st Value :"));
let num2 = parseInt(PROMPT("Enter the 2nd Value :"));
let num3 = parseInt(PROMPT("Enter the 3rd Value :"));
if (num1 > num2 && num1 > num3) {
    console.log("(if)Largest Number is :", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("(2nd else if)Largest Number is :", num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("Largest Number is :", num3);
}