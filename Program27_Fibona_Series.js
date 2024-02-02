/*
Create a function to generate the first N terms of the Fibonacci sequence.
FYI: 
Fibonacci series or sequence starts with two numbers 0 and 1, and next number is obtained by adding two numbers before it. For example, third term 1 is found by adding 0 and 1, fourth term 2 is then obtained by third term 1 and second term 1.
e.g.
0, 1, 1, 2, 3, 5, 8, 13, 21 and so on
*/
let fibo = (lengthForLoop) => {
    let f0 = 0, f1 = 1, next = 0;
    console.log(f0);
    console.log(f1);
    for (let iteration = 2; iteration < lengthForLoop; iteration++) {
        next = f0 + f1;
        console.log(next);
        f0 = f1;
        f1 = next;
    }
}
const PROMPT = require('prompt-sync')()
let length = +PROMPT("Enter the length to print the Series :");
fibo(length);