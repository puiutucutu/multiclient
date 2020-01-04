class Card {
  rank;
  suit;

  /**
   * @param {CardRank} cardRank
   * @param {Suit} suit
   */
  constructor(cardRank, suit) {
    this.rank = cardRank;
    this.suit = suit;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }
}

export { Card };
