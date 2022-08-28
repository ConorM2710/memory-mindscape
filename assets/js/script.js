const cards = document.querySelectorAll('.game-card');

function turnCard(){
    this.classList.toggle("flip")
}

cards.forEach(card => card.addEventListener('click', turnCard));