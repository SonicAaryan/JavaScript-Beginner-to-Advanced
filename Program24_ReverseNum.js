function reverseNumber(value) {
    let reverseNumber = '';
    while (value > 0) {
        reverseNumber += Math.floor(value % 10);
        value = Math.floor(value / 10);
    }
    console.log("The Reverse Number of Given Number is :", reverseNumber);
}
const PROMPT = require('prompt-sync')()
let number = parseInt(PROMPT(`Enter a number to Reverse : `))
reverseNumber(number);