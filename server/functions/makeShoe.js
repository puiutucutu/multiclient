import { shuffle } from "./shuffle";
import { makeDeck } from "./makeDeck";

/**
 * @param {number} numberOfDecks
 * @return {Card[]}
 */
function makeShoe(numberOfDecks) {
  if (!numberOfDecks) {
    throw new Error("missing numberOfDecks");
  }

  const deck = makeDeck();
  const finalDeck = [];
  for (let i = 0; i < numberOfDecks; i++) {
    finalDeck.push(deck);
  }

  return shuffle(finalDeck);
}

export { makeShoe };
