function addGivenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log("The Total Sum of The Given Numbers are :", sum);
}
const PROMPT = require('prompt-sync')()
let array = [];
let length = parseInt(PROMPT("Enter the Length for Array :"));
for (let i = 0; i < length; i++) {
    array[i] = parseInt(PROMPT("Enter the Element for Array :"));
}
addGivenNumbers(array);

