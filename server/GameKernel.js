import { makeDeck, shuffle } from "./functions";

const defaultSettings = {
  shoeSize: 6,
  maxHandsPerRound: 7,
  players: [],
  seats: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null
  }
};

class GameKernel {
  constructor(settings) {
    this.settings = { ...defaultSettings, ...settings };
  }

  init() {
    this.deck = shuffle(makeDeck());
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
