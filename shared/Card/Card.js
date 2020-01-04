class Card {
  cardRank;
  suit;

  /**
   * @param {CardRank} cardRank
   * @param {Suit} suit
   */
  constructor(cardRank, suit) {
    this.cardType = cardRank;
    this.suit = suit;
  }

  getCardRank() {
    return this.cardRank;
  }

  getCardSuit() {
    return this.suit;
  }
}

export { Card };
