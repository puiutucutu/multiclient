import { cardRanks, suits } from "../../shared/types";
import { Card } from "../../shared/Card";

function makeDeck() {
  return cardRanks.map(function(cardRank) {
    return suits.map(function(suit) {
      return new Card(cardRank, suit);
    });
  });
}

export { makeDeck };
