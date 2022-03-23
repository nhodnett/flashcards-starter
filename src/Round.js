const Turn = require('./Turn');

class Round {
  constructor() {

  }
};

// returnCurrentCard:
// method that returns the current card being played

// takeTurn:
// method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
// When a guess is made, a new Turn instance is created
// The next card becomes current card
// The turns count is updated, regardless of whether the guess is correct or incorrect

// calculatePercentCorrect:
// method that calculates and returns the percentage of correct guesses
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

// endRound:
// method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
// Feedback is returned regarding whether the guess is incorrect or correct

module.exports = Round;
