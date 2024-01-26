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