let displayEl = document.getElementById("display-el");
let isShowingAnswer = false

function clearDisplay() {
    displayEl.textContent = "";
}

function display(number){
    displayEl.textContent += number;
}

function newCalc() {
    if (isShowingAnswer === true){
        clearDisplay();
        isShowingAnswer = false;
    } 
}

function calculate() {
    let displayArray = displayEl.textContent;
    let result;
    let newArray=[];

    for(i=0; i<displayArray.length; i++) {
        
        if(displayArray[i] === "x") {
            newArray = displayArray.split("x");    
            result = newArray[0] * newArray[1];
            clearDisplay();
            display(result);
            isShowingAnswer = true;
            break;

        } else if(displayArray[i] === "+") {
            newArray = displayArray.split("+");    
            result = parseInt(newArray[0]) + parseInt(newArray[1]);
            clearDisplay();
            display(result);
            isShowingAnswer = true;
            break;

        } else if(displayArray[i] === "-") {
            newArray = displayArray.split("-");    
            result = newArray[0] - newArray[1];
            clearDisplay();
            display(result);
            isShowingAnswer = true;
            break;

        } else if(displayArray[i] === "÷") {
            newArray = displayArray.split("÷");    
            result = newArray[0] / newArray[1];
            clearDisplay();
            display(result);
            isShowingAnswer = true;
            break;
        }
    }
}