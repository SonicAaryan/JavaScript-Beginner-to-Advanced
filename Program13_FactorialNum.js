const PROMPT = require('prompt-sync')()
var num =PROMPT("Enter the Number to Calculate Facotial :");
var fact = 1;
var i = 1;
while (i <= num) {
    fact *= i;
    i++;
}
console.log(`Factorial of Number ${num} is : ${fact}`);