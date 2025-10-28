function playGame(playerMove) {
    computerMove = pickcomputerMove();
    console.log(computerMove);
    result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
        alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}`);
    }
    
    else if (playerMove === 'Paper') {

        computerMove = pickcomputerMove();
        console.log(computerMove);
        result = '';
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
        
        alert(`You picked ${playerMove}r, Computer picked ${computerMove}. ${result}`);
    } 
    
    else if (playerMove === 'Rock') {
        const computerMove = pickcomputerMove();
        console.log(computerMove);
        let result = '';
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
        alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}`);
    }

}
function pickcomputerMove() {
    randomNum = Math.random();
    let computerMove = '';

    if (randomNum > 0 && randomNum < 1 / 2) {
        computerMove = 'Rock';
    } else if (randomNum > 1 / 2 && randomNum < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNum > 2 / 3 && randomNum < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
