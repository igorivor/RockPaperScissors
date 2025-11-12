function getCamputerChoice(){
    let percentage = 0;
    percentage = Math.random() * 100;
    if(percentage >= 0 && percentage <= 32.99){
        console.log("Rock!");
    } else if(percentage >= 33 && percentage <= 66.99){
        console.log("Paper!");
    } else if(percentage >= 67 && percentage <= 100){
        console.log("Scissors!");
    }
}

function getHumanChoice(){
    let tip = prompt("Select: Rock! Paper! or Scissors!");
    if(tip.toLowerCase() === "rock"){
        console.log("Rock!");
    }else if(tip.toLowerCase() === "paper"){
        console.log("Paper!");
    }else if(tip.toLowerCase() === "scissors"){
        console.log("Scissors!");
    }
}

getHumanChoice();
getCamputerChoice();
