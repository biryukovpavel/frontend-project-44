import { cons } from '@hexlet/pairs';
import { game, getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);

  return cons(question, correctAnswer);
};

const gcdGame = () => {
  game(description, getQuestionAndAnswer);
};

export default gcdGame;
