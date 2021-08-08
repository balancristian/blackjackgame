let player = {
    name: "Cristian",
    chips: 145,
}
let cards = []; //array - order list of item
let sum = 0;
let hasBlackjack = false;

let isAlive =  false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

 
function getRandomCard()
{
     let randomNumber = Math.floor((Math.random() * 13));
     if(randomNumber > 10){
         return 10;
     } else if (randomNumber === 1){
         return 11;
     } else {
         return randomNumber;
     }
}


function startgame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    rendergame();
}

function rendergame(){
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20)
    {
      message = "Do you want to draw a ne card?";
   } else if(sum === 21){
        message = "Wohoo! You've got Blackjack";
        hasBlackjack = true;
    } 
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard(){   
    if(isAlive === true && hasBlackjack === false)
    {
        let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    rendergame();
    }
   
} 









 