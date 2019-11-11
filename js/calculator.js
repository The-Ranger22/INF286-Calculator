var num1 = '';
var num2 = '';
var isNum1empty = true;

var operator = '';
var firstOperatorPresent = false;

var result;

function typeNum(num) {
    if (isNum1empty) {
        num1 += num;
    } else {
        num2 += num;
    }
    document.getElementById("display").innerText = document.getElementById("display").innerText + num;

}

function typeOperator(operator_value) {

    operator = operator_value;

    num1 = document.getElementById("display").innerText;
    isNum1empty = false;
    document.getElementById("display").innerText = document.getElementById("display").innerText + operator_value;

}

function typeExecution() {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    result = 0;

    basicOperations();

    num1 = result;

}
function basicOperations(){
    switch(operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 / num2; break;
    }
}
function clearDisplay(){
    num1 = '';
    num2 = '';
    isNum1empty = true;
    result = '';
    operator = '';
    document.getElementById("display").innerText = '';
}