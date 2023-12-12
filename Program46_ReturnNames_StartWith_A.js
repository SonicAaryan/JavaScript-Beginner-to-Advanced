// Approach 1 (BY  For_Loop)
let stringArray = ['Aaryan', 'Alice', 'Hellsinki', 'Heramb'];
let tempArray = [];
function ReturnNames_A(stringOfNames, tempArray) {
    for (let nameIndex = 0; nameIndex < stringArray.length; nameIndex++) {

        let currentString = stringArray[nameIndex][0].toLowerCase();
        console.log("currentString =", stringArray[nameIndex]);
        if (currentString == 'a') {
            tempArray.push(stringArray[nameIndex]);
        } else {
            //console.log(currentString.toUpperCase(), " is Not Allowed");
        }
    }
    console.log("The Names Start with A - Letters are :", tempArray);
}
ReturnNames_A(stringArray, tempArray);

console.log("\n-------------------------------------2nd Approach----------------------------------------\n");
// Approach 2 By (For_Of_Loop)
let nameArray = ['Aaryan', 'Abhi', 'Akshay', 'Heramb'];
let emptyArray = [];
function ReturnNamesStartWith_A(nameArray, emptyArray) {
    for (let name of nameArray) {
        let currentString = name[0].toLowerCase();
        console.log("currentString =", currentString);
        if (currentString == 'a') {
            emptyArray.push(name);
        } else {
            console.log(`---------------${currentString.toUpperCase()} is Not Allowed-----------------`);
        }
    }
    console.log("The Names Start with A - Letters are :", emptyArray);
}
ReturnNamesStartWith_A(nameArray, emptyArray);