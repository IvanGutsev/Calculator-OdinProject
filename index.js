const display = document.querySelector("[data-display-number]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')

let num1 = "";
let num2 = "";
let operator = undefined;
let currentNum = "one";
let displayNumber = "";
let readyForNewOperand = false;

equalsBtn.addEventListener("click", () => {
    operate(num1, num2, operator);
    readyForNewOperand = true;
})

allClearBtn.addEventListener("click", () => {
    clear();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        let btn = button.innerText;
        appendNumber(btn);
        updateDisplay(display, displayNumber);
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        let btn = button.innerText;
        chooseOperation(btn);
        updateDisplay(display, displayNumber);
    })
})

// all the functions are below this line :)
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

function operate(numOne, numTwo, operator) {
    let computation;
    const prev = parseFloat(numOne);
    const current = parseFloat(numTwo);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
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
    num1 = computation.toString();
    displayNumber = num1;
    num2 = '';
    currentNum = "one";
    operator = undefined; // Reset the operator after computation
    updateDisplay(display, displayNumber);
}

function clear() {
    num1 = "";
    num2 = "";
    operator = undefined;
    displayNumber = "";
    currentNum = "one";
    updateDisplay(display, displayNumber);
}

function updateDisplay(display, num) {
    display.innerText = num;
}

function chooseOperation(operation) {
    if (num1 === "") return; // Do nothing if no number is input yet
    if (num2 !== "") {
        operate(num1, num2, operator);
        operator = operation;
        readyForNewOperand = true;
    } else if (readyForNewOperand) {
        operator = operation; // Remember the new operation
        currentNum = "two";
        readyForNewOperand = false;
    } else {
        operator = operation;
        currentNum = "two";
    }
}

function appendNumber(num) {
    if (num === '.' && displayNumber.includes('.')) return; // Allow only one decimal point
    if (readyForNewOperand) {
        num1 = displayNumber; // Reset the display to new operand after computation
        num2 = "";
        currentNum = "two";
        readyForNewOperand = false;
    }
    if (currentNum === "one") {
        num1 = num1.toString() + num.toString();
        displayNumber = num1;
    } else {
        num2 = num2.toString() + num.toString();
        displayNumber = num2;
    }
}
