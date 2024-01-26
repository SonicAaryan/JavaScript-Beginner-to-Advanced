const PROMPT = require('prompt-sync')()
let length = PROMPT("Enter the Length for Array to Store Element :");
let intArray = [length];
let smallestNum = null;
for (let arrayIterator = 0; arrayIterator < length; arrayIterator++) {
    intArray[arrayIterator] = parseInt(PROMPT("Enter the Value :"));
    if (arrayIterator === 0) {
        smallestNum = intArray[arrayIterator];
        continue;
    }
    if (smallestNum > intArray[arrayIterator]) {
        smallestNum = intArray[arrayIterator];
        console.log("--->", smallestNum);
    }
}
console.log("The Smallest Number is :", smallestNum);
