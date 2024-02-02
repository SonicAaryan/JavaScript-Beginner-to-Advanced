/*
Write a function to reverse a number without using any inbuilt function/method.
e.g.
Input - 12345
Output - 54321
*/
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