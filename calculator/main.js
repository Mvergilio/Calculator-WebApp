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

        if (this.currentOperand !== '') return;
        if (this.previuosOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previuosOperand = this.currentOperand;
        this.currentOperand = "";
    }



    compute() {
        let computation;
        const prev = parseFloat(this.previuosOperand);
        const current = parseFloat(this.currentOperand);
        console.log(this.operation)
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
        this.operation = undefined;
        this.previuosOperand = "";


    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previuosOperandTextElement.innerText = this.previuosOperand;
    }
}
const PREVIUOS_OPERAND = document.querySelector('[data-privious]');
const CURRENT_OPERAND = document.querySelector('[data-current]');
const NUMBERS = document.querySelectorAll('[data-number]');
const CLEAR_ALL = document.querySelector('[data-clear]')
const DELETE_OPERAND = document.querySelector('[data-delete]');
const OPERATION_BRNS = document.querySelectorAll('[data-oparation]')
const EQUALS_BTN = document.querySelector('[data-equals]');
// console.log(EQUALS_BTN)
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
        console.log(element.innerText)
        CALCULATOR.updateDisplay();
    })

});
EQUALS_BTN.addEventListener("click", () => {
    CALCULATOR.compute()
    CALCULATOR.updateDisplay();
})