const PROMPT = require('prompt-sync')()
let num = parseInt(PROMPT("Enter the Number :"));
for (let i = num; i >= 1; i--) {
    let numPattern = '';
    for (let j = 1; j <= i; j++) {
        numPattern += j + ' ';
    }
    console.log(numPattern);
}