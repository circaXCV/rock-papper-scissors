/* Rock = 0 Paper = 1 Scissors = 2 */
let rockPaperScissors = ['rock', 'paper', 'scissors'];

/* Select rock paper or scissors at random */ 
function computerPlay() {
    let computerSelection =  rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

    return computerSelection;
}

/* Takes user input and transforms it to lowercase.  */
function userPlay() {
    playerSelection = window.prompt("Rock, paper, or scissors, which will it be?");
    if (rockPaperScissors.indexOf(playerSelection.toLowerCase()) !== -1) {
        return playerSelection.toLowerCase();

    /* Prompt repeats if input is not rock, paper, or scissors */
    } else {
        userPlay();
    }
}

/* Plays one RPS round. */
function playRound(playerSelection, computerSelection) {

    /* Logic for ties */
    if (playerSelection == computerSelection) {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n It's a tie.")
        return ;

    /* Logic for player win */
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n You win!")
        return ;

    /* Logic for player lose */
    } else {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n Better luck next time.");
        return ;
    }
}

function playMatch() {
    for (let i = 0; i < 5; i++) {
        playRound(userPlay(), computerPlay());
    }
}

playMatch();