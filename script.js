/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Define a Module for Gameboardoard //
/*
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

console.log(gameBoard.setSpot(5,'o'));
*/

// Player object to store player mark //
let playerObject = {
  player1: '',
  player2: '',

  setPlayers: function(mark1, mark2) {
      this.player1 = mark1;
      this.player2 = mark2;
  }
};

// Temporary code //
// Prompt the user for player marks
var player1Mark = prompt("Enter mark for Player 1:");
var player2Mark = prompt("Enter mark for Player 2:");

// Set players in the game object
game.setPlayers(player1Mark, player2Mark);

// Access player variables globally
console.log("Player 1 mark:", game.player1);
console.log("Player 2 mark:", game.player2);


// A module  to control the flow of the game //
const Game = (function () {
 
})();

/*
// Display module
const displayController = (function () {

})();
*/
