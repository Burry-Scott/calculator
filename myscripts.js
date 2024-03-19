let firstNum; 
let secondNum;
let operatorChoice;
let result;


function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};


function operate(num1, num2, operator) {
    if (operator === 'add') {
        result = add(num1, num2);
        num1 = result;
        return result;
    } else if (operator === 'subtract') {
        result = subtract(num1, num2);
        num1 = result;
        return result;
    } else if (operator === 'multiply') {
        result = multiply(num1, num2);
        num1 = result;
        return result;
    } else if (operator === 'divide') {
        result = divide(num1, num2);
        num1 = result;
        return result;
    };
};

operate(firstNum, secondNum, operatorChoice);
console.log(result);
