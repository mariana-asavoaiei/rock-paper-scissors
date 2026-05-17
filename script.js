
// Game state
let humanScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// Core game logic

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log(`It's a tie! You both picked ${humanSelection}.`);
    return;
  }

  const humanWins =
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper");

  if (humanWins) {
    humanScore++;
    console.log(
      `You win! ${humanSelection} beats ${computerSelection}.`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${computerSelection} beats ${humanSelection}.`
    );
  }

  console.log(`Score → You: ${humanScore}, Computer: ${computerScore}`);
}


// UI interaction
const buttons = document.querySelectorAll("#container button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});