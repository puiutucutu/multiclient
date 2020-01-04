import { makeDeck } from "./functions";

class GameKernel {
  constructor(settings) {
    this.settings = settings;
  }

  init() {
    this.deck = makeDeck();
  }

  addPlayer(playerName, buyInAmount) {}
}

export { GameKernel };
