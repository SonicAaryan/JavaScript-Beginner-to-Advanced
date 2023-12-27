// [1,2,1,2,4,5]
const PROMPT = require('prompt-sync')()
let length = parseInt(PROMPT("Enter the Length for the Array :"));
let numArray = [length];
for (let arrayElementAccept = 0; arrayElementAccept < length; arrayElementAccept++) {
    numArray[arrayElementAccept] = parseInt(PROMPT("Enter the Element :"));
}
removeDuplicateValues(numArray);
function removeDuplicateValues(numArray) {
    let newArray = [];
    let indexPlus = 1;
    for (let iterationOne = 0; iterationOne < length; iterationOne++) {
        for (let iterationSecond = indexPlus; iterationSecond < length; iterationSecond++) {
            if (numArray[iterationOne] == numArray[iterationSecond]) {
                newArray = numArray.pop(numArray[iterationOne])
            }
        }
        indexPlus++;
    }
    console.log(numArray);
}