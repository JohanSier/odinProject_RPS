// GETTING DOM ELEMENTS
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// POP UP ELEMENTS
const resultPopUp = document.querySelector(".result-pop-up");
const resultPopUpText = document.querySelector(".result-pop-up h3");
//POP UP BUTTONS
const exitBtn = document.getElementById("exit-btn");
const playAgainBtn = document.getElementById("play-again-btn");

// RESULT TEXT ELEMENTS
const resultTextContainer = document.querySelector(".result-text-container");
const resultText = document.querySelector(".result");

// LIVE SCORE ELEMENTS
const liveScoreContainer = document.querySelector(".live-score-container");
const liveUserScore = document.querySelector(".live-user-score");
const liveComputerScore = document.querySelector(".live-computer-score");

// SELECTING THEIR CONTAINERS
const rockContainer = document.querySelector(".rock-section");
const paperContainer = document.querySelector(".paper-section");
const scissorsContainer = document.querySelector(".scissors-section");

const restartFlexContainer = document.querySelector(".flex-container");
const restartContainer = document.querySelector(".restart-container");

// DELAY VARIABLE
const timeOut = 3500;

// COMPUTER OPTIONS
const computerDiv = document.querySelector(".computer-option-section");
const computerDivImage = document.querySelector(".computer-selection-image");
const computerDivText = document.querySelector(".computer-selection-text");

// SCORES
const scores = document.querySelector(".scores");
const $userScore = document.querySelector("#user-score");
const $computerScore = document.querySelector("#computer-score");

// BUTTONS
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
            resultText.textContent = "You Lose, Computer Wins"
            resultText.style.color = "rgb(180, 14, 31)"
        } else {
            humanScore++;
            resultText.textContent = "You Win"
            resultText.style.color = "rgb(14, 180, 14)"
        }
    } else {
        resultText.textContent = "It's a tie";
        resultText.style.color = "rgb(34, 70, 159)";
    }
}

function handleChoice(choice) {
    userChoice = choice;
    if (!restartBtn.classList.contains("visible")){
        showStartBtn();
    }
}

function showResultPopUp() {
    if (humanScore === 3) {
        setTimeout(() =>{
            resultPopUp.style.display = "flex";
            resultPopUpText.textContent = "Congrats! You've Won!";
        }, timeOut + 1500)
    } else if (computerScore === 3) {
        setTimeout(() =>{
            resultPopUp.style.display = "flex";
            resultPopUpText.textContent = "Better Luck Next Time! You've Lost!";
        }, timeOut + 1500)
    }
}

exitBtn.addEventListener("click", () => {
    resultPopUp.style.display = "none";
    resetGame();
    resetScores();
});

playAgainBtn.addEventListener("click", () => {
    resultPopUp.style.display = "none";
    resetGame();
    resetScores();
});

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    liveUserScore.textContent = `You: ${humanScore}`;
    liveComputerScore.textContent = `Computer: ${computerScore}`;
    $userScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
}

function updateScore(){
    //Updating live score
    setTimeout(() => {
        liveUserScore.textContent = `You: ${humanScore}`;
        liveComputerScore.textContent = `Computer: ${computerScore}`;
    }, 4000)
    
    //Updating non live score
    $userScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
}

function showResultText(){
    setTimeout(() => {
        resultTextContainer.classList.toggle("visible");
    }, timeOut)
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

function showLiveScores(){
    liveScoreContainer.style.display = "flex"
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
    resultTextContainer.classList.remove("visible");
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
    showLiveScores();
    showResultText();

    showResultPopUp();
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
