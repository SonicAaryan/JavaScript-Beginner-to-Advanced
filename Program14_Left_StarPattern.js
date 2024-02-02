/*
Write a program to print a Left Triangle Pattern of asterisks.
*
**
***
****
*/
const PROMPT = require('prompt-sync')()
let row = PROMPT("Enter the Value to print Left Triangle :");
let pattern = '';
for (let a = 1; a <= row; a++) {
    pattern += "*";
    console.log(pattern);
}