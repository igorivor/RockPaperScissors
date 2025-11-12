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

function playRound(humanSelection, computerSelection){

    if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" ){
        console.log("Tie! Same selection!");
        return -1;
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ){
        console.log("Computer Victory! Paper beats Rock!");
        return 0;
    }else if(humanSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Human Victory! Rock beats Scissors!");
        return 1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" ){
        console.log("Tie! Same selection!");
        return -1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ){
        console.log("Human Victory! Paper beats Rock!");
        return 1;
    }else if(humanSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Computer Victory! Scissors beats Paper!");
        return 0;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors" ){
        console.log("Tie! Same selection!");
        return -1;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ){
        console.log("Human Victory! Scissors beats Paper!");
        return 1;
    }else if(humanSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock" ){
        console.log("Computer Victory! Rock beats Scissors!");
        return 0;
    }
}
function playGame(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getCamputerChoice();
        score = playRound(humanSelection,computerSelection);
        if(score == 0){
            computerScore++;
        }else if(score == 1){
            humanScore++;
        }else if(score == -1){
            i--;
        }else{
            console.log("Error!");
        }
    }
    if(humanScore > computerScore){
        console.log("Human Won Game! Score was:" +humanScore +" :" +computerScore +"!");
    }else if(computerScore > humanScore){
        console.log("Computer Won Game! Score was: " +computerScore +":" +humanScore +"!");
    }else {
        console.log("Error!");
    }
}
playGame();

