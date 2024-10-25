function calculate(num1, num2) {
  function operation(num1, num2, callback) {
    return callback(num1, num2);
  }

  const addition = (a, b) => a + b;
  const multiplication = (a, b) => a * b;

  const sum = operation(num1, num2, addition);
  const product = operation(num1, num2, multiplication);

  console.log(`Sum: ${sum}`);
  console.log(`Product: ${product}`);
}

calculate(5, 3);
calculate(10, 20);
