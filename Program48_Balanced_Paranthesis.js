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
console.log(BalancedParanthesis(symbolString, openingSymbol, closingSymbol));