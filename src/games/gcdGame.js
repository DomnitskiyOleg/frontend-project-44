import gameEngine from '../index.js';
import getRandomInteger from '../operationsWithNumbers.js';

export const findGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a || b;
  }
  let divider;
  const iteration = a < b ? a : b;
  for (let i = 1; i <= iteration; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divider = i;
    }
  }
  return divider;
};
const gameQuestion = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = () => {
  const a = getRandomInteger(1, 20);
  const b = getRandomInteger(1, 20);
  const questionForPlayer = `${a} ${b}`;
  const correctAnswer = String(findGcd(a, b));
  return [questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(gameQuestion, greatestCommonDivisor);
};
export default launchGame;
