import gameEngine from '../index.js';
import getRandomInteger from '../operationsWithNumbers.js';

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
const gameQuestion = 'What is the result of the expression?';
const calculateExpression = () => {
  const operators = ['-', '+', '*'];
  const a = getRandomInteger(1, 20);
  const b = getRandomInteger(1, 20);
  const operatorIndex = getRandomInteger(0, 2);
  const operator = operators[operatorIndex];
  const correctAnswer = findingCorrectAnswer(a, b, operator);
  const questionForPlayer = `${a} ${operator} ${b}`;
  return [questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(gameQuestion, calculateExpression);
};
export default launchGame;
