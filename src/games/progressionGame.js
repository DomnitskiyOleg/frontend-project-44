import gameEngine from '../index.js';
import getRandomInteger from '../operationsWithNumbers.js';

const generateProgression = (startNumber, growIndex, progressionLength) => {
  let iteration = 1;
  const result = [];
  for (let i = startNumber; iteration <= progressionLength; i += growIndex) {
    iteration += 1;
    result.push(i);
  }
  return result;
};
const gameQuestion = 'What number is missing in the progression?';
const findMissedNumberInProgression = () => {
  const startNumber = getRandomInteger(1, 100);
  const growIndex = getRandomInteger(1, 5);
  const progressionLength = getRandomInteger(5, 10);
  const indexOfHiddenNumber = getRandomInteger(0, progressionLength - 1);
  const progression = generateProgression(
    startNumber,
    growIndex,
    progressionLength,
  );
  const correctAnswer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const questionForPlayer = progression.join(' ');
  return [questionForPlayer, correctAnswer];
};
const launchGame = () => {
  gameEngine(gameQuestion, findMissedNumberInProgression);
};
export default launchGame;
