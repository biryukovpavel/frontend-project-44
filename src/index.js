import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundCounts = 3;

const startGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundCounts; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
