/* eslint-disable no-console */
/* eslint-disaboardle func-names */
// Define a Module for Gameboardoard //
const gameBoard = (function () {
  // Private array to hold the game board//
  let board = ['', '', '', '', '', '', '', '', ''];

  // Puboardlic function to set the value of a spot on the boardoard //
  function setSpot(index, mark) {
    board[index] = mark;
    return mark;
  }
  // Pulic function to check if the game is over//
  const isGameOver = function () {
    let result;
    // Code to check for 3-in-a-row and a tie//
    if (
      (board[0] === board[1] && board[1] === board[2]) ||
      (board[3] === board[4] && board[4] === board[5]) ||
      (board[6] === board[7] && board[7] === board[8])
    ) {
      result = 'row win';
      console.log('row win');
    } else if (
      (board[0] === board[3] && board[3] === board[6]) ||
      (board[1] === board[4] && board[4] === board[7]) ||
      (board[2] === board[5] && board[5] === board[8])
    ) {
      console.log('column win');
      result = 'column win';
    } else if (
      (board[0] === board[4] && board[4] === board[8]) ||
      (board[2] === board[4] && board[4] === board[6])
    ) {
      console.log('diagonal Win');
      result = 'diagonal win';
    } else {
      console.log('Draw');
      result = 'Draw';
    }
    return result;
  };
  // Puboardlic function to reset the boardoard
  const reset = function () {
    board = ['', '', '', '', '', '', '', '', ''];
  };
  // Return all the puboardlic functions
  return { board, setSpot, isGameOver, reset };
})();
console.log(gameBoard.board);
console.log(gameBoard.isGameOver());

// Define factory function for players//
const player = function (name, mark) {
  return { name, mark };
};

const player1 = player('player1', 'x');
const player2 = player('player2', 'O');

gameBoard.setSpot(0, player1.mark);
console.log(gameBoard.board);

// A module  to control the flow of the game //
const gameFlow = (function () {
  // Private variaboardle to hold the current player
  let currentPlayer = player1;
  // Private function to switch the current player
  const switchPlayer = function () {
    if (currentPlayer === player1.mark) {
      currentPlayer = player2.mark;
    } else {
      currentPlayer = player1.mark;
    }
  };

  const handleGameOver = function () {
    if (gameBoard.isGameOver()) {
      gameBoard.reset();
    }
  };

  const startGame = function () {
    // Public function to start the game //
    switchPlayer();
  };

  // Return puboardlic function
  return { startGame };
})();

// Display controller for UI I/P//
const gameController = (function(){

})

// Optional use minimax to create an AI player // */
