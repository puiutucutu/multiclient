import { cardRanks } from "../shared/types";
import { cards } from "../shared/cards";

const isHandValueLegal = x => x <= 21;
const isHandValueBlackjack = x => x === 21;

class Player {
  /**
   * @type {boolean}
   */
  isBust = false;

  /**
   * @type {*[]}
   */
  actionsAvailable = [];

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

  addInitialDrawToHand(cardOne, cardTwo) {
    this.hand = [cardOne, cardTwo];
    if (this.isPlayerHandBust()) {
      this.isBust = true;
    }
  }

  /**
   * @param {Card} card
   */
  addCardToHand(card) {
    this.hand = [...this.hand, card];

    this.getHandValues();

    // if (this.isPlayerHandBust()) {
    //   this.isBust = true;
    // }
  }

  /**
   * @return {number[]}
   */
  getHandValues() {
    return getHandValues(this.getHand());
  }

  isPlayerHandBust() {
    const handValues = this.getHandValues();
    const handValuesValid = handValues.filter(isHandValueLegal);

    return handValuesValid.length === 0;
  }

  resetHand() {
    this.hand = [];
  }
}

/**
 * Handle card value resolving in such cases where the user has multiple aces.
 *
 * @param {Card[]} hand
 * @return {number[]}
 */
function getHandValues(hand) {
  if (hand.length === 0) {
    return [0];
  }

  const handPreparedForCartesian = hand.map(card =>
    getCardValueFromCardRank(card.getRank())
  );

  const possibleHands = cartesianProduct(handPreparedForCartesian);

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

  const possibleHandValues = possibleHands;


  // const possibleHandValues = possibleHands.map(function(hand) {
  //   console.log(
  //     "%c hand",
  //     "background: blue; color: white; font-weight: bold",
  //     hand
  //   );
  //
  //   if (hand.length === 1) {
  //     return hand[0];
  //   } else {
  //     return hand.reduce(function(sum, a) {
  //       return sum + a;
  //     }, 0);
  //   }
  // });

  console.log(
    "%c possibleHandValues",
    "background: red; color: white; font-weight: bold",
    possibleHandValues
  );

  return [...new Set(possibleHandValues)];
}

/**
 * @param {array} xs
 * @return {array}
 * @example
 * @see https://stackoverflow.com/a/4331218
 *
 * cartesianProduct([["1", "11"], ["1", "11"], ["10"]]); //=>
 *   [[1,1,10],[1,11,10],[11,1,10],[11,11,10]]
 */
function cartesianProduct(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = cartesianProduct(arr.slice(1)); // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
      }
    }
    return result;
  }
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
