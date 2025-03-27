/*
Function: getComputerChoice
Algorithm:
Create variable `randomNumber` with a random integer between 0-2
Return string rock, paper, scissors depending on random integer
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

/*
Function: getHumanChoice
Algorithm:
Prompt and return user choice (not considering invalid entries)
*/
function getHumanChoice() {
    return prompt('Enter rock, paper, or scissors: ');
}