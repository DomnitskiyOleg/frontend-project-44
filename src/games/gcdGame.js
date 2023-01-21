import gameEngine from '../index.js';
import { findGcd, randomInteger } from '../operationsWithNumbers.js';

const greatestCommonDivisor = () => {
  const a = randomInteger(1, 20);
  const b = randomInteger(1, 20);
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  const questionForPlayer = `${a} ${b}`;
  const correctAnswer = String(findGcd(a, b));
  return [gameQuestion, questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(greatestCommonDivisor);
};
export default launchGame;
