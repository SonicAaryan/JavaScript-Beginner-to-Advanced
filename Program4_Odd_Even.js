// Write a Program that checks if a Number is Odd or Even
const PROMPT = require('prompt-sync')()
//let a = PROMPT("Enter the Value to check for Odd or Even :");
let b = PROMPT("Enter the Value to check for Odd or Even :");
for (let a = 1; a <= b; a++) {
    if ((a % 2) == 1) {
        console.log(`ODD Number : ${a}`);
    } else if (a % 2 == 0) {
        console.log(`EVEN Number : ${a}`);
    }
}