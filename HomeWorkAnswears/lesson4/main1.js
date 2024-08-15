const blocks = document.querySelectorAll(".block");
const round = document.querySelector(".round");
const computerW = document.querySelector(".computer_wins");
const userW = document.querySelector(".user_wins");
const cleanResults = document.querySelector(".clean-results");
let roundCounter = 0;
let userWins = 0;
let computerWins = 0;

blocks.forEach((block, i) => {
  block.addEventListener("click", (e) => {
    let userChoise = i;
    console.log(userChoise);
    const computerChoise = Math.floor(Math.random() * 3);
    checkWinner(userChoise, computerChoise);
  });
});

function cleanRes(roundC, userW, computerW) {
  cleanResults.addEventListener("click", () => {
    roundC.innerHTML = null;
    userW.innerHTML = null;
    computerW.innerHTML = null;
  });
}
function checkWinner(user, computer) {
  let winner = "";
  if (user === computer) {
    winner = " Нічия";
    roundCounter++;
    round.innerHTML = roundCounter;
    alert(winner);
  } else if (user === 0 && computer === 1) {
    winner = "Компьютер";
    roundCounter++;
    computerWins++;
    round.innerHTML = roundCounter;
    computerW.innerHTML = computerWins;
    alert(`Переможець ${winner}`);
  } else if (user === 0 && computer === 2) {
    winner = "Користувач";
    userWins++;
    roundCounter++;
    round.innerHTML = roundCounter;
    userW.innerHTML = userWins;
    alert(`Переможець ${winner}`);
  } else if (user === 1 && computer === 0) {
    winner = "Користувач";
    userWins++;
    roundCounter++;
    round.innerHTML = roundCounter;
    userW.innerHTML = userWins;
    alert(`Переможець ${winner}`);
  } else if (user === 1 && computer === 2) {
    winner = "Компьютер";
    computerWins++;
    roundCounter++;
    round.innerHTML = roundCounter;
    computerW.innerHTML = computerWins;
    alert(`Переможець ${winner}`);
  } else if (user === 2 && computer === 0) {
    winner = "Компьютер";
    computerWins++;
    roundCounter++;
    round.innerHTML = roundCounter;
    computerW.innerHTML = computerWins;
    alert(`Переможець ${winner}`);
  } else if (user === 2 && computer === 1) {
    winner = "Користувач";
    userWins++;
    roundCounter++;
    round.innerHTML = roundCounter;
    userW.innerHTML = userWins;
    alert(`Переможець ${winner}`);
  }

  cleanRes(round, userW, computerW);
}
