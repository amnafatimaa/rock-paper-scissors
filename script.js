const choiceImages = document.querySelectorAll(".choice");
let reset = document.querySelector(".reset");
let playerScore = 0;
let computerScore = 0;
choiceImages.forEach((image) => {
  image.addEventListener("click", () => {
    const playerChoice = image.dataset.choice;
    const computerMove = getComputerMove();
    const result = determineWinner(playerChoice, computerMove);

    document.querySelector(".player-choice").textContent = "You chose...";
    document.querySelector(".computer-choice").textContent = "Computer is choosing...";
    document.querySelector(".outcome").textContent = "";


    setTimeout(() => {
      const result = determineWinner(playerChoice, computerMove);

      document.querySelector(".player-choice").textContent = `You Chose: ${playerChoice}`;
      document.querySelector(".computer-choice").textContent = `Computer Chose: ${computerMove}`;
      document.querySelector(".outcome").textContent = result;


    //update the scores
    if (result.includes("Win")) {
      playerScore++;
      document.getElementById("player-score").textContent = playerScore;
    } else if (result.includes("Lose")) {
      computerScore++;
      document.getElementById("computer-score").textContent = computerScore;
    }
  }, 1000);
  });
});
reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.querySelector(".player-choice").textContent = "You Chose: ";
  document.querySelector(".computer-choice").textContent = "Computer Chose: ";
  document.querySelector(".outcome").textContent = "Game reset!";
});
//Function for computerMove()
function getComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//function for determineWinner
function determineWinner(playerChoice, computerMove) {
  if (playerChoice === computerMove) return "It's a tie!";
  else if (
    (playerChoice === "Rock" && computerMove === "Scissors") ||
    (playerChoice === "Paper" && computerMove === "Rock") ||
    (playerChoice === "Scissors" && computerMove === "Paper")
  )
    return "You Win!";
  else return "You Lose!";
}
