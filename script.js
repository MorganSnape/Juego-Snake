//Html Elements
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOverSign = document.getElementById("gameOver");

// Game settings

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDoown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

//Game Variables

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

//setear (preparar) el juego para eso es setGame
const setGame = () => {
  snake =["00", "01", "02", "03"];
  score = snake.length;
};

const startGame = () => {
  setGame();
};

startButton.addEventListener("click", startGame);
