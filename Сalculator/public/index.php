<?php
$expression = null;
$result = null;
if (!empty($_GET['line'])) {
    $expression = str_replace([" ", ":"], ["+", "/"], $_GET['line']);
    $resultMatch = null;
    preg_match_all("/[\*\-\+\/\d]*/", $expression, $resultMatch);
    $resultExpression = "\"Не удалось посчитать\"";
    if (!empty($resultMatch[0][0]) && count($resultMatch[0]) < 3) {
        $resultExpression = $resultMatch[0][0];
    }
    eval("\$result = $resultExpression;");
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Калькулятор</title>
    <link rel="stylesheet" href="assets/css/index.css">
</head>
<body>
<div class="container">
    <div class="title">
        <h1>Калькулятор</h1>
    </div>
    <div class="calculate">
        <div class="calculate-expression">
            <input type="text" id="input_expression" value="<?php echo($result)?>">
        </div>
        <div class="calculate-buttons" id="calculate_buttons">
        </div>
    </div>
</div>

<script src="assets/js/index.js"></script>
</body>
</html>
