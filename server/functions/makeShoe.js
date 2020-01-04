import { shuffle } from "./shuffle";

function makeShoe(deckSize) {
  if (!deckSize) {
    throw new Error("missing decksize");
  }

  const cardsRanks = [];
  const allCards = [];

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

export { makeShoe };
