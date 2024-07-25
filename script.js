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
