const PROMPT = require('prompt-sync')()
let row = +PROMPT("Enter the Number Which will work on rows to Print Star : ");
for (let outerLoop = 1; outerLoop <= row; outerLoop++) {
    let emptySpace = '';
    for (let spaceIndex = row; spaceIndex > outerLoop; spaceIndex--) {
        emptySpace += '  ';
    }
    for (let firstHalfStar = 1; firstHalfStar <= outerLoop; firstHalfStar++) {
        emptySpace += '*' + ' ';
    }
    for (let secondHalfStar = 2; secondHalfStar <= outerLoop; secondHalfStar++) {
        emptySpace += '*' + ' ';
    }
    console.log(emptySpace);
}
for (let reverseLoop = row - 1; reverseLoop >= 1; reverseLoop--) {
    let emptySpace = '';
    for (let spaceIndex = 1; spaceIndex <= row - reverseLoop; spaceIndex++) {
        emptySpace += '  ';
    }
    for (let firstHalfStar = 1; firstHalfStar <= reverseLoop; firstHalfStar++) {
        emptySpace += '*' + ' ';
    }
    for (let secondHalfStar = 2; secondHalfStar <= reverseLoop; secondHalfStar++) {
        emptySpace += '*' + ' ';
    }
    console.log(emptySpace);
}