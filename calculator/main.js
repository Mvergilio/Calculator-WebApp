
class Calculator {
    constructor(currentOperandTextElement, previuosOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previuosOperandTextElement = previuosOperandTextElement;
        this.clearAll()
        // this.operation = operation;
    }
    clearAll() {
        this.currentOperand = "";
        this.previuosOperand = "";
        this.operation = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }
    appendNumber(number) {
        if (number === "." && String(this.currentOperand).includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }



    chooseOperation(operation) {

        if (this.currentOperand == '') return;
        if (this.previuosOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previuosOperand = this.currentOperand;
        this.currentOperand = "";
    }

    appedComma(number) {
        const integerPart = parseFloat(number.toString().split('.')[0]);
        const floatPart = number.toString().split('.')[1];
        let integerDisplay;
        if (isNaN(integerPart)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerPart.toLocaleString('en',
                { maximumFractionDigits: 0 });
        }
        if (floatPart != null) {
            return `${integerDisplay}.${floatPart}`
        } else {
            return integerDisplay;
        }

    }

    compute() {
        let computation;
        const prev = parseFloat(this.previuosOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "÷":
                computation = prev / current;
                break;

            case "+":
                computation = prev + current;

                break;

            case "-":
                computation = prev - current;

                break;

            case "*":
                computation = prev * current;
                break;
            default:
                return;

        }
        this.currentOperand = computation;
        this.operation = null;
        this.previuosOperand = "";

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.appedComma(this.currentOperand);
        if (this.operation) {
            this.previuosOperandTextElement.innerText =
                `${this.appedComma(this.previuosOperand)} ${this.operation} `

        } else {
            this.previuosOperandTextElement.innerText = this.appedComma(this.previuosOperand);
        }
    }
}
const PREVIUOS_OPERAND = document.querySelector('[data-privious]');
const CURRENT_OPERAND = document.querySelector('[data-current]');
const NUMBERS = document.querySelectorAll('[data-number]');
const CLEAR_ALL = document.querySelector('[data-clear]')
const DELETE_OPERAND = document.querySelector('[data-delete]');
const OPERATION_BRNS = document.querySelectorAll('[data-oparation]')
const EQUALS_BTN = document.querySelector('[data-equals]');
const CALCULATOR = new Calculator(CURRENT_OPERAND, PREVIUOS_OPERAND)
NUMBERS.forEach(element => {
    element.addEventListener("click", () => {
        CALCULATOR.appendNumber(element.innerText)
        CALCULATOR.updateDisplay();
    })

});

CLEAR_ALL.addEventListener("click", () => {
    CALCULATOR.clearAll();
    CALCULATOR.updateDisplay();
})
DELETE_OPERAND.addEventListener("click", () => {
    CALCULATOR.delete();
    CALCULATOR.updateDisplay();
})

OPERATION_BRNS.forEach(element => {
    element.addEventListener("click", () => {
        CALCULATOR.chooseOperation(element.innerText)
        CALCULATOR.updateDisplay();
    })

});
EQUALS_BTN.addEventListener("click", () => {
    CALCULATOR.compute()
    CALCULATOR.updateDisplay();
})