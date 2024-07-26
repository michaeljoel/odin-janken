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

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose between guu, choki or paa. Jakenpon!"
  ).toLowerCase();
  if (humanChoice == "guu" || humanChoice == "choki" || humanChoice == "paa") {
    return humanChoice;
  } else {
    console.log("Invalid option!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Aikodesho! It's a draw!");
    } else if (humanChoice == "guu" && computerChoice == "choki") {
      console.log("Anata ga shouri! You win! Guu beats Choki");
      humanScore++;
    } else if (humanChoice == "choki" && computerChoice == "paa") {
      console.log("Anata ga shouri! You win! Choki beats Paa");
      humanScore++;
    } else if (humanChoice == "paa" && computerChoice == "guu") {
      console.log("Anata ga shouri! You win! Paa beats Guu");
      humanScore++;
    } else if (computerChoice == "guu" && humanChoice == "choki") {
      console.log("Anata ga makeru! You lose! Guu beats Choki");
      computerScore++;
    } else if (computerChoice == "choki" && humanChoice == "paa") {
      console.log("Anata ga makeru! You lose! Choki beats Paa");
      computerScore++;
    } else if (computerChoice == "paa" && humanChoice == "guu") {
      console.log("Anata ga makeru! You lose! Paa beats Guu");
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      "Your Score: ",
      humanScore,
      " Computer's Score: ",
      computerScore
    );
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else {
    console.log("You lost!");
  }
}

playGame();
