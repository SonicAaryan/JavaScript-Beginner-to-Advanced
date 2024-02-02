/*
Write a JS program to find the factorial of a number ?
Note: The factorial of 0 is 1
e.g.
1. Input - n=5
Output - 120
Explanation : Factorial of 5 = 5*4*3*2*1 = 120
*/
const PROMPT = require('prompt-sync')()
var inputNum = PROMPT("Enter the Number to Calculate Facotial :");
var fact = 1;
var iteration = 1;
while (iteration <= inputNum) {
    fact *= iteration;
    iteration++;
}
console.log(`Factorial of Number ${inputNum} is : ${fact}`);