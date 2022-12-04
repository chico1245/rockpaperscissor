const costs = ["rock", "paper", "scissors"];

// Keep score and determine the overall winner
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", event => {
    // get the value of the clicked button
    const userChoice = event.target.id;

    // generate the computer's choice
    const computerChoice = costs[Math.floor(Math.random() * costs.length)];

    // Output choices made
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    // Check for tie
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    }

    // Check for user win
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win this round!");
      userScore++;
    }

    // Check for computer win
    if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log("The computer wins this round!");
      computerScore++;
    }

    // Update the page with the current scores
    const userScoreElement = document.querySelector("#user-score");
    const computerScoreElement = document.querySelector("#computer-score");
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    // Check if anyone has reached 5 wins
    if (userScore === 5) {
      const winnerElement = document.querySelector("#winner");
      winnerElement.textContent = "You win the game!";

      // Reset the game
      userScore = 0;
      computerScore = 0;
      userScoreElement.textContent = userScore;
      computerScoreElement.textContent = computerScore;
      winnerElement.textContent = "";
    } else if (computerScore === 5) {
      const winnerElement = document.querySelector("#winner");
      winnerElement.textContent = "The computer wins the game!";

      // Reset the game
      userScore = 0;
      computerScore = 0;
      userScoreElement.textContent = userScore;
      computerScoreElement.textContent = computerScore;
      winnerElement.textContent = "";
    }
  });
});