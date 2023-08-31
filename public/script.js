"use strict";

//* Create variables to hold the `display` element and the `buttons` element
const display = document.querySelector("#display");
const buttons = document.querySelector(".button");

//* Create a `displayValue` variable to hold the string value of the input that will be displayed on the calculator screen
let displayValue = "0";

//* Create variables to hold the `firstOperand`, `operator`, and `waitingForSecondOperand` values
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

//* Initialize the display
updateDisplay();

//todo Create a function to update the display
function updateDisplay() {
  display.value = displayValue;
}

//todo Add an event listener to the `buttons` element, which will delegate. 
// That means that if a button is clicked, the click event will bubble up to the `buttons` element, 
buttons.addEventListener("click", function (event) {

  const element = event.target;

  if (element.classList.contains("button")) {
    return;
  }

  if (element.classList.contains("operator")) {
    // console.log("operator", element.value);
    handleOperator(element.value);
    updateDisplay();

    return;
  }

  if (element.classList.contains("decimal")) {
    // console.log("decimal", element.value);
    inputDecimal(element.value);
    updateDisplay();

    return;
  }

  if (element.classList.contains("clear")) {
    // console.log("clear", element.value);
    clear();
    updateDisplay();
    
    return;
  }
  
  console.log("number", element.value);

  inputNumber(element.value);
  updateDisplay();
});

//todo Create a function to handle the operators
function handleOperator(nextOperator) {
  
  const inputValue = parseFloat(displayValue);

  if(operator && waitingForSecondOperand) {
    
    operator = nextOperator;
    return;
  }

  // Verify that `firstOperand` is null and that the `inputValue` is not a `NaN` value
  if (firstOperand === null) {
    firstOperand = inputValue;

  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    
    // Update the `displayValue` to the `result`
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
  }

  // Update the existing `operator` variable
  waitingForSecondOperand = true;
  operator = nextOperator;

  console.log(displayValue, firstOperand, operator, waitingForSecondOperand);
}

//todo Create a function to perform the calculation
function calculate(firstOperand, secondOperand, operator) {

  // Perform the calculation based on the operator
  if (operator === "+") {
    return firstOperand + secondOperand;

  } else if (operator === "-") {
    return firstOperand - secondOperand;

  } else if (operator === "*") {
    return firstOperand * secondOperand;

  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

//todo Create a function to handle the number inputs
function inputNumber(number) {
  
  if (waitingForSecondOperand === true) {
    
    displayValue = number;
    waitingForSecondOperand = false;

  } else {
    
    // If the `displayValue` is '0', replace it with the `number` pressed
    if (displayValue === "0") {
      displayValue = number;
    }
    // Otherwise append the `number` pressed to the `displayValue`
    else {
      displayValue += number;
    }
  }

  console.log(displayValue, firstOperand, operator, waitingForSecondOperand);
}

//todo Create a function to handle the decimal point
function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

//todo Create a function to clear the calculator
function clear() {
  // Reset the `displayValue` to '0'
  displayValue = "0";
}