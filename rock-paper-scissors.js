
let choice = ['rock', 'paper', 'scissors'];

let playerWins = 0;
let computerWins = 0;

let playerSelection;
let computerSelection;

//  console.log(game()) in browser to run game & show winner in the end
// game();

function getPlayerSelection() {
    while (!choice.includes(playerSelection)) {
        playerSelection = prompt("Enter your Choice: ", "rock").toLowerCase();

    }
    return playerSelection;
}

function capitalizeSelection(Selection) {

    let capitalized = '';
    for (let i = 0; i < Selection.length; i++) {
        (i == 0) ? capitalized = Selection[i].toUpperCase() : capitalized += Selection[i];
    }
    return capitalized;
}

function getComputerSelection(array) {

    return array[Math.floor(Math.random() * array.length)];
}


function playRound(computerSelection, playerSelection) {

    // below lines to use for debugging & or play rounds:
    console.log(".................................................");
    console.log("computerSelection: " + computerSelection);
    console.log("playerSelection: " + playerSelection);
    // debugger;

    if (computerSelection == playerSelection) {
        console.log(`Match Draw! ${computerSelection} can't beat ${playerSelection}`);
        return;
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        playerWins += 1;
        return;
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerWins += 1;
        return;
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerWins += 1;
        return;
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        playerWins += 1;
        return;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        console.log(`You Win! ${playerSelection} beat ${computerSelection}`);
        playerWins += 1;
        return;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        console.log(`You Lose! ${computerSelection} beat ${playerSelection}`);
        computerWins += 1;
        return;
    }

}

function game() {

    for (let l = 1; l <= 5; l++) {

        playerSelection = getPlayerSelection();
        playerSelection = capitalizeSelection(playerSelection);
        computerSelection = getComputerSelection(choice);
        computerSelection = capitalizeSelection(computerSelection);

        playRound(computerSelection, playerSelection);
    }

    if (playerWins > computerWins) {
        return `You Won by ${playerWins} to ${computerWins}`;
    } else if (playerWins < computerWins) {
        return `Computer Won by ${computerWins} to ${playerWins}`;
    } else return `Match Draw by ${computerWins} to ${playerWins}`;
}
