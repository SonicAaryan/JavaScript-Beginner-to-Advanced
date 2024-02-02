/*
Write a JavaScript program to print the given array of numbers in a reverse order with and without using inbuilt method
e.g.
1. Input - [5, 4, 3, 10, 1]
Output - 
1
10
3
4
5
*/
const PROMPT = require('prompt-sync')()
let intArray = [];
let length = PROMPT("Enter the Length for Array :");
for (let indexOfArray = 0; indexOfArray < length; indexOfArray++) {
    intArray[indexOfArray] = PROMPT("Enter the Number :");
}
console.log("<---- Printing Value by Reversing Them ---->");
for (let reverseArray = intArray.length - 1; reverseArray >= 0; reverseArray--) {
    console.log(intArray[reverseArray]);
}