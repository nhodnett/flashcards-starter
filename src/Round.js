const Turn = require('./Turn');

class Round {
  constructor(deck) {
    //console.log('111', deck)
    this.deck = deck;
    this.turns = 0;
    this.currentCard;
    this.incorrectGuesses = []
    this.currentTurn;
  }

// method that returns the current card being played
returnCurrentCard() {
  //console.log(this.deck)
  return this.deck.cards[this.turns];
}

takeTurn(guess) {
  this.currentCard = this.returnCurrentCard();
  this.turns ++
  //this.deck.cards.shift();
  //console.log(this.currentCard)
  this.currentTurn = new Turn(guess, this.currentCard);
  if (this.currentTurn.evaluateGuess()) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return 'incorrect!';
    }
}

// method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
// When a guess is made, a new Turn instance is created
// The next card becomes current card
// The turns count is updated, regardless of whether the guess is correct or incorrect

// calculatePercentCorrect:
calculatePercentCorrect() {
    let numberCorrect = this.deck.countCards() - this.incorrectGuesses.length;
    let percentageCorrect = (numberCorrect / this.deck.countCards()) * 100;
    return Math.round(percentageCorrect);
  }
// method that calculates and returns the percentage of correct guesses
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

// endRound:
endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
};
// method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
// Feedback is returned regarding whether the guess is incorrect or correct

module.exports = Round;
