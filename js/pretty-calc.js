"use strict";

// global variables

// let prevNum;
let currNum;
let inputArr = [];
let numBtns = Array.from(document.querySelectorAll(".num-btn"));
let numberDisplay = document.querySelector(".input-field");
numberDisplay.value = "0";
let deleteKey = document.querySelector("#delete");
let clearDisplayBtn = document.querySelector("#clear");

// function calls

// FUNCTION DECLARATIONS


let addMethod = ()=>{

}


// EVENT LISTENER FUNCTION DECLARATIONS
function addClickedNumberToDisplay(e) {
    // input.value is the number in the input field
    // currNum = parseInt(numberDisplay.value += e.target.value);
    currNum = numberDisplay.value += e.target.value;
    if(inputArr.length === 0){
        inputArr.push(parseInt(currNum))
    }

    console.log(parseInt(currNum));
    return parseInt(currNum);
}
function deleteLastNumberFromDisplay() {
    //convert num to string. and remove last char
    let y = currNum.toString().substring(0,currNum.toString().length - 1);
    //make new input value reflect new string value (parsed as an int)
    numberDisplay.value = parseInt(y);
    //make new currNum value reflect new string value (parsed as an int)
    //currnum is returned minus its deleted numbers
    return currNum = parseInt(y);
}
function clearAllNumbersFromDisplay(){
    // convert num to string. and remove last char
    if(numberDisplay.value){
        let y = currNum.toString().substring(currNum.toString().length - 1);
        //set display to no value so placeholder will show up
        numberDisplay.value = "";
        //reset currnum to int 0
        return currNum = 0;
    }

}



// EVENT LISTENERS
numBtns.forEach(numberButton => numberButton.addEventListener("click",addClickedNumberToDisplay));
deleteKey.addEventListener("click",deleteLastNumberFromDisplay)
clearDisplayBtn.addEventListener("click", clearAllNumbersFromDisplay)