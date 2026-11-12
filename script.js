
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const answer = prompt("Please enter your choice (rock, paper, or scissors):");
    return answer;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
    const human = humanChoice.toLowerCase();
    
    if (human === computerChoice) {
        console.log ("It's a tie!");
    } else if (human === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log ("You win! Rock beats scissors.");
    } else if (human === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log ("You win! Paper beats rock.");
    } else if (human === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log ("You win! Scissors beats paper.");
    } else {
        computerScore++;
        console.log ("You lose!");
    }
}

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
}

playGame();