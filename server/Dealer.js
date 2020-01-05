import { Participant } from "./Participant";

class Dealer extends Participant {
  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    super(id, name);
  }
}

export { Dealer };
