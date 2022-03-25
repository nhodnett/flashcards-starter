const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  // Your Game class should meet these other requirements:
  // Should keep track of the currentRound
start() {
  const cards = [];

  prototypeQuestions.forEach(card => {
    let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
    cards.push(newCard);
  })
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;

    this.printMessage(deck);
    this.printQuestion(round);
  };

  // start: method that starts everything
  // Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
