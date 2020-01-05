import { makeShoe, shuffle, uniqueId, head } from "./functions";
import { Player } from "./Player";
import { Dealer } from "./Dealer";
import { cardRanks } from "../shared/types";

/**
 * @typedef {HIT|STAND|DOUBLE} DealingActions
 */

const HIT = "HIT";
const STAND = "STAND";
const DOUBLE = "DOUBLE";
const SPLIT = "SPLIT";
const TAKE_INSURANCE = "TAKE_INSURANCE";
const SET_INITIAL_BET_SIZE = "SET_INITIAL_BET_SIZE";

const EVENTS = {
  DEALER_PUSH: "DEALER_PUSH",
  DEALER_DID_BUST: "DEALER_DID_BUST",
  DEALER_HAS_BLACKJACK: "DEALER_HAS_BLACKJACK",
  DEALER_OFFER_INSURANCE: "DEALER_OFFER_INSURANCE",
  PLAYER_DID_BUST: "PLAYER_DID_BUST",
  PLAYER_HAS_BLACKJACK: "PLAYER_DID_BUST",
  PLAYER_TOOK_INSURANCE: "PLAYER_TOOK_INSURANCE"
};

/**
 * @typedef {BETTING|DEALING|PLAYER|DEALER} GameStates
 */

/**
 * @typedef {HIT|STAND|DOUBLE|SPLIT|TAKE_INSURANCE|SET_INITIAL_BET_SIZE}
 *   PLAYER_ACTIONS
 */

const PLAYER_ACTIONS = {
  HIT,
  STAND,
  DOUBLE,
  SPLIT,
  TAKE_INSURANCE,
  SET_INITIAL_BET_SIZE
};

/**
 * @typedef {HIT|STAND|DOUBLE|SPLIT|TAKE_INSURANCE} PLAYER_GAME_BEHAVIOUR
 */

const PLAYER_GAME_BEHAVIOUR = {
  HIT,
  STAND,
  DOUBLE,
  SPLIT,
  TAKE_INSURANCE
};

const dealingActions = [HIT, STAND, DOUBLE];

const OFFER_INSURANCE = "OFFER_INSURANCE";
const CHECK_OWN_HAND_FOR_BLACKJACK = "CHECK_OWN_HAND_FOR_BLACKJACK";
const PAY_PLAYER = "PAY_PLAYER";
const REVEAL_HAND = "REVEAL_HAND";

const DEALER_ACTIONS = {
  OFFER_INSURANCE,
  CHECK_OWN_HAND_FOR_BLACKJACK,
  PAY_PLAYER,
  REVEAL_HAND
};

/**
 * @typedef {BETTING|DEALING|PLAYER|DEALER} GameStates
 */

const BETTING = "BETTING";
const DEALING = "DEALING";
const PLAYER = "PLAYER";
const DEALER = "DEALER";

const gameState = { BETTING, DEALING, PLAYER, DEALER };

function playerDidBustAction(playerId) {
  return {
    action: EVENTS.PLAYER_DID_BUST,
    payload: {
      playerId
    }
  };
}

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

function revealHand() {
  return {
    action: DEALER_ACTIONS.REVEAL_HAND,
    payload: {}
  };
}

const defaultGameProperties = {
  players: [],
  dealer: new Dealer("dealer", uniqueId()),
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
  blackjackPayoutRatio: 3 / 2,
  maxHandsPerRound: 7,
  shoeSize: 6,
  table: {
    bet: {
      minimum: 10,
      maximum: 2500
    }
  },
  useCutCard: true
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
  /**
   * @type {Card[]}
   */
  shoe;

  currentGameState = BETTING;

  constructor(settings) {
    this.gameProperties = { ...defaultGameProperties };
    this.settings = { ...defaultSettings, ...settings };
  }

  /**
   * Utility Functions
   */

  getPlayers() {
    return this.gameProperties.players;
  }

  getDealer() {
    return this.gameProperties.dealer;
  }

  getParticipants() {
    return [...this.getPlayers(), this.getDealer()];
  }

  /**
   * Core Logic
   */

  init() {
    this.reshuffle();
  }

  reshuffle() {
    this.shoe = makeShoe(this.settings.shoeSize);
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

  hitPlayer(playerId) {
    if (!playerId) {
      throw new Error("player id not provided");
    }

    const player = this.getPlayerById(playerId);
    const card = this.drawCard();
    player.addCardToHand(card);

    console.log(player);
    console.log(card);

    // payout natural blackjack immediately

    // perform behaviour when player busted
    if (player.isBust) {
      this.offerPlayerActions([]);
    } else {
      this.offerPlayerActions([HIT, STAND]);
    }
  }

  standPlayer(playerId) {
    if (!playerId) {
      throw new Error("player id not provided");
    }

    const player = this.getPlayerById(playerId);
    const dealer = this.gameProperties.dealer;

    // dealer attempts to make a hand

    const playerHandValue = player.getHandValues();
    const dealerHandValue = dealer.getHandValues();

    console.log(
      "%c LOOK HERE",
      "background: blue; color: white; font-weight: bold"
    );
    console.log(playerHandValue);
    console.log(dealerHandValue);

    // push conditions
    if (
      (player.isBlackJack() && dealer.isBlackJack()) ||
      (player.isBlackJack() && dealer.isBlackJack())
    ) {
      // push
    }

    // player natural blackjack
    if (player.isBlackJack() && !dealer.isBlackJack()) {
      // pay player payout ratio
    }

    // did dealer bust
    if (
      player.getHighestHandValue() > dealer.getHighestHandValue() ||
      dealer.isBust
    ) {
      // player winds
    }
  }

  /**
   * @param {[]} actions
   */
  offerPlayerActions(actions) {
    console.log(`PLAYER POSSIBLE ACTIONS: ${actions.toString()}`);
  }

  handleGameStateBetting() {
    // await all players to set their initial bet
    console.log("GAME STATE >>> BETTING");
  }

  /**
   * Deal out two cards to every connected player.
   *
   * @startRound
   */
  handleGameStateDealing() {
    console.log("GAME STATE >>> DEALING");

    // players are dealt first, dealer is dealt last
    const dealingOrder = [].concat(
      this.gameProperties.players,
      this.gameProperties.dealer
    );

    const that = this;
    for (let cardsDealt = 0; cardsDealt < 2; cardsDealt++) {
      dealingOrder.map(function(participant) {
        participant.addCardToHand(that.drawCard());
      });
    }

    // dealer checks for blackjack without offering insurance if a ten valued
    // upcard is shown
    const dealer = this.getDealer();
    if (
      dealer.getUpcard() === cardRanks.TEN &&
      dealer.getHoleCard() === cardRanks.ACE
    ) {
      console.log("EMIT EVENT - DEALER_HAS_BLACKJACK");
    }

    // offer insurance when dealer has ace up card
    if (dealer.getUpcard() === cardRanks.ACE) {
      console.log("EMIT EVENT - DEALER_OFFER_INSURANCE");
    }
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

    return head(found)[0];
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

  resetGame() {
    this.resetHands();
  }

  resetHands() {
    this.getParticipants().forEach(function(participant) {
      participant.resetHand();
    });
  }

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
    return this.shoe.length > 0;
  }

  getCardsRemaining() {
    return this.shoe.length;
  }

  drawCard() {
    if (!this.isCardsInDeck()) {
      console.log("No more cards left to drawn from; shuffling shoe");
      this.reshuffle();
    }

    const [x, ...xs] = this.shoe;
    this.deck = xs;

    return x;
  }
}

export { GameKernel };
