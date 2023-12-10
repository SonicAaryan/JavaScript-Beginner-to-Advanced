const PROMPT = require('prompt-sync')()
let length = PROMPT("Enter the Length for Array :");
let intArray = [length];
for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
    intArray[arrayIndex] = PROMPT("Enter the Value :");
}
let numCheck = parseInt(PROMPT("Enter the Number to check if it is Present in Array or Not :"));
function NumberCheck(numCheck) {
    for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
        if (intArray[arrayIndex] === length) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(NumberCheck(numCheck));