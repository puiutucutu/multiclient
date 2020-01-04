import { makeDeck, shuffle } from "./functions";

const defaultGameProperties = {
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

/**
 * Stages:
 * 1 - Betting
 * 2 - Dealing (each player gets two cards, dealer gets one up and one down card)
 * 2 - Player turn (each player attempts to improve their hand)
 * 3 - Dealer turn (dealer attempts to make a hand)
 * 4 - Restart
 */
class GameKernel {
  constructor(settings) {
    this.gameProperties = { ...defaultGameProperties };
    this.settings = { ...defaultSettings, ...settings };
    this.players = [];
  }

  init() {
    this.deck = shuffle(makeDeck());
    console.log(this.deck);
  }

  addPlayer(playerName, buyInAmount) {}

  /**
   * Player can change seat to any available seat during the pre-betting stage.
   */
  changeSeat() {}

  deal() {}

  getOccupiedSeats() {}

  getUnoccupiedSeats() {
    const unoccupiedSeats = [];
    for (let seatId in this.properties.seats) {
      if (!!this.settings.seats[seatId]) {
        availableSeats.push(seatId);
      }
    }

    return unoccupiedSeats;
  }

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
