const CARD_VALUE = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}; //used to determine a cards numeric value based off of its string value
class War {
  constructor() {
    this.deck = []; // deck array will be used to combine each of the 4 suits with its set of cards
    this.cards = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    this.suits = ["♠", "♥", "♥", "♣"];
  }

  createDeck() {
    for (let suit = 0; suit < 4; suit++) {
      //Loop will iterate nested for loop for each of the 4 diffrent suits
      for (let card = 0; card < 13; card++) {
        // Each of the suits will loop 13 times for each of the diffrent card values and push the concatenated values and suits to the deck array
        this.deck.push(this.cards[card] + "" + this.suits[suit]);
      }
    }
  }

  shuffleDeck() {
    this.deck.sort(() => Math.random() - 0.5); // Using the sort method we can make each element random in the array using Math.random
  }

  playGame() {
    let playerOneScore = 0;
    let playerTwoScore = 0;
    const half = Math.ceil(this.deck.length / 2);
    const PLAYER1 = this.deck.slice(0, half);
    const PLAYER2 = this.deck.slice(half); // this cuts the 52 card deck into two 26 card decks.

    for (let i = 0; i < 26; i++) {
      if (
        CARD_VALUE[PLAYER1[i].slice(0, -1)] >    //slice removes the suit (slice(0, -1) removes the last character of a string)
        CARD_VALUE[PLAYER2[i].slice(0, -1)]
      ) {
        playerOneScore++;                                     //each round will compare each players card using the CARD_VALUE array and PLAYER1/PLAYER2 arrays 
        console.log(`Round ${i + 1}      SCORE P1: ${playerOneScore}    
P1    P2      SCORE P2: ${playerTwoScore}                                                             
--------
${PLAYER1[i]} vs ${PLAYER2[i]}                                     
Player one wins`);
      } else if (
        CARD_VALUE[PLAYER1[i].slice(0, -1)] <
        CARD_VALUE[PLAYER2[i].slice(0, -1)]
      ) {
        playerTwoScore++;
        console.log(`Round ${i + 1}      SCORE P1: ${playerOneScore}    
P1    P2      SCORE P2: ${playerTwoScore}
--------
${PLAYER1[i]} vs ${PLAYER2[i]}
Player two wins`);
      } else {
        console.log(`Round ${i + 1}      SCORE P1: ${playerOneScore}    
P1    P2      SCORE P2: ${playerTwoScore}
--------
${PLAYER1[i]} vs ${PLAYER2[i]}
TIE`);
      }
    }
    if (playerOneScore > playerTwoScore) {
      console.log(`Player 1 wins with ${playerOneScore} points!`);
    } else if (playerOneScore < playerTwoScore) {
      console.log(`Player 2 wins with ${playerTwoScore} points!`);
    } else {
      console.log(
        `Player 1 and Player 2 TIE ${playerOneScore}-${playerTwoScore}`
      );
    }
  }
}
function checkDeckLength(deck) {                   //checks if deck has 52 cards
  if (deck.length === 52) {
    return true;
  } throw new Error('Does not have 52 cards.');
};

let deck = new War();
deck.createDeck();
deck.shuffleDeck();
deck.playGame();

