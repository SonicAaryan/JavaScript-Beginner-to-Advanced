const PROMPT = require('prompt-sync')()
let num = parseInt(PROMPT("Enter the Number :"));
let val = 1;
for (let i = num; i >= 1; i--) {
    num = num + ' ';
    console.log(num);
}