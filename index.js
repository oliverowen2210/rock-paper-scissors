function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function update() {
    winCounter.textContent = wins;
    lossCounter.textContent = losses;
}

function computerPlay() {
    // pick random number between 1 through 9, inclusive
    objectSelector = Math.floor(Math.random() * (10 - 1) + 1);
    if (objectSelector <= 3) {
        return "rock";
    } else if (objectSelector <= 6) {
        return "paper";
    } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase()=="rock") {
        switch(computerSelection) {
            case "paper": 
                return "lose";
            case "scissors":
                return "win";
            default:
                return "tie";
        }
    } else if(playerSelection.toLowerCase()=="paper") {
        switch(computerSelection) {
            case "scissors": 
                return "lose";
            case "rock":
                return "win";
            default:
                return "tie";
        }
    } else if(playerSelection.toLowerCase()=="scissors") {
        switch(computerSelection) {
            case "Rock": 
                return "lose";
            case "paper":
                return "win";
            default:
                return "tie";
         }
    } else return false;
}

function game(select) {
    if(!(playing)) return;
    let playerSelection = select;
    let computerSelection = computerPlay();
    let result = (playRound(playerSelection, computerSelection));
    playerInput.textContent = toTitleCase(playerSelection) + '!';
    computerInput.textContent = toTitleCase(computerSelection) + '!';

    if(result=="win") {
        resultMessage.textContent = `${toTitleCase(playerSelection)} beats ${computerSelection}.`;
        wins++;
        playerInput.classList.add('green');
        playerInput.classList.remove('red');
        computerInput.classList.add('red');
        computerInput.classList.remove('green');
    } else if(result=="lose") {
        resultMessage.textContent = `${toTitleCase(computerSelection)} beats ${playerSelection}.`;
        losses++;
        playerInput.classList.add('red')
        playerInput.classList.remove('green');
        computerInput.classList.add('green')
        computerInput.classList.remove('red');
    } else if(result=="tie") {
        resultMessage.textContent = "It's a tie.";
        inputs.classList.remove('red', 'green')
    } else resultMessage.textContent = "Invalid input.";
    update();
    endGame();
};    

function endGame() {
    if(wins == maxGames) {
        message.textContent = 'Congratulations! You win!';
        message.classList.add('green');
        for(const input of inputs) input.classList.remove('green', 'red');
        buttonsDiv.parentNode.removeChild(buttonsDiv);
        playing = false;
    }  else if(losses == maxGames) {
        message.textContent = 'You lose. Better luck next time!';
        message.classList.add('red');
        for(const input of inputs) input.classList.remove('green', 'red');
        buttonsDiv.parentNode.removeChild(buttonsDiv);
        playing = false;
    }
}



winCounter = document.querySelector('#wins');
lossCounter = document.querySelector('#losses');

playerInput = document.querySelector('#playerInput');
computerInput = document.querySelector('#computerInput');
inputs = [playerInput, computerInput];

resultMessage = document.querySelector('#message');

rock = document.querySelector('#rock');
paper = document.querySelector('#paper');
scissors = document.querySelector('#scissors');

let maxGames = 5;
let wins = 0;
let losses = 0;
let playing = true;

rock.addEventListener('click', (e) => game('rock'));
paper.addEventListener('click', (e) => game('paper'));
scissors.addEventListener('click', (e) => game('scissors'));
btns = [rock, paper, scissors];

buttonsDiv = document.querySelector('#buttons');