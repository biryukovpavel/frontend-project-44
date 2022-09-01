import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculateExpression = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const operations = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, operations.length);
  const operation = operations[operationIndex];

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(calculateExpression(operation, firstNumber, secondNumber));

  return cons(question, correctAnswer);
};

const startCalcGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startCalcGame;
