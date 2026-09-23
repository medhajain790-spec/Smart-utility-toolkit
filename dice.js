let crypto = require("crypto");

console.log("Dice Rolling Started");

for (let i = 1; i <= 5; i++) {
    let diceNumber = crypto.randomInt(1, 7);
    console.log("Dice Roll " + i + ":", diceNumber);
}

console.log("Dice Rolling Finished");
