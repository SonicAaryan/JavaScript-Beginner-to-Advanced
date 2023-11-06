// Implement a program that checks if a user's age is within a specific range (e.g-> 18 to 65 years old).
const PROMPT = require('prompt-sync')()
let age = PROMPT("Enter the Age :");
if (age >= 1 && age <= 10) {
    console.log("You are Little Child");
} else if (age >= 11 && age <= 20) {
    console.log("You Will Become Adult Soon");
} else if (age >= 21 && age <= 65) {
    console.log("You are Getting Old 'LoL'");
}