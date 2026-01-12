const prompt = require("prompt-sync")();

let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "☕️";
let gameActive = true;

function printBoard() {
    console.log(`
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
       ------------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
       ------------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
        `);
}

function handleMove(position) {
    if (gameBoard[position] === " ") {
        gameBoard[position] = currentPlayer;
    } else {
        console.log("Cell already taken, choose another one.");
        return false;
    }
}

if (checkWin()) {
    printBoard();
    console.log(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return true;
}
if (gameBoard.every((cell) => cell !== " ")) {
    printBoard();
    console.log("It's a draw!");
    gameActive = false;
    return true;
}


function handleMove(position) {
    if (board[position] === " ") {
        board[position] = currentPlayer;
    } else {
        console.log("Cell already taken, choose another one.");
        return false;
    }

    if (checkWin()) {
        printBoard();
        console.log(`Player ${currentPlayer} wins!`);
        active = false ;
        return true;
    }

    if (board.every((cell) => cell !== " ")) {
        printBoard();
        console.log("It's a draw!");
        active = false ;
        return true;
    }
    
    currentPlayer = currentPlayer === "☕️" ? "🍩" : "☕️";
    return true;
}