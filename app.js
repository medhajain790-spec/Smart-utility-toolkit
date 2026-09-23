let isEven = require("./modules/isEven");
let logger = require("./modules/logger");

logger("Application started");

let number1 = 10;
let number2 = 7;

console.log(number1, "is even:", isEven(number1));
console.log(number2, "is even:", isEven(number2));

logger("Application finished");
