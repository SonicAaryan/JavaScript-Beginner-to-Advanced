function identifyPrimeNum(num) {
    let temp = 0;
    let condition = Math.floor(num / 2)
    for (let iteration = 2; iteration <= condition; iteration++) {
        if (num % iteration == 0) {
            temp += 1;
        }
    }
    if (temp == 0) {
        console.log(`${num} is a Prime Number`);
    } else {
        console.log(`${num} is Not a Prime Number`);
    }
}
const PROMPT = require('prompt-sync')()
let num = parseInt(PROMPT("Enter the Number to check for Prime :"));
identifyPrimeNum(num);
