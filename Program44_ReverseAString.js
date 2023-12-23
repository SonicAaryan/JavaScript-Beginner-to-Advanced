const PROMPT = require('prompt-sync')()
// Approach 1 : Without Using Inbuilt Method
let inputString = PROMPT("Enter the String :");
let emptyString = '';
for (let singleCharacter of inputString) {
    emptyString = singleCharacter + emptyString;
}
console.log("From the Approach 1 :", emptyString);

// Approach 2 : With Using Inbuilt Method
let reverseString = (inputString) => {
    let split = inputString.split("");
    let reverse = split.reverse();
    let joinString = reverse.join("");
    console.log("From the Approach 2 :", joinString);
}
reverseString(inputString);

// Approach 3 : Using Reverse For Loop
let reverse = '';
for (let stringIteration = inputString.length - 1; stringIteration >= 0; stringIteration--) {
    reverse = reverse + inputString[stringIteration];
}
console.log("From the Approach 3:", reverse);



