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

    if(operator === "+") result = firstNum + secondNum;
    if(operator === "-") result = firstNum - secondNum;
    if(operator === "x") result = firstNum * secondNum;
    if(operator === "/" && secondNum === 0) {
        result = "ERROR"
    }else if(operator === "/")result = firstNum / secondNum;


    display.textContent = result;
    //make previous calculation the new firstNum to continue calculations
    firstNum = result;
    secondNum = "";
}



for(let button of buttons){
    button.addEventListener("click", () => {
        //Destructuring, because unpacking is fun
        const {textContent: buttonValue, value:valAttribute} = button;

        // boolean check for operators / clicked button is either operator or not
        const isButtonValueOperator = operatorsList.includes(buttonValue);

        if(!secondNum && buttonValue === "=") return null;


        if(buttonValue === "clr"){
            firstNum = secondNum = operator = result = "";
            return display.textContent = "";

        }

        if(buttonValue === "del"){
            display.textContent = (display.textContent).substring(0,display.textContent.length - 1);
            return null;
            // console.log("this is delete")
        }
        //set operator to buttonvalue when button is clicked if firstNum and isButton...
        //otherwise, if no operator, set firstNum to buttonValue
        //otherwise if operator, set secondNum to buttonvalue
        if(firstNum && isButtonValueOperator){
            //so i can calculate without having to press equal
            //append new operator
            // if(secondNum){
            //     runCalculations();
            // }


            
            // logical and
            secondNum && runCalculations();
            operator = buttonValue;
        }

        else if(!operator ) firstNum += buttonValue;
        else if(operator) secondNum += buttonValue;

        //updates display with new numbers and operators, if not = sign
        //because we dont want to see the = sign
        if(buttonValue !== "=" ) display.textContent += buttonValue;
        // if(firstNum && secondNum && operator && buttonValue === "=") display.textContent += result;
        // else if(buttonValue !== "=" && operator) secondNum += buttonValue;
        // if(firstNum && isButtonValueOperator && operator) display.textContent += buttonValue;

        //DELETE FUNCTION
        // if(valAttribute === "del"){
        //    display.textContent = display.textContent.substring(0,display.textContent - 1);
        //     console.log(display.textContent)
        // }
        console.log(`this is firstnum:${typeof firstNum} ${firstNum}`)
        console.log(`this is operator:${typeof operator} ${operator}`)
        console.log(`this is secondnum:${typeof secondNum} ${secondNum}`)
        console.log(typeof display.textContent)
    })
}


// global variables

// // let prevNum;
// let currNum;
// let inputArr = [];
// let numBtns = Array.from(document.querySelectorAll(".num-btn"));
// let numberDisplay = document.querySelector(".input-field");
// numberDisplay.value = "0";
// let deleteKey = document.querySelector("#delete");
// let clearDisplayBtn = document.querySelector("#clear");
//
// // function calls
//
// // FUNCTION DECLARATIONS
//
//
// let addMethod = ()=>{
//
// }
//
//
// // EVENT LISTENER FUNCTION DECLARATIONS
// function addClickedNumberToDisplay(e) {
//     // input.value is the number in the input field
//     // currNum = parseInt(numberDisplay.value += e.target.value);
//     currNum = numberDisplay.value += e.target.value;
//     if(inputArr.length === 0){
//         inputArr.push(parseInt(currNum))
//     }
//
//     console.log(parseInt(currNum));
//     return parseInt(currNum);
// }
// function deleteLastNumberFromDisplay() {
//     //convert num to string. and remove last char
//     let y = currNum.toString().substring(0,currNum.toString().length - 1);
//     //make new input value reflect new string value (parsed as an int)
//     numberDisplay.value = parseInt(y);
//     //make new currNum value reflect new string value (parsed as an int)
//     //currnum is returned minus its deleted numbers
//     return currNum = parseInt(y);
// }
// function clearAllNumbersFromDisplay(){
//     // convert num to string. and remove last char
//     if(numberDisplay.value){
//         let y = currNum.toString().substring(currNum.toString().length - 1);
//         //set display to no value so placeholder will show up
//         numberDisplay.value = "";
//         //reset currnum to int 0
//         return currNum = 0;
//     }
//
// }
//
//
//
// // EVENT LISTENERS
// numBtns.forEach(numberButton => numberButton.addEventListener("click",addClickedNumberToDisplay));
// deleteKey.addEventListener("click",deleteLastNumberFromDisplay)
// clearDisplayBtn.addEventListener("click", clearAllNumbersFromDisplay)