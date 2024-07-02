let number = null;
let operation = null;
let secondNum = null;
let canAddNum = true;
let display = document.querySelector(".display");
let buttons = document.querySelectorAll('button');

// clean the display for good measure
clearDisplay();

let canAddOperator = false;
buttons.forEach(button => {
    button.addEventListener("click", function handleClick(event) {
        button = event.target.innerHTML;
        if (button == "CLEAR") {
            clearDisplay();
        } else if (button == "=") {
            if (number != null && secondNum != null && operation != null) {
                operate(number, secondNum, operation);
            } else {
                console.log("invalid input");
            }
        } else if (button == "*" || button == "/" || button == "+" || button == "-") {
            if (canAddOperator) {
                populateDisplay(button);
                canAddOperator = false;
            } else {
                console.log("please enter number");
            }
        } else {
            populateDisplay(button);
            canAddOperator = true;
        }
    });
})



function clearDisplay() {
    display.innerHTML = "";
}

function add(num) {
    number += num;
}

function subtract(num) {
    number -= num;
}

function multiply(num) {
    number *= num;
}

function divide(num) {
    number /= num;
}

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case "add": add(num1, num2);
        case "subtract": subtract(num1, num2);
        case "multiply": multiply(num1, num2);
        case "divide": divide(num1, num2);
    }
}

function populateDisplay(number) {
    display.innerHTML += number;
}