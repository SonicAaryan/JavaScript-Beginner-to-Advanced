const PROMPT = require('prompt-sync')()
let value1 = parseInt(PROMPT("Enter the 1st Value :"));
let value2 = parseInt(PROMPT("Enter the 2nd Value :"));
let value3 = parseInt(PROMPT("Enter the 3rd Value :"));
if (value1 > value2 && value1 > num3) {
    console.log("(if)Largest Number is :", value1);
} else if (value2 > value1 && value2 > num3) {
    console.log("(2nd else if)Largest Number is :", value2);
} else if (num3 > value1 && num3 > value2) {
    console.log("Largest Number is :", num3);
}