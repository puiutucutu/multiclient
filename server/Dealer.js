import { Participant } from "./Participant";

import {
  cartesianProduct,
  getCardValueFromCardRank,
  isHandValueBlackjack,
  isHandValueLegal
} from "./functions";

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
