// GETTING DOM ELEMENTS
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const computerDiv = document.querySelector(".computer-option-section");
const computerDivImage = document.querySelector(".computer-selection-image");

const scores = document.querySelector(".scores");
const startBtn = document.querySelector(".start-game-btn");

let humanScore = 0;
let computerScore = 0;
let userChoice = "";

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function handleChoice(choice) {
    userChoice = choice;
    showStartBtn();
}

function showStartBtn() {
    startBtn.classList.add("visible");
}

function hideStartBtn() {
    startBtn.classList.remove("visible");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() !== computerChoice.toLowerCase()) {
        if (
            (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
        ) {
            computerScore++;
            console.log(`${userName} you lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore++;
            console.log(`${userName} you win! ${humanChoice} beats ${computerChoice}`);
        }
    } else {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }
    console.log(`Current Score: Computer: ${computerScore}, ${userName}: ${humanScore}`);
}

// function updateScore() {
//     scores.innerHTML = `
//         <p id="user-score">${humanScore}</p>
//         <p id="computer-score">${computerScore}</p>
//     `;
// }

function startGame() {
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    // updateScore();
    hideStartBtn();
}

// User choices event listeners
rockBtn.addEventListener("click", () => handleChoice("Rock"));
paperBtn.addEventListener("click", () => handleChoice("Paper"));
scissorsBtn.addEventListener("click", () => handleChoice("Scissors"));

// START GAME
startBtn.addEventListener("click", startGame);

// HIDE startBtn when the user clicks outside one of the three buttons
document.body.addEventListener("click", (event) => {
    if (!rockBtn.contains(event.target) && !paperBtn.contains(event.target) && !scissorsBtn.contains(event.target)) {
        hideStartBtn();
    }
});
