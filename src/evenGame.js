import readlineSync from 'readline-sync';
import findOutPlayerName from './cli.js';

const name = findOutPlayerName();
const isNumberEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  let playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === 'no') {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`,
    );
  }
  console.log('Question: 6');
  playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === 'yes') {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`,
    );
  }
  console.log('Question: 7');
  playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === 'no') {
    console.log('Correct!');
  } else {
    return console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`,
    );
  }
  return console.log(`Congratulations, ${name}!`);
};
export default isNumberEven;
