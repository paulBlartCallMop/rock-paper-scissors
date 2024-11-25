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
        document.querySelector('#result').textContent = (humanScore === 5) ? "The human has won the match!" : `You win! ${humanChoice} beats ${computerChoice}.`
    } else {
        computerScore += 1;
        document.querySelector('#result').textContent = (computerScore === 5) ? "The computer has won the match!": `You lose! ${computerChoice} beats ${humanChoice}.`
    }
    document.querySelector('#manScore').textContent = humanScore;
    document.querySelector('#botScore').textContent = computerScore;
}

