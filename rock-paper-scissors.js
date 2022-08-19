

const startButton = document.querySelector('#start-btn');

function startGame(e) {

    const startButtonParent = document.querySelector('.buttons');
    // debugger;
    startButtonParent.removeChild(startButton);

    createChoiceButtons(startButtonParent);
    getPlayerSelection();

}

function createChoiceButtons(startButtonParent) {

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');
    // debugger;
    btnRock.setAttribute('class', 'choiceButton');
    btnPaper.setAttribute('class', 'choiceButton');
    btnScissors.setAttribute('class', 'choiceButton');

    btnRock.setAttribute('id', 'rock');
    btnPaper.setAttribute('id', 'paper');
    btnScissors.setAttribute('id', 'scissors');

    btnRock.textContent = 'rock';
    btnPaper.textContent = 'paper';
    btnScissors.textContent = 'scissors';

    startButtonParent.appendChild(btnRock);
    startButtonParent.appendChild(btnPaper);
    startButtonParent.appendChild(btnScissors);


}
// debugger;

function getPlayerSelection() {
    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            return e.target.id;
        });
    });
}


startButton.addEventListener('click', (e) => startGame(e));
