let humanScore = 0;
let computerScore = 0; 
let tie = 0;

const btn_Rock = document.querySelector("#btn_Rock");
const btn_Paper = document.querySelector("#btn_Paper");
const btn_Scissors = document.querySelector("#btn_Scissors");
const msg_Resualt = document.querySelector(".resualts")

btn_Rock.addEventListener("click",() => playGame("rock"));
btn_Paper.addEventListener("click",() => playGame("paper"));
btn_Scissors.addEventListener("click",() => playGame("scissors"));

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

function playRound(humanSelection, computerSelection){
    const prf_Round = document.createElement("p")
    if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" ){
        prf_Round.textContent = "Tie! Same selection!";
        msg_Resualt.appendChild(prf_Round);
        return -1;
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ){
        prf_Round.textContent = "Computer Victory! Paper beats Rock!";
        msg_Resualt.appendChild(prf_Round);
        return 0;
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ){
        prf_Round.textContent = "Human Victory! Rock beats Scissors!";
        msg_Resualt.appendChild(prf_Round);
        return 1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" ){
        prf_Round.textContent = "Tie! Same selection!";
        msg_Resualt.appendChild(prf_Round);
        return -1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ){
        prf_Round.textContent = "Human Victory! Paper beats Rock!";
        msg_Resualt.appendChild(prf_Round);
        return 1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" ){
        prf_Round.textContent = "Computer Victory! Scissors beats Paper!";
        msg_Resualt.appendChild(prf_Round);
        return 0;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors" ){
        prf_Round.textContent = "Tie! Same selection!";
        msg_Resualt.appendChild(prf_Round);
        return -1;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ){
        prf_Round.textContent = "Human Victory! Scissors beats Paper!";
        msg_Resualt.appendChild(prf_Round);
        return 1;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock" ){
        prf_Round.textContent = "Computer Victory! Rock beats Scissors!";
        msg_Resualt.appendChild(prf_Round);
        return 0;
    }
}

function playGame(humanChoice){

    const prf_Game = document.createElement("p");
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
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
        const prf_Game = document.createElement("p");
        prf_Game.textContent = `Human Won Game! Score: ${humanScore}:${computerScore} with ${tie} ties!`;
        msg_Resualt.appendChild(prf_Game);
        humanScore = 0;
        computerScore = 0;
        tie = 0;
    }else if(computerScore === 5){
        const prf_Game = document.createElement("p");
        prf_Game.textContent = `Computer Won Game! Score: ${computerScore}:${humanScore} with ${tie} ties!`;
        msg_Resualt.appendChild(prf_Game);
        humanScore = 0;
        computerScore = 0;
        tie = 0;
    }
}


