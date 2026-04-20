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
    return "scissors";
  } else if (compChoice >= 0.333 && compChoice < 0.666) {
    compChoice = "rock";
    console.log("Computer chose Rock!");
    return "rock";
  } else {
    compChoice = "paper";
    console.log("Computer chose Paper!");
    return "paper";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper, Scissors");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    console.log("You Chose Rock!");
    return "rock";
  } else if (userChoice === "scissors") {
    console.log("You chose Scissors");
    return "scissors";
  } else if (userChoice === "paper") {
    console.log("You chose Paper!");
    return "paper";
  } else {
    alert("Please reload the page to try again! Id10+ error");
  }
}

function playRound(compChoice, humanChoice) {
  if (compSelection === humanSelection) {
    console.log("It's a tie!");
  } else if (compSelection === "rock" && humanSelection === "scissors") {
    console.log("Rock beats scissors, You lose!");
    ++compScore;
  } else if (compSelection === "scissors" && humanSelection === "rock") {
    console.log("Rock beats scissors, You win!");
    ++humanScore;
  } else if (compSelection === "paper" && humanSelection === "Rock") {
    console.log("Paper beats rock, You Win!");
    ++humanScore;
  } else if (compSelection === "rock" && humanSelection === "paper") {
    console.log("Paper beats rock, You Win!");
    ++humanScore;
  } else if (compSelection === "scissors" && humanSelection === "paper") {
    console.log("Scissors beats paper, You lose!");
    ++compScore;
  } else if (compSelection === "paper" && humanSelection === "scissors") {
    console.log("Scissors beats paper, You Win!");
    ++humanScore;
  }
}
const compSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, compSelection);
