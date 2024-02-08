/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Define a Module for Gameboardoard //

const gameBoard = (function () {
  // Array to hold the game board//
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  
  let winningSymbol;
  
  // function to set the value of a spot on the boardoardzz //
  function setSpot(index, mark) {
    if (board[index] !== ' ') {
      console.log(`spot is already marked`);
    } else {
      board[index] = mark;
      console.log(board);
      return mark;
    }
  }

  // function to check if the game is over//
  const checkWinner = function () {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    // Code to check for 3-in-a-row and a tie//
    for (const [a, b, c] of winningCombination) {
      if (board[a] === board[b] && board[b] === board[c]) {
        this.winningSymbol = board[a];
        console.log(this.winningSymbol);
        break;
      }
    }
    return winningSymbol;
  };
  
  // Function to reset the boardoard
  const reset = function () {
    board = ['', '', '', '', '', '', '', '', ''];
  };

  // Return all the puboardlic functions
  return { board, setSpot, checkWinner, reset, winningSymbol };
})();

//console.log(gameBoard.setSpot(5,Game.switchPlayer()));//

// Player object to store player mark //
let playerObject = {
  player1: '',
  player2: '',

  setPlayers: function(mark1, mark2) {
    if (this.player1 === ''){
      this.player1 = mark1;
      this.player2 = mark2;
    } else {
      console.log('Players have already been set. To reset, press the reset button.');
    }
     
      
      console.log(`player1 chose ${this.player1}`);
      console.log(`player2 chose ${this.player2}`);
  }
    
};

// A module  to control the flow of the game //
const Game = (function () {
  let currentPlayer = playerObject.player1;

  function switchPlayer() {
    currentPlayer = currentPlayer === playerObject.player1 ? playerObject.player2 : playerObject.player1;
    return currentPlayer;
  }
  return {switchPlayer};
})();

// Display module
const displayController = (function () {
  let x = document.getElementById('x');
  let o = document.getElementById('o');
  let reset = document.getElementById('reset');
  let cells = document.querySelectorAll('.cell');
  let player1Div = document.getElementById('player1');
  let player2Div = document.getElementById('player2');

  x.addEventListener('click', function() {
      // Your X button functionality here
      console.log('X button clicked');
      x.classList.add('button-tapped');
      o.classList.add('button-tapped');
      playerObject.setPlayers("x","o");
      updatePlayerDisplay();
  });

  o.addEventListener('click', function() {
      // Your O button functionality here
      console.log('O button clicked');
      x.classList.add('button-tapped');
      o.classList.add('button-tapped');
      playerObject.setPlayers("o","x");
      updatePlayerDisplay();
  });

  reset.addEventListener('click', function() {
      // Your Reset button functionality here
      console.log('Reset button clicked');
      // adding class for css functionality //
      x.classList.remove('button-tapped');
      o.classList.remove('button-tapped');
      // reseting player choices //
      playerObject.player1 = '';
      playerObject.player2 = '';
      updatePlayerDisplay();
  });

  cells.forEach(function(cell, index) {
      cell.addEventListener('click', function() {
      
      // Update the content of the clicked cell with the new player value
      cell.textContent = Game.switchPlayer();
      cell.classList.add('cell-content');
    });
  }); 
  
  function updatePlayerDisplay() {
    player1Div.textContent = `Player 1: ${playerObject.player1}`;
    player2Div.textContent = `Player 2: ${playerObject.player2}`;
}

})();
