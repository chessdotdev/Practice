const score = {
    wins: 0,
    losses: 0,
    ties: 0

 
 };


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
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } 
    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    }
     if(result === 'You win'){  
        score.wins += 1;
     }else if(result === 'You lose'){
        score.losses += 1;
     }else if(result === 'Tie'){
        score.ties +=1;
     }
   
    alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);

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