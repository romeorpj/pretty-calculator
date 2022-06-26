"use strict";

//GLOBAL VARIABLES
const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll("button"));
const operatorsList = ["clr", "/", "x", "-", "+", "=", "del"];

//set as strings for concatenation
let operator = "";
let firstNum = "";
let secondNum = "";
let result = "";

// FUNCTION DECLARATIONS
const runCalculations = () => {
	// convert strNums to floats
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	if (operator === "+") result = firstNum + secondNum;
	if (operator === "-") result = firstNum - secondNum;
	if (operator === "x") result = firstNum * secondNum;
	if (operator === "/" && secondNum === 0) {
		result = "ERROR";
	} else if (operator === "/") result = firstNum / secondNum;

	display.textContent = result;
	//make previous calculation the new firstNum to continue calculations
	firstNum = result;
	secondNum = "";
};

for (let button of buttons) {
	button.addEventListener("click", () => {
		//Destructuring, because unpacking is fun :-)
		const { textContent: buttonValue, value: valAttribute } = button;

		// boolean check for operators / clicked button is either operator or not
		const isButtonValueOperator = operatorsList.includes(buttonValue);

		if (!secondNum && buttonValue === "=") return null;
// Clear function
		if (buttonValue === "clr") {
			firstNum = secondNum = operator = result = "";
			return (display.textContent = "");
		}
// Delete function
		if (buttonValue === "del") {
			display.textContent = display.textContent.substring(0,display.textContent.length - 1
			);
			return null;
		}
		//set operator to buttonvalue when button is clicked if firstNum and isButton...
		//otherwise, if no operator, set firstNum to buttonValue
		//otherwise if operator, set secondNum to buttonvalue
		if (firstNum && isButtonValueOperator) {
			//so i can calculate without having to press equal

			// logical and (return first false, else return last operand)
			secondNum && runCalculations();
			operator = buttonValue;
		} else if (!operator) firstNum += buttonValue;
		else if (operator) secondNum += buttonValue;

		//updates display with new numbers and operators, if not = sign
		//because we dont want to see the = sign
		if (buttonValue !== "=") display.textContent += buttonValue;
	});
}
