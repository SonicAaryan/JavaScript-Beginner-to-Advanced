const PROMPT = require('prompt-sync')()
let number = PROMPT("Enter the Number of which you want the Multiplication Table :")
let multipliedValue = '0';
for (let i = 1; i <= 10; i++) {
    multipliedValue = number * i;
    console.log(`${number} * ${i} = ${multipliedValue} `);
}
console.log(typeof multipliedValue);
// Here '5'* 5 = 25 ( Means String is Multipliying with Value and o/p is In Number )
// '3'+ 2 is = "32"
// '2'*'2' is = 4 (Implicit Conversion into Number)