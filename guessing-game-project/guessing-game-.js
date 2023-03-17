// Import the readline module.
const readline = require("readline");
// Create the interface for input and output.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//initialize a variable "secretNumber" to any positive number
const secretNumber = 50;
// create a function called checkGuess that accepts a number
//  when the argument is larger than secretNumber, it should print 'Too high.' and return false
//  when the argument is smaller than secretNumber, it should print 'Too low.' and return false
//  when the argument is equal to secretNumber, it should print 'Correct!' and return true

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high.");
    no;
    return false;
  }
  if (num < secretNumber) {
    console.log("Too low.");
    return false;
  }
  if (num === secretNumber) {
    console.log("Correct!");
    return true;
  }
}
// console.log(checkGuess(50)); // "Correct!" true
// console.log(checkGuess(10)); // "Too low." false
// console.log(checkGuess(75)); // "Too high." false

// Define a function called askGuess
// Use readline module question to ask the user to "Enter a guess:"
// once the user enters "num", checkGuess function should be called with their number as an argument and the interface should be closed.
// If guess is correct, it will print "You win!" if incorrect it will call the askGuess function again
//

function askGuess() {
  rl.question("Enter a guess: ", (num) => {
    if (checkGuess(Number(num))) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });
}
askGuess();
