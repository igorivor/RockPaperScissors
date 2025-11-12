let humanScore = 0;
let computerScore = 0;

function getCamputerChoice(){
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

function getHumanChoice(){
    let tip = prompt("Select: Rock! Paper! or Scissors!");
    if(tip.toLowerCase() === "rock"){
        return "Rock";
    }else if(tip.toLowerCase() === "paper"){
        return "Paper";
    }else if(tip.toLowerCase() === "scissors"){
        return "Scissors";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getCamputerChoice();

function playRound(humanSelection, computerSelection){

    if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" ){
        console.log("Tie! Same selection!");
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ){
        console.log("Computer Victory! Paper beats Rock!");
        computerScore++;
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Human Victory! Rock beats Scissors!");
        humanScore++;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" ){
        console.log("Tie! Same selection!");
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ){
        console.log("Human Victory! Paper beats Rock!");
        humanScore++;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Computer Victory! Scissors beats Paper!");
        computerScore++;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Tie! Same selection!");
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ){
        console.log("Human Victory! Scissors beats Paper!");
        humanScore++;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock" ){
        console.log("Computer Victory! Rock beats Scissors!");
        computerScore++;
    }
}

playRound(humanSelection,computerSelection);
