const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard;
    this.incorrectGuesses = []
    this.currentTurn;
  }

returnCurrentCard() {
  return this.deck.cards[this.turns];
}

takeTurn(guess) {
  this.currentCard = this.returnCurrentCard();
  this.turns ++
  this.currentTurn = new Turn(guess, this.currentCard);
  if (this.currentTurn.evaluateGuess()) {
    return 'correct!';
  } else {
    this.incorrectGuesses.push(this.currentCard.id);
    return 'incorrect!';
  }
}

calculatePercentCorrect() {
  let numberCorrect = this.deck.countCards() - this.incorrectGuesses.length;
  let percentageCorrect = (numberCorrect / this.deck.countCards()) * 100;
  return Math.round(percentageCorrect);
}

endRound() {
  console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
}
};


module.exports = Round;
