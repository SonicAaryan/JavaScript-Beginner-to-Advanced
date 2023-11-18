// Write numToCheckOddEven Program that checks if numToCheckOddEven Number is Odd or Even
const PROMPT = require('prompt-sync')()

//let numToCheckOddEven = PROMPT("Enter the Value to check for Odd or Even :");
let inputValue = PROMPT("Enter the Value to check for Odd or Even :");
for (let numToCheckOddEven = 1; numToCheckOddEven <= inputValue; numToCheckOddEven++) {
    if ((numToCheckOddEven % 2) == 1) {
        console.log(`ODD Number : ${numToCheckOddEven}`);
    } else if (numToCheckOddEven % 2 == 0) {
        console.log(`EVEN Number : ${numToCheckOddEven}`);
    }
}