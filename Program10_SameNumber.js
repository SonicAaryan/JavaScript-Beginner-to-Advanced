const PROMPT = require('prompt-sync')()
let a = PROMPT("Enter 1st Value :");
let b = PROMPT("Enter 2nd Value :");
let c = PROMPT("Enter 3rd Value :");
if (a == b && b == c) { // Here String is Comparing to String
    console.log("Three Value are same :", 30);
} else if (a == b || b == c || a == c) {
    console.log("Any Two Value is same :", 40);
} else {
    console.log("Non-off the Value is Same", 20);
}
console.log(typeof a);