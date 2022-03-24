class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

returnGuess() {
  return this.guess
}

returnCard() {
  return this.card
}

evaluateGuess() {
  // console.log('1', this.card)
  // console.log('2', this.card.correctAnswer)
  // console.log('3', this.guess)
  if (this.card.correctAnswer === this.guess) {
    return true
  } else {
    return false
  }
}

giveFeedback() {
  if (this.evaluateGuess()) {
  return 'correct!'
} else {
  return 'incorrect!'
}
}
};

module.exports = Turn;
