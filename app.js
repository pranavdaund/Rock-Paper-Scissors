let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  // Generate computer choice
  const CompChoice = genCompChoice();

  if (userChoice === CompChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.style.backgroundColor = "green";
    msg.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
  } 
  else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.style.backgroundColor = "red";
    msg.innerText = `You lose ${CompChoice} beats your ${userChoice}`;
  }
};

const drawGame = () => {
  msg.style.backgroundColor = "#081b31";
  msg.innerText = "Game was Draw. Play again.";
};
