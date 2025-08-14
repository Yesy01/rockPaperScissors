let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let n = 0; n < 3; n++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Current scores are Human: ${humanScore}, Computer: ${computerScore}`);
        // console.log(getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("🤝 It's a tie overall!");
    }
}

playGame();
