// Create a program that checks if a number is positive, negative, or zero.
const PROMPT = require('prompt-sync')()
let value = PROMPT("Enter the Value :");
if (value == 0) {
    console.log("Zero");
} else if (value >= 1) {
    console.log("--- Number is Positive ---");
} else if (value <= -1) {
    console.log("Number is Negative");
}