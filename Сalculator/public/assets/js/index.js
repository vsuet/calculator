document.addEventListener("DOMContentLoaded", function(event) {
    const inputExpression = document.getElementById('input_expression');
    addButtonsCalculate();
    const calculate = document.getElementById('calculate_submit');
    calculate.addEventListener('click', requestCalculateExpression, false);
});

function requestCalculateExpression() {
    const inputExpression = document.getElementById('input_expression');
    window.location.href = 'http://127.0.0.1:8000' + '?line=' + inputExpression.value;
}

function addButtonsCalculate()
{
    const buttons = document.getElementById('calculate_buttons');
    for (let i = 0; i < 10; i++) {
        let divButton = document.createElement('div');
        divButton.textContent = i;
        divButton.classList = 'calculate-button button_numbers';
        divButton.setAttribute('onclick', 'appendNumberToInput()');
        buttons.append(divButton);
    }
    let calculateSubmit = document.createElement('div');
    calculateSubmit.id = 'calculate_submit';
    calculateSubmit.textContent = 'Посчитать';
    buttons.append(calculateSubmit);
}

function appendNumberToInput() {
    const inputExpression = document.getElementById('input_expression');
    inputExpression.value += event.target.textContent;
    console.log(event.target.textContent);
}