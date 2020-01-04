import { cardRanks } from "../shared/types";
import { cards } from "../shared/cards";

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
    getHandValues([cards["CLUBS"].ace, cards["CLUBS"].ace, cards["CLUBS"].ten]);

    return this.hand.reduce(function(total, card) {
      if (card.rank === cardRanks.ACE) {
      }
      const cardValue = getCardValueFromCardRank(card.rank);
      return total + cardValue;
    }, 0);
  }

  resetHand() {
    this.hand = [];
  }
}

/**
 * Handle card value resolving in such cases where the user has multiple aces.
 */
function getHandValues(hand) {
  const handPreparedForCartesian = hand.map(card =>
    getCardValueFromCardRank(card.getRank())
  );
  const possibleHands = cartesianProduct(handPreparedForCartesian);
  const possibleHandValues = possibleHands.map(hand =>
    hand.reduce((sum, a) => sum + a, 0)
  );

  console.log(
    "%c hand",
    "background: red; color: white; font-weight: bold",
    hand
  );
  console.log(
    "%c handPreparedForCartesian",
    "background: red; color: white; font-weight: bold",
    handPreparedForCartesian
  );
  console.log(
    "%c possibleHands",
    "background: red; color: white; font-weight: bold",
    possibleHands
  );
  console.log(
    "%c possibleHandValues",
    "background: red; color: white; font-weight: bold",
    possibleHandValues
  );

  return possibleHandValues;
}

/**
 * @param {Card[]} hand
 * @return {number[]}
 */
function findHandValuePermutations(hand) {
  const values = [];
}

/**
 * @param {array} xs
 * @return {array}
 * @see https://stackoverflow.com/a/4331218
 * @example
 *
 * cartesianProduct([["1", "11"], ["1", "11"], ["10"]]); //=> [[1,1,10],[1,11,10],[11,1,10],[11,11,10]]
 */
function cartesianProduct(xs) {
  return xs.reduce(function(a, b) {
    return a.reduce(function(r, v) {
      return r.concat(
        b.map(function(w) {
          return [].concat(v, w);
        })
      );
    }, []);
  });
}

/**
 * @param {CardRank} cardRank
 * @return {number}
 */
function getCardValueFromCardRank(cardRank) {
  const cardRankToValueDict = {
    [cardRanks.ACE]: [1, 11],
    [cardRanks.TWO]: [2],
    [cardRanks.THREE]: [3],
    [cardRanks.FOUR]: [4],
    [cardRanks.FIVE]: [5],
    [cardRanks.SIX]: [6],
    [cardRanks.SEVEN]: [7],
    [cardRanks.EIGHT]: [8],
    [cardRanks.NINE]: [9],
    [cardRanks.TEN]: [10],
    [cardRanks.JACK]: [10],
    [cardRanks.QUEEN]: [10],
    [cardRanks.KING]: [10]
  };

  return cardRankToValueDict[cardRank];
}

export { Player };
