import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const operations = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, 3);
  const operation = operations[operationIndex];

  switch (operation) {
    case '+':
      return cons(`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber);
    case '-':
      return cons(`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber);
    case '*':
      return cons(`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber);
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const startCalcGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startCalcGame;
