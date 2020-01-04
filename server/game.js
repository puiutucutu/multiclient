import { cardRanks, suits } from "../shared/types";
import { Card } from "../shared/Card";

const twoOfClubs = new Card(cardRanks.TWO, suits.CLUBS);
console.log(twoOfClubs);

const game = {};
game.properties = {
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
}
game.currentDeck = []
game.init = function() {
  const deck = makeDeck(1);
  this.currentDeck = deck;
}
game.addPlayer = function(playerName, buyInAmount) {
  const id = makeId();
  this.properties.players.push([{
    id,
    playerName,
    capital: buyInAmount
  }]);
}
game.addPlayerToSeat = function(playerName, seatId) {
  const currSeat = seats
  this.properties.seats[seatId] = {}
}
game.deal = function() {
  const currSeats = this.properties.seats;
}
game.getOccupiedSeats = function() {

}
game.getAvailableSeats = function() {
  const availableSeats = [];
  for (let seatId in this.properties.seats) {
    if (!!this.properties.seats[seatId]) {
      availableSeats.push(seatId);
    }
  }

  return availableSeats();
}
game.playRound = function() {
  // 1 - betting stage
  // 2 - dealing stage
  // 3 - check & payout blackjack
  // 3.1 - offer insurance if blackjack
  // 3.2 - don't pay out player blackjack if dealer has blackjack too
  // 4 - starting at right most player, await instructions
  // 4.1 - perform player action - if hit, deal card, check if over 22
  // 4.2 - if stand, proceed to next player
  // 4.3. - if double, check if allowed to double
  // 5 - once all players completed, diff dealer v.s. player cards
  // 5.1 - resolve win/losses, prepare player accounts for next round
  // 5.2 - determine if next round can be played
}
game.assignSpotToPlayer = function() {

}
game.reset = function() {

}
game.drawCard = function() {
  if (this.getCardsRemaining() === 0) {
    throw new Error("No more cards remain to be drawn from");
  }

  const [x,...xs] = this.currentDeck;
  this.currentDeck = xs;
  return x;
}
game.getCardsRemaining = function() {
  return this.currentDeck.length;
}

game.init();
game.addPlayer("John", 1000);
console.log(game.drawCard());
console.log(game.drawCard());
console.log(game.drawCard());
console.log(game.drawCard());
console.log(game.getCardsRemaining());
