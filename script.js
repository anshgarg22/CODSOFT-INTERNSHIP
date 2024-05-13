let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
