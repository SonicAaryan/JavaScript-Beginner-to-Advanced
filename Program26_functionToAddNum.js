/*
Write a function to add unlimited numbers
Function `addNumber()` return the sum of all the number passed as arguments of the function.

e.g. 
addNumber(-11,22)) // 11
addNumber(2,4,5)) // 11
addNumber(10,45,34,130) // 219
*/
const PROMPT = require('prompt-sync')()
// 1st Way
function addGivenNumber(array) {
    let sum = 0;
    for (let addition = 0;addition < array.length; addition++) {
        sum += array[addition]
        console.log(sum);
    }
    console.log("The Total Sum of The Given Numbers are :", sum);
}
let array = [];
let length = parseInt(PROMPT("Enter the Length for Array :"));
for (let acceptValue = 0; acceptValue < length; acceptValue++) {
    array[acceptValue] = parseInt(PROMPT("Enter the Element for Array :"));
}
addGivenNumber(array);

// 2nd Way
function addGivenNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
addGivenNumbers(1, 4, 5, 8, 1, 2);
// let length = parseInt(PROMPT("Enter the Length for to Add Digits :"));
// for (let i = 0; i < length; i++) {
//     addGivenNumbers(i) = +PROMPT("Enter the Number");
// }