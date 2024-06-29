// GETTING DOM ELEMENTS
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// SELECTING THEIR CONTAINERS
const rockContainer = document.querySelector(".rock-section");
const paperContainer = document.querySelector(".paper-section");
const scissorsContainer = document.querySelector(".scissors-section");

// DELAY VARIABLE
const timeOut = 3500;

const computerDiv = document.querySelector(".computer-option-section");
const computerDivImage = document.querySelector(".computer-selection-image");
const computerDivText = document.querySelector(".computer-selection-text");

const scores = document.querySelector(".scores");
const $userScore = document.querySelector("#user-score");
const $computerScore = document.querySelector("#computer-score");

const startBtn = document.querySelector(".start-game-btn");

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
    showStartBtn();
}

function updateScore(){
    $userScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
}

function showStartBtn() {
    startBtn.classList.add("visible");
}

function hideStartBtn() {
    startBtn.classList.remove("visible");
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
    userChoice = "";
}

function startGame() {
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    hideStartBtn();
    showScores();
    removeUnselectedOptions();
    showComputerOption();
    updateScore();
}
// function updateScore() {
//     scores.innerHTML = `
//         <p id="user-score">${humanScore}</p>
//         <p id="computer-score">${computerScore}</p>
//     `;
// }


// User choices event listeners
rockBtn.addEventListener("click", () => handleChoice("Rock"));
paperBtn.addEventListener("click", () => handleChoice("Paper"));
scissorsBtn.addEventListener("click", () => handleChoice("Scissors"));

//Show Scores
// startBtn.addEventListener("click", showScores);

//Remove Unselected Options
// startBtn.addEventListener("click", removeUnselectedOptions);

//Show Computer Option
// startBtn.addEventListener("click", showComputerOption);

// START GAME
startBtn.addEventListener("click", startGame);

// HIDE startBtn when the user clicks outside one of the three buttons
document.body.addEventListener("click", (event) => {
    if (!rockBtn.contains(event.target) && !paperBtn.contains(event.target) && !scissorsBtn.contains(event.target)) {
        hideStartBtn();
    }
});
