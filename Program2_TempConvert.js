// Create a program that converts temperatures from Celsius to Fahrenheit using the(forml):F = (C * 9/5)+32.
const PROMPT = require('prompt-sync')()
let celsius = PROMPT("Enter the Temperature in Celsius , e.g-> 20,37  = ");
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Temperature from Celsius to Fahrenheit is = " + fahrenheit + "°F");