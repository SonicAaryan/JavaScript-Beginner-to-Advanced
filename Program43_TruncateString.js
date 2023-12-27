// Approach 1 :Logic Implemented
const PROMPT = require('prompt-sync')()
let inputString = PROMPT("Enter the String :");
let truncateNumber = parseInt(PROMPT("Enter the Number to Display Specific Count of words :"))
let truncateString = (inputString) => {
    let count = 0;
    let newString = "";
    if (inputString) {
        for (let character of inputString) {
            if (count === truncateNumber) {
                break;
            }
            if (character == " ") {
                count++;
                newString += " ";
            } else {
                newString += character;
            }
        }
        console.log(newString);
    } else {
        console.log("Enter the String");
    }
}
truncateString(inputString);