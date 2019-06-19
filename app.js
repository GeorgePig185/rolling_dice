/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore1 , roundScore2, activePlayer, gamePlaying;
var finalRound1 =0;
var finalRound2 =0;
var countClicks =0;
var countClicksForBtn2 =0;
var compare1=0;
var compare2=0;
init();

var zero =0;
var one =1;
document.querySelector('#myBtn').addEventListener('click', function() {
  countClicks++;
  
if (gamePlaying) {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
    var diceDOM = document.querySelector('.dice')
  /*  alert(diceDOM);*/
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    roundScore1 += dice;
    finalRound1 = dice;

     scores[zero] += roundScore1;
      
   /* alert('roundscore '+roundScore1);*/
      
         
    document.querySelector('#current-' + zero).textContent = dice;
    document.querySelector('#score-' + zero).textContent = roundScore1;
  
    if(countClicks == 3){
     compare1 = roundScore1;
     document.querySelector('#label-' + zero).textContent = "Final Round";
    document.querySelector('#current-' + zero).textContent = finalRound1;
    document.getElementById("myBtn").disabled = true;
    final();
   
  }
  }
 
 
});

document.querySelector('#newBtn').addEventListener('click', function() {
  
  init();
})

document.querySelector('#myBtn2').addEventListener('click', function() {
 /* alert("Count "+countClicksForBtn2);*/
  countClicksForBtn2++;
 
    if (gamePlaying) {
  /*  alert(gamePlaying);*/
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
    var diceDOM = document.querySelector('.dice')
    /*alert(diceDOM);*/
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    roundScore2 += dice;
    finalRound2 = dice;
       scores[one] += roundScore2;
    document.querySelector('#current-' + one).textContent = dice;
    document.querySelector('#score-' + one).textContent = roundScore2;
   
    if(countClicksForBtn2 == 3){
      compare2 = roundScore2;
      document.querySelector('#label-' + one).textContent = "Final Round";
    document.querySelector('#current-' + one).textContent = finalRound2;
    document.getElementById("myBtn2").disabled = true;
    final();
    
   
  }
  }
  

 
});




function init() {
  
  scores = [0, 0];
  activePlayer = 0;
  roundScore1 = 0;
  roundScore2 = 0;
  gamePlaying = true;
  finalRound1 =0;
  finalRound2 =0;
  countClicks =0;
  countClicksForBtn2 =0;
  compare1=0;
  compare2=0;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = ' 0';
  document.getElementById('score-1').textContent = ' 0';
  document.getElementById('current-0').textContent = ' 0';
  document.getElementById('current-1').textContent = ' 0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('winner');
 
    document.querySelector('#label-0').textContent = 'CURRENT';
    document.getElementById("myBtn").disabled = false;
    document.querySelector('#label-1').textContent = 'CURRENT';
    document.getElementById("myBtn2").disabled = false;

};


function final(){
  
  if(compare1 != 0 && compare2 != 0){
    
      if(compare2 > compare1){
      
      document.querySelector('#name-' + one).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + one + '-panel').classList.add('winner');
      document.querySelector('.player-' + one + '-panel').classList.remove('active');
      gamePlaying = false;
      }else if(compare2 == compare1){
      
      document.querySelector('#name-' + zero).textContent = 'Draw!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + zero + '-panel').classList.add('winner');
      document.querySelector('.player-' + zero + '-panel').classList.remove('active');
       document.querySelector('#name-' + one).textContent = 'Draw!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + one + '-panel').classList.add('winner');
      document.querySelector('.player-' + one + '-panel').classList.remove('active');
          gamePlaying = false;
      }else{
      
        document.querySelector('#name-' + zero).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + zero + '-panel').classList.add('winner');
      document.querySelector('.player-' + zero + '-panel').classList.remove('active');
          gamePlaying = false;
      }
  } 
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'


//var x = document.querySelector('#score-0').textContent;
//console.log(x);
