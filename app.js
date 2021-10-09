

//game values
let min=1, max = 10, winningNum = 2, guessesLeft = 3;

//ui elements
const game = document.getElementById('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listener for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   //validate
   if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`);
   }
   //check if won
   if(guess===winningNum){
       //game over - won

       //disable input
       guessInput.disabled = true;
       //make border green
       guessInput.style.borderColor = 'green';
   
       //set message
       setMessage(`${winningNum} is correct, You WIN!`, 'green')
    } else{
        //wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //game over - lost
            //disable input
       guessInput.disabled = true;
       //make border green
       guessInput.style.borderColor = 'red';
   
       //set message
       setMessage(`Game Over, You lost. The correct Number was ${winningNum}!`, 'red')
        }else{
            //game continues - answer wrong
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`, 'red')
        }
   }
});


//set message
function setMessage(msg, color){

    message.style.color = color;
    message.textContent = msg
}