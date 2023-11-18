const PROMPT = require('prompt-sync')()
let inputNum = parseInt(PROMPT("Enter the Number :"));
for (let outerLoop = inputNum; outerLoop >= 1; outerLoop--) {
    let numPattern = '';
    for (let innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        numPattern += innerLoop + ' ';
    }
    console.log(numPattern);
}