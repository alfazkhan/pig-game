var score,currentScore,total,playerActive;

init();

//Roll Button
document.querySelector('#btn-roll').addEventListener('click',function(){
    var dice;
    dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('#dice');
    diceDOM.classList.remove('hidden');
    diceDOM.src='dice-'+dice+'.png';
    
    if(dice !== 1)
        {   
            currentScore += dice;
            document.querySelector('#current-'+playerActive).textContent=currentScore;        
        }
    else
        {
            changePlayer();
        }
});


//Hold Button
document.getElementById('btn-hold').addEventListener('click',function(){
    score[playerActive]+=currentScore;
    if(score[playerActive] >= 50){
        document.getElementById('player-'+playerActive).textContent='Winner!';
        document.getElementById('playerSection-0').classList.remove='active';
        document.getElementById('playerSection-1').classList.remove='active';
    }
    else{
      document.getElementById('total-'+playerActive).textContent=score[playerActive];
    changePlayer();   
    }

});

//New Game Button
document.getElementById('btn-new').addEventListener('click',function(){
    init();
});

//Change Player Function
function changePlayer(){
    currentScore=0;
    document.querySelector('#current-'+playerActive).textContent=currentScore;
    if(playerActive == 0){
        document.getElementById('playerSection-0').classList.remove('active');
        playerActive=1;
        document.getElementById('playerSection-1').classList.add('active');
    }
    else{
        document.getElementById('playerSection-1').classList.remove('active');
        playerActive=0;
        document.getElementById('playerSection-0').classList.add('active');
    }
}

//Initial Function

function init(){
    score=[0,0];
currentScore=0;
playerActive=0
total=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('total-0').textContent='0';
    document.getElementById('total-1').textContent='0';
    document.getElementById('dice').classList.add('hidden');
}

