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

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Scissors" && computerChoice === "Paper")||(humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore += 1;
        document.querySelector('#result').textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1;
        document.querySelector('#result').textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
    }
}

