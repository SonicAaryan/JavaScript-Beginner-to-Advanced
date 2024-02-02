/* 
Write a JavaScript program to find the largest of three given numbers
e.g.
1. Input - 1, 0, 1      ---> o/p = 1
2. Input - 0,-10,-20   ----> o/p = 0
3. Input - 1000,510,440   ---> o/p = 1000
*/
const PROMPT = require('prompt-sync')()
let value1 = parseInt(PROMPT("Enter the 1st Value :"));
let value2 = parseInt(PROMPT("Enter the 2nd Value :"));
let value3 = parseInt(PROMPT("Enter the 3rd Value :"));
if (value1 > value2 && value1 > num3) {
    console.log("(if)Largest Number is :", value1);
} else if (value2 > value1 && value2 > num3) {
    console.log("(2nd else if)Largest Number is :", value2);
} else if (num3 > value1 && num3 > value2) {
    console.log("Largest Number is :", num3);
}