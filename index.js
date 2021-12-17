function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

function computerPlay() {
    chosenObject = Math.floor(Math.random() * (10 - 1) + 1);
    if (chosenObject <= 3) {
        return "rock";
    } else if (chosenObject <= 6) {
        return "paper";
    } else return "scissors";
}

function rockPaperScissors(playerSelection, computerSelection) {
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
        result = (rockPaperScissors(playerSelection, computerSelection));
        if(result=="win") {
            playerWins++;
            console.log(`You win! ${toTitleCase(playerSelection)} beats ${computerSelection}.`)
        } else if(result=="lose") {
            console.log(`You lose! ${toTitleCase(computerSelection)} beats ${playerSelection}.`)
            computerWins++;
        } else if(result=="tie") {
            console.log("It's a tie.");
        } else console.log("Invalid input.");
        console.log(playerWins, computerWins);        
    return (playerWins > computerWins) ? true : false;
    }
}

