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
        updateDisplay(display, displayNumber);

        console.log(num1);
        console.log(num2);
        console.log(operator);
}

function updateDisplay(display, num) {
    display.innerText = num;
}

function chooseOperation(operation) {
    if (operator && num2 !== "") {
        console.log("will operate ");
        operate(num1, num2, operator);
    } 
    else {
        operator = operation;
        currentNum = "two";
    }

    console.log(operator);
}

function appendNumber(num) {
    // we want to allow only one . (we dont want something like 5.55.55 because it doesnt make sense mathematically to say "5 point 55 point 55") 
    if (num === '.' && display.innerText.includes('.')) return;
    // if currentNum = one -> append to num1
    // else to num2
    // if you still can't do it it wont hurt to ask the TOP discord for help

    // decide to which number to add num
    if (currentNum === "one") {
        num1 = num1.toString() + num.toString();
        displayNumber = num1;
    } else {
        num2 = num2.toString() + num.toString();
        displayNumber = num2;
    }
}