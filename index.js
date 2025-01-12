let firstCard = 7;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Congratulations! You've got blackjack")
} else {
    console.log("Unlucky you've bust!")
}