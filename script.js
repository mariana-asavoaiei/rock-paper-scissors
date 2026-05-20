
// Game state

let humanScore = 0;
let computerScore = 0;

// DOM elements (cached)

const resultUpdatesPara = document.getElementById("resultUpdates");
const scorePara = document.getElementById("scoreCurrentRound");
const buttons = document.querySelectorAll("#container button");


// Computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// UI functions

function displayRoundResult(msg) {
  resultUpdatesPara.textContent = msg;
}

function updateScoreDisplay() {
  scorePara.textContent = `Score → You: ${humanScore} | Computer: ${computerScore}`;
}

function displayGameOver(message) {
  resultUpdatesPara.textContent = message;

  // disable buttons when game ends
  buttons.forEach(button => button.disabled = true);
}

function checkGameOver() {
  if (humanScore === 5) {
    displayGameOver("You win the game!");
    return true;
  }

  if (computerScore === 5) {
    displayGameOver("Computer wins the game!");
    return true;
  }

  return false;
}


// Core game logic

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    displayRoundResult(`It's a tie! You both picked ${humanSelection}.`);
    return;
  }

  const humanWins =
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper");

  if (humanWins) {
    humanScore++;
    displayRoundResult(
      `You win! ${humanSelection} beats ${computerSelection}.`
    );
  } else {
    computerScore++;
    displayRoundResult(
      `You lose! ${computerSelection} beats ${humanSelection}.`
    );
  }

  updateScoreDisplay();
  checkGameOver();
}

// Event listeners

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});


// Initial UI state

updateScoreDisplay();