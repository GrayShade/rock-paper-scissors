
let choice = ['rock', 'paper', 'scissors'];

getComputerSelection = (array) => {

    return array[Math.floor(Math.random()*array.length)];
}
let computerSelection = getComputerSelection(choice);
let playerSelection = prompt("Enter your Choice: ", "rock").toLowerCase();

while(!choice.includes(playerSelection)) { 

    playerSelection = prompt("Enter your Choice: ", "rock").toLowerCase();
}

function playRound(getComputerSelection, playerSelection) {
    console.log(getComputerSelection);
    console.log(playerSelection);
}

playRound(getComputerSelection(choice), playerSelection);


//  get computer choice
//  get player choice
//  if input is wrong show again
//  play round
    //  compare inputs of user and computer
    //  if match, round equal
    //  else, announce winner according to rps rules
//  play 5 rounds total
//  test each done part