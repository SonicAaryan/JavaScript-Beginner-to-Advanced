const PROMPT = require('prompt-sync')()
let row = +PROMPT("Enter the Value to Print Triangle Pattern :");
for (let outerLoop = 1; outerLoop <= row; outerLoop++) {
    var numCount = outerLoop;
    let emptySpace = '';
    for (let freeSpaceLoop = row; freeSpaceLoop > outerLoop; freeSpaceLoop--) {
        emptySpace += '  ';
    }
    for (let first_Half = 1; first_Half <= outerLoop; first_Half++) {
        emptySpace += numCount + ' ';
        numCount++
    }
    numCount -= 1
    for (let second_Half = 2; second_Half <= outerLoop; second_Half++) {
        numCount -= 1;
        emptySpace += numCount + ' ';
    }
    console.log(emptySpace);
}