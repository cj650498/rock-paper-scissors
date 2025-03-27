/**
 * Function: getComputerChoice
 * Algorithm:
 * 1. Create variable `randomNumber` with a random integer between 0-2
 * 2. Return string rock, paper, scissors depending on random integer
 */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

/**
 * Function: getHumanChoice
 * Algorithm:
 * 1. Prompt and return user choice
*/
function getHumanChoice() {
    let choice = prompt('Enter rock, paper, or scissors: ')
    return choice.toLowerCase();
}

// Create two global variables humanScore and computerScore and initialize to 0
let humanScore = 0;
let computerScore = 0;

/**
 * Function printResult(result, humanChoice, computerChoice)
 * Algorithm:
 * If result is 0 print 'You lose! computerChoice beats humanChoice
 * If result is 1 print 'You win! humanChoice beats computerChoice'
 * Else print 'Tie!'
 */
function printResult(result, humanChoice, computerChoice) {
    if (result === 0) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (result === 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        console.log('It\'s a tie!');
    }
}