let playerSelection;

function getComputerChoice(){
    let randNumber = Math.floor(Math.random() * 3)
    switch(randNumber){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        //console.log(`It's a draw. ${playerSelection.toLowerCase()} Vs ${computerSelection.toLowerCase()}`);
        return "draw";
    }else if(playerSelection.toLowerCase() ==="rock" && computerSelection.toLowerCase() === "scissors"
    || playerSelection.toLowerCase() ==="scissors" && computerSelection.toLowerCase() === "paper"
    || playerSelection.toLowerCase() ==="paper" && computerSelection.toLowerCase() === "rock"){
        //console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }else{
        //console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }
}

function game(){
    let playerVictoryCounter = 0;
    let computerVictoryCounter = 0
    let tableScore = "";
    //for(let i = 0; i < 5; i++){
        //let playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        while(!["rock","paper","scissors"].includes(playerSelection.toLocaleLowerCase())){
            playerSelection = prompt(`${playerSelection} is not a valid option. Please chose: Rock, Paper, or Scissors`)

        }

        const currentRoundResult = playRound(playerSelection,computerSelection);

        tableScore += playerSelection+" Vs "+computerSelection+" : "+currentRoundResult +"\n"; 
       if("win" === currentRoundResult){
        playerVictoryCounter++;
       }else if("lose" === currentRoundResult){
        computerVictoryCounter++
       }
    //}
    if(playerVictoryCounter>computerVictoryCounter){
        return `You Win! ${playerVictoryCounter} - ${computerVictoryCounter} \n ${tableScore}`
    }else if(playerVictoryCounter<computerVictoryCounter){
        return `You Lose! ${playerVictoryCounter} - ${computerVictoryCounter} \n ${tableScore}`
    }else{
        return `It's a draw! ${playerVictoryCounter} - ${computerVictoryCounter} \n ${tableScore}`
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',getPlayerSelection));

function getPlayerSelection(e){
    playerSelection = this.id;
    const result =  document.querySelector('.result')
    result.textContent = game();
    //console.log(game());
}

//console.log(game());