import readlineSync from 'readline-sync';

const inputOutputOperation = (questionForPlayer, correctAnswer, name) => {
  console.log(`Question: ${questionForPlayer}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`,
    );
    return 'wrong';
  }
  return 'correct';
};
export default inputOutputOperation;
