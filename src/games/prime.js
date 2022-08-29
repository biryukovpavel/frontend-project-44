import { cons } from '@hexlet/pairs';
import { startGame, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return cons(question, correctAnswer);
};

const startPrimeGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startPrimeGame;
