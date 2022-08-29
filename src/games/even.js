import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return cons(question, correctAnswer);
};

const startEvenGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startEvenGame;
