//DOM
const currentExpression = document.querySelector('#preview-expression');
const expressionResult = document.querySelector('#preview-result');
const operatorVal = document.querySelector('#preview-operator');

const clearBtn = document.querySelector('#clear-btn');
const enterBtn = document.querySelector('#enter-btn');
const operatorBtn = document.querySelectorAll('.op');
const numBtn = document.querySelectorAll('.num');

let temp, tempTwo;



//number btn onclick
numBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let pushedBtn = btn.innerText;
        expressionResult.textContent += pushedBtn;
        temp = expressionResult.textContent;
    });
});

//operator btn onclick
operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let pushedBtn = btn.innerText;
        operatorVal.textContent = pushedBtn;
        setCurrentExpression();
        expressionResult.textContent = '';
    });
});

//clear btn onclick
clearBtn.addEventListener('click', clearText);

//enter btn onclick
enterBtn.addEventListener('click', () => {
    expressionResult.innerText = operate();
    currentExpression.innerText = '';
    operatorVal.innerText = '';
});


//CALCULATOR FUNCTIONS
//set current result to last one
function setCurrentExpression(curVal) {
    currentExpression.innerText = expressionResult.innerText;
}


//clear current displayed text
function clearText() {
    currentExpression.innerText = '';
    expressionResult.innerText = '';
    operatorVal.innerText = '';
}


//FOUR BASIC CALCULATOR FUNCTIONS:
//add +
function addVal(x, y) {
    return x + y
}

//subtract -
function subtractVal(x, y) {
    return x - y
}

//mult *
function multVal(x, y) {
    return x * y
}

//divide / 
function divideVal(x, y) {
    return x / y
}


//Solve expression
function operate(operator, lastVal, curVal) {
    lastVal = Number(currentExpression.innerText);
    curVal = Number(expressionResult.innerText);

    switch (operatorVal.innerText) {
        case '+':
            operator = addVal(lastVal, curVal)
            break;
        case '-':
            operator = subtractVal(lastVal, curVal)
            break;
        case '*':
            operator = multVal(lastVal, curVal)
            break;
        case '/':
            operator = divideVal(lastVal, curVal)
            break;
    }
    return operator
}


//ORIGINAL STATEMENTS 
// if (operatorVal.innerText == '+') {return operator = addVal(lastVal, curVal)}
// else if (operatorVal.innerText == '-') {return operator = subtractVal(lastVal, curVal)}
// else if (operatorVal.innerText == '*') {return operator = multVal(lastVal, curVal)}
// else if (operatorVal.innerText == '/') {return operator = divideVal(lastVal, curVal)}