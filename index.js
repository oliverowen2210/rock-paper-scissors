function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
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

function playGame(playerSelection, computerSelection) {
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


function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 3 && computerWins < 3) {
        let playerSelection = prompt("Rock, paper, scissors");
        let computerSelection = computerPlay();
        result = (playGame(playerSelection, computerSelection));
        if(result=="win") {
            console.log(`You win! ${toTitleCase(playerSelection)} beats ${computerSelection}.`)
            playerWins++;
        } else if(result=="lose") {
            console.log(`You lose! ${toTitleCase(computerSelection)} beats ${playerSelection}.`)
            computerWins++;
        } else if(result=="tie") {
            console.log("It's a tie.");
        } else console.log("Invalid input.");
        console.log(playerWins, computerWins);   
    }     

    if(playerWins > computerWins) {
        return true;
    } else return false;
}
