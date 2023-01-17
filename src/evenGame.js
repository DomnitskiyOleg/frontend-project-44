import inputOutputOperation from './inputOutputLogic.js';
import findOutPlayerName from './cli.js';

const isNumberEven = () => {
  const name = findOutPlayerName();
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const checkIsNumberEven = (number) => number % 2 === 0;
  const findingCorrectAnswer = (argument) => (argument === true ? 'yes' : 'no');
  let randomNumber;
  let correctAnswer;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    randomNumber = randomInteger(1, 20);
    correctAnswer = findingCorrectAnswer(checkIsNumberEven(randomNumber));
    const result = inputOutputOperation(randomNumber, correctAnswer, name);
    if (result === 'wrong') {
      return false;
    }
  }
  return console.log(`Congratultaions, ${name}!`);
};
export default isNumberEven;
