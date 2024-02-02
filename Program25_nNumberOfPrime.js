/*
Given an integer n, write a function to return the number of prime numbers that are strictly less than n.
Example 1:
    Input: n = 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:
    Input: n = 0
    Output: 0

Example 3:
    Input: n = 1
    Output: 0
*/
let func = (value) => {
    let temp = 0, primeCount = 0;
    for (let iteration = 2; iteration <= value; iteration++) {

        let condition = Math.floor(iteration / 2);
        for (let count = 2; count <= condition; count++) {
            if (iteration % count == 0) {
                temp += 1;
                break;
            } else {
                temp = 0;
            }
        }
        (temp == 0) ? console.log(`${iteration} is a prime number`, primeCount++) : console.log(`${iteration} Not Prime`);
    }
    console.log(`The Total Prime Numbers we found till ${value} are : ${primeCount}`);
};
const PROMPT = require('prompt-sync')()
let Num = parseInt(PROMPT("Enter the value till u want to Print Prime Numbers : "));
func(Num);