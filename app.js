let humanScore = 0;
let computerScore = 0;
let userName = prompt("Enter your name! \n");

function getComputerChoice() {
    let computerChoice = Math.round(Math.random() * 2);
    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            console.log("The computer didn't choose, Try Again");
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors \n");
    return humanChoice;
}

