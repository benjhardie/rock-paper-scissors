const OPTIONS = ["rock", "paper", "scissors"];

function getPlayerChoice() {
  let playerChoice;

  while (true) {
    playerChoice = prompt(
      "Make your choice. Rock, paper or scissors?"
    ).toLowerCase();

    if (!OPTIONS.includes(playerChoice)) {
      console.log("Invalid option. Please try again.");
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
  // Get player and computer selections
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  // Validate results and return winner
  let winner;

  if (playerChoice === computerChoice) {
    console.log("It's a tie! Let's play that round again...");
    winner = null;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
      } beats ${computerChoice}.`
    );
    winner = "player";
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${playerChoice}.`
    );
    winner = "computer";
  }
  return winner;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let game = 0; game < 5; game++) {
    let winner;

    // Play round and rematch if round is tied
    while (!winner) {
      winner = playRound();
    }

    //   Update scores
    if (winner === "player") {
      playerScore++;
    } else {
      computerScore++;
    }

    //   Check if game has been won and print result
    if (playerScore === 3) {
      console.log(`Player wins ${playerScore} games to ${computerScore}!`);
      return;
    } else if (computerScore === 3) {
      console.log(`Computer wins ${computerScore} games to ${playerScore}.`);
      return;
    }
  }
}

playGame();
