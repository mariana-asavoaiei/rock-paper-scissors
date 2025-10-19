// console.log('Start coding the game!')- Check if JavaScript is linked correctly


// Getting a random number to attach to one of the 3 choices

let randomNumber = Math.floor(Math.random() * 3);

let computerChoice;                                // Declare the variable
function getComputerChoice() {
if(randomNumber === 0) {
    console.log("rock");
}else if(randomNumber === 1) {
    console.log("paper");
}else {
    console.log("scissors");
}
}
getComputerChoice();

// Get human choice 
//Declare the variable that is holding the human response

let humanChoice; 
function getHumanChoice() {
humanChoice = prompt("Choose between rock, paper, scissors!");
}

getHumanChoice();