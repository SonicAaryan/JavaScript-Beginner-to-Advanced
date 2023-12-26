//const PROMPT = require('prompt-sync')()
let inputString ="The quick brown fox jumps over the lazy dogs"

let truncateString = (inputString) => {
    let newString=inputString.slice(0, 15);
    console.log(newString);
}
truncateString(inputString);