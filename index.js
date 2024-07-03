let number = "";
let operation = null;
let secondNum = "";
let canAddNum = true;
let display = document.querySelector(".display");
let buttons = document.querySelectorAll('button');

// clean the display for good measure
clearDisplay();

let canAddOperator = false;

buttons.forEach(button => {
    button.addEventListener("click", function handleClick(event) {
        button = event.target.innerHTML;
        let currentNum = number;

        // TODO: refactor this tomorrow
        if (Number(button) >= 0) {
            if (currentNum == number) {
                number += button;
            } else{
                secondNum += button;
            }
        }

        if (button == "+") {
            if (currentNum == secondNum) {
                operate(number, secondNum, operation);
            } else {
                currentNum = secondNum
            }
        }

        if (button == "=") {
            currentNum = firstNum;
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