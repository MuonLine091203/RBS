let score={
  wins:0,
  loses:0,
  ties:0
}
function ResetScore(){
  score.wins=0;
  score.loses=0;
  score.ties=0;
  
  document.querySelector('.score').innerHTML =
  `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function ComputerPlay() {
  const RDNumber= Math.random();
  let CPPlay;
  if(RDNumber>=0 && RDNumber<1/3){
    CPPlay ='Rock';
  }else if(RDNumber>=1/3 && RDNumber<2/3){
    CPPlay ='Paper';
  }else if(RDNumber>=2/3 && RDNumber<1){
    CPPlay ='Scissors';
  }
  return CPPlay;
}

function PLay(YMove) {
  ComputerPlay();
  const CPPlay = ComputerPlay();
  if (YMove==='Rock'){
    if (CPPlay ==='Rock') {
      document.querySelector('.result') .innerHTML = 'Tie.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="rock" src="img/rock-emoji.png">  <img class="rock" src="img/rock-emoji.png"> Computer')
      score.ties +=1
    }else if (CPPlay ==='Scissors') {
      document.querySelector('.result') .innerHTML = 'You win.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="rock" src="img/rock-emoji.png">  <img class="scissors" src="img/scissors-emoji.png"> Computer')
      score.wins +=1
    }else if (CPPlay ==='Paper') {
      document.querySelector('.result') .innerHTML = 'You lose.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="rock" src="img/rock-emoji.png">  <img class="paper" src="img/paper-emoji.png"> Computer')
      score.loses +=1
    }
  }else if (YMove==='Scissors'){
    if (CPPlay ==='Rock') {
      document.querySelector('.result') .innerHTML = 'You lose.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="scissors" src="img/scissors-emoji.png">  <img class="rock" src="img/rock-emoji.png"> Computer')
      score.loses +=1
    }else if (CPPlay ==='Scissors') {
      document.querySelector('.result') .innerHTML = 'Tie.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="scissors" src="img/scissors-emoji.png"> <img class="scissors" src="img/scissors-emoji.png"> Computer')
      score.ties +=1
    }else if (CPPlay ==='Paper') {
      document.querySelector('.result') .innerHTML = 'You win.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="scissors" src="img/scissors-emoji.png"> <img class="paper" src="img/paper-emoji.png"> Computer')
      score.wins +=1
    }
  }else if (YMove==='Paper'){
    if (CPPlay ==='Rock') {
      document.querySelector('.result') .innerHTML = 'You win.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="paper" src="img/paper-emoji.png"> <img class="rock" src="img/rock-emoji.png"> Computer')
      score.wins +=1
    }else if (CPPlay ==='Scissors') {
      document.querySelector('.result') .innerHTML = 'You lose.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="paper" src="img/paper-emoji.png"> <img class="scissors" src="img/scissors-emoji.png"> Computer')
      score.loses +=1
    }else if (CPPlay ==='Paper') {
      document.querySelector('.result') .innerHTML = 'Tie.'
      document.querySelector('.You-vs-Bot') .innerHTML =('You  <img class="paper" src="img/paper-emoji.png"> <img class="paper" src="img/paper-emoji.png"> Computer')
      score.ties +=1
    }
  }
  document.querySelector('.score').innerHTML =
  `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}
 
let IsAutoPlayed = false;
let intervalId;

function AutoPlay() {
  if (!IsAutoPlayed) {
    intervalId = 
    setInterval(function() {
      const PlayerMove = ComputerPlay();
      PLay(PlayerMove);
    }, 500);
    IsAutoPlayed = true;
  }else {
    clearInterval(intervalId);
    IsAutoPlayed = false;
  }
}





















function BetGameCalculate(){
  const inputNumber = document.querySelector('.choosen-bet');
  let bet = Number(inputNumber.value);

  if (bet<=100) {
    bet = bet + 0.1 * bet;
  } else if (bet>100) {
    bet = bet + 0.2 * bet;
  }
  document.querySelector('.winnings')
    .innerHTML = `$${bet}`;
}

function EnterToBetGame(event) {
  if (event.key === 'Enter') {
    BetGameCalculate();
  }
}