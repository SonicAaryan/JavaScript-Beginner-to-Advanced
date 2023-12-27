// Approach 1 : 
const PROMPT = require('prompt-sync')()
let inputString = PROMPT("Enter the String :");
let vowelCount1 = 0;
if (inputString) {
    for (let character of inputString.toLowerCase()) {
        if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
            vowelCount1++;
        }
    }
    console.log("The Vowel Count is :", vowelCount1);
}
else {
    console.log("Enter the Sentence!");
}

// Approach 2 : A little Optimized way
let newInputString = PROMPT("Enter the New String :");
let vowelCount2 = 0;
if (newInputString) {
    for (let eachCharacter of newInputString) {
        if (['a', 'e', 'i', 'o', 'u'].includes(eachCharacter.toLowerCase())) {
            vowelCount2++;
        }
    }
    console.log("The Vowel Count is :", vowelCount2);
} else {
    console.log("Enter the Sentence to Count the Vowels :");
}