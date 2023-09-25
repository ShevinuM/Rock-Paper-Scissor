class Game {

    constructor() {
        this.user = 0;
        this.comp = 0;
        this.comment = "";
    }

    getComputerChoice() {
        let random = Math.floor(Math.random()*3);
        if (random == 0) {
            return "Rock";
        } else if (random == 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    
    play(playerSelection, computerSelection) {
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
    
    game(inp) {
        let res = this.play(inp, this.getComputerChoice());
        if (res[0] == 1) {
            this.user++;
        } else if (res[0] == 0){
            this.comp++;
        }
        this.comment = res[1];
        this.checkForWinner();
    }

    getScore() {
        return "User :" + this.user + "\n\n" + "Computer :" + this.comp;
    }

    getComment() {
        return this.comment;
    }

    checkForWinner() {
        if (this.user >= 5 || this.comp >= 5) {
            if (this.user >= 5) {
                alert("You won!");
            } else {
                alert("You Lost!");
            }
            this.user = 0;
            this.comp = 0;
            this.comment = "";
        }
        
    }
}

const rock_btn = document.querySelector('#rock_btn');
const paper_btn = document.querySelector('#paper_btn');
const scissor_btn = document.querySelector('#scissor_btn');
const results_box = document.querySelector('#results_box')
const comment_box = document.querySelector('#comment_box');

let started = false;
const curr_game = new Game();

rock_btn.addEventListener('click', () => {
    curr_game.game("ROCK");
    results_box.textContent = curr_game.getScore();
    comment_box.textContent = curr_game.getComment();
});
paper_btn.addEventListener('click', () => {
    curr_game.game("PAPER");
    results_box.textContent = curr_game.getScore();
    comment_box.textContent = curr_game.getComment();
});
scissor_btn.addEventListener('click', () => {
    curr_game.game("SCISSOR");
    results_box.textContent = curr_game.getScore();
    comment_box.textContent = curr_game.getComment();
});





