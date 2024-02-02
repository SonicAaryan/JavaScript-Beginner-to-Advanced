/* 
Write a program to print a Right Triangle Pattern of asterisks.
    *
   **
  ***
 ****
*****
*/
const PROMPT = require('prompt-sync')()
const row = parseInt(PROMPT("Enter the Value :"));
for (let outerLoop = 1; outerLoop <= row; outerLoop++) {
    let pattern = '';

    for (let emptySpaces = row; emptySpaces > outerLoop; emptySpaces--) {
        pattern += ' ';
    }
    for (let patternLoop = 1; patternLoop <= outerLoop; patternLoop++) {
        pattern += '*';
    }
    console.log(pattern);
}
