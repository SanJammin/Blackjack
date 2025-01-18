let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "User",
    chips: 145
}

playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
    // change this to let the player pick 1 or 11 when receiving an Ace
    let drawCard = Math.floor(Math.random()*13) + 1;
    if (drawCard === 1) {
        drawCard = 11;
    } else if (drawCard > 10) {
        drawCard = 10;
    }

    return drawCard;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
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
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard;
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}