//the value of 'rock', 'paper', or 'scissors' is passed to the playRound function using the playerSelection parameter
function playRound(playerSelection) {
  // Generate computer selection in code using lines 4 through 11
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerSelection = "rock";
  } else if (computerChoice === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  // Determine winner of the round
  //by comparing the button the user clicked indicated by the value of playerSelection parameter
  switch (playerSelection) {
    case "rock": // start execution on this line when playerSelection equals 'rock'
      if (computerSelection === "scissors") {
        score++;
        return "You win!";
      } else if (computerSelection === "paper") {
        score--;
        return "You lose!";
      } else {
        return "Tie!";
      }
      break;
    case "paper": //start exection on this line when playerSelection equals 'paper'
      if (computerSelection === "rock") {
        score++;
        return "You win!";
      } else if (computerSelection === "scissors") {
        score--;
        return "You lose!";
      } else {
        return "Tie!";
      }
      break;
    case "scissors": //start exection on this line when playerSelection equals 'scissors'
      if (computerSelection === "paper") {
        score++;
        return "You win!";
      } else if (computerSelection === "rock") {
        score--;
        return "You lose!";
      } else {
        return "Tie!";
      }
      break;
  }
}
