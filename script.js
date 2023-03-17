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
  const checkWinner = function () {
    let winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]] // diagonals]
    let winningSymbol;
    // Code to check for 3-in-a-row and a tie//
    for (let [a, b, c] of winningCombination) {
      if (!board[a] || !board[b] || !board[c]) {
        continue;
      } else if (board[a] === board[b] && board[b] === board[c]) {
        winningSymbol = board[a]
        console.log(winningSymbol)
        break;
      }
    }
    return winningSymbol
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
  return { board, setSpot, checkWinner, reset, renderBoard };
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
    /* console.log(`player1${player.player1}`);
    console.log(`player2${player.player2}`);
    console.log(`currentPLayer${currentPlayer}`); */
    return currentPlayer;
  };
  const handleGameOver = function () {
    if (gameBoard.checkWinner === player.player1) {
      console.log("player1 won")
    }else if (gameBoard.checkWinner === player.player2) {
      console.log("player2 won")
    }
  };
  /*
  const startGame = function () {
    // Public function to start the game //
    
  };
  */
  // Return puboardlic function
  return { currentPlayer, switchPlayer, handleGameOver };
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
      gameBoard.checkWinner();
      gameFlow.handleGameOver();
    });
  }
})();

// Optional use minimax to create an AI player // */
