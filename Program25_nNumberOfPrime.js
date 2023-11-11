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