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
let robot = 0;
let selector = "";
let computer = "";

// Start game
function startGame() {
  console.log("game begun");
  // "Choose a move"
}

//Selector screen

// User Chooses: 🗿📄✂️
function rock() {
  const rock = document.querySelector("#rock");
  let selector = document.querySelector("#selector");
  console.log("human choses: rock");
  selector.textContent = "🗿";
  getComputerChoice();
  console.log("robot chooses: " + computer);
}
function paper() {
  const paper = document.querySelector("#paper");
  let selector = document.querySelector("#selector");
  console.log("human choses: paper");
  selector.textContent = "📄";
  getComputerChoice();
  console.log("robot chooses: " + computer);
}
function scissor() {
  const scissor = document.querySelector("#scissor");
  let selector = document.querySelector("#selector");
  selector.textContent = "✂️";
  getComputerChoice();

  console.log("robot chooses: " + computer);
}

// A function to select the user's choice RPS
// Button 1,2,3
// onClick --> SELECTION = id
function select() {
  let target = id;
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
// robot = getRandomInt(3); // unneeded here

// console.log("robot choses" + robot);

function getComputerChoice() {
  robot = getRandomInt(3);
  if (robot === 0) {
    computer = "rock";
    robot.textContent = "🗿";
  } else if (robot === 1) {
    computer = "paper";
    robot.textContent = "📄";
  } else if (robot === 2) {
    computer = "scissors";
    robot.textContent = "✂️";
  }
  robot = document.querySelector("#robot");
  return "choice is :" + computer;
}

// Display "Robot's Choice"

// A function to compare the two and determine a winner
// ✂️ > 📄
// 📄 > 🗿
// 🗿 > ✂️'

// SCORE BOARD (White box with 2 rows one for player + 1 for roboto)
// score player =0
// score Computer = 0

// a function to reset
function reset() {
  selector = document.querySelector("#selector");
  selector.textContent = "#";
  robot = "";
  user = "";
  // restart Game
  console.log("reset");
}

// getElementById()

function myFunction() {
  document.getElementById("foo").style.cssText =
    "background-color: red; color: white; font-size: 44px";
}
