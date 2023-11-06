const PROMPT = require('prompt-sync')()
let value = 100;
let num1 = parseInt(PROMPT("Enter the 1st Value, which is not Greater than 100 :"));
let num2 = parseInt(PROMPT("Enter the 2nd Value, which is not Greater than 100 :"));
let diff1 = Math.abs(num1 - 100);
console.log(diff1);
let diff2 = Math.abs(num2 - 100);
if (diff1 > diff2) {
    console.log(num1, "is Nearest to 100");
} else if (diff1 < diff2) {
    console.log(num2, "is Nearest to 100");
}