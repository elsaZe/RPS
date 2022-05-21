let computerSelection;
let playerSelection = "rock"

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        computerSelection = "rock";
    } else if (randomNumber == 1) {
        computerSelection = "paper";
    } else if (randomNumber == 2) {
        computerSelection = "scissors"
    }
    return computerSelection;
}
computerPlay()

let result;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        result = "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "Rock beats scissors. You Win!";
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        result = "Rock beats scissors. Computer Wins!"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "Scissors beats paper. You Win!"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "Scissors beats paper. Computer Wins!"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "Paper beats rock. You Win!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        result = "Paper beats rock. Computer Wins!"
    }
    return result
}

playRound("paper",computerSelection)
console.log(result)