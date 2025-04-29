let calculation = localStorage.getItem('calculation') || '';

  displayCalculation();

  function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }

  function calculateResult() {
    try {

      // Use math.evaluate to calculate safely
      let result = math.evaluate(calculation);

      // Format result to avoid decimal weirdness
      // calculation = math.format(result, { precision: 14 });

      // 'calculation' holds a number after math.evaluate()
      // math.format() - This function converts the number into a string.
      // formatted neatly.
      // { precision: 14 } - This tells math.format to round the number to 14 significant digits.
      // meaning it avoids long decimals but keeps the accuracy.
      calculation = math.format(result, { precision: 14 });

      displayCalculation();
      localStorage.setItem('calculation', calculation);

    } catch (error) {
      calculation = 'Error';
      displayCalculation();
    }
  }

  function clearCalculation() {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }

  function displayCalculation() {
    document.querySelector('.js-display').innerHTML = calculation;
  }