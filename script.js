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
let userScore = 0;
let roboScore = 0;
let result = "";

// This was causing errors idk why.... declaring with double paran stopped the problem
// let result = document.querySelector(".result");

// Start game
function startGame() {
  console.log("game begun");
  // Display message "Choose a move"
}

//Selector screen
console.log(result);
// User Chooses: 🗿📄✂️

function paper() {
  const selector = document.querySelector("#selector");
  selector.classList.add("animate__animated", "animate__bounceOutLeft");
  user = "paper";
  console.log("human choses: paper");
  selector.textContent = "📄";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
  // console.log(result);
}

function rock() {
  const selector = document.querySelector("#selector");
  user = "rock";
  console.log("human choses: rock");
  selector.textContent = "🗿";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
  // console.log(result);
}
// Scissors is a lil broken IDK why
function scissors() {
  console.log(result);
  const selector = document.querySelector("#selector");
  user = "scissors";
  console.log("human choses: scissors");
  selector.textContent = "✂️";
  getComputerChoice();
  console.log("robot chooses: " + computer);
  decide();
  // console.log(result);
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
  // Roll a new number on every call
  const roll = getRandomInt(3); // selects a random number 0, 1, 2
  const choices = ["rock", "paper", "scissors"];
  const emojis = ["🗿", "📄", "✂️"]; // 0, 1, 2
  computer = choices[roll];

  // Look up the display element here so it works even if the script
  // loads before the HTML does
  let robotDisplay = document.querySelector("#robot");
  robotDisplay.textContent = emojis[roll];
  return computer;
}

// Display "Robot's Choice"

// A function to compare the two and determine a winner
function decide() {
  // if computer === "scissors"  // robot chooses scissor and human chose paper then robot win
  if (computer === "scissors" && user === "paper") {
    console.log("robot wins");
    result.textContent = "robot wins";
    roboScore++;
  } else if (computer === "scissors" && user === "rock") {
    console.log("user wins");
    result.textContent = "user wins";
    userScore++;
  } else if (computer === "scissors" && user === "scissors") {
    console.log("that's a tie");
    result.textContent = "that's a tie, folks";
  } else if (computer === "paper" && user === "paper") {
    console.log("that's a tie!");
    result.textContent = "that's a tie";
  } else if (computer === "paper" && user === "rock") {
    console.log("robot wins");
    result.textContent = "robot wins";
    roboScore++;
  } else if (computer === "paper" && user === "scissors") {
    console.log("user wins");
    result.textContent = "user wins";
    userScore++;
  } else if (computer === "rock" && user === "paper") {
    console.log("user wins");
    userScore++;
    result.textContent = "user wins";
  } else if (computer === "rock" && user === "rock") {
    console.log("that's a tie!");
    result.textContent = "that's a tie, folks";
  } else if (computer === "rock" && user === "scissors") {
    console.log("robot wins");
    result.textContent = "robot wins";
    roboScore++;
  }
  console.log("user: " + userScore);
  console.log("robo: " + roboScore);
}
const resultDisplay = document.getElementById("result-display");
console.log(resultDisplay);
// function decide() {
//   if (result) {
//     result.textContent = "robot wins";
//   } else {
//     console.error("Element 'result-display' not found in the DOM.");
//   }
// }

// SCORE BOARD (White box with 2 rows one for player + 1 for roboto)
// score player = 0
// score Computer = 0

// a function to reset
function reset() {
  const selector = document.querySelector("#selector");
  const robotDisplay = document.querySelector("#robot");
  selector.textContent = "";
  robotDisplay.textContent = "";
  computer = "";
  user = "";
  userScore = 0;
  roboScore = 0;
  // restart Game
  console.log("game reset");
}
