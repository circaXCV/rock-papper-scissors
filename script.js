/* Rock = 0 Paper = 1 Scissors = 2 */
let rockPaperScissors = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let computerSelection = "";

/* Starting values for wins, loses, and ties */
let wins = 0;
let losses = 0;
let ties = 0;

/* Select rock paper or scissors at random */ 
function computerPlay() {
    computerSelection =  rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerSelection;
}

/* Takes user input and transforms it to lowercase.  */
function userPlay() {
    playerSelection = window.prompt("Rock, paper, or scissors, which will it be?");
    if (rockPaperScissors.indexOf(playerSelection.toLowerCase()) !== -1) {
        playerSelection = playerSelection.toLowerCase();
        return playerSelection;

    /* Prompt repeats if input is not rock, paper, or scissors */
    } else {
        alert("Not a valid entry, please try again.");
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
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n It's a tie.")
        return ties++;

    /* Logic for player win */
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You win!");
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n You win!")
        return wins++;

    /* Logic for player lose */
    } else {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You lose.");
        alert("You played: " + playerSelection + ". \nThe computer played: " + computerSelection + ". \n Better luck next time.");
        return losses++;
    }
}
/* For loop that calls playRound() five times and opens a window displaying the results. */
function playMatch() {
    for (let i = 0; i < 5; i++) {
        userPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
    console.log("Final score: " + wins + "win(s)" + " - " + losses + "loss(es)" + " - " + ties + "tie(s)");
    alert("Thanks for playing! Your final score is " + wins + " win(s) to " + losses + " loss(es) and " + ties + " tie(s).");
}

playMatch();