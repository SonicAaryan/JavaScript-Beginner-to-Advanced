const PROMPT = require('prompt-sync')()
let input1 = parseInt(PROMPT("Enter 1st Value :"));
let input2 = parseInt(PROMPT("Enter 2nd Value :"));
if (input1 == 15 || input2 == 15 || input1 + input2 == 15 || input1 - input2 == 15) {
    console.log(true);
} else {
    console.log(false);
}