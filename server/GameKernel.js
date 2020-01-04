import { makeDeck, shuffle } from "./functions";

class GameKernel {
  constructor(settings) {
    this.settings = settings;
  }

  init() {
    this.deck = shuffle(makeDeck())
    console.log(this.deck);
  }

  addPlayer(playerName, buyInAmount) {}

  isCardsInDeck() {
    return this.deck.length > 0;
  }

  getCardsRemaining() {
    return this.deck.length;
  }

  drawCard() {
    if (!this.isCardsInDeck()) {
      throw new Error("No more cards remain to be drawn from");
    }

    const [x, ...xs] = this.deck;
    this.deck = xs;

    return x;
  }
}

export { GameKernel };
