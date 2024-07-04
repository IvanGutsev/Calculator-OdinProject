const display = document.querySelector("[data-display-number]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')

let num1 = "";
let num2 = "";
let operator = undefined;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    let  computation;
    const prev = parseFloat(num1);
    const current = parseFloat(num2);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = add(prev, current);
            break;
        case '-':
            computation = subtract(prev, current);
            break;
        case '*':
            computation = multiply(prev, current);
            break;
        case '÷':
            computation = divide(prev, current);
            break;
        default:
            return;
        }
        num1 = computation;
        operation = undefined;
        num2 = '';
}

function updateDisplay(display, num) {
    display.innerText = num;
}

function chooseOperation(operation) {
    console.log(num1);
    if (num2 !== '') {
        operate(num1, num2, operation);
    } else {
        operator = operation;
    }
}

function appendNumber(number) {
    if (number === '.' && display.innerText.includes('.')) return;
    // if currentNum = one -> append to num1
    // else to num2
    // if you still can't do it it wont hurt to ask the TOP discord for help
    if (currentNum === "one") {
        num1 = num1.toString + number.toString;
    } else {
        num2 = num2.toString + number.toString;
    }
}