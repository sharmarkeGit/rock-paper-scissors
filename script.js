function getComputerChoice(){
    let randNumber = Math.floor(Math.random() * 3)
    switch(randNumber){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    if(!["rock","paper","scissors"].includes(playerSelection.toLowerCase())){
        return `${playerSelection} is not a valid option. Please chose "rock, paper or scissors"`
    }


    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return `It's a draw. ${playerSelection.toLowerCase()} Vs ${computerSelection.toLowerCase()}`;
    }else if(playerSelection.toLowerCase() ==="rock" && computerSelection.toLowerCase() === "scissors"
    || playerSelection.toLowerCase() ==="scissors" && computerSelection.toLowerCase() === "paper"
    || playerSelection.toLowerCase() ==="paper" && computerSelection.toLowerCase() === "rock"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));