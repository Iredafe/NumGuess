

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
       //disable input
       guessInput.disabled = true;
       //make border green
       guessInput.style.borderColor = 'green';
   }
});


//set message
function setMessage(msg, color){

    message.getElementsByClassName.color = color;
    message.textContent = msg
}