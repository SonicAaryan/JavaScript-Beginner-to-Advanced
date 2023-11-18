// Implement a program to convert kilometers to miles --> Formula = 1 km = 0.621371 miles
const PROMPT = require('prompt-sync')()
let kilometers, miles;
kilometers = PROMPT("Enter the Kilometers to Convert into Miles :");
miles = (kilometers * 0.621371);
console.log(`${kilometers} KM is equal to ${miles} miles`);