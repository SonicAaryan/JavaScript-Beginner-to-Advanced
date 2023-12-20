const PROMPT = require('prompt-sync')()
let length = PROMPT("Enter the Length Value :");
let intArray = [length];
for (let arrayIndex = 0; arrayIndex < length; arrayIndex++) {
    intArray[arrayIndex] = parseInt(PROMPT("Enter the Value :"));
}
console.log("The Element in the Array are :", intArray);
let Maximum = (intArray) => {
    let firstElement = intArray[0];
    for (let arrayIndex = 0; arrayIndex < intArray.length; arrayIndex++) {
        if (firstElement < intArray[arrayIndex]) {
            firstElement = intArray[arrayIndex];
        }
       // console.log("The FIRST ELEMENT :", firstElement);
    }
    console.log("The Maximum Value is :", firstElement);
}
Maximum(intArray);

let Minimum = (intArray) => {
    let firstElement = intArray[0];
    for (let arrayIndex = 1; arrayIndex < intArray.length; arrayIndex++) {
        if (firstElement > intArray[arrayIndex]) {
            firstElement = intArray[arrayIndex];
            console.log("-----", firstElement);
        }
    }
    console.log("The Minimum Value is:", firstElement);
}
Minimum(intArray);


// Arrow Function doesnt Host
