
// Generates random selection for the computer
function computerPlay() {
    let randomInt = Math.random()*3;
    if (randomInt < 1) {
        return "rock";
    } else if (randomInt < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Converts string to sentence case
function toSentenceCase(s) {
    return s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase();
}

// Evaluates winner of the game
// Returns true if 1st player wins, otherwise false
function firstPlayerWins(player1, player2) {

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    switch (player1) {
        case rock:
           return (player2 === scissors) ? true : false;
        case paper:
            return (player2 === rock) ? true : false;
        case scissors:
            return (player2 === paper) ? true : false;
    }
}

// Runs a round of the game
function playRound (playerSelection, computerSelection) {

    let gameMessage;

    let p = toSentenceCase(playerSelection);
    let c = toSentenceCase(computerSelection);

    console.log("Player: " + p);
    console.log("Computer: " + c);

    if (p === c) {
        gameMessage = "Tie! " + p + " = " + c + ".";
        return gameMessage;
    }

    let playerWins = firstPlayerWins(p,c);

    if (playerWins === true) {
        gameMessage = "You Win! " + p + " beats " + c + ".";
    } else {
        gameMessage = "You Lose! " + c + " beats " + p + ".";
    }
    

    return gameMessage;
}

// Runs the game
function game () {

    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        playerSelection = prompt();
        computerSelection = computerPlay();
        console.log (playRound(playerSelection,computerSelection));
    }
}

game();