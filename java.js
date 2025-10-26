let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw. Play Again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
    userScore++;
    user.innerText = userScore;
  } else {
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
    compScore++;
    comp.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice !== "paper";
    } else if (userChoice === "paper") {
      userWin = compChoice !== "scissors";
    } else {
      userWin = compChoice !== "rock";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
