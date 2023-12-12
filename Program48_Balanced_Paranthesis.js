// Approach 1 BY (Array)
const PROMPT = require('prompt-sync')()
let symbolString = PROMPT("Enter the []{}() inputString combination to Check if it is Balanced Or Not! :");
let openingSymbol = '([{';
let closingSymbol = ')]}';
let stack = [];
function BalancedParanthesis(symbolString, openingSymbol, closingSymbol) {
    for (let i = 0; i < symbolString.length; i++) {
        let current = symbolString[i];
        if (openingSymbol.indexOf(current) >= 0) {
            stack.push(current);
            console.log("Adding In Stack -> ", stack);
        } else {
            let lastOpening = stack.pop();
            if (openingSymbol.indexOf(lastOpening) !== closingSymbol.indexOf(current)) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(BalancedParanthesis(symbolString, openingSymbol, closingSymbol),"\n----------------------------");

// Approach 2 BY (Object)
let inputString = PROMPT("Enter the []{}() inputString combination to Check if it is Balanced Or Not! :");
let opening = '([{';
let closing = ')]}';
let mapping = {
    ']': '[',
    '}': '{',
    ')': '(',
};
function BalancedParanthesis_Approach2(inputString, opening, closing) {
    for (let i = 0; i < inputString.length; i++) {
            let currentChar = inputString[i];
        if (!mapping[inputString[i]]) {
            stack.push(inputString[i]);
            console.log("Adding In Stack -> ", stack);
        } else {
            let lastOpeningBracket = stack.pop();
            if (mapping[currentChar] !== lastOpeningBracket) {
                return false;
            } else {
                return true;
            }
        }
    }
    return stack.length===0;
}
console.log(BalancedParanthesis_Approach2(inputString, opening, closing));