function rock(){
    let randomNum = Math.random();
    let computerMove = '';
    let result = '';
    if(randomNum > 0 && randomNum < 1/2){
       computerMove = 'Rock';
    }else if(randomNum > 1/2 && randomNum < 2/3){
      computerMove = 'Paper';
    }else if(randomNum > 2/3 && randomNum < 1){
      computerMove = 'Scissors';
    }

    console.log(computerMove);
    if(computerMove === 'Rock'){
      result = 'Tie';
    }else if(computerMove === 'Paper'){
      result = 'You lose';
    }else if(computerMove === 'Scissors'){
      result = 'You win';
    }
    alert(`You picked Rock, Computer picked ${computerMove}. ${result}`);
}

function scissors(){
    randomNum = Math.random();
    computerMove = '';
    result = '';
   if(randomNum > 0 && randomNum < 1/2){
      computerMove = 'Rock';
   }else if(randomNum > 1/2 && randomNum < 2/3){
     computerMove = 'Paper';
   }else if(randomNum > 2/3 && randomNum < 1){
     computerMove = 'Scissors';
   }

   console.log(computerMove);
   if(computerMove === 'Rock'){
     result = 'You lose';
   }else if(computerMove === 'Paper'){
     result = 'You win';
   }else if(computerMove === 'Scissors'){
     result = 'Tie';
   }
   alert(`You picked Scissors, Computer picked ${computerMove}. ${result}`);
}

function paper(){
    randomNum = Math.random();
    computerMove = '';
    result = '';
   if(randomNum > 0 && randomNum < 1/2){
      computerMove = 'Rock';
   }else if(randomNum > 1/2 && randomNum < 2/3){
     computerMove = 'Paper';
   }else if(randomNum > 2/3 && randomNum < 1){
     computerMove = 'Scissors';
   }

   console.log(computerMove);
   if(computerMove === 'Rock'){
     result = 'You win';
   }else if(computerMove === 'Paper'){
     result = 'Tie';
   }else if(computerMove === 'Scissors'){
     result = 'You lose';
   }
   alert(`You picked Paper, Computer picked ${computerMove}. ${result}`);
}