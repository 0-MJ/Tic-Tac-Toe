//Define a Module for Gameboard//
const GameBoard = (function() {
  // Private array to hold the game board//
  let board = ["", "", "", "", "", "", "", "", ""];
 
 
// Public function to set the value of a spot on the board
const setSpot = function ( ) {
    
  }
   // Public function to check if the game is over
   const isGameOver = function ()  {
    // Code to check for 3-in-a-row and a tie
  }
 // Public function to reset the board
    const reset = function() {
    board = ["", "", "", "", "", "", "", "", ""];
  }
  
  
// Return all the public functions
return {setSpot, isGameOver, reset };
})();
// Define factory function for players//
const player = function(name,mark) {
// Private variable to hold the player's name
  let playerName = name;
// Public function to get the player's name
const getName = function(name){
    return playerName;
  }
// Public function to get the player's mark
  const getMark = function (mark) {
    return mark;
  }

 // Return public functions
 return { getName, getMark };
};


//A module  to control the flow of the game//
const gameFlow = function()({
     // Private variable to hold the current player
        let currentPlayer;
    // Private function to switch the current player
    const switchPlayer = function () {
        
    }
    // Private function to handle the end of the game
    const handleGameOver = function () {
    
    }
    // Public function to start the game
    const startGame = function () {
  
    }
    
    // Return public function
    return {startGame};
})();

//Optional use minimax to create an AI player//