const cards = document.querySelectorAll('.game-card');

let hasCardFlipped = false;
let firstCard, secondCard;

function turnCard(){
    this.classList.add("flip")


if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
    } else {
        hasCardFlipped = false;
        secondCard = this;

        if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);
        } else {
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', turnCard));