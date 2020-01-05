import { cardRanks } from "../shared/types";
import { cards } from "../shared/cards";
import {
  cartesianProduct,
  getCardValueFromCardRank,
  isHandValueBlackjack,
  isHandValueLegal
} from "./functions";

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

    if (this.isPlayerHandBust()) {
      this.isBust = true;
    }
  }

  /**
   * @return {number[]}
   */
  getHandValues() {
    return getHandValues(this.getHand());
  }

  /**
   * @return {number}
   */
  getHighestHandValue() {
    const handValues = this.getHandValues();
    const handValuesSortedDescending = handValues.sort((a, b) => b - a);
    return handValuesSortedDescending[0];
  }

  isBlackJack() {
    const handValues = this.getHandValues();
    return handValues.filter(isHandValueBlackjack) > 0;
  }

  getLegalHandValues() {
    const handValues = this.getHandValues();
    return handValues.filter(isHandValueLegal);
  }

  isPlayerHandBust() {
    if (this.hand.length === 0) {
      return false;
    } else if (this.hand.length === 1) {
      const card = this.hand[0];
      const handValues = [getCardValueFromCardRank(card.getRank())];
      const handValuesValid = handValues.filter(isHandValueLegal);
      return handValuesValid.length === 0;
    } else {
      const handValues = this.getHandValues();
      const handValuesValid = handValues.filter(isHandValueLegal);
      return handValuesValid.length === 0;
    }
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

  // workaround for cartesian product function which expects [[],[]] array
  // structure, therefore using a zero valued card as temp fix placeholder
  if (handPreparedForCartesian.length === 1) {
    handPreparedForCartesian.push([0]);
  }

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

  return [...new Set(possibleHandValues)];
}

export { Player };
