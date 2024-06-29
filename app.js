// GETTING DOM ELEMENTS
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// SELECTING THEIR CONTAINERS
const rockContainer = document.querySelector(".rock-section");
const paperContainer = document.querySelector(".paper-section");
const scissorsContainer = document.querySelector(".scissors-section");

const restartFlexContainer = document.querySelector(".flex-container");
const restartContainer = document.querySelector(".restart-container");

// DELAY VARIABLE
const timeOut = 3500;

const computerDiv = document.querySelector(".computer-option-section");
const computerDivImage = document.querySelector(".computer-selection-image");
const computerDivText = document.querySelector(".computer-selection-text");

const scores = document.querySelector(".scores");
const $userScore = document.querySelector("#user-score");
const $computerScore = document.querySelector("#computer-score");

const startBtn = document.querySelector(".start-game-btn");
const restartBtn = document.querySelector(".restart-btn");

let humanScore = 0;
let computerScore = 0;

let userChoice = "";
let computerChoice;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() !== computerChoice.toLowerCase()) {
        if (
            (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
        ) {
            computerScore++;
        } else {
            humanScore++;
        }
    } else {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }
}

function handleChoice(choice) {
    userChoice = choice;
    if (!restartBtn.classList.contains("visible")){
        showStartBtn();
    }
}

function updateScore(){
    $userScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
}

function showRestartBtn(){
    setTimeout(() => {
        restartBtn.classList.add("visible");
        restartFlexContainer.style.display = "flex";
        restartContainer.style.display = "inline-block";
    }, timeOut)
}

function restartGame() {
    resetGame();
    hideRestartBtn();
}

function showStartBtn() {
    startBtn.classList.add("visible");
}

function hideStartBtn() {
    startBtn.classList.remove("visible");
}

function hideRestartBtn() {
    restartBtn.classList.remove("visible");
    restartFlexContainer.style.display = "none";
    restartContainer.style.display = "none";
}

function showScores(){
    setTimeout(() => {
        scores.classList.toggle("visibleScore");
    }, timeOut)
}


function removeUnselectedOptions(){
    if(userChoice === "Rock"){
        paperContainer.style.display = "none";
        scissorsContainer.style.display = "none";
    }

    else if(userChoice === "Paper"){
        rockContainer.style.display = "none";
        scissorsContainer.style.display = "none";
    }

    else{
    rockContainer.style.display = "none";
    paperContainer.style.display = "none";
    }
}


function showComputerOption(){
    setTimeout(() => {
        computerDiv.style.display = "flex";
        computerDivText.textContent = `${computerChoice}`;
        computerDivImage.src = `./Images/${computerChoice.toLowerCase()}.svg`;
    }, timeOut)
}

function resetGame() {
    rockContainer.style.display = "block";
    paperContainer.style.display = "block";
    scissorsContainer.style.display = "block";
    computerDiv.style.display = "none";
    scores.classList.remove("visibleScore");
    restartBtn.classList.remove("visible");
    restartFlexContainer.style.display = "none";
    restartContainer.style.display = "none";
    updateScore();
}

function startGame() {
    if (!userChoice) {
        alert("Please select Rock, Paper, or Scissors first!");
        return;
    }

    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    hideStartBtn();
    showScores();
    removeUnselectedOptions();
    showComputerOption();
    updateScore();
    showRestartBtn();
}

// User choices event listeners
rockBtn.addEventListener("click", () => handleChoice("Rock"));
paperBtn.addEventListener("click", () => handleChoice("Paper"));
scissorsBtn.addEventListener("click", () => handleChoice("Scissors"));



// START GAME
startBtn.addEventListener("click", startGame);

//RESTART GAME
restartBtn.addEventListener("click", restartGame);

// HIDE startBtn when the user clicks outside one of the three buttons
document.body.addEventListener("click", (event) => {
    if (!rockBtn.contains(event.target) && !paperBtn.contains(event.target) && !scissorsBtn.contains(event.target)) {
        hideStartBtn();
    }
});
