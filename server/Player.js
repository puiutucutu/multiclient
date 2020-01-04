class Player {
  /**
   * @type {Card[]}
   */
  hand = [];

  constructor(id, name, capital) {
    this.id = id;
    this.name = name;
    this.capital = capital;
  }

  /**
   * @param {Card} card
   */
  addCardToHand(card) {}

  resetHand() {
    this.hand = [];
  }

  getHand() {
    return this.hand;
  }
}

export { Player };
