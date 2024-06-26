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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    
  if(humanChoice.toLowerCase() != computerChoice.toLowerCase()){
      /*---------------- WHEN THE HUMAN LOSES ----------------*/
      if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper"){
      computerScore += 1
      console.log(`${userName} you lose! Paper beats Rock`)
      console.log(`COMPUTER CHOICE: ${computerChoice} \n Current Score: COMPUTER: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
      
       else if(humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock"){
          computerScore += 1
          console.log(`${userName} you lose! Rock beats Scissors`)
          console.log(`COMPUTER CHOICE: ${computerChoice} \n Current Score: Computer: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
      
      else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors"){
          computerScore += 1
          console.log(`COMPUTER CHOICE: ${computerChoice} \n ${userName} you lose! Scissors beats Paper`)
          console.log(`Current Score: Computer: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
      
            /*---------------- WHEN THE HUMAN WINS ----------------*/

      
      else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock"){
          humanScore += 1
          console.log(`COMPUTER CHOICE: ${computerChoice} \n ${userName} you win! Paper beats Rock`)
          console.log(`Current Score: Computer: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
      
      else if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors"){
          humanScore += 1
          console.log(`COMPUTER CHOICE: ${computerChoice} \n ${userName} you win! Rock beats Scissors`)
          console.log(`Current Score: Computer: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
      
      else if(humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper"){
          humanScore += 1
          console.log(`COMPUTER CHOICE: ${computerChoice} \n ${userName} you win! Scissors beats Paper`)
          console.log(`Current Score: Computer: ${computerScore} ${userName.toUpperCase()}: ${humanScore}`)
      }
  }
  else {
      console.log(`COMPUTER CHOICE: ${computerChoice} \n${userName} it's a Tie!`)
      console.log(`Current Score: \n Computer: ${computerScore} \n ${userName.toUpperCase()}: ${humanScore}`)
  }
}