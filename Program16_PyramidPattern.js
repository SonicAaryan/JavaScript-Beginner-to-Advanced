/* 
Write a program to print a Pyramid Triangle Pattern of asterisks.
    *
   ***
  *****
 *******
*********
*/
const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Number :"));
console.time("ForLoop Time");
for (let outerLoop = 1; outerLoop <= row; outerLoop++) {
    let pattern = '';
    for (let blankSpaces = 1; blankSpaces <= row - outerLoop; blankSpaces++) {
        pattern += ' ';
    }
    for (let patternFirstHalf = 1; patternFirstHalf <= outerLoop * 2 - 1; patternFirstHalf++) {
        pattern += '*' ;
    }
    // Method 2 Without optimization
    // for (let patternFirstHalf = 1; patternFirstHalf <= outerLoop ; patternFirstHalf++) {
    //     pattern += '*' + '  ';
    // }
    // for (let patternSecondHalf = 2; patternSecondHalf <= outerLoop; patternSecondHalf++) {
    //     pattern += '*' + ' ';
    // }
    console.log(pattern);
}
console.timeEnd("ForLoop Time"); // Calculate Execution Time