/*
Write a JavaScript function to check whether an object contains given property
e.g.
hasProperty({ name: "D", age: 2}, 'name') => true
hasProperty({ name: "D", age: 2}, 'last_name') => false
*/
const PROMPT = require('prompt-sync')()
function checkProperty(carModel) {
    let temp = PROMPT("Enter the Car Company Name :");
    console.log(carModel.Company == temp.toUpperCase() ? "True" : "False");
}
const carModel = {
    modelName: "X7",
    Company: "BMW",
    price: "1.53Cr"
}
checkProperty(carModel);

