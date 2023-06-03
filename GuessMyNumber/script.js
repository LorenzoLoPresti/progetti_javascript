'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore');
highScore.textContent = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (Number(highScore.textContent) < score) {
      highScore.textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game!');
    }
  }
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', gameLogic);

document.querySelector('.again').addEventListener('click', resetGame);
