
const gameBoard = (function () {
  // Array to hold the game board//
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
 
  
  // function to set the value of a spot on the boardoardzz //
  let setSpot = (index, mark) => {
    if (board[index] === ' ') {
      board[index] = mark;
    } else if (board[index] === mark) {
      return;
    }
  }

  // Function to reset the game board
  let resetBoard = ( ) => {
    return board  = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }
  // Return all the functions
  return { board, setSpot,resetBoard};
})();


// Player object to store player mark //
let playerObject = {
  player1: '',
  player2: '',

  setPlayers: function(mark1, mark2) {
    if (this.player1 === ''){
      this.player1 = mark1;
      this.player2 = mark2;
    }
  }
    
};

// A module  to control the flow of the game //
const gameController = (() => {
  let currentPlayer = playerObject.player1;
  let winningSymbol =null;
  let winningSequence;

  let switchPlayer=()=> {
    currentPlayer = currentPlayer === playerObject.player1 ? playerObject.player2 : playerObject.player1;
    return currentPlayer;
  }
  // function to check if the game is over//
  const checkWinner = () => {
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

    // Check for a winning combination
    for (const [a, b, c] of winningCombination) {
      if (gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[b] === gameBoard.board[c] && gameBoard.board[a] !== ' ') {
      winningSymbol = gameBoard.board[a];
      winningSequence = [a,b,c];
      return winningSymbol; // Return the winning symbol and exit the function
      }
    }

  // Check for a draw only if no winning combination is reached
    if (gameBoard.board.every(cell => cell !== ' ')) {
    return null;
    }
  }
  return {checkWinner, switchPlayer};  
})();

// Display module
const displayController = (() => {
  let x = document.getElementById('x');
  let o = document.getElementById('o');
  let reset = document.getElementById('reset');
  let cells = document.querySelectorAll('.cell');
  let player1Div = document.getElementById('player1');
  let player2Div = document.getElementById('player2');
  let winner = document.getElementById('winnerMessage')
  let playersSet = false;
  


  x.addEventListener('click', function() {
      // Your X button functionality here
   
      x.classList.add('button-tapped');
      o.classList.add('button-tapped');
      playerObject.setPlayers("x","o");
      updatePlayerDisplay();
      playersSet = true;
  });

  o.addEventListener('click', function() {
      // Your O button functionality here
      x.classList.add('button-tapped');
      o.classList.add('button-tapped');
      playerObject.setPlayers("o","x");
      updatePlayerDisplay();
      playersSet = true;
  });

  cells.forEach(function(cell, index) {
    cell.addEventListener('click', function() {
      if (playersSet && !gameController.checkWinner()) {
          gameBoard.setSpot(index,gameController.switchPlayer())
          // Update the content of the clicked cell with the new player value
          cell.textContent = gameBoard.board[index];
          cell.classList.add('cell-content');
          gameController.checkWinner();
        // Check the winner condition and update the winner message
        if (gameController.checkWinner()) {
          winnerMessage.textContent = `${gameController.checkWinner()} wins!`;
       }
      }
    })
  });


  reset.addEventListener('click', function() {
    // Call the resetBoard function
     gameBoard.board=gameBoard.resetBoard();
    // Update the content of all cells based on the game board values
    cells.forEach(function(cell, index) {
      cell.textContent = gameBoard.board[index];
      cell.classList.remove('cell-content');
      playersSet = false;
    });

    // Your Reset button functionality here
    // adding class for css functionality //
    x.classList.remove('button-tapped');
    o.classList.remove('button-tapped');
    // reseting player choices //
    playerObject.player1 = '';
    playerObject.player2 = '';
    updatePlayerDisplay();
    winnerMessage.textContent = " ";
  });

  let updatePlayerDisplay = () => {
    player1Div.textContent = `Player 1: ${playerObject.player1}`;
    player2Div.textContent = `Player 2: ${playerObject.player2}`;
  }

})();
