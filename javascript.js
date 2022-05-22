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

let result;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        result = "tie"
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


const rock = document.getElementById("button1")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let wins = 0;
let loses = 0;

total = 0
function countClicks (){
    total++
    return total;
}

function chooseRock() {
    playRound('rock', computerPlay())
    if (result == "lose") {
        loses++;
        document.getElementById("result").innerHTML = "paper beats rock. You lose!";
        countClicks ();
    } else if (result == "win") {
        wins++;
        document.getElementById("result").innerHTML = "rock beats scissors. You win!";
        countClicks ();
    } else if (result == "tie") {
        document.getElementById("result").innerHTML = "It's a tie! Try again.";
    }
    document.getElementById("score").innerHTML = "The score is: "+wins+ " Wins and "+loses;
   
}

function choosePaper () {
    playRound('paper', computerPlay())
    if (result == "lose") {
        loses++;
        document.getElementById("result").innerHTML = "scissor beats paper. You lose!";
        countClicks ();
    } else if (result == "win") {
        wins++;
        document.getElementById("result").innerHTML ="paper beats rock. You win!";
        countClicks ();
    } else if (result == 'tie'){
        document.getElementById("result").innerHTML = "It's a tie. Try again.";
    }
    document.getElementById("score").innerHTML = "The score is: Wins: "+wins+" Loses: "+loses;
   
}

function chooseScissors () {
    playRound('scissors', computerPlay())
    if (result == "lose") {
        loses++;
        document.getElementById("result").innerHTML = "rock best scissors. You lose!";
        countClicks ();
    } else if (result == "win") {
        wins++;
        document.getElementById("result").innerHTML = "scissors beats paper. You win!";
        countClicks ();
    } else if (result == "tie") {
        document.getElementById("result").innerHTML = "It's a tie. Try again.";
    }
    document.getElementById("score").innerHTML = "The score is: Wins: "+wins+" Loses: "+loses;
}


rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);



       

 
    
 


/*
function game() {
    let wins = 0;
    let loses = 0;
    for(let i = 0; i < 5; i++) {
        playRound(playerChoice(),computerPlay())
        if (result == "lose") {
            loses++;
        } else if (result == "win") {
            wins++;
        }
           console.log("The score is: Wins: "+wins+" Loses: "+loses);
        }

    }
game();
*/