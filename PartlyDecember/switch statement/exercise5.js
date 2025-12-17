// Exercise 5: Simple Calculator

// Create two number variables.
// Create a variable called operator that can be "+", "-", "*", or "/".
// Use if…else if…else or switch to perform the correct calculation.

// Print the result.

let firstNumber = 2;
let secondNumber = 5;

let operator = "*";

switch (operator) {
  case "+":
    let AddResult = firstNumber + secondNumber;
    console.log(AddResult);
    break;

  case "-":
    let SubResult = firstNumber - secondNumber;
    console.log(SubResult);
    break;

  case "*":
    let MultResult = firstNumber * secondNumber;
    console.log(MultResult);
    break;

  case "/":
    let divResult = firstNumber / secondNumber;
    console.log(divResult);
    break;

  default:
    console.log("Invalid Input");
}
