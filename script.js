/**
 * Function: getComputerChoice()
 * Algorithm:
 * Create variable `randomNumber` with a random integer between 0-2
 * Return string rock, paper, scissors depending on random integer
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
 * Function: getHumanChoice()
 * Algorithm:
 * Prompt and return user choice
*/
function getHumanChoice() {
    let choice = prompt('Enter rock, paper, or scissors: ')
    return choice.toLowerCase();
}

/**
 * Helper function: capitalize(str)
 * First element of string to upper case
 * Concatenate with the rest of the string
 */
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Helper function printResult(result, humanChoice, computerChoice)
 * Algorithm:
 * If result is 0 print 'You lose! computerChoice beats humanChoice
 * If result is 1 print 'You win! humanChoice beats computerChoice'
 * Else print 'Tie!'
 * Print each score
 */
function printResult(result, humanChoice, computerChoice) {
    if (result === 0) {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}`);
    } else if (result === 1) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}`);
    } else {
        console.log('It\'s a tie!');
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

/**
 * Function: playRound(humanChoice, computerChoice)
 * Algorithm:
 * Create variables tie, win, lose corresponding to -1, 1, 0
 * Check if choices are the same: print result, do not change score
 * Check the three ways for human to win: print result, increase human score
 * Else print result, increase computer score
 */
function playRound(humanChoice, computerChoice) {
    const tie = -1;
    const win = 1;
    const lose = 0;
    if (humanChoice === computerChoice) {
        printResult(tie, humanChoice, computerChoice);
    } else
        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            printResult(win, humanChoice, computerChoice);
        } else {
            computerScore++;
            printResult(lose, humanChoice, computerChoice);
        }
}

// Create two global variables humanScore and computerScore and initialize to 0
let humanScore = 0;
let computerScore = 0;

// Game loop (best out of five)
let keepGoing = true;
let round = 1;
while(keepGoing) {
    console.log(`\n--- Round ${round++} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (humanScore === 3) {
        console.log('Congrats human! You win!');
        keepGoing = false;
    } else if (computerScore === 3) {
        console.log('OK Computer... good job!');
        keepGoing = false;
    }
}