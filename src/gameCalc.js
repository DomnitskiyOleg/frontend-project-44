import inputOutputOperation from './inputOutputLogic.js';
import findOutPlayerName from './cli.js';

const calculateExpression = () => {
  const name = findOutPlayerName();
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const operators = ['-', '+', '*'];
  let a;
  let b;
  let randomIndex;
  let operator;
  let correctAnswer;
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    a = randomInteger(1, 20);
    b = randomInteger(1, 20);
    randomIndex = randomInteger(0, 2);
    operator = operators[randomIndex];
    const expression = `${a} ${operator} ${b}`;
    switch (operator) {
      case '-':
        correctAnswer = String(a - b);
        break;
      case '+':
        correctAnswer = String(a + b);
        break;
      case '*':
        correctAnswer = String(a * b);
        break;
      default:
        correctAnswer = null;
    }
    const result = inputOutputOperation(expression, correctAnswer, name);
    if (result === 'wrong') {
      return false;
    }
  }
  return console.log(`Congratultaions, ${name}!`);
};
export default calculateExpression;
