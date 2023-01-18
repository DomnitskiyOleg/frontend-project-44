import gameEngine from './index.js';
import { randomInteger, checkIsNumberEven } from './operationsWithNumbers.js';

const isNumberEven = () => {
  const findingCorrectAnswer = (argument) => (argument === true ? 'yes' : 'no');
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = randomInteger(1, 10);
  const correctAnswer = findingCorrectAnswer(checkIsNumberEven(randomNumber));
  const questionForPlayer = `${randomNumber}`;
  return [gameQuestion, questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(isNumberEven);
};
export default launchGame;
