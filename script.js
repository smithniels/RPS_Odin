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
//Selector screen

// User Chooses: 🗿📄✂️
function rock() {
  const rock = document.querySelector("#rock");
  let selector = document.querySelector("#selector");
  console.log("human choses: rock");
  selector.textContent = "🗿";
}
function paper() {
  const paper = document.querySelector("#paper");
  let selector = document.querySelector("#selector");
  console.log("human choses: paper");
  selector.textContent = "📄";
}
function scissor() {
  const scissor = document.querySelector("#scissor");
  let selector = document.querySelector("#selector");
  selector.textContent = "✂️";
  console.log("human choses: scissors");
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

// Function to determinme computers choice
// function getComputerChoice()

function getRandomInt(i) {
  return Math.floor(Math.random() * i);
}
robot = getRandomInt(3);

// console.log("robot choses" + robot);

function getComputerChoice() {
  if (robot === 0) {
    computer = "rock";
    // console.log("rock");
  } else if (robot === 1) {
    computer = "paper";
    // console.log("paper");
  } else if (robot === 2) {
    computer = "scissors";
    // console.log("scissor");
  }
  console.log("robot chooses " + computer);
  robot = document.querySelector("#robot");
  return "choice is :" + computer;
}
getComputerChoice();
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
