// console.log('Start coding the game!')- 


// Getting a random number to attach to one of the 3 choices

let randomNumber = Math.floor(Math.random() * 3);

let computerChoice;                                // Declare the variable
function getComputerChoice() {
if(randomNumber === 0) {
    console.log("rock");
}else if(randomNumber === 1) {
    console.log("paper");
}else {
    console.log("scissors")
}
}
getComputerChoice();