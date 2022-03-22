class Turn {
  constructor(guess, card) {
    //console.log(guess, card)
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
  if (this.guess === 'sea otter') {
    return true
  } else {
    return false
  }
}

giveFeedback() {
  return 'incorrect!'
}

};

module.exports = Turn;
