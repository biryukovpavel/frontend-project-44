import { cons } from '@hexlet/pairs';
import { game, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return cons(question, correctAnswer);
};

const evenGame = () => {
  game(description, getQuestionAndAnswer);
};

export default evenGame;
