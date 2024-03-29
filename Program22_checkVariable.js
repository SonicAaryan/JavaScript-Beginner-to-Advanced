/*
Write a JavaScript function to check to check whether a variable is numeric or not
e.g.
12 => true
'abcd' => false
'12' => true
' ' => false
1.20 => true
-200 => true 
*/
const onlyContainsNumber = (value) => /\d/.test(value);

// The \d metacharacter matches any digit (0 - 9) in the string.
// To check if the string contains ONLY numbers --> /^\d+$/ and .test() takes Data.
// And /\d/. this will Check if a Whole String contains a Numeric value or not

const PROMPT = require('prompt-sync')()
let input = PROMPT("Enter the Value :");
console.log(`The Result is ---> ${onlyContainsNumber(input)}`);


// ------> Static Way <------
// Different Code
// function variableCheck(value) {
//     if (typeof value === "number") {
//         console.log(true);
//     }
//     else if (typeof value === 'string') {
//         console.log(false);
//     }
// }
// let num = 1.23;
// variableCheck(num);