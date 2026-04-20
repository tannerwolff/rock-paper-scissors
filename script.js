// 1. Take input from user
// 2. Store input in variable
// 3. Compare gathered input against CPU answer
// 4. Print results of win or loss

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let compChoice = Math.random();
  if (compChoice < 0.333) {
    compChoice = "scissors";
    console.log("Computer chose Scissors!");
  } else if (compChoice >= 0.333 && compChoice < 0.666) {
    compChoice = "rock";
    console.log("Computer chose Rock!");
  } else {
    compChoice = "paper";
    console.log("Computer chose Paper!");
  }
}

function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper, Scissors");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    console.log("You Chose Rock!");
  } else if (userChoice === "scissors") {
    console.log("You chose Scissors");
  } else if (userChoice === "paper") {
    console.log("You chose Paper!");
  } else {
    alert("Please reload the page to try again! Id10+ error");
  }
}

function playRound(compChoice, humanChoice) {
  const compSelection = getComputerChoice();
  const humanSelection = getHumanChoice();
  if (compChoice === "rock" && humanChoice === "rock") {
    console.log("Both chose rock! No one wins!");
  }
}

playRound();
