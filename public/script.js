"use strict";

const display = document.querySelector("#display");
const buttons = document.querySelector(".button");

let displayValue = "0";

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}

// Add an event listener to the `buttons` element, which will delegate. 
// That means that if a button is clicked, the click event will bubble up to the `buttons` element, 
buttons.addEventListener("click", function (event) {

  const element = event.target;

  if (element.classList.contains("button")) {
    return;
  }

  if (element.classList.contains("operator")) {
    console.log("operator", element.value);
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

  if (element.classList.contains("calculate")) {
    
    console.log("calculate", element.value);
    return;
  }
  
  console.log("number", element.value);

  inputNumber(element.value);
  updateDisplay();
});

function inputNumber(number) {
  
  // If the `displayValue` is '0', replace it with the `number` pressed
  if (displayValue === "0") {
    displayValue = number;
  }
  // Otherwise append the `number` pressed to the `displayValue`
  else {
    displayValue += number;
  }
}

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

function clear() {
  // Reset the `displayValue` to '0'
  displayValue = "0";
}