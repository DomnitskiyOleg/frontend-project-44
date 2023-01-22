import gameEngine from '../index.js';
import getRandomInteger from '../operationsWithNumbers.js';

const checkIsNumberEven = (number) => number % 2 === 0;
const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberEven = () => {
  const randomNumber = getRandomInteger(1, 10);
  const correctAnswer = checkIsNumberEven(randomNumber) ? 'yes' : 'no';
  const questionForPlayer = `${randomNumber}`;
  return [questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(gameQuestion, isNumberEven);
};
export default launchGame;
