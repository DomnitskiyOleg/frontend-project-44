import gameEngine from '../index.js';
import { checkIsNumberPrime, randomInteger } from '../operationsWithNumbers.js';

const isNumberPrime = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = randomInteger(1, 50);
  const questionForPlayer = number;
  const correctAnswer = checkIsNumberPrime(number) ? 'yes' : 'no';
  return [gameQuestion, questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(isNumberPrime);
};
export default launchGame;
