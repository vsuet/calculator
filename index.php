<?php
$title = "Калькулятор";
require 'header.php';
?>
<main id="main">
    <section class="mini-header">
        <h1>Калькулятор</h1>
        <p>Данный калькулятор поможет вам решить математические задачи</p>
    </section>
    <section class="calc">
        <form id="calculator">
            <div class="calc-header">
                <h2>Калькулятор</h2>
            <div class="calc-input">
                <label for="calc-input">Результат:</label>
                <input type="text" id="calc-display" placeholder="0" disabled>
            </div>
            <div class="calc-buttons">
                <button class="calc-button" id="calc-button-clear" type="button">C</button>
                <button class="calc-button" id="calc-button-backspace" type="button">⌫</button>
                <button class="calc-button" id="calc-button-percent" type="button">%</button>
                <button class="calc-button" id="calc-button-divide" type="button">/</button>
                <button class="calc-button" id="calc-button-seven" type="button">7</button>
                <button class="calc-button" id="calc-button-eight" type="button">8</button>
                <button class="calc-button" id="calc-button-nine" type="button">9</button>
                <button class="calc-button" id="calc-button-multiply" type="button">*</button>
                <button class="calc-button" id="calc-button-four" type="button">4</button>
                <button class="calc-button" id="calc-button-five" type="button">5</button>
                <button class="calc-button" id="calc-button-six" type="button">6</button>
                <button class="calc-button" id="calc-button-subtract" type="button">-</button>
                <button class="calc-button" id="calc-button-one" type="button">1</button>
                <button class="calc-button" id="calc-button-two" type="button">2</button>
                <button class="calc-button" id="calc-button-three" type="button">3</button>
                <button class="calc-button" id="calc-button-add" type="button">+</button>
                <button class="calc-button" id="calc-button-plus-minus" type="button">±</button>
                <button class="calc-button" id="calc-button-zero" type="button">0</button>
                <button class="calc-button" id="calc-button-dot" type="button">.</button>
                <button class="calc-button" id="calc-button-equals" type="button">=</button>
            </div>
        </form>
    </section>
</main>
<script src="scripts/calc.js"></script>
<?php
require 'footer.php';
?>
