import readlineSync from 'readline-sync';

const gameEngine = (gameQuestion, roundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i <= 2; i += 1) {
    const [questionForPlayer, correctAnswer] = roundData();
    console.log(`Question: ${questionForPlayer}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
