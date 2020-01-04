class Card {
  /**
   * @param {CardRank} cardRank
   * @param {Suit} suit
   */
  constructor(cardRank, suit) {
    this.cardType = cardRank;
    this.suit = suit;
  }
}

export { Card };
