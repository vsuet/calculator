const oneButton = document.getElementById('calc-button-one');
const twoButton = document.getElementById('calc-button-two');
const threeButton = document.getElementById('calc-button-three');
const fourButton = document.getElementById('calc-button-four');
const fiveButton = document.getElementById('calc-button-five');
const sixButton = document.getElementById('calc-button-six');
const sevenButton = document.getElementById('calc-button-seven');
const eightButton = document.getElementById('calc-button-eight');
const nineButton = document.getElementById('calc-button-nine');
const zeroButton = document.getElementById('calc-button-zero');
const dotButton = document.getElementById('calc-button-dot');

const addButton = document.getElementById('calc-button-add');
const subtractButton = document.getElementById('calc-button-subtract');
const multiplyButton = document.getElementById('calc-button-multiply');
const divideButton = document.getElementById('calc-button-divide');
const percentButton = document.getElementById('calc-button-percent');

const resetButton = document.getElementById('calc-button-clear');
const equalsButton = document.getElementById('calc-button-equals');
const backspace = document.getElementById('calc-button-backspace');
const calcDisplay = document.getElementById('calc-display');
const plusMinus = document.getElementById('calc-button-plus-minus');

plusMinus.addEventListener('click', function () {
    let display = calcDisplay.value;
    let lastNumber = display.split(' ').pop();
    display = display.slice(0, display.length - lastNumber.length);
    if (lastNumber[0] === '-') {
        lastNumber = lastNumber.slice(1);
    } else {
        lastNumber = '-' + lastNumber;
    }
    calcDisplay.value = display + lastNumber;
});

resetButton.addEventListener('click', () => calcDisplay.value = '');

backspace.addEventListener('click', () => {
    calcDisplay.value = calcDisplay.value.slice(0, -1);
});

oneButton.addEventListener('click', () => calcDisplay.value += '1');
twoButton.addEventListener('click', () => calcDisplay.value += '2');
threeButton.addEventListener('click', () => calcDisplay.value += '3');
fourButton.addEventListener('click', () => calcDisplay.value += '4');
fiveButton.addEventListener('click', () => calcDisplay.value += '5');
sixButton.addEventListener('click', () => calcDisplay.value += '6');
sevenButton.addEventListener('click', () => calcDisplay.value += '7');
eightButton.addEventListener('click', () => calcDisplay.value += '8');
nineButton.addEventListener('click', () => calcDisplay.value += '9');
zeroButton.addEventListener('click', () => calcDisplay.value += '0');
dotButton.addEventListener('click', () => calcDisplay.value += '.');
multiplyButton.addEventListener('click', () => calcDisplay.value += ' * ');
divideButton.addEventListener('click', () => calcDisplay.value += ' / ');
addButton.addEventListener('click', () => calcDisplay.value += ' + ');
subtractButton.addEventListener('click', () => calcDisplay.value += ' - ');
percentButton.addEventListener('click', () => calcDisplay.value += ' / 100');

equalsButton.addEventListener('click', async () => {
        const args = calcDisplay.value.split(' ');
        calcDisplay.value = "Ожидание ответа...";
        let phpTask = []
        for (let i = 0; i < args.length; i += 2) {
            if (!args[i + 1]) continue;
            const firstNumber = validation_number(args[i]);
            const operator = validation_operator(args[i + 1]);
            const secondNumber = validation_number(args[i + 2]);
            if (firstNumber === false || operator === false || secondNumber === false) {
                calcDisplay.value = "Ошибка ввода";
                return;
            } else {
                if (operator === 'divide' && secondNumber === 0) {
                    calcDisplay.value = "На ноль делить нельзя";
                    return;
                }
                const operation = {
                    firstNumber: firstNumber,
                    operator: operator,
                    secondNumber: secondNumber
                }
                phpTask.push(operation);
            }
        }
        phpTask = JSON.stringify(phpTask);
        const response = await fetch(`/api/calculator?task=${phpTask}`)
        const result = JSON.parse(await response.text());
        if (result.error) {
            calcDisplay.value = await result.error;
        } else {
            calcDisplay.value = await result.result;
        }
    }
);

function validation_number(value) {
    const number = Number(value);
    if (isNaN(number)) {
        return false;
    }
    return number;
}

function validation_operator(value) {
    if (value === '*') {
        value = 'multiply';
    } else if (value === '/') {
        value = 'divide';
    } else if (value === '+') {
        value = 'add';
    } else if (value === '-') {
        value = 'subtract';
    } else return false;

    return value;
}