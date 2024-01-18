const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

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

function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();

  if (playerChoice === computerChoice) {
      alert("It's a tie! Let's try that round again...");
      playRound();
  } else if (isWinner) {
      alert(`You win! ${playerChoice} beats ${computerChoice}.`)
  } else {
      alert(`You lose! ${computerChoice} beats ${playerChoice}.`)
  } 
}
