const PROMPT = require('prompt-sync')()
let length = +PROMPT("Enter the Length for Array :");
let intArray = [length];
for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
    intArray[arrayIndex] = +PROMPT("Enter the Value :");
}
let numCheck = parseInt(PROMPT("Enter the Number to check if it is Present in Array or Not :"));
let flag = false;
function NumberCheck(intArray, numCheck) {
    let newArray = intArray;
    for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
        if (newArray[arrayIndex] === numCheck) {
            flag = true;
            break;
        }
    }
    console.log(flag);
}
NumberCheck(intArray, numCheck)