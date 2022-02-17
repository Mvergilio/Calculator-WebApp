class Calculator{
    constructor(currentOperandTextElement, previuosOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previuosOperandTextElement = previuosOperandTextElement;
        this.clearAll()
        // this.operation = operation;
    }
    clearAll(){
        this.currentOperand = "";
        this.previuosOperand = "";
        this.operation = undefined;
    }
    delete(){
        
    }
    appendNumber(number){
        if(number === "." && this.currentOperand.includes("."))return;

            this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOperation(operation){
    this.operation = operation;
    if(this.currentOperand.length == 0)return;
this.currentOperand = this.currentOperand.toString() + this.operation.toString();
this.previuosOperandTextElement.innerText = this.currentOperand;
this.currentOperand = "";
    }
    compute(){
this.value = this.previuosOperandTextElement.innerText.slice(-1);
this.currentOperand = parseFloat(this.currentOperand);
this.previuosOperand = this.previuosOperandTextElement.innerText.slice(0,-1);
switch (this.value) {
    case "÷":
        this.currentOperand = this.currentOperand / this.previuosOperand;
        break;

    case value:
        break;

    case value:
        break;
        
        case value:
            
        break;

    default:
        break;
}
console.log(this.value)
}

updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand;
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
    element.addEventListener("click", ()=>{
        CALCULATOR.appendNumber(element.innerText)
        CALCULATOR.updateDisplay();
    })
    
});

OPERATION_BRNS.forEach(element => {
    element.addEventListener("click", ()=>{
        CALCULATOR.chooseOperation(element.innerText)
        CALCULATOR.updateDisplay();
    })
    
});
EQUALS_BTN.addEventListener("click", ()=>{
        CALCULATOR.compute()
        CALCULATOR.updateDisplay();
        CALCULATOR.clearAll()
    })