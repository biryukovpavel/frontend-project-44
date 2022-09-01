import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

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
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return cons(question, correctAnswer);
};

const startGcdGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startGcdGame;
