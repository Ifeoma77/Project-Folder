let firstNumber = '';
        let secondNumber = '';
        let currentOperator = '';
        let shouldResetDisplay = false;

        function appendNumber(number) {
            if (shouldResetDisplay) {
                document.getElementById('display').textContent = '';
                shouldResetDisplay = false;
            }
            document.getElementById('display').textContent += number;
        }

        function setOperator(operator) {
            if (currentOperator !== '') calculate();
            firstNumber = document.getElementById('display').textContent;
            currentOperator = operator;
            shouldResetDisplay = true;
        }

        function calculate() {
            if (currentOperator === '') return;
            secondNumber = document.getElementById('display').textContent;
            let result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
            document.getElementById('display').textContent = result;
            firstNumber = result;
            currentOperator = '';
        }

        function clearDisplay() {
            document.getElementById('display').textContent = '';
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
        }

        function operate(operator, a, b) {
            switch (operator) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return b !== 0 ? a / b : 'Error';
                default: return 0;
            }
        }