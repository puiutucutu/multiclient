import { Card } from "./Card";
import { cardRanks, suits } from "../shared/types";

const cards = {
  [suits.CLUBS]: {
    two: new Card(cardRanks.TWO, suits.CLUBS),
    three: new Card(cardRanks.THREE, suits.CLUBS),
    four: new Card(cardRanks.FOUR, suits.CLUBS),
    five: new Card(cardRanks.FIVE, suits.CLUBS),
    six: new Card(cardRanks.SIX, suits.CLUBS),
    seven: new Card(cardRanks.SIX, suits.CLUBS),
    eight: new Card(cardRanks.SIX, suits.CLUBS),
    nine: new Card(cardRanks.SIX, suits.CLUBS),
    ten: new Card(cardRanks.SIX, suits.CLUBS),
    jack: new Card(cardRanks.SIX, suits.CLUBS),
    queen: new Card(cardRanks.SIX, suits.CLUBS),
    king: new Card(cardRanks.SIX, suits.CLUBS),
    ace: new Card(cardRanks.ACE, suits.CLUBS)
  },
  [suits.DIAMONDS]: {
    two: new Card(cardRanks.TWO, suits.DIAMONDS),
    three: new Card(cardRanks.THREE, suits.DIAMONDS),
    four: new Card(cardRanks.FOUR, suits.DIAMONDS),
    five: new Card(cardRanks.FIVE, suits.DIAMONDS),
    six: new Card(cardRanks.SIX, suits.DIAMONDS),
    seven: new Card(cardRanks.SIX, suits.DIAMONDS),
    eight: new Card(cardRanks.SIX, suits.DIAMONDS),
    nine: new Card(cardRanks.SIX, suits.DIAMONDS),
    ten: new Card(cardRanks.SIX, suits.DIAMONDS),
    jack: new Card(cardRanks.SIX, suits.DIAMONDS),
    queen: new Card(cardRanks.SIX, suits.DIAMONDS),
    king: new Card(cardRanks.SIX, suits.DIAMONDS),
    ace: new Card(cardRanks.ACE, suits.DIAMONDS)
  },
  [suits.HEARTS]: {
    two: new Card(cardRanks.TWO, suits.HEARTS),
    three: new Card(cardRanks.THREE, suits.HEARTS),
    four: new Card(cardRanks.FOUR, suits.HEARTS),
    five: new Card(cardRanks.FIVE, suits.HEARTS),
    six: new Card(cardRanks.SIX, suits.HEARTS),
    seven: new Card(cardRanks.SIX, suits.HEARTS),
    eight: new Card(cardRanks.SIX, suits.HEARTS),
    nine: new Card(cardRanks.SIX, suits.HEARTS),
    ten: new Card(cardRanks.SIX, suits.HEARTS),
    jack: new Card(cardRanks.SIX, suits.HEARTS),
    queen: new Card(cardRanks.SIX, suits.HEARTS),
    king: new Card(cardRanks.SIX, suits.HEARTS),
    ace: new Card(cardRanks.ACE, suits.HEARTS)
  },
  [suits.SPADES]: {
    two: new Card(cardRanks.TWO, suits.SPADES),
    three: new Card(cardRanks.THREE, suits.SPADES),
    four: new Card(cardRanks.FOUR, suits.SPADES),
    five: new Card(cardRanks.FIVE, suits.SPADES),
    six: new Card(cardRanks.SIX, suits.SPADES),
    seven: new Card(cardRanks.SIX, suits.SPADES),
    eight: new Card(cardRanks.SIX, suits.SPADES),
    nine: new Card(cardRanks.SIX, suits.SPADES),
    ten: new Card(cardRanks.SIX, suits.SPADES),
    jack: new Card(cardRanks.SIX, suits.SPADES),
    queen: new Card(cardRanks.SIX, suits.SPADES),
    king: new Card(cardRanks.SIX, suits.SPADES),
    ace: new Card(cardRanks.ACE, suits.SPADES)
  }
};
