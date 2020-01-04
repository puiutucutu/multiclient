import { shuffle } from "./shuffle.js";

const ACE = "Ace";
const KING = "King";
const QUEEN = "Queen";
const JACK = "Jack";
const TEN = "Ten";
const NINE = "Nine";
const EIGHT = "Eight";
const SEVEN = "Seven";
const SIX = "Six";
const FIVE = "Five";
const FOUR = "Four";
const THREE = "Three";
const TWO = "Two";

const SPADES = "Spades";
const CLUBS = "Clubs";
const HEARTS = "Hearts";
const DIAMONDS = "Diamonds";

class Card {
  constructor(cardType, suit) {
    this.cardType = cardType;
    this.suit = suit;
  }
}

const TwoOfClubs = new Card(TWO, CLUBS);
console.log(TwoOfClubs);

function makeDeck(deckSize) {
  if (!deckSize) {
    throw new Error("missing decksize");
  }

  const cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  const deck = [];
  for (let i = 0; i < deckSize; i++) {
    deck.push(cards);
    deck.push(cards);
    deck.push(cards);
    deck.push(cards);
  }

  const xs = deck.reduce(function(acc, xs) {
    return acc.concat(xs);
  }, []);

  return shuffle(xs)
}

export { makeDeck }
