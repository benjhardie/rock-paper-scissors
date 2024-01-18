const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}
