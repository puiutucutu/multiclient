import { cardRanks, suits } from "../../shared/types";
import { Card } from "../../shared/Card";

function makeDeck() {
  const cardRankKeys = Object.keys(cardRanks);
  const suitKeys = Object.keys(suits);

  return cardRankKeys.map(function(cardRank) {
    return suitKeys.map(function(suit) {
      return new Card(cardRank, suit);
    });
  });
}

export { makeDeck };
