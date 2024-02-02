/*
Write a JavaScript program to check if the number 5 present in a given array of numbers
e.g.
1. Input - [5, 4, 3, 100, 9]
Output - true
2. Input - [22, -1, 60, 0]
Output - false
*/
const PROMPT = require('prompt-sync')()
let length = PROMPT("Enter the Length for Array :");
let intArray = [length];
for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
    intArray[arrayIndex] = PROMPT("Enter the Value :");
}
let numCheck = parseInt(PROMPT("Enter the Number to check if it is Present in Array or Not :"));
function NumberCheck(numCheck) {
    for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
        if (intArray[arrayIndex] === length) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(NumberCheck(numCheck));