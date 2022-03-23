const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
//const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', function() {

let card1, card2, card3, deck, round;
beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  deck = new Deck([card1, card2, card3]);

  round = new Round(deck);
})

it('should instantiate a new instance of Round', function() {
  expect(round).to.be.an.instanceof(Round);
})

  //When a guess is made, a new Turn instance is created.
it('should have a method that returns the current card being played', function() {
  expect(round.returnCurrentCard()).to.equal(card)
})

it('should have a method that updates the turns count', function() {
  round.takeTurn();
  expect(round.turns).to.equal(1)
})

it('should have a method that evaluates guesses', function() {
  round.takeTurn();
  expect(turn.evaluateGuess).to.equal(false)
})

it('should have a method that gives feedback', function() {
  round.takeTurn();
  expect(turn.giveFeedback).to.equal('incorrect')
})

it('should have a method that stores ids of incorrect guesses', function() {
  round.takeTurn();
  // expect(turn.evaluateGuess).to.equal()
})

});
