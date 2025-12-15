let humanScore = 0;
let computerScore = 0; 
let tie = 0;

const btn_Rock = document.querySelector("#btn_Rock");
const btn_Paper = document.querySelector("#btn_Paper");
const btn_Scissors = document.querySelector("#btn_Scissors");
const msg_Victory = document.querySelector(".victory");
const msg_Human = document.querySelector(".human");
const msg_Computer = document.querySelector(".computer");
const msg_Tie = document.querySelector(".tie");

btn_Rock.addEventListener("click",() => playGame("rock"));
btn_Paper.addEventListener("click",() => playGame("paper"));
btn_Scissors.addEventListener("click",() => playGame("scissors"));

function setButtonsEnabled(enabled) {
  btn_Rock.disabled = !enabled;// ! is logical operator NOT 
  btn_Paper.disabled = !enabled;
  btn_Scissors.disabled = !enabled;
}

function getComputerChoice(){
    let percentage = 0;
    percentage = Math.random() * 100;
    if(percentage >= 0 && percentage <= 32.99){
        return "Rock";
    } else if(percentage >= 33 && percentage <= 66.99){
       return "Paper";
    } else if(percentage >= 67 && percentage <= 100){
        return "Scissors";
    }
}

function playRound(humanSelection, computerSelection) {

  const human = humanSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  const dv_human = document.createElement("div");
  const dv_computer = document.createElement("div");
  const dv_tie = document.createElement("div");

  dv_human.classList.add("human-result");
  dv_computer.classList.add("computer-result");
  dv_tie.classList.add("tie-result");


  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    dv_human.textContent = "Human victory!";
    msg_Human.appendChild(dv_human);
    return 1;
  }


  if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors") ||
    (human === "scissors" && computer === "rock")
  ) {
    dv_computer.textContent = "Computer victory!";
    msg_Computer.appendChild(dv_computer);
    return 0;
  }

  dv_tie.textContent = "Tie!";
  msg_Tie.appendChild(dv_tie);
  return -1;
}


function playGame(humanChoice){

    const prf_Game = document.createElement("p");
    prf_Game.classList.add("game-result");
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    const btn_Restart = document.createElement("button");
    btn_Restart.classList.add("restart");
    btn_Restart.textContent = "Restart Game!";

    let score = playRound(humanSelection,computerSelection); 

    if(score == 0){
        computerScore++;
    }else if(score == 1){
        humanScore++;
    }else if(score == -1){
        tie++;
    }else{
        console.log("Error!");
    } 

   
    if(humanScore === 5){
        prf_Game.textContent = `Human Won Game! Score: ${humanScore}:${computerScore} with ${tie} ties!`;
        msg_Victory.appendChild(prf_Game);
        msg_Victory.appendChild(btn_Restart);

        setButtonsEnabled(false);

        btn_Restart.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            tie = 0;
            msg_Victory.innerHTML = "";
            msg_Human.innerHTML = "";
            msg_Computer.innerHTML = "";
            msg_Tie.innerHTML = "";
            setButtonsEnabled(true);
        })

    }else if(computerScore === 5){
        prf_Game.textContent = `Computer Won Game! Score: ${computerScore}:${humanScore} with ${tie} ties!`;
        msg_Victory.appendChild(prf_Game);
        msg_Victory.appendChild(btn_Restart);

        setButtonsEnabled(false);

        btn_Restart.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            tie = 0;
            msg_Victory.innerHTML = "";
            msg_Human.innerHTML = "";
            msg_Computer.innerHTML = "";
            msg_Tie.innerHTML = "";
            setButtonsEnabled(true);
        })
        
    }
}


