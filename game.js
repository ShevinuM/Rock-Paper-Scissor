function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return [2, "It's a tie!"];
    }
    switch (playerSelection){
        case "ROCK":
            if (computerSelection == "PAPER") {
                return [0, "You Lose! Paper beats Rock"];
            } else {
                return [1, "You Win! Rock beats Scissor"];
            }
        case "PAPER":
            if (computerSelection == "Scissor") {
                return [0, "You Lose! Scissor beats Paper"];
            } else {
                return [1, "You Win! Paper beats Rock"];
            }
        case "SCISSOR":
            if (computerSelection == "ROCK") {
                return [0, "You Lose! Rock beats Scissor"];
            } else {
                return [1, "You Win! Scissor beats Paper"];
            }
        default:
            return [-1, "Invalid input"]
        }
}

function game() {
    let user = 0;
    let comp = 0;
    for (let count = 0; count < 5; count++) {
        let inp = prompt("ROCK, PAPER, SCISSOR");
        let res = play(inp, getComputerChoice());
        if (res[0] == 1) {
            user++;
        } else if (res[0] == 0){
            comp++;
        }
        console.log(res[1]);
    }
    if (user > comp) {
        console.log("user wins");
    } else if (comp > user) {
        console.log("computer wins");
    } else {
        console.log('tie');
    }
}

game();
