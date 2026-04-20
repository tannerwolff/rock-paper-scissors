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
  }
}

function playRound(compChoice, humanChoice) {
  if (compChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (compChoice === "rock" && humanChoice === "scissors") {
    console.log("Rock beats scissors, You lose!");
    ++compScore;
  } else if (compChoice === "scissors" && humanChoice === "rock") {
    console.log("Rock beats scissors, You win!");
    ++humanScore;
  } else if (compChoice === "paper" && humanChoice === "rock") {
    console.log("Paper beats rock, You lose!");
    ++compScore;
  } else if (compChoice === "rock" && humanChoice === "paper") {
    console.log("Paper beats rock, You Win!");
    ++humanScore;
  } else if (compChoice === "scissors" && humanChoice === "paper") {
    console.log("Scissors beats paper, You lose!");
    ++compScore;
  } else if (compChoice === "paper" && humanChoice === "scissors") {
    console.log("Scissors beats paper, You Win!");
    ++humanScore;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  if (humanScore > compScore) {
    console.log(`You won: ${humanScore} : ${compScore}`);
  } else if (humanScore === compScore) {
    console.log(`You Tied: ${humanScore} : ${compScore}`);
  } else {
    console.log(`You lost: ${humanScore} : ${compScore}`);
  }
}

playGame();
