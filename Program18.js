const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Value :"));
var num = 1;
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        num += '  ';
        console.log(num);
        num++;
    }
}