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
    cardValueResolver();

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
function cardValueResolver() {
  const hand = [
    cards["CLUBS"].ace,
    cards["CLUBS"].ace,
    cards["CLUBS"].ace,
    cards["CLUBS"].ace,
    cards["CLUBS"].ace
  ];

  // prepare for cartesian

  const handPreparedForCartesian = hand.map(function(card) {
    return getCardValueFromCardRank(card.getRank());
    // if (card.rank === cardRanks.ACE) {
    //   return [1,11];
    // } else {
    //   return
    // }
  });

  const possibleHandValues = findHandValuePermutations(hand);

  console.log(
    "%c handPreparedForCartesian",
    "background: red; color: white; font-weight: bold",
    handPreparedForCartesian
  );
  console.log(hand);
}

/**
 * @param {Card[]} hand
 * @return {number[]}
 */
function findHandValuePermutations(hand) {
  const values = [];
}

/**
 * @param {array} head
 * @param {array} tail
 * @return {Generator<*[], void, ?>}
 * @example
 *
 * const a  = ['1','11'];
 * const b  = ['1','11'];
 * const c = ['10'];
 *
 * console.log(...cartesian(a, b, c));
 *
 */
function* cartesian(head, ...tail) {
  let remainder = tail.length ? cartesian(...tail) : [[]];
  for (let r of remainder) {
    for (let h of head) {
      yield [h, ...r];
    }
  }
}

/**
 * @param {array} xs
 * @return {array}
 * @example
 *
 * cartesianProduct([["1", "11"], ["1", "11"], ["10"]]);
 */
function cartesianProduct(xs) {
  return xs.reduce(function(a, b) {
    return a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []);
  });
}

/**
 * @param {CardRank} cardRank
 * @return {number}
 */
function getCardValueFromCardRank(cardRank) {
  const cardRankToValueDict = {
    [cardRanks.ACE]: [1, 11],
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
