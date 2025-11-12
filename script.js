function getCamputerChoice(){
    let percentage = 0;
    percentage = Math.random() * 100;
    if(percentage >= 0 && percentage <= 32.99){
        console.log("Rock!");
    } else if(percentage >= 33 && percentage <= 66.99){
        console.log("Paper!");
    } else if(percentage >= 67 && percentage <= 100){
        console.log("Scissors!");
    } else{
        console.log("Error!");
        console.log("Unexpected number!")
    }
}
for(let i = 0; i < 10; i++){
    getCamputerChoice();
}

