import { cardRanks, suits } from "../../shared/types";
import { Card } from "../../shared/Card";

function makeDeck() {
  return Object.keys(cardRanks).map(function(cardRank) {
    return Object.keys(suits).map(function(suit) {
      return new Card(cardRank, suit);
    });
  });
}

export { makeDeck };
