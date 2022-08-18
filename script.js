const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation')
let num1 = "";
let num2 = "";
let displayText = "";
let operation = "";

function add (num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract (num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply (num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide (num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, num2, operation) {
  switch(operation) {
  case "add":
    add(num1, num2);
    break;
  
  case "subtract":
    subtract(num1, num2);
    break;

  case "multiply":
    multiply(num1, num2);
    break;

  case "divide":
    divide(num1, num2);
    break;
  }
}

// buttons.forEach((button) => {
  // button.addEventListener('click', setDisplay)
// })

digits.forEach((digit) => {
  digit.addEventListener('click', setDisplay);
})

operations.forEach((operationBtn) => {
  operationBtn.addEventListener('click', setDisplay)
  })


function setDisplay(e) {
  screen.textContent += e.target.innerHTML
  if (operation == "") { num1 += e.target.innerHTML;}
  else { num2 += e.target.innerHTML;}
  (e.target.classList.contains('operation')) ? operation = e.target.innerHTML : operation = "";
  console.log(operation);
  // (operation == "") ? num1 += e.target.innerHTML : num2 += e.target.innerHTML;
}

clearBtn.addEventListener('click', () => { screen.textContent = "0";})
