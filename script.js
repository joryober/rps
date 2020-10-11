const computerPlay = () => {
  choiceArray = ["rock", "paper", "scissors"];
  choiceIndex = Math.floor(Math.random() * 3);
  return choiceArray[choiceIndex];
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const round = (playerSelection, computerSelection) => {
  playerSelection = capitalize(playerSelection.toLowerCase());
  computerSelection = capitalize(computerSelection.toLowerCase());
  let winMap = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };
  if (winMap[playerSelection] === computerSelection) {
    return 1;
  }
  if (winMap[computerSelection] === playerSelection) {
    return -1;
  }
  return 0;
};

const game = () => {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    let selection = prompt("Selection: ");
    while (!["rock", "paper", "scissors"].includes(selection.toLowerCase())) {
      selection = prompt("Selection: ");
    }
    let playerSelection = capitalize(selection.toLowerCase());
    let computerSelection = capitalize(computerPlay().toLowerCase());
    if (round(playerSelection, computerSelection) === 1) {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      playerWins++;
    } else if (round(playerSelection, computerSelection) === -1) {
      alert(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerWins++;
    } else if (round(playerSelection, computerSelection) === 0) {
      alert(`Tie! Player: ${playerSelection}, Computer: ${computerSelection}`);
    }
  }
  alert(`Player rounds won: ${playerWins}`);
  alert(`Computer rounds won: ${computerWins}`);
  if (playerWins > computerWins) alert("Player wins!");
  if (playerWins < computerWins) alert("Computer wins!");
  if (playerWins === computerWins) alert("Tie!");
  playerwins = 0;
  computerwins = 0;
};

game();
