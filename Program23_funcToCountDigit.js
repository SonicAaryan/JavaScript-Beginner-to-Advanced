/*
Write a JavaScript function to count the digits of an integer.
e.g.
12345 => 5
999 = > 3
*/
const func = (number) => {
    let count = 0;
    if (number == 0)
        count++;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    console.log("The Count of Digits Are :", count);
};
const PROMPT = require('prompt-sync')()
let num = Number(PROMPT("Enter a positive integer: "));
func(num);