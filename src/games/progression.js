import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const element = firstElement + (step * i);
    result.push(element);
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber();
  const length = getRandomNumber(5, 11);
  const step = getRandomNumber();
  const hiddenElementIndex = getRandomNumber(0, length - 1);

  const progression = getProgression(firstElement, step, length);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

const startProgressionGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startProgressionGame;
