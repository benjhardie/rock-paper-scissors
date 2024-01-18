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

  return playerChoice;
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
  } else if (isRoundWinner(playerChoice, computerChoice)) {
    alert(`You win! ${playerChoice.toUpperCase()} beats ${computerChoice}.`);
    return true;
  } else {
    alert(`You lose! ${computerChoice.toUpperCase()} beats ${playerChoice}.`);
    return false;
  }
}

function isRoundWinner(playerChoice, computerChoice) {
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
function playGame() {
  let playerScore = 0;
    let computerScore = 0;
    
  for (let game = 0; game < 5; game++) {
    let playerWin = playRound();

    if (playerWin) {
      playerScore++;
    } else {
      computerScore++;
    }

    if ((playerScore === 3)) {
      alert(`You win ${playerScore} games to ${computerScore}!`);
      return;
    } else if ((computerScore === 3)) {
      alert(`You lose ${computerScore} games to ${playerScore}!`);
      return;
    }
  }
}
