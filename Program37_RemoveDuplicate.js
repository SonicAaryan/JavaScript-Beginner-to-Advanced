const PROMPT = require('prompt-sync')()
let length = parseInt(PROMPT("Enter the Length for the Array :"));
let numArray = [length];
for (let arrayElementAccept = 0; arrayElementAccept < length; arrayElementAccept++) {
    numArray[arrayElementAccept] = parseInt(PROMPT("Enter the Element :"));
}
removeDuplicateValues(numArray);
function removeDuplicateValues(numArray) {
    let newArray = [];
    for (let iterationOne of numArray) {
        for (let iterationSecond of numArray) {
            if (iterationOne != iterationSecond) {
                newArray.push(iterationSecond)
            }
        }
    }
    console.log(newArray);
}