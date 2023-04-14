let score = 0; // this is how we keep track of the players score
let computerScore = 0; //thus i how we keep track of the computer score
let results = ""; // this keeps track of the result of the round, who wins or who loses

//the value of 'rock', 'paper', or 'scissors' is passed to the playRound function using the playerSelection parameter
function playRound(playerSelection) {
  // Generate computer selection in code using lines 8 through 15
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerSelection = "rock";
  } else if (computerChoice === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  // Determine winner of the round in code using lines 21 to 55
  // playerSelection parameter contains the value ("rock", "paper", "scissors") which is gotten by the user clicking on one of three buttons in the browser
  // the value in playerSelection parameter is compared to each value that appears after a case keyword in the following lines after line 19
  // in the following lines where we see the word case, then we look at the value between the double quotes which is compared to the value in playerSelection
  switch (playerSelection) {
    case "rock": // start execution on this line when playerSelection equals 'rock'
      if (computerSelection === "scissors") {
        score++;
        results = "You win!";
      } else if (computerSelection === "paper") {
        computerScore++;
        results = "Computer wins!";
      } else {
        results = "Tie!";
      }
      break;
    case "paper": //start exection on this line when playerSelection equals 'paper'
      if (computerSelection === "rock") {
        score++;
        results = "You win!";
      } else if (computerSelection === "scissors") {
        computerScore++;
        results = "Computer wins!";
      } else {
        results = "Tie!";
      }
      break;
    case "scissors": //start exection on this line when playerSelection equals 'scissors'
      if (computerSelection === "paper") {
        score++;
        results = "You win!";
      } else if (computerSelection === "rock") {
        computerScore++;
        results = "Computer wins!";
      } else {
        results = "Tie!";
      }
      break;
  }

  let userImg = document.getElementById("user_img");
  let computerImg = document.getElementById("computer_img");

  userImg.src = "./" + playerSelection + ".gif";
  userImg.style.display = "";

  computerImg.src = "./" + computerSelection + ".gif";
  computerImg.style.display = "";

  /*
  let element = document.getElementById('winner');
  element.innerHTML = results;

  SAME AS

  document.getElementById("winner").innerHTML = results;

  because document.getElementById javascript funtion returns an element and innerHTML refers to a property of an element
  */

  document.getElementById("winner").innerHTML = results;
}
