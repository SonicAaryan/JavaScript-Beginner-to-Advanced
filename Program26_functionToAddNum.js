// 1st Way
// function addGivenNumbers(array) {
//     let sum = 0;
//     for (let addition = 0;addition < array.length; addition++) {
//         sum += array[addition]
//         console.log(sum);
//     }
//     console.log("The Total Sum of The Given Numbers are :", sum);
// }
// const PROMPT = require('prompt-sync')()
// let array = [];
// let length = parseInt(PROMPT("Enter the Length for Array :"));
// for (let acceptValue = 0; acceptValue < length; acceptValue++) {
//     array[acceptValue] = parseInt(PROMPT("Enter the Element for Array :"));
// }
// addGivenNumbers(array);

// 2nd Way
const PROMPT = require('prompt-sync')()
function addGivenNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
addGivenNumbers(1, 4, 5, 8, 1, 2);
// let length = parseInt(PROMPT("Enter the Length for to Add Digits :"));
// for (let i = 0; i < length; i++) {
//     addGivenNumbers(i) = +PROMPT("Enter the Number");
// }