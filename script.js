const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function getPlayerChoice() {
  let playerSelection;

  while (true) {
    playerSelection = prompt("Make your choice:", "").toLowerCase();

    if (!OPTIONS.includes(playerSelection)) {
      alert("Please choose a valid option (rock, paper or scissors)");
      continue;
    }
    break;
  }

  return playerSelection;
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
