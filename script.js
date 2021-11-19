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
    if(rockPaperScissors.indexOf(playerSelection.toLowerCase()) !== -1) {
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
        console.log("It's a tie.");
        return console.log("Game over.");

    /* Logic for player win */
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You win!");
        return console.log("Game over.");

    /* Logic for player lose */
    } else {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You lose.");
        return console.log("Game over.");
    }
}

playRound(userPlay(), computerPlay());