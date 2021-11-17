let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return Math.floor(Math.random() * rockPaperScissors.length);
}