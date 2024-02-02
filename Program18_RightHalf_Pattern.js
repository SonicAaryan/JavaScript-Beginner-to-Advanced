/*
Write a program to print a pattern of numbers in a specific sequence as follows - 
1
2 3
4 5 6
7 8 9 10
*/
const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Value :"));
var num = 1;
for (let i = 1; i <= row; i++) {
    let spaces = '';
    for (let j = 1; j <= i; j++) {
        spaces += num+' ';
        num++;
    }
    console.log(spaces);
}