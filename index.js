let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    return Math.floor(Math.random()*13) + 1;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Hit or stick?";
    } else if (sum === 21) {
        message = "Congratulations! You've got blackjack";
        hasBlackJack = true;
    } else {
        message = "Unlucky, you've bust!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    let newCard = getRandomCard;
    sum += newCard;
    cards.push(newCard);
    renderGame();
}