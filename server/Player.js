import { Participant } from "./Participant";

class Player extends Participant {
  /**
   * @type {number}
   */
  capital;

  /**
   * @param {string} id
   * @param {string} name
   * @param {number} capital
   */
  constructor(id, name, capital) {
    super(id, name);
    this.capital = capital;
  }
}

export { Player };
