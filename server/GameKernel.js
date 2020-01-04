import { makeDeck } from "./functions";

class GameKernel {
  constructor(settings) {
    this.settings = settings;
  }

  init() {
    this.deck = makeDeck();
  }

  addPlayer(playerName, buyInAmount) {}

  isCardsInDeck() {
    return this.currentDeck.length > 0;
  }

  getCardsRemaining() {
    return this.currentDeck.length;
  }

  drawCard() {
    if (!this.isCardsInDeck()) {
      throw new Error("No more cards remain to be drawn from");
    }

    const [x, ...xs] = this.currentDeck;
    this.currentDeck = xs;

    return x;
  }
}

export { GameKernel };
