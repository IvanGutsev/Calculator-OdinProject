let number = 0;
let operation = "";
let secondNum = 0;
let canAddNum = true;
let display = document.querySelector(".display");
let buttons = document.querySelectorAll('button');

// clean the display for good measure
clearDisplay();

let canAddOperator = false;
buttons.forEach(button => {
    button.addEventListener("click", function handleClick(event) {
        button = event.target.innerHTML;
        // this works for now
        populateDisplay(button);
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