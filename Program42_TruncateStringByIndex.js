// Approach 1 : by .slice() Method
const PROMPT = require('prompt-sync')()
let inputString = PROMPT("Enter the String :");
let indexLength = parseInt(PROMPT("Enter the Number to display String by Index Number :"));

let truncateString = (inputString, indexLength) => {
    if (inputString) {
        let newString = inputString.slice(0, indexLength);
        console.log("By Using slice() Method :",newString);
    } else {
        console.log("Enter the String!");
    }
}
truncateString(inputString, indexLength);
console.log("------------------------------------------------------------------------------");
// Approach 2 : by for_Loop
let newString="";
for (let indexOfString = 0; indexOfString < indexLength; indexOfString++) {
    newString+=inputString[indexOfString]
}
console.log("By Using For_Loop :",newString);