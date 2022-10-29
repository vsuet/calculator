<?php

$task = $_GET['task'];
$errorMessage = "";
$result = 0;
$task = json_decode($task, true);

if (!is_array($task)) errorSend("Неверный формат данных");

for ($i = 0; $i < count($task); $i++) {
    $firstNumber = validate_number($task[$i]['firstNumber']);
    $secondNumber = validate_number($task[$i]['secondNumber']);
    $operator = validate_operator($task[$i]['operator']);
    $localResult = null;
    if ($operator == "divide") $localResult = divide($firstNumber, $secondNumber);
    elseif ($operator == "multiply") $localResult = multiply($firstNumber, $secondNumber);
    else continue;

    if ($i > 0) {
        $task[$i - 1]['secondNumber'] = $localResult;
    }

    if ($i < count($task) - 1) {
        $task[$i + 1]['firstNumber'] = $localResult;
    }

    array_splice($task, $i, 1);
    $i--;

    if (count($task) == 0) {
        $result = $localResult;
        response();
        exit;
    }
}

for ($i = 0; $i < count($task); $i++) {
    $firstNumber = validate_number($task[$i]['firstNumber']);
    $secondNumber = validate_number($task[$i]['secondNumber']);
    $operator = validate_operator($task[$i]['operator']);
    $localResult = null;
    if ($operator == "add") $localResult = add($firstNumber, $secondNumber);
    elseif ($operator == "subtract") $localResult = subtract($firstNumber, $secondNumber);
    else continue;
    if ($i < count($task) - 1) {
        $task[$i + 1]['firstNumber'] = $localResult;
    }

    array_splice($task, $i, 1);
    $i--;

    if (count($task) == 0) {
        $result = $localResult;
        response();
    }
}

function validate_number($number)
{
    if (is_numeric($number)) {
        return (float)$number;
    } else {
        return false;
    }
}

function validate_operator($operator)
{
    if (in_array($operator, ['add', 'subtract', 'multiply', 'divide'])) {
        return $operator;
    } else {
        return false;
    }
}

function add($a, $b)
{
    return $a + $b;
}

function subtract($a, $b)
{
    return $a - $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function divide($a, $b)
{
    if ($b === 0) errorSend("Деление на ноль невозможно");
    else return $a / $b;
}

function errorSend($message)
{
    global $errorMessage;
    $errorMessage = $message;
    response();
    exit;
}

function response()
{
    global $result, $errorMessage;
    $response = [
        'result' => $result,
        'error' => $errorMessage
    ];
    echo json_encode($response);
}