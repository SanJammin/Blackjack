let firstCard = 7;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
    sumEl.textContent += firstCard + secondCard;
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

