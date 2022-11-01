
var tiesE1 = document.getElementById("ties");
var winsE1 = document.getElementById("wins");
var lossesE1 = document.getElementById("losses");




var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var shouldPlay = true;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    var computerOptions = ["r", "s", "p"];

    var choiceIndex = getRandomInt(computerOptions.length);

    return computerOptions[choiceIndex];
}


function updateTieScore(){
    ties++;
    tiesE1.textContent = tieCount;

}
function updateWinScore(){
    win++;
    winsE1.textContent = winCount;
}

function updateLossScore(){
    lossCount++;
    lossesE1.textContent= lossCount;
}

while(shouldPlay){
var rawUserInput = prompt("Rock, Paper, Scissors");
var userInput = rawUserInput.trim().toLowerCase();
var computerChoice = getComputerChoice();
if (!rawUserInput){
    alert("Input required");
}


if (userInput !== "r" && userInput !== "s" && userInput !== "p") {
    alert("Please enter R, S, or P");
    
}
if (computerChoice === 'r') {
    if (userInput === 'r') {
        
        updateTieScore();

    } else if (userInput === 's') {
        
        updateLossScore();
    } else {
        console.log('I win');
        updateWinScore();
    }

} else if (computerChoice === 's') {
    if (userInput === 'r') {
        console.log('I win');
        updateWinScore();
    } else if (userInput === 's') {
        updateTieScore();
    } else {
        updateLossScore();
    }


} else {
    if (userInput === 'r') {
        updateLossScore();
    } else if (userInput === 's') {
        updateWinScore();
    } else {
        console.log('Tie');
        updateTieScore();
    }
  



}  
var userWantsToPlay = confirm('play agian?');

if (userWantsToPlay){
    shouldPlay= true;
} else {
    shouldPlay = false;
}
    }