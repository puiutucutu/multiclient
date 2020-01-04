import uuid4 from "uuid/v4";
import { makeDeck, shuffle } from "./functions";

function makeUniqueId() {
  return uuidv4();
}

const defaultGameProperties = {
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

const defaultSettings = {
  shoeSize: 6,
  maxHandsPerRound: 7,
  table: {
    bet: {
      minimum: 10,
      maximum: 2500
    }
  },
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
 *
 * Game Stages:
 *
 * 1 - Betting
 * 2 - Dealing (each player gets two cards, dealer gets one up and one down
 * card)
 * 2 - Player turn (each player attempts to improve their hand)
 * 3 - Dealer turn (dealer attempts to make a hand)
 *
 */
class GameKernel {
  constructor(settings) {
    this.gameProperties = { ...defaultGameProperties };
    this.settings = { ...defaultSettings, ...settings };
  }

  currentRound = "betting";

  init() {
    this.deck = shuffle(makeDeck());
    console.log(this.deck);
  }

  play() {
    // determine if the cut card is hit
    switch (this.currentRound) {
      case "betting": {
        console.log("switching to betting round");
        break;
      }
      default: {
        console.log("switching to default");
      }
    }
  }

  /**
   * Await player to make his bet. Check if they have enough money, if the
   * table minimum is respected.
   */
  bettingRound() {}

  dealingRound() {}

  playRound() {}

  /**
   * Dealer makes his hand.
   */
  dealerRound() {}

  /**
   * Winners are paid out.
   */
  reconciliationRound() {}

  addPlayer(playerName, buyInAmount) {
    const id = makeUniqueId();

    this.gameProperties = {
      ...this.gameProperties,
      players: [
        ...this.gameProperties.players,
        {
          id,
          playerName,
          capital: buyInAmount
        }
      ]
    };
  }

  /**
   * Player can change seat to any available seat during the pre-betting stage.
   */
  changeSeat() {}

  deal() {}

  getOccupiedSeats() {}

  assignSeatToPlayer() {}

  resetGame() {}

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
