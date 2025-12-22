#!/usr/bin/env node

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

function main() {
  const calc = new Calculator();
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    console.log("Operators: +, -, *, /");
    console.log("Example: node calculator.js 10 + 5");
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both operands must be valid numbers");
    process.exit(1);
  }

  let result;
  try {
    switch (operator) {
      case '+':
        result = calc.add(num1, num2);
        break;
      case '-':
        result = calc.subtract(num1, num2);
        break;
      case '*':
        result = calc.multiply(num1, num2);
        break;
      case '/':
        result = calc.divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        console.log("Supported operators: +, -, *, /");
        process.exit(1);
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
