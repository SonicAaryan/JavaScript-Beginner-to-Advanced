const PROMPT = require('prompt-sync')()
const row = parseInt(PROMPT("Enter the Value :"));
for (let i = 1; i <= row; i++) {
    let pattern = '';

    for (let j = row; j > i; j--) {
        pattern += ' ';
    }
    for (let k = 1; k <= i; k++) {
        pattern += '*';
    }
    console.log(pattern);
}
