import gameEngine from '../index.js';
import { generateProgression, randomInteger } from '../operationsWithNumbers.js';

const findMissedNumberInProgression = () => {
  const gameQuestion = 'What number is missing in the progression?';
  const startNumber = randomInteger(1, 100);
  const growIndex = randomInteger(1, 5);
  const progressionLength = randomInteger(5, 10);
  const indexOfHiddenNumber = randomInteger(0, progressionLength - 1);
  const progression = generateProgression(
    startNumber,
    growIndex,
    progressionLength,
  );
  const correctAnswer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const questionForPlayer = progression.join(' ');
  return [gameQuestion, questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(findMissedNumberInProgression);
};
export default launchGame;
