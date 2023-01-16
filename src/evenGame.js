import readlineSync from 'readline-sync';
import findOutPlayerName from './cli.js';

const name = findOutPlayerName();
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const checkIsNumberEven = (number) => number % 2 === 0;
const findingCorrectAnswer = (argument) => (argument === true ? 'yes' : 'no');
const isNumberEven = () => {
  let randomNumber = randomInteger(1, 20);
  let correctAnswer = findingCorrectAnswer(checkIsNumberEven(randomNumber));
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  let playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`,
    );
  }
  randomNumber = randomInteger(1, 20);
  correctAnswer = findingCorrectAnswer(checkIsNumberEven(randomNumber));
  console.log(`Question: ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`,
    );
  }
  randomNumber = randomInteger(1, 20);
  correctAnswer = findingCorrectAnswer(checkIsNumberEven(randomNumber));
  console.log(`Question: ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`,
    );
  }
  return console.log(`Congratulations, ${name}`);
};
export default isNumberEven;
