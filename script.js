// console.log('Start coding the game!')- Check if JavaScript is linked correctly

// Create the variables for keeping score

// Declare the variable
// Getting a random number to attach to one of the 3 choices

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// console.log(getComputerChoice());

// Get human choice 
//Declare the variable that is holding the human response

function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper, scissors!").toLowerCase();
    return humanChoice;
}

//console.log(getHumanChoice());

// Write the logic to play a single round and increment the score for the winner
// Asign the choices of the 2 players to 2 global variables that we will use as parameters for the playRound(). 

//playRound(humanSelection, computerSelection);

// Write function that plays one round and lets the players see who won. 
// Increment the score for the winner.

// Write the logic to play the entire game
// Use a for loop to iterate the game 5 times

// Declare 2 global variables for keeping the overall score after 5 games
let overallHumanScore = 0;
let overallComputerScore = 0;

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            console.log(`It's a tie! You both picked ${humanSelection}.`);
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")) {
            console.log(`Congratulations, you win! ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
        } else {
            console.log(`Sorry, you lost! ${computerSelection} beats ${humanSelection}.`);
            computerScore++;
        }
    }
    //Use a for loop that calls the function 5 times, each with a different choice result
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score after round ${i + 1}: You ${humanScore} - ${computerScore} Computer\n`);
    }
    // Determine the winner 
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore}- ${computerScore} Computer`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score: You ${humanScore}- ${computerScore} Computer`);
    } else {
        console.log(`The game is a tie! Final score:  You ${humanScore}- ${computerScore} Computer`);
    }
}

playGame();






