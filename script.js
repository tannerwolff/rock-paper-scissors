let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let compChoice = Math.random();
  if (compChoice < 0.333) {
    compChoice = "scissors";
    return "scissors";
  } else if (compChoice >= 0.333 && compChoice < 0.666) {
    compChoice = "rock";
    return "rock";
  } else {
    compChoice = "paper";
    return "paper";
  }
}

function getHumanChoice() {
  let playerChoiceRock = document.querySelector("#rock");
  let playerChoicePaper = document.querySelector("#paper");
  let playerChoiceScissors = document.querySelector("#scissors");
  let userChoice = "";

  playerChoiceRock.addEventListener("click", () =>
    playRound(getComputerChoice(), (userChoice = "rock")),
  );
  playerChoicePaper.addEventListener("click", () =>
    playRound(getComputerChoice(), (userChoice = "paper")),
  );
  playerChoiceScissors.addEventListener("click", () =>
    playRound(getComputerChoice(), (userChoice = "scissors")),
  );

  if (userChoice === "rock") {
    return "rock";
  } else if (userChoice === "scissors") {
    return "scissors";
  } else if (userChoice === "paper") {
    return "paper";
  }
}

function playRound(compChoice, humanChoice) {
  let resultsDiv = document.querySelector(".results");

  if (compChoice === humanChoice) {
    resultsDiv.textContent = "It's a tie!";
  } else if (compChoice === "rock" && humanChoice === "scissors") {
    resultsDiv.textContent = "Rock beats scissors, You lose!";
    ++compScore;
  } else if (compChoice === "scissors" && humanChoice === "rock") {
    resultsDiv.textContent = "Rock beats scissors, You win!";
    ++humanScore;
  } else if (compChoice === "paper" && humanChoice === "rock") {
    resultsDiv.textContent = "Paper beats rock, You lose!";
    ++compScore;
  } else if (compChoice === "rock" && humanChoice === "paper") {
    resultsDiv.textContent = "Paper beats rock, You Win!";
    ++humanScore;
  } else if (compChoice === "scissors" && humanChoice === "paper") {
    resultsDiv.textContent = "Scissors beats paper, You lose!";
    ++compScore;
  } else if (compChoice === "paper" && humanChoice === "scissors") {
    resultsDiv.textContent = "Scissors beats paper, You Win!";
    ++humanScore;
  }
  displayScores();
  let winnerResults = document.querySelector(".winnerResults");

  if (humanScore === 5) {
    winnerResults.textContent = "You win!";
  }
  if (compScore === 5) {
    winnerResults.textContent = "CPU wins!";
  }
}

function displayScores() {
  let displayCompScore = document.querySelector(".compScore");
  let displayHumanScore = document.querySelector(".humanScore");

  displayCompScore.textContent = `Computer Score: ${compScore}`;
  displayHumanScore.textContent = ` Your Score: ${humanScore}`;
}

getHumanChoice();
