const PROMPT = require('prompt-sync')()
let row = +PROMPT("Enter the Value to Print Triangle Pattern :");
for (let i = 1; i <= row; i++) {
    var numCount = i;
    let emptySpace = '';
    for (let j = row; j > i; j--) {
        emptySpace += '  ';
    }
    for (let k = 1; k <= i; k++) {
        emptySpace += numCount + ' ';
        numCount++
    }
    numCount -= 1
    for (let l = 2; l <= i; l++) {
        numCount -= 1;
        emptySpace += numCount + ' ';
    }
    console.log(emptySpace);
}