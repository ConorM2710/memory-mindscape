alert('The countdown timer will start after this alert, match all the pairs to beat the game');

/* js for the card game */
const cards = document.querySelectorAll('.game-card');

let hasCardFlipped = false;
let holdBoard = false;
let firstCard, secondCard;


/* rotates the card over to reveal symbol*/
function turnCard(){
    if (holdBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");


if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;

    return;
}

    secondCard = this;

    checkingForMatch();
    }
    
/* checks if both cards revealed are a matching pair*/
/* I rewatched the "love Maths" video tutorials specifically the "Calculating the Correct Answer" video to implement the checkingForMatch*/
function checkingForMatch(){
       let isPair = firstCard.dataset.framework === secondCard.dataset.framework;

       isPair ? stopCards() : resetCards();
    } 

function stopCards() {
    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click', turnCard);

    resetBoard();
}

function resetCards() {
    holdBoard = true;
 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
    resetBoard();
        }, 500);
}

function resetBoard(){
    [hasCardFlipped, holdBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// shuffles the deck upon refreshing the page
/* tutorial used to aid in the randomisation function can be found in the credits section of the README*/
(function reset() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 29);
        card.style.order = randomPos;
    });
    
})();

cards.forEach(card => card.addEventListener('click', turnCard));





/* js for the timer */
/* tutorial for the countdown timer can be found in the credits section in the README*/

const startingMinutes = 2;
let time = startingMinutes * 60;


const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;


    seconds = seconds < 10 ? '0' + seconds : seconds;
    

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;  
    
 }



                  
