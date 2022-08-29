import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = getRandomNumber(0, 3);

  switch (operation) {
    case 0:
      return cons(`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber);
    case 1:
      return cons(`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber);
    case 2:
      return cons(`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber);
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const startCalcGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startCalcGame;
