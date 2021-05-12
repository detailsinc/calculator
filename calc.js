class Calculator {
    constructor(pastValueText, currentValueText) {
        this.pastValueText = pastValueText
        this.currentValueText = currentValueText
        this.clearAll()
    }

    //CLEAR ALL VALUES
    clearAll() {
        this.pastValue = ''
        this.operator = undefined
        this.currentValue = ''
    }

    //ADD VALUE TO currentValueText
    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue + number
    }

    //ADD THE SELECTED OPERATOR
    chooseOperator(operator) {
        if (this.currentValue === '') return
        if (this.pastValue !== '') {
            this.operate()
        }
        this.operator = operator
        this.pastValue = this.currentValue
        this.currentValue = ''
    }

    //ADD, SUBTRACT, MULT, DIVIDE pastV and currentV
    operate() {
        let result
        const pastV = parseFloat(this.pastValue)
        const currentV = parseFloat(this.currentValue)
        if (isNaN(pastV) || isNaN(currentV)) return
        switch (this.operator) {
            case '+':
                result = pastV + currentV
                break;
            case '-':
                result = pastV - currentV
                break;
            case '*':
                result = pastV * currentV
                break;
            case '/':
                result = pastV / currentV
                break;
            default:
                return
        }
        this.currentValue = result;
        this.operator = undefined;
        this.pastValue = ''
    }

    //UPDATE THE DIVS
    updateDisplay() {
        this.currentValueText.innerText = this.currentValue
        if (this.operator != null) {
            this.pastValueText.innerText = 
            `${this.pastValue} ${this.operator}`
        } else {
            this.pastValueText.innerText = ''
        }
    }
}

//DOM
const currentValueText = document.querySelector('#preview-result');
const pastValueText = document.querySelector('#preview-expression');

const clearBtn = document.querySelector('#clear-btn');
const enterBtn = document.querySelector('#enter-btn');
const operatorBtn = document.querySelectorAll('.op');
const numBtn = document.querySelectorAll('.num');




//NEW CALCULATOR OBJ
const calculator = new Calculator(pastValueText, currentValueText)

numBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText)
        calculator.updateDisplay()
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperator(btn.innerText)
        calculator.updateDisplay()
    })
})

clearBtn.addEventListener('click', btn => {
    calculator.clearAll()
    calculator.updateDisplay()
})

enterBtn.addEventListener('click', btn => {
    calculator.operate()
    calculator.updateDisplay()
})