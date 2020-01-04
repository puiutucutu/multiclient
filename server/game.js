import { shuffle } from "./shuffle.js";
import { cardRanks, suits } from "../shared/types";

class Card {
  constructor(cardType, suit) {
    this.cardType = cardType;
    this.suit = suit;
  }
}

const twoOfClubs = new Card(cardRanks.TWO, suits.CLUBS);
console.log(twoOfClubs);

function makeDeck(deckSize) {
  if (!deckSize) {
    throw new Error("missing decksize");
  }

  const cards = [
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
    "A"
  ];
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

  return shuffle(xs);
}

export { makeDeck };
