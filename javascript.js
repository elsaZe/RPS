let computerSelection;
let playerSelection;

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

function playerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        playerSelection = "rock";
    } else if (randomNumber == 1) {
        playerSelection = "paper";
    } else if (randomNumber == 2) {
        playerSelection = "scissors"
    }
    return playerSelection;
}
playerPlay()

let result;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        result = "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "win";
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        result = "lose"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "win"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "lose"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "win"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        result = "lose"
    }
    return result
}

playRound(playerPlay(),computerPlay())
console.log("You " + result+"!")

function game() {
    let wins = 0;
    let loses = 0;
    for(let i = 0; i < 5; i++) {
        playRound(playerPlay(),computerPlay())
        if (result == "lose") {
            loses++;
        } else if (result == "win") {
            wins++;
        }
           console.log("The score is: Wins: "+wins+" Loses: "+loses);
        }

    }
game();
        