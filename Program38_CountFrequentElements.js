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