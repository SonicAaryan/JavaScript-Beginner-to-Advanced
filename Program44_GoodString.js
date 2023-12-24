const PROMPT = require('prompt-sync')()
let inputString = PROMPT("Enter the String :")

let isGoodString = (inputString) => {
    let length=inputString.length;
    if (length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isGoodString(inputString));