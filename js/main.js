console.log('Hello world');

// Function to get the computer's choice
function getComputerChoice() {
    let botChoice = Math.random();
    if (botChoice < 0.33) {
        return 'rock';
    } else if (botChoice < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Function to get the human's choice
function getHumanChoice() {
    let choice = prompt('Rock, Paper, Or Scissors?').toLowerCase();
    console.log(choice);
    return choice;
}

// Function to play the game
function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) {
            console.log('You Win');
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log('You Tied');
        } else {
            console.log('You Lose');
            computerScore++;
        }
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log('Congratulations! You are the overall winner!');
    } else if (humanScore < computerScore) {
        console.log('The computer wins overall!');
    } else {
        console.log('The game is a tie!');
    }
}

// Call the playGame function to start the game
playGame();
