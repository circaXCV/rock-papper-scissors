/* Rock = 0 Paper = 1 Scissors = 2 */
let rockPaperScissors = ['rock', 'paper', 'scissors'];

/* Select rock paper or scissors at random */ 
function computerPlay() {
    computerSelection =  rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerSelection;
}
computerPlay();