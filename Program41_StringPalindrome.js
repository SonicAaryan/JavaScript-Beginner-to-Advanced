const PROMPT = require('prompt-sync')()
let inputString = PROMPT("Enter the String :")

let checkStringPalindrome = (inputString) => {
    let emptyString = '';
    let duplicateString = inputString;
    for (let stringIteration of inputString) {
        emptyString = stringIteration + emptyString;
    }
    if (emptyString == duplicateString) {
        return true;
    } else {
        return false;
    }
}
console.log(checkStringPalindrome(inputString));