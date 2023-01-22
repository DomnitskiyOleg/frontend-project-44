import gameEngine from '../index.js';
import getRandomInteger from '../operationsWithNumbers.js';

export const checkIsNumberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};
const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumberPrime = () => {
  const number = getRandomInteger(1, 50);
  const questionForPlayer = number;
  const correctAnswer = checkIsNumberPrime(number) ? 'yes' : 'no';
  return [questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(gameQuestion, isNumberPrime);
};
export default launchGame;
