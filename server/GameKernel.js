import { makeDeck, shuffle, uniqueId, head } from "./functions";
import { Player } from "./Player";

const PLAYER_ACTIONS = {
  HIT: "HIT",
  STAND: "STAND",
  DOUBLE: "DOUBLE",
  SPLIT: "SPLIT",
  TAKE_INSURANCE: "TAKE_INSURANCE",
  SET_INITIAL_BET_SIZE: "SET_INITIAL_BET_SIZE"
};

const DEALER_ACTIONS = {
  OFFER_INSURANCE: "OFFER_INSURANCE",
  CHECK_OWN_HAND_FOR_BLACKJACK: "CHECK_OWN_HAND_FOR_BLACKJACK",
  PAY_PLAYER: "PAY_PLAYER",
  REVEAL_HAND: "REVEAL_HAND"
};

function officerInsurance() {
  return {
    action: DEALER_ACTIONS.OFFER_INSURANCE,
    payload: {}
  };
}

function checkForBlackjack() {
  return {
    action: DEALER_ACTIONS.CHECK_OWN_HAND_FOR_BLACKJACK,
    payload: {}
  };
}

function payPlayer(playerId) {
  return {
    action: DEALER_ACTIONS.PAY_PLAYER,
    payload: {
      playerId
    }
  };
}

/**
 * @typedef {HIT|STAND|DOUBLE} DealingActions
 */

const HIT = "HIT";
const STAND = "STAND";
const DOUBLE = "DOUBLE";

const dealingActions = [HIT, STAND, DOUBLE];

/**
 * @typedef {BETTING|DEALING|PLAYER|DEALER} GameStates
 */

const BETTING = "BETTING";
const DEALING = "DEALING";
const PLAYER = "PLAYER";
const DEALER = "DEALER";

const gameState = { BETTING, DEALING, PLAYER, DEALER };

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
  currentGameState = BETTING;

  constructor(settings) {
    this.gameProperties = { ...defaultGameProperties };
    this.settings = { ...defaultSettings, ...settings };
  }

  init() {
    this.shuffleDeck();
  }

  shuffleDeck() {
    this.deck = shuffle(makeDeck());
  }

  play(playerId) {
    // determine if the cut card is hit
    switch (this.currentGameState) {
      case gameState.BETTING: {
        this.handleGameStateBetting();
        break;
      }
      case gameState.DEALING: {
        this.handleGameStateDealing();
        break;
      }
      case gameState.PLAYER: {
        break;
      }
      case gameState.DEALER: {
        break;
      }
      default: {
        console.log("switching to default");
      }
    }
  }

  handleGameStateBetting() {
    // await all players to set their initial bet
    console.log("GAME STATE >>> BETTING");
  }

  /**
   * Deal out two cards to every connected player.
   */
  handleGameStateDealing() {
    console.log("GAME STATE >>> DEALING");
    const that = this;
    this.gameProperties.players.forEach(function(player) {
      player.addCardToHand(that.drawCard());
      player.addCardToHand(that.drawCard());
    });
  }

  addCardToPlayerWithId(playerId, card) {
    const player = this.getPlayerById(playerId);
    player.addCardToHand(card);
  }

  /**
   * @param {string} playerId
   * @return {Player}
   */
  getPlayerById(playerId) {
    const found = this.gameProperties.players.filter(function(player) {
      return player.id === playerId;
    });

    return head(found);
  }

  /**
   * Await player to make his bet. Check if they have enough money, if the
   * table minimum is respected.
   */
  bettingRound() {}

  /**
   * @param {string} playerId
   * @param {DealingActions} action
   */
  dealingRound(playerId, action) {
    if (!dealingActions.includes(action)) {
      throw new Error("Invalid player action requested");
    }

    if (action === HIT) {
      const card = this.drawCard();

      // add card to player's hand
      // check if bust, if so end player turn immediately and/or proceed to
      // next player or next game stage

      return card; // i.e., broadcast to connected clients
    }

    if (action === DOUBLE) {
      // check if player has money for the double
      // withdraw the bet money
      // hand one card and end player turn
    }

    if (action === STAND) {
      // continue on to next player if available, otherwise the next game stage
    }
  }

  playRound() {}

  /**
   * Dealer makes his hand.
   */
  dealerRound() {}

  /**
   * Winners are paid out.
   */
  reconciliationRound() {}

  /**
   * @param {string} playerName
   * @param {number} capital
   */
  addPlayer(playerName, capital) {
    const playerId = uniqueId();
    const player = new Player(playerId, playerName, capital);

    // assign them to the first seat for now
    this.gameProperties = {
      ...this.gameProperties,
      players: [...this.gameProperties.players, player],
      seats: {
        ...this.gameProperties.seats,
        1: playerId
      }
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
      console.log("No more cards left to drawn from; shuffling deck");
      this.shuffleDeck();
    }

    const [x, ...xs] = this.deck;
    this.deck = xs;

    return x;
  }
}

export { GameKernel };
