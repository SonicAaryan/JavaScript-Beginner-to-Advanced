const PROMPT = require('prompt-sync')()
let row = parseInt(PROMPT("Enter the Number :"));
for (let i = 1; i <= row; i++) {
    let pattern = '';
    for (let j = 1; j <= row - i; j++) {
        pattern += '  ';
    }
    for (let k = 1; k <= i; k++) {
        pattern += '*' + ' ';
    }
    for (let l = 2; l <= i; l++) {
        pattern += '*' + ' ';
    }
    console.log(pattern);
}
for (let i = row; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= row - i; j++) {
        pattern += '  ';
    }
    for (let k = 1; k <= i; k++) {
        pattern += '*' + ' ';
    }
    for (l = 1; l <= i; l++) {
        if (l > 1)
            pattern += '*' + ' ';
    }
    console.log(pattern);
}