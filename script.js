let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "guu";
    case 1:
      return "choki";
    case 2:
      return "paa";
    default:
      break;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Aikodesho! It's a draw!");
    presentResult("Aikodesho! It's a draw!");
  } else if (humanChoice == "guu" && computerChoice == "choki") {
    console.log("Anata ga shouri! You win! Guu beats Choki");
    presentResult("Anata ga shouri! You win! Guu beats Choki");
    humanScore++;
  } else if (humanChoice == "choki" && computerChoice == "paa") {
    console.log("Anata ga shouri! You win! Choki beats Paa");
    presentResult("Anata ga shouri! You win! Choki beats Paa");
    humanScore++;
  } else if (humanChoice == "paa" && computerChoice == "guu") {
    console.log("Anata ga shouri! You win! Paa beats Guu");
    presentResult("Anata ga shouri! You win! Paa beats Guu");
    humanScore++;
  } else if (computerChoice == "guu" && humanChoice == "choki") {
    console.log("Anata ga makeru! You lose! Guu beats Choki");
    presentResult("Anata ga makeru! You lose! Guu beats Choki");
    computerScore++;
  } else if (computerChoice == "choki" && humanChoice == "paa") {
    console.log("Anata ga makeru! You lose! Choki beats Paa");
    computerScore++;
    presentResult("Anata ga makeru! You lose! Choki beats Paa");
  } else if (computerChoice == "paa" && humanChoice == "guu") {
    console.log("Anata ga makeru! You lose! Paa beats Guu");
    presentResult("Anata ga makeru! You lose! Paa beats Guu");
    computerScore++;
  }
  displayScore();
}

function presentResult(outcome) {
  const userOutput = document.querySelector(".userOutput");
  const results = document.createElement("p");
  results.textContent = outcome;

  userOutput.appendChild(results);
}

function displayScore() {
  const userOutput = document.querySelector(".userOutput");
  const score = document.createElement("p");
  score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;

  userOutput.appendChild(score);

  if (humanScore == 5) {
    const winner = document.createElement("p");
    winner.textContent = "You win!";
    userOutput.appendChild(winner);
  } else if (computerScore == 5) {
    const winner = document.createElement("p");
    winner.textContent = "You lost!";
    userOutput.appendChild(winner);
  }
}
