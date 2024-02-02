// Write a program that checks if a number is both divisible by 2 and 5
const PROMPT = require('prompt-sync')()
let value = PROMPT("Enter the Value :");
if (value % 2 == 0 && value % 5 == 0) {
    console.log(`Num is Divisible by 2 and 5 :: ${value}`);
} else {
    console.log(`${value} :: is Not Divisible by 2 and 5`);
}