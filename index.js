let firstCard = 7;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Hit or stick?";
    } else if (sum === 21) {
        message = "Congratulations! You've got blackjack";
        hasBlackJack = true;
    } else {
        message = "Unlucky you've bust!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    let newCard = 4;
    sum += newCard;
    startGame();
}