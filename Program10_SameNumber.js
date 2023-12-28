const PROMPT = require('prompt-sync')()
let value1 = +PROMPT("Enter 1st Value :");
let value2 = +PROMPT("Enter 2nd Value :");
let value3 = +PROMPT("Enter 3rd Value :");
if (value1 == value2 && value2 == value3) { // Here String is Comparing to String
    console.log("Three Value are same :", 30);
} else if (value1 == value2 || value2 == value3) {
    console.log("Any Two Value is same :", 40);
} else {
    console.log("Non-off the Value is Same", 20);
}
console.log(typeof value1);