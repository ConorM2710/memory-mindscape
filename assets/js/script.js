alert('Hurry the timer has begun!!')

/* js for the card game */
const cards = document.querySelectorAll('.game-card');

let hasCardFlipped = false;
let holdBoard = false
let firstCard, secondCard;

function turnCard(){
    if (holdBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip")


if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;

    return;
}

    secondCard = this;

    checkingForMatch();
    }

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
        }, 1500);
}

function resetBoard(){
    [hasCardFlipped, holdBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function reset() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 28);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', turnCard));

/* js for the timer */

const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;

    time--;
}