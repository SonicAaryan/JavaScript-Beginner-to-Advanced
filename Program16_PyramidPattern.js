const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Number :"));
for (let rowIndex = 1; rowIndex <= row; rowIndex++) {
    let pattern = '';
    for (let blankSpaces = 1; blankSpaces <= row - rowIndex; blankSpaces++) {
        pattern += '  ';
    }
    for (let k = 1; k <= rowIndex * 2 - 1; k++) {
        pattern += '*' + ' ';
    }
    // for (let l = 2; l <= rowIndex; l++) {
    //     pattern += '*' + ' ';
    // }
    console.log(pattern);
}
