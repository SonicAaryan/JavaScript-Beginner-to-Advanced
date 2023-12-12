// Approach 1 BY (Array)
const PROMPT = require('prompt-sync')()
let symbolString = PROMPT("Enter the []{}() String combination to Check if it is Balanced Or Not! :");
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
// Approach 1 BY (Array)
let String = PROMPT("Enter the []{}() String combination to Check if it is Balanced Or Not! :");
let opening = '([{';
let closing = ')]}';
let mapping = {
    ']': '[',
    '}': '{',
    ')': '(',
};
function BalancedParanthesis_Approach2(String, opening, closing) {
    for (let i = 0; i < String.length; i++) {
            let currentChar = String[i];
        if (!mapping[String[i]]) {
            stack.push(String[i]);
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
console.log(BalancedParanthesis_Approach2(String, opening, closing));