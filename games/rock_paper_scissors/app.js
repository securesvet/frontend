const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoiceTarget;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    document.body.classList.remove('backgroundAnimated');
    userChoiceTarget = e.target;
    userChoiceDisplay.innerHTML = userChoiceTarget.innerText;
    let randomChoice = possibleChoices[~~(Math.random() * possibleChoices.length)];
    computerChoiceDisplay.innerHTML = randomChoice.innerText;
    const hasWon = isWinningRPS(userChoiceTarget.id, randomChoice.id);
    console.log(hasWon)
    if (hasWon == 0) {
        result = "You won!";
        confetti();
    }
    else if (hasWon == 1) {
        result = "You lose!";
        document.body.classList.add('backgroundAnimated');
    }
    else {
        result = "Draw";
    }
    resultDisplay.innerHTML = result;
}))

// Возвращает кто победил, первый или второй (индекс) или ничья (-1).
var isWinningRPS = function(first, second) {
    let choices = {rock, paper, scissors};
    if (first === second) return -1;
    let winningPositions = [["paper", "rock"], ["rock", "scissors"], ["scissors", "paper"]];
    for (let win of winningPositions) {
        const stringifiedWin = JSON.stringify(win);
        if (stringifiedWin == JSON.stringify([first, second])) {
            return 0;
        }
        else if (stringifiedWin == JSON.stringify([second, first])) {
            return 1;
        }
    }
    
}