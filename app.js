let Player = {
    Name: "Vikram",
    Chips: 500,
}
let Card =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startBtn = document.querySelector("#startBtn-el");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCardEl = document.querySelector("#newCardBtn-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = Player.Name + ": $" + Player.Chips;

function getRandomCard(){
    let RandomNumber = Math.floor(Math.random()*13) +1;
    
    if (RandomNumber >10){
        return 10;
    }else if(RandomNumber === 1){
        return 11;
    }else{
        return RandomNumber;
    }
}
startBtn.addEventListener("click", function startGame() {
    isAlive =true;
    let FirstCard = getRandomCard();
    let SecondCard = getRandomCard();
    Card =[FirstCard,SecondCard];
    sum = FirstCard + SecondCard;

    cardsEl.textContent = "Cards: " + Card[0] + " " + Card[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "You have got a blackjack.";
        hasBlackJack = true;
    } else {
        message = "You are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    startBtn.disabled = true;
});

newCardEl.addEventListener("click", function NewCard() {
    if (isAlive && !hasBlackJack) {
        let NextCard = getRandomCard();
        sum += NextCard;
        Card.push(NextCard);
        cardsEl.textContent = "Cards: ";
        for(let i = 0; i<Card.length;i++){
        cardsEl.textContent += Card[i] +" ";
      }
        sumEl.textContent = "Sum: " + sum;
        if (sum > 21) {
            isAlive = false;
            messageEl.textContent = "You are out of the game";
        }
        else if (sum === 21) {
          message = "You have got a blackjack.";
          hasBlackJack = true;
          messageEl.textContent = message;
          startBtn.disabled = false;
        }
    }
});
// let RandomNumber =Math.floor(Math.random()*11) +1; 

// console.log(RandomNumber);