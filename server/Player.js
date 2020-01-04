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

  resetHand() {
    this.hand = [];
  }
}

export { Player };
