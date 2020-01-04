class Card {
  rank;
  suit;

  /**
   * @param {CardRank} cardRank
   * @param {Suit} suit
   */
  constructor(cardRank, suit) {
    this.cardType = cardRank;
    this.suit = suit;
  }

  getRank() {
    return this.cardRank;
  }

  getSuit() {
    return this.suit;
  }
}

export { Card };
