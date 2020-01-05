class Hand {
  /**
   * @type {number}
   */
  bet;

  /**
   * @type {Card[]}
   */
  cards;

  /**
   * @param {number} bet
   */
  constructor(bet) {
    this.bet = bet;
  }

  getCards() {
    return this.cards;
  }
}

export { Hand };
