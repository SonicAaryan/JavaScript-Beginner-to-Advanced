let fibo = (lengthForLoop) => {
    let f0 = 0, f1 = 1
    for (let iteration = 2; iteration <= lengthForLoop; iteration++) {
        let f1 = (iteration - 1);
        let f2 = (iteration - 2);
        let result = f1 + f2
        console.log(result);
    }
}
const PROMPT = require('prompt-sync')()
let length = +PROMPT("Enter the length to print the Series :");
fibo(length);