/*
Write a function that finds the most frequent element in an array and returns it.
e.g.
1]  input: [10, 20, 10, 20, 30, 20, 20]         => output: 20 - 4 times
2] input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]     => output: a - 5 times
*/
const PROMPT = require('prompt-sync')()
let length = parseInt(PROMPT("Enter the Length for Array :"));
let newArray = [length];
for (let arrayInsertion = 0; arrayInsertion < length; arrayInsertion++) {
    newArray[arrayInsertion] = PROMPT("Enter the Value :");
}

countFrequentElement(newArray); // Function invoking

function countFrequentElement(newArray) {
    let count = 0;
    let findElement = PROMPT("Enter the Element which you want to count from Array :")
    for (let element of newArray) {
        if (findElement == element) {
            count += 1;
        }
    }
    console.log("The Number has Appeared :", count, "Times");
}