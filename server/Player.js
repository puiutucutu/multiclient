import { cardRanks } from "../shared/types";

class Player {
  /**
   * @type {Card[]}
   */
  hand = [];

  /**
   * @param {string} id
   * @param {string} name
   * @param {number} capital
   */
  constructor(id, name, capital) {
    this.id = id;
    this.name = name;
    this.capital = capital;
  }

  getHand() {
    return this.hand;
  }

  /**
   * @param {Card} card
   */
  addCardToHand(card) {
    this.hand = [...this.hand, card];
  }

  /**
   * @return {number}
   */
  getHandValue() {
    return this.hand.reduce(function(total, card) {
      if (card.cardType === cardRanks.ACE) {

      }
      const cardValue = getCardValueFromCardRank(card.cardType);
      return total + cardValue;
    }, 0);
  }

  resetHand() {
    this.hand = [];
  }
}

/**
 * @param {CardRank} cardRank
 * @return {number}
 */
function getCardValueFromCardRank(cardRank) {
  const cardRankToValueDict = {
    [cardRanks.ACE]: [1,11],
    [cardRanks.TWO]: 2,
    [cardRanks.THREE]: 3,
    [cardRanks.FOUR]: 4,
    [cardRanks.FIVE]: 5,
    [cardRanks.SIX]: 6,
    [cardRanks.SEVEN]: 7,
    [cardRanks.EIGHT]: 8,
    [cardRanks.NINE]: 9,
    [cardRanks.TEN]: 10,
    [cardRanks.JACK]: 10,
    [cardRanks.QUEEN]: 10,
    [cardRanks.KING]: 10
  };

  return cardRankToValueDict[cardRank];
}

export { Player };
