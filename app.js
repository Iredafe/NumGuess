

//game values
let min=1, max = 10, winningNum = 2, guessesLeft = 3;

//ui elements
const game = document.getElementById('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listener for guess
guessBtn.addEventListener('click', function(){
    console.log(guessBtn.value);
})