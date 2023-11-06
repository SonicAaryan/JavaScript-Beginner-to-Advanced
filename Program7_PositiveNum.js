const PROMPT = require('prompt-sync')()
let a =PROMPT("Enter the Value :");
if(a==0){
    console.log("Zero");
}else if(a>=1){
    console.log("--- Number is Positive ---");
}else if(a <= -1){
    console.log("Number is Negative");
}