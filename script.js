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

/*// Define factory function for players//
function player(symbol) {
  let player1;
  let player2;

  return { player1, player2 };
}

console.log(gameBoard.board);*/
/*
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
*/

const displayController = (function () {
  // Get all elements with class name "cell" //
  const cells = document.getElementsByClassName('cell');
  // Get all buttons //
  const buttons = document.querySelectorAll('#x, #o, #reset');
  // Loop through the buttons and add click event listeners //
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (buttons[i].id === 'x') {
        console.log('X is Tapped');
        // Calling the player function //
        player('x');
        buttons[i].classList.add('button-clicked');
        // Do something for X button click
      } else if (buttons[i].id === 'o') {
        console.log('O is Tapped');
        player('o');
        buttons[i].classList.add('button-clicked');
        // Do something for O button click
      } else if (buttons[i].id === 'reset') {
        console.log('Reset is Tapped');
        // Do something for Reset button click
      }
    });
  }
  // loop through the cells and display the chosen symbol //
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      // Do something for cell click
    });
  }
})();

// Optional use minimax to create an AI player // */
