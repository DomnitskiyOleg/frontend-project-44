import gameEngine from './index.js';
import { randomInteger } from './operationsWithNumbers.js';

const findingCorrectAnswer = (a, b, operator) => {
  let correctAnswer;
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
  return correctAnswer;
};
const calculateExpression = () => {
  const gameQuestion = 'What is the result of the expression?';
  const operators = ['-', '+', '*'];
  const a = randomInteger(1, 20);
  const b = randomInteger(1, 20);
  const operatorIndex = randomInteger(0, 2);
  const operator = operators[operatorIndex];
  const correctAnswer = findingCorrectAnswer(a, b, operator);
  const questionForPlayer = `${a} ${operator} ${b}`;
  return [gameQuestion, questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(calculateExpression);
};
export default launchGame;
