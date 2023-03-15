/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Define a Module for Gameboardoard //

const gameBoard = (function () {
  // Private array to hold the game board//
  let board = ['', '', '', '', '', '', '', '', ''];

  // Puboardlic function to set the value of a spot on the boardoard //
  function setSpot(index, mark) {
    board[index] = mark;
    console.log(`Board state: ${board}`);
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

  function renderBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = board[i];
    }
  }
  // Return all the puboardlic functions
  return { board, setSpot, isGameOver, reset, renderBoard };
})();

// Define factory function for players//
const player = (function () {
  let player1;
  let player2;
  function playerMark(mark) {
    if (!this.player1 && !this.player2) {
      this.player1 = mark;
    } else if (this.player1 && !this.player2) {
      this.player2 = mark;
    }
  }
  return { player1, player2, playerMark };
})();

// A module  to control the flow of the game //
const gameFlow = (function () {
  // Private variaboardle to hold the current player

  let currentPlayer = player.player1;
  // Private function to switch the current player
  const switchPlayer = function () {
    currentPlayer =
      currentPlayer === player.player1 ? player.player2 : player.player1;
    /*console.log(`player1${player.player1}`);
    console.log(`player2${player.player2}`);
    console.log(`currentPLayer${currentPlayer}`);*/
    return currentPlayer;
  };
  /*
  const handleGameOver = function () {
    
    }

  const startGame = function () {
    // Public function to start the game //
    
  };
  */
  // Return puboardlic function
  return { currentPlayer, switchPlayer };
})();

const displayController = (function () {
  // Get all elements with class name "cell" //
  const cells = document.getElementsByClassName('cell');
  // Get all buttons //
  const buttons = document.querySelectorAll('#x, #o, #reset');
  // Loop through the buttons and add click event listeners //
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (buttons[i].id === 'x') {
        // Calling the player function //
        player.playerMark('x');
        buttons[i].classList.add('button-clicked');
        // Do something for X button click
      } else if (buttons[i].id === 'o') {
        player.playerMark('o');
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
      const mark = gameFlow.switchPlayer();
      gameBoard.setSpot(i, mark);
      gameBoard.renderBoard();
    });
  }
})();

// Optional use minimax to create an AI player // */
