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

