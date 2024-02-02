/*
Write a function to check if a number is Prime
1] Input - 27   => Output- false

2] Input - 19  => Output- true
*/
function identifyPrimeNum(num) {
    let temp = 0;
    let condition = Math.floor(num / 2);
    if (condition > 1) {
        for (let iteration = 2; iteration <= condition; iteration++) {
            if (num % iteration == 0) {
                temp += 1;
            }
        }
        temp == 0 ? console.log(`${num} is a Prime Number`) : console.log(`${num} is Not a Prime Number`);
    } else {
        console.log(" Less than 1 are not Prime Numbers");
    }

}
const PROMPT = require('prompt-sync')()
let num = parseInt(PROMPT("Enter the Number to check for Prime :"));
identifyPrimeNum(num);
