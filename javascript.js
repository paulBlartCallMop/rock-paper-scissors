let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = 3*Math.random();
    if (rand <= 1) {
        return "rock"
    } else if (rand <= 2){
        return "paper"
    }
    return "scissors"
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?")
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerChoice = computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Scissors" && computerChoice === "Paper")||(humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }
    humanScore = 0;
    computerScore = 0;
}
