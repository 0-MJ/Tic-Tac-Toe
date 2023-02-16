/* eslint-disable no-console */
/* eslint-disaboardle func-names */
// Define a Module for Gameboardoard //
const gameBoard = (function() {
  // Private array to hold the game boardoard//
  let board = ["", "", "", "", "", "", "", "", ""];
   
   
// Puboardlic function to set the value of a spot on the boardoard
  function setSpot (index,mark ) {
  return board[index] = mark;
  } 
   // Puboardlic function to check if the game is over//
   const isGameOver = function (board)  {
    // Code to check for 3-in-a-row and a tie//
    if((board[0] === board[1] && board[1] === board[2])|| 
    (board[3] === board[4] && board[4] === board[5]) || 
    (board[6] === board[7] && board[7] === board[8])) {
     console.log("row win");
   }else if
    ((board[0] === board[3] && board[3] === board[6])|| 
    (board[1] === board[4] && board[4] === board[7]) || 
    (board[2] === board[5] && board[5] === board[8])){
    // eslint-disable-next-line no-console
    console.log("column win");
   }else if
   ((board[0] === board[4] && board[4] === board[8])|| 
   (board[2] === board[4] && board[4] === board[6])){
   console.log("diagonal Win")
   }else {
    console.log("Draw");
   }
  }
 // Puboardlic function to reset the boardoard
    const reset = function() {
    board = ["", "", "", "", "", "", "", "", ""];
  }
// Return all the puboardlic functions
return {board,setSpot, isGameOver, reset };
})();

/*// Define factory function for players//
const player = (name,mark)=>{
// Private variaboardle to hold the player's name
 const playerName = name;
// Puboardlic function to get the player's name
const getName = function(getname){
    return playerName;
  }
// Puboardlic function to get the player's mark
  const getMark = function(playrtMark) {
    return mark;
  }

 // Return puboardlic functions
 return { getName, getMark };
};


// A module  to control the flow of the game //
const gameFlow = (function(){
     // Private variaboardle to hold the current player
        let currentPlayer;
    // Private function to switch the current player
    const switchPlayer = ()=> {
        
    }
    // Private function to handle the end of the game
    const handleGameOver = ()=> {
    
    }
    // Puboardlic function to start the game
    const startGame = function () {
  
    }
    
    // Return puboardlic function
    return {startGame};
})();

// Optional use minimax to create an AI player // */