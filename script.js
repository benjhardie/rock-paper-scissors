const OPTIONS = ["rock", "paper", "scissors"];

function getPlayerChoice() {
  let playerChoice;

  while (true) {
    playerChoice = prompt(
      "Make your choice. Rock, paper or scissors?"
    ).toLowerCase();

    if (!OPTIONS.includes(playerChoice)) {
      alert("Invalid option. Please try again.");
      continue;
    }
    break;
  }

  return playerSelection;
}

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    alert("It's a tie! Let's try that round again...");
    playRound();
  } else if (isWinner(playerChoice, computerChoice)) {
    alert(`You win! ${playerChoice} beats ${computerChoice}.`);
  } else {
    alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
  }
}

function isWinner(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return true;
  } else {
    return false;
  }
}
