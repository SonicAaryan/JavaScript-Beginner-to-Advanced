const PROMPT = require('prompt-sync')()
var inputNum = PROMPT("Enter the Number to Calculate Facotial :");
var fact = 1;
var iteration = 1;
while (iteration <= inputNum) {
    fact *= iteration;
    iteration++;
}
console.log(`Factorial of Number ${inputNum} is : ${fact}`);