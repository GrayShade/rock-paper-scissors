let startButton = document.querySelector('#start-btn');

let round = 0;
let computerWins = 0;
let playerWins = 0;

function startGame() {

    const choiceButtonsDiv = document.querySelector('.buttons');
    const gameBody = document.querySelector('#gameBody');

    if (startButton.style.display = "none") {

        const choiceMessage = document.querySelector('#choiceMessage');
        choiceMessage.textContent = 'Game Started! Its time to pick either rock, paper or scissors';

        createChoiceButtons(choiceButtonsDiv);

        createChoiceDisplay(gameBody);

        createScoreDisplay(gameBody);

        createRoundResltDisplay(gameBody);

        createWinnerDisplay(gameBody)



    }

    const choiceButtons = document.querySelectorAll('.choiceButton');

    choiceButtons.forEach(button => {

        /*  << e >> is an object of event itself which returns information about event like which key was pressed 
        & information about target element. << e >> can be replaced with any other character too.  */

        button.addEventListener('click', (e) => {

            const rulesDiv = document.getElementById('rules')
            rulesDiv.style.display = 'none';
            document.querySelector('#choiceMessage').style.display = 'none';

            playGame(e);

        });
    });

}

function createChoiceButtons(startButtonParent) {

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');

    btnRock.setAttribute('class', 'choiceButton');
    btnPaper.setAttribute('class', 'choiceButton');
    btnScissors.setAttribute('class', 'choiceButton');

    btnRock.setAttribute('id', 'rock');
    btnPaper.setAttribute('id', 'paper');
    btnScissors.setAttribute('id', 'scissors');

    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';

    startButtonParent.appendChild(btnRock);
    startButtonParent.appendChild(btnPaper);
    startButtonParent.appendChild(btnScissors);


}


function createChoiceDisplay(gameBody) {

    /* This function creates: (i.e,)
    <!-- <div id="choiceSelected">
    <p id="p1ChoiceSelected">Computer: Scissors</p>
    <p id="p2ChoiceSelected">player: Scissors</p>
    </div> --> */

    const divChoiceSelected = document.createElement('div');
    divChoiceSelected.setAttribute('id', 'choiceSelected');
    const siblingCircles = document.getElementById('circles');
    // insert before next sibling of circles:
    gameBody.insertBefore(divChoiceSelected, siblingCircles.nextSibling);

    const p1ChoiceSelected = document.createElement('p');
    p1ChoiceSelected.setAttribute('id', 'p1ChoiceSelected');
    // p1ChoiceSelected.textContent = 'Computer: ';
    const p2ChoiceSelected = document.createElement('p');
    p2ChoiceSelected.setAttribute('id', 'p2ChoiceSelected');
    // p2ChoiceSelected.textContent = 'player: ';

    divChoiceSelected.appendChild(p1ChoiceSelected);
    divChoiceSelected.appendChild(p2ChoiceSelected);

}

function createScoreDisplay(gameBody) {

    /* This function will create: 
            <div id="score">
                <div id="computerScore">
                    <p id="pComputerScore">Computer Score: </p>
                    <h1>3</h1>
                </div>
                <div id="playerScore">
                    <p id="pPlayerScore">player Score: </p>
                    <h1>3</h1>
                </div>
            </div>
    */

    const scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('id', 'score');
    const siblingCircles = document.getElementById('circles');
    gameBody.insertBefore(scoreDiv, siblingCircles);


    const computerScoreSubDiv = document.createElement('div');
    computerScoreSubDiv.setAttribute('id', 'computerScore');
    scoreDiv.appendChild(computerScoreSubDiv);
    const pComputerScore = document.createElement('p');
    pComputerScore.setAttribute('id', 'pComputerScore');
    // pComputerScore.textContent = 'Computer Score:';
    computerScoreSubDiv.appendChild(pComputerScore);
    const h1ComputerScore = document.createElement('h1');
    h1ComputerScore.setAttribute('id', 'h1ComputerScore')
    // h1ComputerScore.textContent = '';
    computerScoreSubDiv.appendChild(h1ComputerScore);

    const playerScoreSubDiv = document.createElement('div');
    playerScoreSubDiv.setAttribute('id', 'playerScore');
    scoreDiv.appendChild(playerScoreSubDiv);
    const pPlayerScore = document.createElement('p');
    pPlayerScore.setAttribute('id', 'pPlayerScore');
    playerScoreSubDiv.appendChild(pPlayerScore);
    const h1PlayerScore = document.createElement('h1');
    h1PlayerScore.setAttribute('id', 'h1PlayerScore');
    playerScoreSubDiv.appendChild(h1PlayerScore);

}

function colorCircles(computerWins, playerWins) {

    let circles = document.querySelectorAll('.circle');

    // for computer circles coloring:
    circles.forEach((circle, index) => {
        // console.log(`${index}: ${circle}`);
        let position = index + 1;
        if (computerWins === position) {
            circle.style.backgroundColor = '#0074D9';
        }
    });

    // Using spread operator to Convert Iterables to Array to use array.reverse() on it:
    circles = [...circles];
    circles = circles.reverse();
    // for player circles coloring:
    circles.forEach((circle, index) => {
        // console.log(`${index}: ${circle}`);
        let position = index + 1;
        if (playerWins === position) {
            circle.style.backgroundColor = '#3D9970';
        }
    });
    circles.reverse();


}

function createRoundResltDisplay(gameBody) {

    /* This function creates: (i.e, )
    <div id="choiceResult">Draw! Scissors can't beat Scissors</div> 
    */

    const divChoiceResult = document.createElement('div');
    divChoiceResult.setAttribute('id', 'divChoiceResult');

    // Using << document.getElementsByClassName(classNames) >> below returned htmlCollection. So used 
    // << querySelector >> instead as htmlCollection is a whole different elephant. Remember that 
    // getElementsByTagName() Method, getElementsByClassName() Method, children Property all return collections.
    const divChoiceButtons = document.querySelector('.buttons');
    gameBody.insertBefore(divChoiceResult, divChoiceButtons);


}

function createWinnerDisplay(gameBody) {

    /* This function will create: 
    <div id="winner">
        <p>Winner is:</p>
        <br>
        <h1>COMPUTER</h1>
    </div> 
    */

    const divWinner = document.createElement('div');
    divWinner.setAttribute('id', 'winner');
    const scoreDiv = document.getElementById('score');
    gameBody.insertBefore(divWinner, scoreDiv);


    const pWinner = document.createElement('p');
    pWinner.setAttribute('id', 'pWinner');
    divWinner.appendChild(pWinner);

    const h1Winner = document.createElement('h1');
    h1Winner.setAttribute('id', 'h1Winner');
    divWinner.appendChild(h1Winner);




}

function getPlayerSelection(e) {


    return playerSelection = e.target.textContent

}

function getComputerSelection(choiceArray) {

    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function resetDisplay() {

    //  hiding choice button nodes:
    document.querySelectorAll('.choiceButton').forEach(button => {

        if (button.classList.contains('choiceButton')) {

            button.style.display = 'none';
        }
    });


    buttonsDiv = document.querySelector('.buttons');
    const replayButton = document.createElement('button');
    replayButton.setAttribute('id', 'replayButton');
    replayButton.textContent = 'Replay Game!';
    buttonsDiv.appendChild(replayButton);

    document.getElementById('replayButton').addEventListener('click', () => {

        // Window.location is a property that returns a Location object with information about the document’s current location:
        window.location.reload();

    })


}


function playRound(computerSelection, playerSelection) {



    if (computerSelection == playerSelection) {

        divChoiceResult.textContent = `Match Draw! ${computerSelection} can't beat ${playerSelection}`;
        divChoiceResult.style.color = '#FF851B';
        return;
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        divChoiceResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        divChoiceResult.style.color = '#3D9970';
        playerWins += 1;
        return;
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        divChoiceResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        divChoiceResult.style.color = '#0074D9';
        computerWins += 1;
        return;
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        divChoiceResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        divChoiceResult.style.color = '#0074D9';
        computerWins += 1;
        return;
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        divChoiceResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        divChoiceResult.style.color = '#3D9970';
        playerWins += 1;
        return;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        divChoiceResult.textContent = `You Win! ${playerSelection} beat ${computerSelection}`;
        divChoiceResult.style.color = '#3D9970';
        playerWins += 1;
        return;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        divChoiceResult.textContent = `You Lose! ${computerSelection} beat ${playerSelection}`;
        divChoiceResult.style.color = '#0074D9';
        computerWins += 1;
        return;
    }
}

function playGame(e) {

    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    let computerSelection;
    let playerSelection;

    computerSelection = getComputerSelection(choiceArray);
    playerSelection = getPlayerSelection(e);
    computerSelection.textContent = '#0074D9';

    const p1ChoiceSelected = document.getElementById('p1ChoiceSelected');
    const p2ChoiceSelected = document.getElementById('p2ChoiceSelected');
    playRound(computerSelection, playerSelection);

    const h1Tag = document.createElement('h3');
    h1Tag.innerText = computerSelection;
    p1ChoiceSelected.innerText = "Computer Choice: \n";
    p1ChoiceSelected.appendChild(h1Tag);

    const h2Tag = document.createElement('h3');
    h2Tag.innerText = playerSelection;
    p2ChoiceSelected.innerText = "Player Choice: \n";
    p2ChoiceSelected.appendChild(h2Tag);

    const pComputerScore = document.getElementById('pComputerScore');
    const pPlayerScore = document.getElementById('pPlayerScore');
    pComputerScore.textContent = 'Computer Score:';
    pPlayerScore.textContent = 'Player Score:';

    const h1ComputerScore = document.getElementById('h1ComputerScore');
    const h1PlayerScore = document.getElementById('h1PlayerScore');
    h1ComputerScore.textContent = computerWins;
    h1PlayerScore.textContent = playerWins;

    colorCircles(computerWins, playerWins);

    round += 1;

    if (playerWins == 5 || computerWins == 5) {

        const pWinner = document.getElementById('pWinner');
        const h1Winner = document.getElementById('h1Winner');
        pWinner.textContent = 'Winner is:';

        if (playerWins > computerWins) {
            divChoiceResult.textContent = `You Won by ${playerWins} to ${computerWins}`;
            h1Winner.textContent = 'PLAYER!';
            h1Winner.style.color = '#3D9970';
            divChoiceResult.style.color = '#3D9970';
        } else if (playerWins < computerWins) {
            divChoiceResult.textContent = `Computer Won by ${computerWins} to ${playerWins}`;
            h1Winner.textContent = 'COMPUTER!';
            h1Winner.style.color = '#0074D9';
            divChoiceResult.style.color = '#0074D9';
        } else {
            divChoiceResult.textContent = `Match Draw by ${computerWins} to ${playerWins}`;
            h1Winner.textContent = 'DRAW!'
            divChoiceResult.style.color = '#FF851B';
        }
  
        resetDisplay();

    }

}
startButton.addEventListener('click', () => startGame());

