/*
 Write a program to display a multiplication table of a given number.
e.g.
1. Input - n=5 (will print table of 5 as below. If we change this value then it will print the table accordingly)
Output - 
5
10
*/
const PROMPT = require('prompt-sync')()
let inputNum = PROMPT("Enter the Number of which you want the Multiplication Table :")
let multipliedValue = '0';
for (let i = 1; i <= 10; i++) {
    multipliedValue = inputNum * i;
    console.log(`${inputNum} * ${i} = ${multipliedValue} `);
}
console.log(typeof multipliedValue);
// Here '5'* 5 = 25 ( Means String is Multipliying with Value and o/p is In Number )
// '3'+ 2 is = "32"
// '2'*'2' is = 4 (Implicit Conversion into Number)