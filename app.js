

//game values
let min=1, max = 10, winningNum = 2, guessesLeft = 3;

//ui elements
const game = document.getElementById('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event-listener
game.addEventListener('mousedown', function(e){
    if(e.target.className ==='play-again'){
        window.location.reload();
    }
});
    



//listener for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   //validate
   if(isNaN(guess) || guess < min || guess > max){
       return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }
   //check if won
   if(guess===winningNum){
       //game over - won
        gameOver(true, `${winningNum} is correct, You WIN!`)
   
    } else{
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //game over - lost
            let msg =`Game Over, You lost. The correct Number was ${winningNum}!`
          gameOver(false,msg)
        }else{
            //game continues - answer wrong
            //clear input 
            guessInput.value = '';
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`, 'red')
        }
   }
});

//game over
function gameOver(won, msg){
    let color;
    won === true? color = 'green' : color = 'red';
 //disable input
 guessInput.disabled = true;
 //set message
 setMessage(msg, color);

 //play again
 guessBtn.value = 'Play Again';
 guessBtn.className += 'play-again';
}

//set message
function setMessage(msg, color){

    guessInput.style.borderColor=color;
    message.style.color = color;
    message.textContent = msg
}