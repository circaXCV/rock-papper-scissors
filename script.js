/* Rock = 0 Paper = 1 Scissors = 2 */
let rockPaperScissors = ['rock', 'paper', 'scissors'];
let playerSelection = "";
let computerSelection = "";

/* Starting values for wins, loses, and ties */
let wins = 0;
let losses = 0;
let ties = 0;

/* Select rock paper or scissors at random from array, returns one of these. */ 
function getComputerPlay() {
    computerSelection =  rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerSelection;
}

/* Takes user input and transforms it to lowercase, returns this input if it matches rock, paper, or scissors.  */
function getUserPlay() {
    playerSelection = window.prompt("Rock, paper, or scissors, which will it be?");
    if (rockPaperScissors.indexOf(playerSelection.toLowerCase()) !== -1) {
        playerSelection = playerSelection.toLowerCase();
        return playerSelection;

    /* Prompt repeats if input is not rock, paper, or scissors */
    } else {
        alert("Not a valid entry, please try again.");
        getUserPlay();
    }
}

/* Plays one RPS round. */
function playRound(playerSelection, computerSelection) {

    /* Logic for ties */
    if (playerSelection == computerSelection) {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("It's a tie.");
        alert(`You played: ${playerSelection}. \nThe computer played: ${computerSelection}. \nIt's a tie.`);
        return ties++;
    }
    /* Logic for player wins */
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
                (playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "scissors" && computerSelection === "paper")) 
            {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You win!");
        alert(`You played: ${playerSelection}. \nThe computer played: ${computerSelection}. \nYou win!`);
        return wins++;

    /* Every other instance is a player loss. */
    } else {
        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);
        console.log("You lose.");
        alert(`You played: ${playerSelection}. \nThe computer played: ${computerSelection}. \nBetter luck next time.`);
        return losses++;
    }
}

/* For loop that calls playRound() five times and opens a window displaying the results. */
function playMatch() {
    for (let i = 0; i < 5; i++) {
        getUserPlay();
        getComputerPlay();
        playRound(playerSelection, computerSelection);
    }
    console.log(`Final score: ${wins}  win(s) - ${losses} loss(es) - ${ties} tie(s).`);
    alert(`Thanks for playing! Your final score is: 
            ${wins} win(s) to ${losses} loss(es) and ${ties} tie(s).`);
}

playMatch();