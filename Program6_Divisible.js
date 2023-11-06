// Write a program that checks if a number is both divisible by 2 and 5.)
const PROMPT = require('prompt-sync')()
let num = PROMPT("Enter the Value :");
if (num % 2 == 0 && num % 5 == 0) {
    console.log(`Num is Divisible by 2 and 5 :: ${num}`);
} else {
    console.log(`${num} :: is Not Divisible by 2 and 5`);
}