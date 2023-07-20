
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection && playerSelection != "") {
            return "It's a draw! You both selected the same!";

        } else if ( playerSelection === "rock" && computerSelection === "rock") {
            playerScore++;
            return "You won! Rock beats Scissors!";

        } else if ( playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors!";

        } else if ( playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return "You won! Scissors beats paper!";

        } else if ( playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper!";

        } else if ( playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return "You won! Paper beats Rock!";

        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock!";
        } else {
            return "You didn't select rock, paper, or scissors";
        }
    }        

    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(i);
        
        if (i === 5) {
            console.log("Final Score is: \n Player Score: " + playerScore + " | Computer Score: " + computerScore);
            if ( playerScore < computerScore) {
                console.log("You lost!");
            } else if ( playerScore > computerScore) {
                console.log("You won!");
            } else {
                console.log("It's a draw!");
            } 
        }
    }
}

console.log(game());