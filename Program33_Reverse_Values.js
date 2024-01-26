const PROMPT = require('prompt-sync')()
let intArray = [];
let length = PROMPT("Enter the Length for Array :");
for (let indexOfArray = 0; indexOfArray < length; indexOfArray++) {
    intArray[indexOfArray] = PROMPT("Enter the Number :");
}
console.log("<---- Printing Value by Reversing Them ---->");
for (let reverseArray = intArray.length - 1; reverseArray >= 0; reverseArray--) {
    console.log(intArray[reverseArray]);
}