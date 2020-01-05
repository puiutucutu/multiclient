import { Participant } from "./Participant";

class Dealer extends Participant {
  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    super(id, name);
  }

  /**
   * Upcard is always the dealer's second dealt card.
   *
   * @return {Card}
   */
  getUpcard() {
    return this.getHand()[1];
  }

  /**
   * The hole card is always the dealer's first dealt card, which is hidden
   * from the player.
   *
   * @return {Card}
   */
  getHoleCard() {
    return this.getHand()[0];
  }
}

export { Dealer };
