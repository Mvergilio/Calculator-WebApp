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
this.previuosOperand = this.currentOperand;
this.currentOperand = "";
    }
    compute(){
this.value = this.previuosOperandTextElement.innerText.slice(-1);
this.currentOperand = Number(this.currentOperand);
this.previuosOperand = Number(this.previuosOperandTextElement.innerText.slice(0,-1));
switch (this.value) {
    case "÷":
        this.currentOperand = this.previuosOperand / this.currentOperand;
        break;
        
        case "+":
        this.currentOperand = this.previuosOperand + this.currentOperand;

        break;

    case "-":
        this.currentOperand = this.previuosOperand - this.currentOperand;

        break;
        
        case "*":
            this.currentOperand = this.previuosOperand * this.currentOperand;
            
            break;

            default:
                break;
    }
    this.previuosOperand = "";
}

updateDisplay(){
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
    element.addEventListener("click", ()=>{
        CALCULATOR.appendNumber(element.innerText)
        CALCULATOR.updateDisplay();
    })
    
});
CLEAR_ALL.addEventListener("click",()=>{
    CALCULATOR.clearAll();
    CALCULATOR.updateDisplay();
})

OPERATION_BRNS.forEach(element => {
    element.addEventListener("click", ()=>{
        CALCULATOR.chooseOperation(element.innerText)
        CALCULATOR.updateDisplay();
    })
    
});
EQUALS_BTN.addEventListener("click", ()=>{
        CALCULATOR.compute()
        CALCULATOR.updateDisplay();
    })