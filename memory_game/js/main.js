
var resetBtn = document.querySelector("#reset");

var staticCards = [
        {
                rank: "queen",
                suit: "hearts",
                cardImage: "images/queen-of-hearts.png"
        },
        {
                rank: "queen",
                suit: "diamonds",
                cardImage: "images/queen-of-diamonds.png"
        },
        {
                rank: "king",
                suit: "hearts",
                cardImage: "images/king-of-hearts.png"
        },
        {
                rank: "king",
                suit: "diamonds",
                cardImage: "images/king-of-diamonds.png"
        }
];

//----

function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }


//----
cards = shuffle(staticCards);

var cardsInPlay = [];
var resetButton = document.getElementById("resetBtn");

function checkForMatch () {
        if (cardsInPlay[0] === cardsInPlay[1]) {
                document.getElementById("spanTag").innerText = "Match!";
                return;
              } else {
                document.getElementById("spanTag").innerText = "No Match";
                return;
              }
}

function flipCard () {
        var cardId = this.getAttribute('data-id');
        this.setAttribute('src', cards[cardId].cardImage);
        cardsInPlay.push(cards[cardId].rank);
        if (cardsInPlay.length === 2) {
                checkForMatch();
                cardsInPlay =[];
        }
        
}   
    


function createBoard () {
        for (var i = 0; i < cards.length; i++) {
                var cardElement = document.createElement('img');
                cardElement.setAttribute('src', 'images/back.png');
                cardElement.setAttribute('data-id', i);
                cardElement.addEventListener('click', flipCard);
                var cardTable = document.getElementById('game-board');
                cardTable.appendChild(cardElement);
            }
}

createBoard();

// reset button event listener



resetBtn.addEventListener("click", function(){
        var images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
                images[i].remove();
        }
        clearOut();
        createBoard();
})

function clearOut() {
        cardsInPlay = [];
        shuffle(staticCards);
        document.getElementById("spanTag").innerText = "";
}