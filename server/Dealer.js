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
   * @return {Card}
   */
  getUpcard() {
    return this.getHand()[1];
  }
}

export { Dealer };
