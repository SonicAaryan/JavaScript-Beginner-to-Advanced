function addGivenNumbers(array) {
    let sum = 0;
    for (let addition = 0;addition < array.length; addition++) {
        sum += array[addition]
    }
    console.log("The Total Sum of The Given Numbers are :", sum);
}
const PROMPT = require('prompt-sync')()
let array = [];
let length = parseInt(PROMPT("Enter the Length for Array :"));
for (let acceptValue = 0; acceptValue < length; acceptValue++) {
    array[acceptValue] = parseInt(PROMPT("Enter the Element for Array :"));
}
addGivenNumbers(array);

