// git add .
// git commit -m "Describe your change"
// git push

// TODO:
// playGame function
// playRound function
// Scoreboard

// Rock Paper Scissor Game
//
// Variables

let user = "";
let target = "";
let computer = ""; // the robot's choice as a word: "rock" / "paper" / "scissors"
let gameText = "";

// Start game
function startGame() {
  console.log("game begun");

  // "Choose a move"
}

//Selector screen

// User Chooses: 🗿📄✂️
function rock() {
  const selector = document.querySelector("#selector");
  user = "rock";
  console.log("human choses: rock");
  selector.textContent = "🗿";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
}

function paper() {
  const selector = document.querySelector("#selector");
  user = "paper";
  console.log("human choses: paper");
  selector.textContent = "📄";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
}

function scissor() {
  const selector = document.querySelector("#selector");
  user = "scissors";
  console.log("human choses: scissors");
  selector.textContent = "✂️";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
}

// A function to select the user's choice RPS
// Button 1,2,3
// onClick --> SELECTION = id
function select(id) {
  target = id;
  console.log(target);
}
//
//

// display "SELECTION"
//textContent

// Roboto Chooses: 🗿📄✂️
function getRandomInt(i) {
  return Math.floor(Math.random() * i);
}
function getComputerChoice() {
  // Roll a new number on every call (this was the original bug)
  const roll = getRandomInt(3);
  const choices = ["rock", "paper", "scissors"];
  const emojis = ["🗿", "📄", "✂️"];
  computer = choices[roll];

  // Look up the display element here so it works even if the script
  // loads before the HTML does
  const robotDisplay = document.querySelector("#robot");
  robotDisplay.textContent = emojis[roll];
  return computer;
}

// Display "Robot's Choice"

// A function to compare the two and determine a winner
function decide() {
  // if computer === "scissors"  // robot chooses scissor and human chose paper then robot win

  if (computer === "scissors" && user === "paper") {
    console.log("robot wins");
  } else if (computer === "scissors" && user === "rock") {
    console.log("user wins");
  } else if (computer === "scissors" && user === "scissor") {
    console.log("that's a tie");
  } else if (computer === "paper" && user === "paper") {
    console.log("that's a tie!");
  } else if (computer === "paper" && user === "rock") {
    console.log("robot wins");
  } else if (computer === "paper" && user === "scissor") {
    console.log("users wins");
  } else if (computer === "rock" && user === "paper") {
    console.log("user wins");
  } else if (computer === "rock" && user === "rock") {
    console.log("that's a tie!");
  } else if (computer === "rock" && user === "scissor") {
    console.log("that's a tie!");
  }
}

// SCORE BOARD (White box with 2 rows one for player + 1 for roboto)
// score player =0
// score Computer = 0

// a function to reset
function reset() {
  const selector = document.querySelector("#selector");
  const robotDisplay = document.querySelector("#robot");
  selector.textContent = "#";
  robotDisplay.textContent = "#";
  computer = "";
  user = "";
  // restart Game
  console.log("reset");
}
