/*
Write a program to print a reverse triangle pattern as follows -
12345
1234
123
12
1
*/
const PROMPT = require('prompt-sync')()
let inputNum = parseInt(PROMPT("Enter the Number :"));
for (let outerLoop = inputNum; outerLoop >= 1; outerLoop--) {
    let numPattern = '';
    for (let innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        numPattern += innerLoop + ' ';
    }
    console.log(numPattern);
}