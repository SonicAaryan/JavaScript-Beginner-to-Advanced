const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Number :"));
for (let outerLoop = 1; outerLoop <= row; outerLoop++) {
    let pattern = '';
    for (let blankSpaces = 1; blankSpaces <= row - outerLoop; blankSpaces++) {
        pattern += '  ';
    }
    for (let patternFirstHalf = 1; patternFirstHalf <= outerLoop; patternFirstHalf++) {
        pattern += '*' + ' ';
    }
    for (let patternSecondHalf = 2; patternSecondHalf <= outerLoop; patternSecondHalf++) {
        pattern += '*' + ' ';
    }
    console.log(pattern);
}
