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
