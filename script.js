const ROCK_IMG = "./images/hand-rock-solid.svg";
const PAPER_IMG = "./images/hand-paper-solid.svg";
const SCISSORS_IMG = "./images/hand-scissors-solid.svg";

const modal = document.querySelector("#modal");
const startModal = document.querySelector("#start-modal");
const endModal = document.querySelector("#end-modal");
const modalButtons = document.querySelectorAll(".modal-content button");
const gameResult = document.querySelector("#game-result");

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const playerSelectionImg = document.querySelector("#player-selection");
const computerSelectionImg = document.querySelector("#computer-selection");

const winLose = document.querySelector("#win-lose");
const winLoseDetail = document.querySelector("#win-lose-detail");

const weapons = document.querySelectorAll(".weapon");

const MAX_SCORE = 5;
let playerScore = 0;
let computerScore = 0;

modalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        resetGame();
        hideModal();
    });
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    winLose.textContent = "";
    winLoseDetail.textContent = "";
}

function hideModal() {
    modal.style.display = "none";
    startModal.style.display = "none";
    endModal.style.display = "flex";
}

weapons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let playerSelection = event.currentTarget.id;
        let computerSelection = getComputerSelection();

        updateImgs(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    });
});

function getComputerSelection() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function updateImgs(playerSelection, computerSelection) {
    playerSelectionImg.src = eval(`${playerSelection.toUpperCase()}_IMG`);
    computerSelectionImg.src = eval(`${computerSelection.toUpperCase()}_IMG`);
}

function playRound(playerSelection, computerSelection) {
    let winner;

    if (playerSelection === computerSelection) {
        winLose.textContent = "It's a tie!";
        winLoseDetail.textContent = "";
        return;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        winLose.textContent = "You win!";
        winLoseDetail.textContent = `${capitalize(
            playerSelection
        )} beats ${computerSelection}.`;
        winner = "player";
    } else {
        winLose.textContent = "You lose!";
        winLoseDetail.textContent = `${capitalize(
            computerSelection
        )} beats ${playerSelection}.`;
        winner = "computer";
    }
    updateScores(winner);
}

function updateScores(winner) {
    if (winner === "player") {
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
    checkWin();
}

function checkWin() {
    if (playerScore === MAX_SCORE) {
        gameResult.textContent = "You win!";
        showModal();
    } else if (computerScore === MAX_SCORE) {
        gameResult.textContent = "You lose!";
        showModal();
    }
}

function showModal() {
    modal.style.display = "flex";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
